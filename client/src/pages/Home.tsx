import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Target, 
  Users, 
  Database, 
  Keyboard, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  Mail,
  Phone,
  Camera,
  Hexagon,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Assets
import imgTeam1 from "@assets/Imagine_prompt_paste_202601310038_1771770412415.jpeg";
import imgTeam1New from "@assets/Imagine_prompt_paste_202601310038_1771780045984.jpeg";
import imgTeam2 from "@assets/WhatsApp_Image_2026-02-22_at_4.47.50_AM_1771770412417.jpeg";
import imgTeam3 from "@assets/WhatsApp_Image_2026-01-10_at_11.31.08_PM_1771770412416.jpeg";
import imgTeam4 from "@assets/WhatsApp_Image_2026-02-21_at_2.36.53_PM_1771770431238.jpeg";
import officeImg1 from "@assets/Screenshot_2026-02-22_201649_1771773446554.png";
import officeImg2 from "@assets/Screenshot_2026-02-22_201916_1771773756968.png";
import officeImg3 from "@assets/Screenshot_2026-02-22_202208_1771773756969.png";
import heroIllustration from "@/assets/images/hero-illustration.png";
import teamMember1 from "@/assets/images/team-member-1.png";
import teamMember2 from "@/assets/images/team-member-2.png";
import teamMember3 from "@/assets/images/team-member-3.png";
import teamMember4 from "@/assets/images/team-member-4.png";
import fatimaImg from "@assets/image_1771776205557.png";
import fatimaMasoodImg from "@assets/image_1771778880115.png";
import ayeshaImg from "@assets/image_1771776900297.png";
import bilalImg from "@assets/image_1771777520507.png";
import wardaImg from "@assets/image_1771779818555.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Grid & Gradient */}
        <div className="absolute inset-0 bg-grid-pattern z-0" />
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent z-0" />
        
        {/* Subtle Animated Office Images Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.2] grayscale mix-blend-multiply">
          <motion.img 
            src={officeImg1} 
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20], rotate: [-2, 2, -2] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-5%] w-[400px] md:w-[600px] rounded-3xl object-cover shadow-2xl"
            alt="" 
          />
          <motion.img 
            src={officeImg2} 
            animate={{ x: [20, -20, 20], y: [20, -20, 20], rotate: [2, -2, 2] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-5%] w-[500px] md:w-[700px] rounded-3xl object-cover shadow-2xl"
            alt="" 
          />
          <motion.img 
            src={officeImg3} 
            animate={{ x: [-30, 30, -30], y: [20, -20, 20], rotate: [-3, 3, -3] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[60%] w-[350px] md:w-[500px] rounded-3xl object-cover shadow-2xl"
            alt="" 
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-primary font-medium text-sm mb-6 border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Premium B2B Data Partner
              </div>
              
              <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold font-display text-foreground leading-[1.05] tracking-tight mb-6 relative z-10">
                  Accurate Data,<br />
                  Qualified Leads,<br />
                  <span className="text-primary relative inline-block mt-2">
                    Real Growth
                    <svg className="absolute -bottom-2 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
                We help businesses scale predictably through meticulously verified leads, targeted prospect research, and expert data solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20 group w-full sm:w-auto" asChild>
                  <a href="#contact" data-testid="button-hero-cta">
                    Book a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base w-full sm:w-auto bg-background/50 backdrop-blur-sm" asChild>
                  <a href="#services" data-testid="button-hero-services">Explore Services</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-secondary/50 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">
              End-to-end data and outreach solutions tailored to fill your sales pipeline.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary relative z-10">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 relative z-10">1. Lead Generation & Prospect Research</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Strategic B2B & B2C lead generation, advanced prospect research, and verified email database building to deliver high-quality, conversion-ready leads.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'B2B Lead Generation', 'B2C Lead Generation', 'Prospect Research', 
                  'Contact List Building', 'Email List Building', 'Email Verification',
                  'Mailing Lists & Sales Lead Lists', 'Custom Prospect Lists',
                  'Lead Scoring', 'Lead Nurturing', 'Database Creation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent relative z-10">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 relative z-10">2. LinkedIn Lead Generation & Marketing</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Professional LinkedIn prospecting using Sales Navigator to identify decision-makers, optimize profiles, and execute personalized outreach campaigns.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'LinkedIn Lead Generation', 'LinkedIn Sales Navigator Expert', 
                  'LinkedIn Recruiting Support', 'LinkedIn Data Mining', 
                  'Profile Optimization', 'Outreach Automation', 
                  'Decision Maker Targeting', 'B2B LinkedIn Marketing Campaigns'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary relative z-10">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 relative z-10">3. Email Marketing Services</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Targeted and deliverability-focused email campaigns designed to convert prospects into qualified leads.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'B2B Email Marketing', 'B2C Email Marketing', 
                  'Campaign Setup & Management', 'Cold Email Outreach', 
                  'Deliverability Optimization', 'List Segmentation', 
                  'Performance Tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeIn} className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent relative z-10">
                <Keyboard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 relative z-10">4. Data Entry & Virtual Assistance</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Reliable data entry and virtual assistance solutions designed to support daily operations, maintain accurate records, and improve workflow efficiency.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Virtual Assistant Services', 'Web & Internet Research', 
                  'Data Mining & Data Collection', 'Data Cleansing', 
                  'Manual Data Entry (Text & Numeric)', 'PDF to Excel / Word Conversion', 
                  'CRM Data Entry & Management', 'E-commerce Product Data Entry', 
                  'Online Store Uploading', 'Directory Data Entry', 
                  'De-duplication & Accuracy Checks', 'Administrative Support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TOOLS & PLATFORMS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Tools & Platforms We Use</h2>
            <p className="text-lg text-muted-foreground">
              We leverage industry-leading data and prospecting tools to ensure accurate targeting, verified contact information, and high-performing outreach campaigns.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'ZoomInfo', 'Crunchbase', 'Apollo', 'Hunter', 'NeverBounce', 
              'EmailListVerify', 'Hoovers', 'Manta', 'Owler', 'AngelList', 
              'LinkedIn Sales Navigator', 'Clearbit', 'Lusha', 'RocketReach', 'Snov.io'
            ].map((tool, i) => (
              <div 
                key={i} 
                className="px-6 py-3 bg-secondary/80 hover:bg-primary/10 border border-border/50 rounded-full text-foreground font-medium transition-colors hover:border-primary/30 cursor-default shadow-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Why Industry Leaders Choose NorthBridge Data Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just provide lists; we provide growth engines. Our rigorous data validation processes ensure your sales team spends time selling, not searching.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Verified Accuracy", desc: "95%+ deliverability guarantee on all data." },
                  { icon: Target, title: "Hyper-Targeted", desc: "Granular filtering for ideal buyer profiles." },
                  { icon: BarChart3, title: "Scalable Output", desc: "From startup batches to enterprise volumes." },
                  { icon: Database, title: "Clean & Formatted", desc: "Ready-to-import data for any CRM." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
              <div className="aspect-square md:aspect-[4/3] rounded-[2rem] bg-secondary border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply" />
                
                {/* Mockup UI representation instead of a plain image */}
                <div className="absolute inset-8 rounded-xl bg-card shadow-2xl border border-border/50 flex flex-col overflow-hidden">
                  <div className="h-12 border-b flex items-center px-4 gap-2 bg-secondary/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Total Leads Verified</div>
                        <div className="text-3xl font-bold font-display">124,592</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      {[
                        { width1: "w-24", width2: "w-32", width3: "w-20", width4: "w-28" },
                        { width1: "w-28", width2: "w-36", width3: "w-24", width4: "w-32" },
                        { width1: "w-20", width2: "w-28", width3: "w-16", width4: "w-24" },
                        { width1: "w-32", width2: "w-40", width3: "w-24", width4: "w-36" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <Building2 className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className={`h-4 ${item.width1} bg-foreground/20 rounded mb-1`} />
                              <div className={`h-3 ${item.width2} bg-foreground/10 rounded`} />
                            </div>
                          </div>
                          
                          <div className="hidden sm:block">
                            <div className={`h-3 ${item.width3} bg-foreground/15 rounded mb-1.5`} />
                            <div className={`h-3 ${item.width4} bg-foreground/10 rounded`} />
                          </div>
                          
                          <div className="hidden md:block">
                            <div className="h-3 w-16 bg-foreground/10 rounded-full" />
                          </div>

                          <div className="h-6 px-2 bg-green-100 rounded text-[10px] text-green-700 font-bold flex items-center justify-center uppercase tracking-wider shrink-0">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Verified
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">Meet Our Experts</h2>
            <p className="text-lg text-primary-foreground/80">
              The dedicated professionals driving data quality and lead generation strategies for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Muhammad Moeen Baig",
                role: "Owner",
                bio: "Master of LinkedIn Sales Navigator and crafting personalized outreach campaigns.",
                img: imgTeam4,
                positionClass: "object-[center_20%]"
              },
              {
                name: "Muhammad Ali baig",
                role: "CEO & Founder",
                bio: "10+ years driving B2B growth and scaling data-driven sales strategies globally.",
                img: imgTeam1New,
                positionClass: "object-top"
              },
              {
                name: "Ghufran Aziz",
                role: "Head of Data Solutions",
                bio: "Expert in prospect research, automation, and high-accuracy email list building.",
                img: imgTeam2,
                positionClass: "object-[center_20%] scale-[1.5]"
              },
              {
                name: "Rimsha Shamsheer",
                role: "VP of Client Success",
                bio: "Ensures our clients receive maximum ROI and dedicated support from our programs.",
                img: imgTeam3,
                positionClass: "object-center"
              },
              {
                name: "Warda Akhter",
                role: "Lead Generation Specialist",
                bio: "Specializes in B2B outbound strategies and highly targeted lead lists.",
                img: wardaImg,
                positionClass: "object-cover scale-[1.1]"
              },
              {
                name: "Fatima Masood",
                role: "LinkedIn Strategist",
                bio: "Expert in Social Selling and LinkedIn Sales Navigator optimization.",
                img: fatimaMasoodImg,
                positionClass: "object-center"
              },
              {
                name: "Bilal Ahmed",
                role: "Data Analyst",
                bio: "Ensures 95%+ data accuracy through rigorous verification protocols.",
                img: bilalImg,
                positionClass: "object-[center_10%]"
              },
              {
                name: "Maleeha Hameed",
                role: "Client Success Manager",
                bio: "Dedicated to driving measurable growth and seamless communication.",
                img: ayeshaImg,
                positionClass: "object-[center_10%] scale-[1.2]"
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
                data-testid={`card-team-${i}`}
              >
                <div className="w-40 h-40 rounded-full border-4 border-white/10 overflow-hidden mb-6 relative group-hover:border-white/30 transition-colors">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className={`w-full h-full object-cover ${member.positionClass}`}
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-300 mix-blend-overlay pointer-events-none" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE GALLERY SECTION */}
      <section className="py-24 bg-secondary/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Inside Our Workspace</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our state-of-the-art office where our dedicated team drives your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[officeImg1, officeImg2, officeImg3].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] relative group shadow-sm border border-border/50"
              >
                <img src={img} alt={`Office Workspace ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 delay-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-6 border border-primary/10">
                Let's Talk
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Ready to scale your pipeline?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Contact us today for a free consultation. We'll analyze your current processes and build a custom data strategy for your specific niche.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Office Address</div>
                    <div className="font-semibold">1 World Trade Center, Suite 8500<br/>New York, NY 10007, USA</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">WhatsApp</div>
                    <div className="font-semibold text-lg">+1 (548) 314-8589</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Email Support</div>
                    <div className="font-semibold">contact.northbridgesolution@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-[2rem] p-8 md:p-10 shadow-xl border border-border/50">
              <h3 className="text-2xl font-bold font-display mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" className="h-12 bg-secondary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" className="h-12 bg-secondary/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="h-12 bg-secondary/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Acme Corp" className="h-12 bg-secondary/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your lead generation goals..." 
                    className="min-h-[120px] bg-secondary/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-base rounded-xl" data-testid="button-submit-contact">
                  Send Message
                  <MessageSquare className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
