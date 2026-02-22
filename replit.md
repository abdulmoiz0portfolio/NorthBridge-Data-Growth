# Overview

NorthBridge Data Solutions is a business website for a B2B/B2C lead generation and data services company. It's a single-page marketing site that showcases services (lead generation, LinkedIn prospecting, email marketing, data entry/VA), displays team members, and includes a contact form that submits to a PostgreSQL database. The site is built with a React frontend and Express backend in a monorepo structure.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Monorepo Structure

The project uses a three-directory monorepo layout:
- `client/` — React frontend (Vite-powered SPA)
- `server/` — Express backend (API + static file serving)
- `shared/` — Shared TypeScript types and database schema (used by both client and server)

## Frontend

- **Framework:** React with TypeScript
- **Bundler:** Vite (dev server on port 5000)
- **Routing:** Wouter (lightweight client-side router) — currently only has a home page and 404
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite` plugin) with CSS variables for theming
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives — extensive component library already installed
- **Fonts:** Inter (body) and Plus Jakarta Sans (display/headings) via Google Fonts
- **Animations:** Framer Motion for scroll animations and transitions
- **Data Fetching:** TanStack React Query with a custom `apiRequest` helper for API calls
- **State Management:** React Query handles server state; no additional state library
- **Path Aliases:** `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`
- **Layout:** Persistent Navbar and Footer wrap all pages via `App.tsx`

## Backend

- **Framework:** Express 5 on Node.js
- **Language:** TypeScript, run with `tsx` in development
- **HTTP Server:** Node `http.createServer` wrapping Express (supports potential WebSocket upgrades)
- **API Pattern:** RESTful JSON API under `/api/` prefix
- **Current Endpoints:**
  - `POST /api/contact` — Validates contact form submission with Zod, stores in database
- **Development:** Vite dev server middleware is integrated for HMR during development
- **Production:** Client is built to `dist/public/`, server is bundled with esbuild to `dist/index.cjs`
- **Build Script:** Custom `script/build.ts` that runs Vite build then esbuild, bundling selected dependencies for faster cold starts

## Database

- **Database:** PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM:** Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema Location:** `shared/schema.ts` — single source of truth for both DB schema and TypeScript types
- **Current Tables:**
  - `contact_submissions` — stores contact form data (id, firstName, lastName, email, company, message, createdAt)
- **Migrations:** Drizzle Kit with `drizzle-kit push` command (schema push approach, not migration files)
- **Connection:** `pg` Pool in `server/db.ts`

## Storage Layer

- **Pattern:** Repository/storage pattern with `IStorage` interface in `server/storage.ts`
- **Implementation:** `DatabaseStorage` class using Drizzle queries
- **Exported as:** singleton `storage` instance

## Validation

- Zod schemas auto-generated from Drizzle table definitions via `drizzle-zod`
- Server-side validation on API endpoints using `safeParse`
- Insert schemas omit auto-generated fields (id, createdAt)

# External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable
- **Google Fonts** — Inter and Plus Jakarta Sans loaded via CDN
- **Radix UI** — Extensive set of headless UI primitives (dialog, dropdown, tabs, tooltip, etc.)
- **Framer Motion** — Animation library used on the home page
- **TanStack React Query** — Server state management and data fetching
- **Drizzle ORM + Drizzle Kit** — Database ORM and schema management
- **connect-pg-simple** — PostgreSQL session store (available but not currently used for sessions)
- **Replit Plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` for development environment integration
- **Custom Vite Plugin** — `vite-plugin-meta-images.ts` handles OpenGraph image URL resolution for Replit deployments