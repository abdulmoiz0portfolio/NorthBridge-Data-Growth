import { getUncachableGitHubClient } from '../server/github';
import * as fs from 'fs';
import * as path from 'path';

const REPO_NAME = 'northbridge-data-solutions';
const EXCLUDED_DIRS = new Set(['node_modules', '.git', 'dist', 'migrations', '.cache', '.config', 'attached_assets']);
const BINARY_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.bmp', '.svg', '.woff', '.woff2', '.ttf', '.eot', '.mp4', '.mp3', '.pdf', '.zip']);

function isBinary(filePath: string): boolean {
  return BINARY_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function collectFiles(dir: string, baseDir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);
    const topLevelDir = relativePath.split(path.sep)[0];

    if (EXCLUDED_DIRS.has(topLevelDir)) continue;
    if (entry.name.startsWith('.') && entry.isDirectory()) continue;

    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return files;
}

async function main() {
  console.log('Getting GitHub client...');
  const octokit = await getUncachableGitHubClient();

  console.log('Getting authenticated user...');
  const { data: user } = await octokit.users.getAuthenticated();
  const owner = user.login;
  console.log(`Authenticated as: ${owner}`);

  console.log(`Creating repository "${REPO_NAME}"...`);
  try {
    await octokit.repos.createForAuthenticatedUser({
      name: REPO_NAME,
      description: 'NorthBridge Data Solutions - B2B Lead Generation & Data Services',
      auto_init: true,
    });
    console.log('Repository created successfully.');
  } catch (error: any) {
    if (error.status === 422) {
      console.log('Repository already exists, continuing...');
    } else {
      throw error;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  const projectDir = path.resolve(process.cwd());
  console.log(`Collecting files from ${projectDir}...`);
  const files = collectFiles(projectDir, projectDir);
  console.log(`Found ${files.length} files to push.`);

  let baseTreeSha: string | undefined;
  let parentSha: string | undefined;

  try {
    const { data: ref } = await octokit.git.getRef({
      owner,
      repo: REPO_NAME,
      ref: 'heads/main',
    });
    parentSha = ref.object.sha;

    const { data: commit } = await octokit.git.getCommit({
      owner,
      repo: REPO_NAME,
      commit_sha: parentSha,
    });
    baseTreeSha = commit.tree.sha;
    console.log(`Existing main branch found. Parent commit: ${parentSha}`);
  } catch {
    console.log('No existing main branch found, creating fresh.');
  }

  console.log('Creating blobs...');
  const BATCH_SIZE = 10;
  const treeItems: Array<{
    path: string;
    mode: '100644';
    type: 'blob';
    sha: string;
  }> = [];

  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    const blobPromises = batch.map(async (filePath) => {
      const fullPath = path.join(projectDir, filePath);
      const binary = isBinary(filePath);

      const content = fs.readFileSync(fullPath);
      const base64Content = content.toString('base64');

      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo: REPO_NAME,
        content: base64Content,
        encoding: 'base64',
      });

      return {
        path: filePath,
        mode: '100644' as const,
        type: 'blob' as const,
        sha: blob.sha,
      };
    });

    const results = await Promise.all(blobPromises);
    treeItems.push(...results);
    console.log(`  Uploaded ${Math.min(i + BATCH_SIZE, files.length)}/${files.length} files...`);
  }

  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({
    owner,
    repo: REPO_NAME,
    tree: treeItems,
    ...(baseTreeSha ? { base_tree: baseTreeSha } : {}),
  });

  console.log('Creating commit...');
  const { data: commit } = await octokit.git.createCommit({
    owner,
    repo: REPO_NAME,
    message: 'Push all project files from Replit',
    tree: tree.sha,
    ...(parentSha ? { parents: [parentSha] } : { parents: [] }),
  });

  console.log('Updating main branch reference...');
  try {
    await octokit.git.updateRef({
      owner,
      repo: REPO_NAME,
      ref: 'heads/main',
      sha: commit.sha,
      force: true,
    });
  } catch {
    await octokit.git.createRef({
      owner,
      repo: REPO_NAME,
      ref: 'refs/heads/main',
      sha: commit.sha,
    });
  }

  const repoUrl = `https://github.com/${owner}/${REPO_NAME}`;
  console.log(`\n✅ Successfully pushed all files to GitHub!`);
  console.log(`🔗 Repository URL: ${repoUrl}`);
}

main().catch((err) => {
  console.error('Error:', err.message || err);
  process.exit(1);
});
