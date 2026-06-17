import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Briefcase,
  Monitor,
  Layers,
  Factory,
  ShieldCheck,
  Truck,
  Headset,
  Code,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Smartphone,
  AlertTriangle
} from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isConveyorHovered, setIsConveyorHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const getOutcomeIcon = (title: string) => {
    switch (title) {
      case "Increased Productivity":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="10" width="70" height="60" rx="10" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.25)" strokeWidth="1.5" />
            <path d="M5 25 H75 M5 45 H75 M25 10 V70 M50 10 V70" stroke="rgba(200, 162, 118, 0.08)" strokeWidth="1" />
            <path d="M12 55 L22 45 L32 55 V65 H12 V55 Z" fill="rgba(200, 162, 118, 0.15)" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M22 45 L32 35 L42 45 V65 H22 V45 Z" fill="rgba(212, 175, 55, 0.2)" stroke="var(--supporting)" strokeWidth="1.5" />
            <rect x="55" y="16" width="12" height="12" rx="3" fill="rgba(16, 185, 129, 0.15)" stroke="var(--success)" strokeWidth="1" />
            <circle cx="61" cy="22" r="3" fill="var(--success)" />
            <rect x="55" y="32" width="12" height="12" rx="3" fill="rgba(200, 162, 118, 0.1)" stroke="var(--accent)" strokeWidth="1" />
            <path d="M58 38 H64" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 58 L30 42 L48 48 L68 22" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="68" cy="22" r="4" fill="var(--supporting)" filter="url(#goldGlow)" />
            <circle cx="30" cy="42" r="2.5" fill="#ffffff" />
          </svg>
        );
      case "Operational Efficiency":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="60" height="60" rx="12" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1.5" />
            <circle cx="25" cy="25" r="7" fill="rgba(200, 162, 118, 0.15)" stroke="var(--accent)" strokeWidth="1.5" />
            <circle cx="55" cy="25" r="7" fill="rgba(200, 162, 118, 0.15)" stroke="var(--accent)" strokeWidth="1.5" />
            <circle cx="40" cy="55" r="7" fill="rgba(212, 175, 55, 0.2)" stroke="var(--supporting)" strokeWidth="1.5" />
            <path d="M32 25 H48" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M28 31 L35 49" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M52 31 L45 49" stroke="var(--supporting)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M23 25 H27 M25 23 V27" stroke="var(--accent)" strokeWidth="1" />
            <path d="M52 25 L55 28 L58 22" stroke="var(--accent)" strokeWidth="1" />
            <path d="M40 55 L38 58 H42 L40 61" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="40" cy="35" r="8" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2" />
          </svg>
        );
      case "Compliance Readiness":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="32" fill="rgba(17, 34, 64, 0.6)" stroke="rgba(200, 162, 118, 0.15)" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="24" stroke="rgba(200, 162, 118, 0.08)" strokeDasharray="4 4" />
            <path d="M40 16 C48 16 58 20 58 28 C58 42 48 54 40 60 C32 54 22 42 22 28 C22 20 32 16 40 16 Z" fill="url(#navyGrad)" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M40 21 C45.5 21 53 24 53 30 C53 40 45.5 50 40 55 C34.5 50 27 40 27 30 C27 24 34.5 21 40 21 Z" fill="rgba(200, 162, 118, 0.08)" stroke="var(--supporting)" strokeWidth="1.5" />
            <path d="M32 37 L37 42 L48 29" stroke="var(--supporting)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#goldGlow)" />
            <circle cx="40" cy="48" r="2" fill="#ffffff" />
          </svg>
        );
      case "Improved Visibility":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="64" height="56" rx="8" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1.5" />
            <path d="M8 26 H72 M8 48 H72" stroke="rgba(200, 162, 118, 0.08)" strokeWidth="1" />
            <circle cx="28" cy="38" r="16" fill="rgba(200, 162, 118, 0.05)" stroke="var(--accent)" strokeWidth="1" />
            <circle cx="28" cy="38" r="8" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1" />
            <line x1="28" y1="38" x2="38" y2="28" stroke="var(--supporting)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="38" cy="28" r="2" fill="var(--supporting)" filter="url(#goldGlow)" />
            <rect x="50" y="24" width="6" height="28" rx="2" fill="var(--accent)" />
            <rect x="58" y="32" width="6" height="20" rx="2" fill="var(--supporting)" />
            <rect x="66" y="18" width="6" height="34" rx="2" fill="rgba(255, 255, 255, 0.2)" />
          </svg>
        );
      case "Reduced Manual Effort":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="60" height="60" rx="12" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1.5" />
            <circle cx="34" cy="32" r="12" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 3" />
            <circle cx="34" cy="32" r="5" fill="rgba(200, 162, 118, 0.2)" stroke="var(--accent)" strokeWidth="1" />
            <circle cx="52" cy="46" r="8" stroke="var(--supporting)" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="52" cy="46" r="3" fill="rgba(212, 175, 55, 0.2)" stroke="var(--supporting)" strokeWidth="1" />
            <path d="M18 50 C18 42 24 38 30 38" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M46 24 H56 V34" stroke="var(--supporting)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="38" y1="20" x2="56" y2="24" stroke="var(--supporting)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "Cost Optimization":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="60" height="60" rx="12" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1.5" />
            <ellipse cx="28" cy="54" rx="10" ry="4" fill="rgba(200, 162, 118, 0.4)" stroke="var(--accent)" strokeWidth="1" />
            <ellipse cx="28" cy="49" rx="10" ry="4" fill="rgba(200, 162, 118, 0.6)" stroke="var(--accent)" strokeWidth="1" />
            <ellipse cx="28" cy="44" rx="10" ry="4" fill="var(--accent)" stroke="var(--supporting)" strokeWidth="1.2" />
            <ellipse cx="50" cy="54" rx="10" ry="4" fill="rgba(212, 175, 55, 0.4)" stroke="var(--supporting)" strokeWidth="1" />
            <ellipse cx="50" cy="49" rx="10" ry="4" fill="rgba(212, 175, 55, 0.6)" stroke="var(--supporting)" strokeWidth="1" />
            <ellipse cx="50" cy="44" rx="10" ry="4" fill="rgba(212, 175, 55, 0.8)" stroke="var(--supporting)" strokeWidth="1" />
            <ellipse cx="50" cy="39" rx="10" ry="4" fill="var(--supporting)" stroke="#ffffff" strokeWidth="1.2" />
            <path d="M18 20 L35 34 L48 26 L62 40" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M54 40 H62 V32" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Better Decision-Making":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="10" width="64" height="60" rx="10" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1.5" />
            <path d="M8 30 H72 M38 10 V70" stroke="rgba(200, 162, 118, 0.08)" strokeWidth="1" />
            <circle cx="38" cy="42" r="18" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="38" cy="42" r="10" stroke="var(--supporting)" strokeWidth="1.5" />
            <circle cx="38" cy="42" r="3" fill="#ffffff" />
            <line x1="18" y1="22" x2="38" y2="42" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="58" y1="22" x2="38" y2="42" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="58" x2="38" y2="42" stroke="var(--supporting)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="18" cy="22" r="2.5" fill="rgba(255,255,255,0.4)" />
            <circle cx="58" cy="22" r="3.5" fill="var(--accent)" />
            <circle cx="58" cy="58" r="4.5" fill="var(--supporting)" filter="url(#goldGlow)" />
          </svg>
        );
      case "Scalable Growth":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="60" height="60" rx="12" fill="url(#navyGrad)" stroke="rgba(200, 162, 118, 0.2)" strokeWidth="1.5" />
            <rect x="18" y="50" width="10" height="12" rx="2" fill="rgba(200, 162, 118, 0.2)" stroke="var(--accent)" strokeWidth="1.2" />
            <rect x="34" y="38" width="10" height="24" rx="2" fill="rgba(200, 162, 118, 0.4)" stroke="var(--accent)" strokeWidth="1.2" />
            <rect x="50" y="24" width="10" height="38" rx="2" fill="rgba(212, 175, 55, 0.3)" stroke="var(--supporting)" strokeWidth="1.2" />
            <path d="M15 54 L32 32 L48 22 L62 14" stroke="var(--supporting)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 14 H62 V24" stroke="var(--supporting)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#goldGlow)" />
            <circle cx="62" cy="14" r="3" fill="#ffffff" />
          </svg>
        );
      default:
        return null;
    }
  };

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const conveyorContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const conveyorCardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const buttonHover = {
    whileHover: { scale: 1.03, boxShadow: '0px 6px 12px rgba(200, 162, 118, 0.3)' },
    whileTap: { scale: 0.98 }
  };

  const secondaryButtonHover = {
    whileHover: { scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' },
    whileTap: { scale: 0.98 }
  };

  const partnerCards = [
    {
      title: "Project Management & Consulting",
      summary: "Aligning business objectives with practical technology strategies.",
      icon: <Briefcase size={22} />,
      accent: "var(--secondary)",
      challenges: "Misaligned system implementations, operational inefficiencies, uncontrolled project scope creep, communication gaps across floor teams.",
      approach: "Process mapping diagnostics, clear roadmap scoping, milestone setting, cross-team accountability.",
      techStack: "Microsoft Project, JIRA, Confluence, Custom Advisory Frameworks.",
      roadmap: "Discovery scoping (Weeks 1-2) -> Milestone planning (Weeks 3-4) -> Resource allocation (Week 5) -> Operational tracking (Ongoing).",
      outcomes: "Transparent, predictable project execution on budget and schedule.",
      benefits: "100% project visibility, optimized capital allocation.",
      kpis: "On-time delivery rate, Budget adherence index, Scope change control."
    },
    {
      title: "Application Development",
      summary: "Building applications that streamline and automate business operations.",
      icon: <Monitor size={22} />,
      accent: "var(--accent)",
      challenges: "Disconnected custom systems, manual paperwork bottlenecks, lack of real-time operational data.",
      approach: "Custom enterprise web application blueprints, high-availability data integrations.",
      techStack: "React, TypeScript, Node.js, PostgreSQL, Docker.",
      roadmap: "Requirements blueprint (Weeks 1-3) -> Schema development (Weeks 4-6) -> UI/UX sprint (Weeks 7-9) -> Core coding (Weeks 10-16) -> Deploy (Weeks 17-18).",
      outcomes: "Streamlined automated operations, custom cloud dashboard utility.",
      benefits: "Elimination of paper reports, 24/7 web access.",
      kpis: "Form automation rate, Page load times (under 1.5s), Data capture accuracy."
    },
    {
      title: "Product Development",
      summary: "Transforming ideas into scalable and reliable software products.",
      icon: <Layers size={22} />,
      accent: "var(--cta)",
      challenges: "Launching modular software applications without architectural foresight, leading to unscalable codebases.",
      approach: "Modular SaaS platform architecture, decoupled RESTful APIs, continuous R&D feedback loops.",
      techStack: "Python, Go, React, Kubernetes, AWS.",
      roadmap: "Product specification (Weeks 1-4) -> Prototype build (Weeks 5-8) -> Core sprints (Weeks 9-18) -> Beta release (Weeks 19-22) -> Scale deployment (Weeks 23+).",
      outcomes: "Clean, copyright-protected, enterprise-grade packaged software.",
      benefits: "Proprietary software equity, high feature scalability.",
      kpis: "Modular scaling index, API response latency, Code coverage (85%+)."
    },
    {
      title: "Mobility Solutions",
      summary: "Empowering teams through mobile-first business applications.",
      icon: <Smartphone size={22} />,
      accent: "#ec4899",
      challenges: "Floor inspectors, logistics workers, and field supervisors unable to log status live in real-time due to deskbound applications or offline areas.",
      approach: "Mobile-first native and hybrid applications, offline-first sync data storage.",
      techStack: "React Native, Flutter, SQLite, GraphQL.",
      roadmap: "Mobile UI design (Weeks 1-2) -> Offline database setup (Weeks 3-4) -> Device integration (Weeks 5-8) -> App store build (Weeks 9-10).",
      outcomes: "Live field reporting, automated synchronization when online.",
      benefits: "Dynamic floor entry, immediate alert dispatching.",
      kpis: "Mobile form entry time, Offline-sync recovery success (100%), Active floor session rate."
    },
    {
      title: "Application Support & Maintenance",
      summary: "Ensuring systems remain reliable, secure and optimized.",
      icon: <Headset size={22} />,
      accent: "#10b981",
      challenges: "Costly application downtime, delayed bug resolutions, security vulnerabilities, lack of long-term updates.",
      approach: "24/7 SLA help-desk systems, periodic security patches, server performance tuning.",
      techStack: "Datadog, Prometheus, Grafana, SLA Desk tools.",
      roadmap: "System log hookups (Week 1) -> Performance baselining (Weeks 2-3) -> Daily logs review (Ongoing) -> Monthly security audit (Recurring).",
      outcomes: "99.9% uptime compliance, secure system operation.",
      benefits: "Operational peace of mind, immediate support contact.",
      kpis: "Mean time to resolution (MTTR < 2h), System uptime percentage, Security vulnerability score (0)."
    }
  ];


  const processTimeline = [
    { step: "01", name: "Discover", desc: "Understanding business objectives and studying manual workflows on the ground." },
    { step: "02", name: "Analyze", desc: "Identifying bottlenecks, scope gaps, compliance requirements, and integration opportunities." },
    { step: "03", name: "Design", desc: "Engineering scalable system database schemas and designing high-fidelity UX prototypes." },
    { step: "04", name: "Develop", desc: "Writing secure, containerized, and fast backend APIs and front-end React apps." },
    { step: "05", name: "Deploy", desc: "Setting up production instances, migrating records, and conducting supervisor training." },
    { step: "06", name: "Support", desc: "Providing SLA help-desk support, monitoring performance logs, and adding new features." }
  ];

  const solutionMatching = [
    { need: "Production Efficiency", product: "Vericea Manufacturing", desc: "Improve production tracking and operational efficiency.", accent: "var(--secondary)", icon: <Factory size={20} /> },
    { need: "Compliance Management", product: "Vericea Compliance", desc: "Track compliance activities and improve audit readiness.", accent: "var(--accent)", icon: <ShieldCheck size={20} /> },
    { need: "Risk Assessment", product: "FactSafe", desc: "Identify, assess and monitor business risks.", accent: "#ef4444", icon: <AlertTriangle size={20} /> },
    { need: "Logistics Cost Optimization", product: "Courier Cost Management", desc: "Control and reduce logistics-related expenses.", accent: "#3b82f6", icon: <Truck size={20} /> },
    { need: "Custom Business Operations", product: "Custom Application Development", desc: "Tailored software solutions designed around business requirements.", accent: "var(--cta)", icon: <Code size={20} /> }
  ];

  const outcomes = [
    { title: "Increased Productivity", desc: "Streamline worker tasks and speed up data logging." },
    { title: "Operational Efficiency", desc: "Minimize resource waste, scrap logs, and process lag." },
    { title: "Compliance Readiness", desc: "Always-ready audit trails and automated evidence checks." },
    { title: "Improved Visibility", desc: "Real-time updates on production metrics, OEE, and costs." },
    { title: "Reduced Manual Effort", desc: "Automate paperwork and eliminate redundant data entries." },
    { title: "Cost Optimization", desc: "Lower operational overheads, courier bills, and downtime." },
    { title: "Better Decision-Making", desc: "Actionable analytical data in clean visual executive dashboards." },
    { title: "Scalable Growth", desc: "System architectures designed to support modular expansion." }
  ];



  const handleScrollToSolutions = () => {
    const section = document.getElementById('solutions-matching');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Resolve accent tint (accepts hex like "#10b981" or css var like "var(--accent)")
  const resolveTint = (accent: string, alpha = 0.08) => {
    try {
      if (!accent) return `rgba(255,255,255,0.02)`;
      if (accent.startsWith('var(')) {
        const name = accent.slice(4, -1).trim();
        const map: Record<string, string> = {
          '--cta': '--accent-rgb',
          '--accent': '--accent-rgb',
          '--supporting': '--supporting-rgb',
          '--secondary': '--secondary-rgb',
          '--primary': '--primary-rgb'
        };
        const rgbVar = map[name] || `${name}-rgb`;
        return `rgba(var(${rgbVar}), ${alpha})`;
      }

      // hex -> rgba
      if (accent.startsWith('#')) {
        const hex = accent.replace('#', '');
        const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.substring(0, 2), 16);
        const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.substring(hex.length === 3 ? 2 : 2, hex.length === 3 ? 4 : 4), 16);
        const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.substring(hex.length === 3 ? 4 : 4), 16);
        // Fallback safe parsing for common 6-char
        const rr = parseInt(hex.substring(0, 2), 16);
        const gg = parseInt(hex.substring(2, 4), 16);
        const bb = parseInt(hex.substring(4, 6), 16);
        return `rgba(${isNaN(rr) ? r : rr}, ${isNaN(gg) ? g : gg}, ${isNaN(bb) ? b : bb}, ${alpha})`;
      }

      return accent;
    } catch {
      return `rgba(255,255,255,0.02)`;
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="services-page services-page-bg"
      style={{ overflow: 'hidden', color: 'var(--text-main)' }}
    >
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section 

        className="section surface-royal"

        style={{ 
          padding: '160px 0 120px 0', 
          color: 'var(--text-main)',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(31, 58, 95, 0.85), rgba(15, 28, 50, 0.92)), url("/images/industrial_control_room_1780849774868.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(200, 162, 118, 0.18)'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 80% 20%, rgba(200, 162, 118, 0.05) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              {/* Courier Cost Optimizer Logo on Courier Optimization page */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <div style={{ 
                  padding: '12px 24px', 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--supporting)', letterSpacing: '1px' }}>POWERED BY</span>
                  <img src="/images/Courier Cost Optimizer.png" alt="Courier Cost Optimizer Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-subtitle" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    padding: '6px 14px', 
                    background: 'rgba(200, 162, 118, 0.12)', 
                    borderRadius: '20px', 
                    fontSize: '13px', 
                    color: 'var(--accent)', 
                    fontWeight: '600',
                    marginBottom: '24px',
                    border: '1px solid rgba(200, 162, 118, 0.3)'
                  }}
            >
              <Sparkles size={14} style={{ color: 'var(--cta)' }} />
              <span>Tailored Technical Deliveries</span>
            </motion.div>
            
              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
                style={{ fontSize: '48px', lineHeight: '1.15', margin: '0 0 24px 0', letterSpacing: '-1.5px', color: 'var(--text-main)', fontWeight: '800' }}
            >
              Enterprise Software Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: '18px', color: 'rgba(var(--primary-rgb), 0.85)', marginBottom: '40px', lineHeight: '1.6' }}
            >
              Delivering technology solutions that improve operational efficiency, strengthen compliance and support business growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
            >
              <motion.button 
                onClick={() => navigate('/contact')} 
                className="btn btn-cta"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Discuss Your Requirements
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                onClick={handleScrollToSolutions} 
                className="btn btn-dark-outline"
                whileHover={secondaryButtonHover.whileHover}
                whileTap={secondaryButtonHover.whileTap}
                style={{ border: '2px solid rgba(200, 162, 118, 0.35)', color: 'var(--text-main)' }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: HOW WE PARTNER WITH OUR CLIENTS
          ================================================== */}

      <section className="section surface-matte about-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.12)' }}>

        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Our Engagement Model</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>How We Partner With Our Clients</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>
              Every organization has unique challenges. Explore how CEA Infotech collaborates with businesses to design, develop and support technology solutions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {partnerCards.map((card, index) => {
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                className="glass-card"
                  style={{
                    padding: '24px 32px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    borderLeft: `5px solid ${card.accent === 'var(--secondary)' || card.accent === 'var(--accent)' || card.accent === 'var(--cta)' ? 'var(--accent)' : card.accent}`
                  }}
                >
                  {/* Card Header (Collapsed State content) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: resolveTint(card.accent, 0.08),
                        color: card.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {card.icon}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                          {card.title}
                        </h3>
                        {!isExpanded && (
                          <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: 0 }}>
                            {card.summary}
                          </p>
                        )}
                      </div>
                    </div>

                    <div style={{ color: '#94a3b8' }}>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Expanded Content Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', marginTop: '8px' }}
                        onClick={(e) => e.stopPropagation()} // Prevent collapse on details click
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                          {/* Column 1 */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                              <h4 style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--supporting)', marginBottom: '6px', textAlign: 'left' }}>
                                Business Challenges
                              </h4>
                              <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.5', margin: 0, textAlign: 'left' }}>
                                {card.challenges}
                              </p>
                            </div>
                            
                            <div>
                              <h4 style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--supporting)', marginBottom: '6px', textAlign: 'left' }}>
                                CEA Approach
                              </h4>
                              <p style={{ fontSize: '13.5px', color: '#f1f5f9', lineHeight: '1.5', margin: 0, textAlign: 'left' }}>
                                {card.approach}
                              </p>
                            </div>

                            <div>
                              <h4 style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--supporting)', marginBottom: '6px', textAlign: 'left' }}>
                                Technology Stack
                              </h4>
                              <p style={{ fontSize: '13.5px', color: '#94a3b8', fontFamily: 'monospace', margin: 0, textAlign: 'left' }}>
                                {card.techStack}
                              </p>
                            </div>
                          </div>

                          {/* Column 2 */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                              <h4 style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '6px', textAlign: 'left' }}>
                                Implementation Roadmap
                              </h4>
                              <p style={{ fontSize: '13.5px', color: '#f1f5f9', lineHeight: '1.5', margin: 0, textAlign: 'left' }}>
                                {card.roadmap}
                              </p>
                            </div>

                            <div>
                              <h4 style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '6px', textAlign: 'left' }}>
                                Customer Benefits
                              </h4>
                              <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.5', margin: 0, textAlign: 'left' }}>
                                {card.benefits}
                              </p>
                            </div>

                            <div>
                              <h4 style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', marginBottom: '6px', textAlign: 'left' }}>
                                Business KPIs
                              </h4>
                              <p style={{ fontSize: '13.5px', color: '#f1f5f9', fontWeight: '600', margin: 0, textAlign: 'left' }}>
                                {card.kpis}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Full-width bottom outcome panel */}
                        <div style={{ 
                          marginTop: '24px',
                          padding: '16px 20px', 
                          backgroundColor: 'rgba(200, 162, 118, 0.05)', 
                          borderRadius: '8px',
                          border: '1px solid rgba(200, 162, 118, 0.18)',
                          borderLeftWidth: '4px',
                          borderLeftColor: 'var(--supporting)'
                        }}>
                          <h4 style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--supporting)', textAlign: 'left' }}>
                            Expected Outcome:
                          </h4>
                          <p style={{ margin: 0, fontSize: '14px', color: '#f1f5f9', fontWeight: '600', lineHeight: '1.4', textAlign: 'left' }}>
                            {card.outcomes}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: OUR SOLUTION DELIVERY FRAMEWORK
          ================================================== */}

      <section className="section surface-royal compliance-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.12)', position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(200, 162, 118, 0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '64px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Workflow & Rigor</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>How We Deliver Results</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>Our end-to-end delivery framework ensures predictable schedules and high-uptime solutions.</p>
          </div>

          {/* Animated Horizontal Process Roadmap */}
          <div style={{ position: 'relative', overflowX: 'auto', paddingBottom: '20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              minWidth: '980px', 
              position: 'relative',
              padding: '0 40px'
            }}>
              {/* Connecting Line */}
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '80px',
                right: '80px',
                height: '3px',
                backgroundColor: 'var(--gold-divider)',
                zIndex: 1
              }}></div>

              {processTimeline.map((step, index) => (
                <motion.div
                  key={index}
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '140px',
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                  }}
                >
                  {/* Step Number Dot */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(200, 162, 118, 0.12)',
                      border: '2px solid var(--accent)',
                      boxShadow: '0 0 15px rgba(200, 162, 118, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--supporting)',
                      fontSize: '14px',
                      fontWeight: '800',
                      marginBottom: '16px',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    {step.step}
                  </motion.div>

                  <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0' }}>
                    {step.name}
                  </h3>
                  <p style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: MATCHING BUSINESS NEEDS TO SOLUTIONS
          ================================================== */}

      <section id="solutions-matching" className="section surface-matte products-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.12)', position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 162, 118, 0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 162, 118, 0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Product Alignments</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>The Right Solution For Every Business Need</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>Aligning specific operational demands to our proprietary tools or customized engineering tracks.</p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {solutionMatching.map((sol, index) => (
              <motion.div
                key={index}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className="glass-card"
                style={{
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: sol.accent }}></div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    backgroundColor: `${sol.accent}18`,
                    color: sol.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {sol.icon}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: sol.accent, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    {sol.need}
                  </span>
                </div>

                 <div style={{ flexGrow: 1 }}>
                  {sol.product === "Courier Cost Management" && (
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                      <img src="/images/Courier Cost Optimizer.png" alt="Courier Cost Optimizer Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                  )}
                  {sol.product === "Vericea Manufacturing" && (
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                      <img src="/images/Vericea.png" alt="Vericea Logo" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                  )}
                  {sol.product === "Vericea Compliance" && (
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                      <img src="/images/Vericea.png" alt="Vericea Logo" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                  )}
                  {sol.product === "FactSafe" && (
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                      <img src="/images/Fact_safe.png" alt="FactSafe Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                  )}
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', fontFamily: 'var(--font-headings)' }}>
                    {sol.product}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    {sol.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', marginTop: '8px' }}>
                  <button 
                    onClick={() => navigate('/products')} 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--supporting)',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    View Product Details
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: BUSINESS OUTCOMES (KPI Conveyor Belt)
          ================================================== */}

      <section className="section surface-royal services-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.12)', position: 'relative', overflow: 'hidden', padding: '60px 0 65px 0' }}>

        {/* Shared SVG gradients and filters */}
        <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
          <defs>
            <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B192C" />
              <stop offset="100%" stopColor="#1B2A4A" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A276" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>

        <div style={{ position: 'absolute', bottom: 0, right: '20%', width: '500px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(200, 162, 118, 0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '32px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Target Metrics</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Value Delivered To Our Customers</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>Concrete outcomes and performance updates organizations achieve with CEA systems.</p>
          </div>
        </div>

        {/* Conveyor Belt Wrapper */}
        <div 
          style={{ 
            overflow: 'hidden', 
            width: '100%', 
            position: 'relative', 
            padding: '16px 0'
          }}
          onMouseEnter={() => setIsConveyorHovered(true)}
          onMouseLeave={() => {
            setIsConveyorHovered(false);
            setHoveredCardIndex(null);
          }}
        >
          {/* Data Pulse travelling across all metrics */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(200, 162, 118, 0.02) 15%, rgba(200, 162, 118, 0.06) 20%, rgba(212, 175, 55, 0.12) 25%, rgba(200, 162, 118, 0.06) 30%, rgba(200, 162, 118, 0.02) 35%, transparent)',
            pointerEvents: 'none',
            mixBlendMode: 'plus-lighter',
            animation: 'data-pulse-sweep 10s cubic-bezier(0.25, 1, 0.5, 1) infinite',
            animationPlayState: isConveyorHovered ? 'paused' : 'running',
            zIndex: 3
          }} />

          <motion.div 
            variants={conveyorContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
              animation: 'conveyor-left-to-right 45s linear infinite',
              animationPlayState: isConveyorHovered ? 'paused' : 'running',
              paddingLeft: '24px'
            }}
          >
            {/* Render outcomes duplicated twice for infinite loop */}
            {[...outcomes, ...outcomes].map((out, index) => {
              const isCardHovered = hoveredCardIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={conveyorCardVariants}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  className="glass-card"
                  style={{
                    width: '420px',
                    height: '112px',
                    flexShrink: 0,
                    padding: '16px 24px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '20px',
                    borderRadius: '12px',
                    backgroundColor: isCardHovered ? 'rgba(17, 34, 64, 0.95)' : 'rgba(17, 34, 64, 0.75)',
                    border: isCardHovered ? '1px solid var(--accent)' : '1px solid rgba(200, 162, 118, 0.15)',
                    boxShadow: isCardHovered 
                      ? '0 12px 32px rgba(200, 162, 118, 0.25), 0 8px 24px rgba(0, 0, 0, 0.5)' 
                      : '0 8px 24px rgba(0, 0, 0, 0.35)',
                    transform: isCardHovered ? 'scale(1.03) translateY(-4px)' : 'scale(1) translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  {/* Subtle data pulse reflection on individual card if hovered */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(115deg, transparent, rgba(200, 162, 118, 0.05) 40%, rgba(200, 162, 118, 0.15) 50%, rgba(200, 162, 118, 0.05) 60%, transparent)',
                    opacity: isCardHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }} />

                  {/* Premium visual illustration */}
                  <div style={{ 
                    width: '80px',
                    height: '80px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    transform: isCardHovered ? 'scale(1.08)' : 'scale(1)',
                    filter: isCardHovered ? 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.35))' : 'none'
                  }}>
                    {getOutcomeIcon(out.title)}
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: 0, letterSpacing: '-0.1px' }}>
                      {out.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.45', margin: 0 }}>
                      {out.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Animated Gold Tracking Line */}
        <div className="container" style={{ position: 'relative', marginTop: '16px', zIndex: 2 }}>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ 
              position: 'relative', 
              height: '2px', 
              width: '100%', 
              overflow: 'hidden', 
              backgroundColor: 'rgba(200, 162, 118, 0.12)', 
              borderRadius: '1px',
              transformOrigin: 'left'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '240px',
              background: 'linear-gradient(90deg, transparent, var(--accent), var(--supporting), var(--accent), transparent)',
              animation: 'gold-tracker-flow 3.5s linear infinite',
              animationPlayState: isConveyorHovered ? 'paused' : 'running'
            }} />
          </motion.div>
        </div>
      </section>



      {/* ==================================================
          CTA SECTION
          ================================================== */}

      <section className="section surface-matte contact-section-texture" style={{ position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 162, 118, 0.04) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 162, 118, 0.04) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div 
            variants={scrollReveal} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={scrollReveal.viewport}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '38px', marginBottom: '20px', letterSpacing: '-1px', color: '#ffffff', fontWeight: '800' }}>
              Ready To Solve Your Business Challenges?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(241, 245, 249, 0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
              Partner with CEA Infotech to build scalable, secure and efficient technology solutions that drive measurable business outcomes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button 
                onClick={() => navigate('/contact')} 
                className="btn btn-cta"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Schedule A Consultation
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/products')} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ border: '2px solid rgba(255,255,255,0.25)', color: '#ffffff' }}
              >
                Explore Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
