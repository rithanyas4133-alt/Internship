import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  Play, 
  Sparkles, 
  X,
  Check,
  Calendar,
  Award,
  Globe,
  Building,
  Users,
  Briefcase,
  Lightbulb,
  Monitor,
  Smartphone,
  Layers,
  Factory,
  ShieldCheck,
  Truck,
  Network,
  Cog,
  Rocket,
  Headset,
  Cpu,
  Recycle,
  HeartPulse,
  Droplets,
  BarChart3,
  CalendarDays,
  Wallet,
  Clock
} from 'lucide-react';


// CountUp Component for statistics numeric tick animation
interface CountUpProps {
  end: number | string;
  duration?: number;
  suffix?: string;
}

function CountUp({ end, duration = 1.5, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const endVal = parseInt(end.toString().replace(/[^0-9]/g, ''));
    if (isNaN(endVal)) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30;
    const steps = totalMiliseconds / incrementTime;
    const increment = endVal / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= endVal) {
        clearInterval(timer);
        setCount(endVal);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const heroBackgrounds = [
  '/images/manufacturing_floor_1780850784796.png',
  '/images/quality_audit_1780850801169.png',
  '/images/logistics_terminal_1780850837146.png',
  '/images/safety_inspection_1780850817856.png',
  '/images/family_archives_1780850863160.png'
];

const solutions = [
  {
    title: "Brand-Supplier Risk Survey Tool",
    icon: ShieldCheck,
    description: "Supplier risk assessment and monitoring platform."
  },
  {
    title: "Scrap Management System",
    icon: Recycle,
    description: "Track, manage and optimize scrap operations."
  },
  {
    title: "Courier Cost Management System",
    icon: Truck,
    description: "Monitor and reduce logistics and courier expenses."
  },
  {
    title: "Overtime Tracking & Approval System",
    icon: Clock,
    description: "Automate overtime requests, approvals and reporting."
  },
  {
    title: "Women Health Beneficiaries Tracking System",
    icon: HeartPulse,
    description: "Government beneficiary monitoring and reporting solution."
  },
  {
    title: "Job Portal & Recruitment System",
    icon: Users,
    description: "End-to-end recruitment and talent management platform."
  },
  {
    title: "Community Water Plant System",
    icon: Droplets,
    description: "Monitor community water plant operations and services."
  },
  {
    title: "MIS Framework for NGO Operations",
    icon: BarChart3,
    description: "Centralized monitoring and reporting for NGO activities."
  },
  {
    title: "Golf Tee Time Booking System",
    icon: CalendarDays,
    description: "Online reservation and scheduling platform."
  },
  {
    title: "Country Development Project Monitoring System",
    icon: Globe,
    description: "Track and monitor multi-year development initiatives."
  },
  {
    title: "Microfinance Accounting Product",
    icon: Wallet,
    description: "Financial accounting platform for SHGs and cooperatives."
  },
  {
    title: "Family Tree Platform",
    icon: Network,
    description: "Scalable multilingual family relationship management platform."
  }
];

const partnersRow1 = [
  { name: "Bosch", icon: Cog, color: "#22D3EE" },
  { name: "Siemens", icon: Cpu, color: "#D4AF37" },
  { name: "Schneider Electric", icon: Layers, color: "#22D3EE" },
  { name: "Honeywell", icon: ShieldCheck, color: "#D4AF37" },
  { name: "ABB", icon: Cog, color: "#22D3EE" }
];

const partnersRow2 = [
  { name: "Tata Group", icon: Building, color: "#D4AF37" },
  { name: "TVS", icon: Factory, color: "#22D3EE" },
  { name: "Ashok Leyland", icon: Truck, color: "#D4AF37" },
  { name: "Larsen & Toubro", icon: Briefcase, color: "#22D3EE" },
  { name: "Mahindra", icon: Factory, color: "#D4AF37" }
];

// ── FLAGSHIP PLATFORMS DATA ──────────────────────────────────────────────────

const flagshipPlatforms = [
  {
    id: "vericea-manufacturing",
    index: 1,
    name: "VERICEA Manufacturing",
    category: "Manufacturing Intelligence",
    tagline: "Real-Time Production Visibility & Defect Intelligence",
    capabilities: ["Production Tracking", "Defect Monitoring", "Operational Dashboards"],
    image: "/images/manufacturing_floor_1780850784796.png",
    dashboardImage: "/images/product_tab_manufacturing_1780851000218.png",
    path: "/products/vericea-manufacturing",
    accentColor: "#22D3EE",
    stat: { value: "22%", label: "OEE Increase" }
  },
  {
    id: "vericea-compliance",
    index: 2,
    name: "VERICEA Compliance",
    category: "Compliance Governance",
    tagline: "Audit Readiness & Compliance Governance Platform",
    capabilities: ["Audit Scheduling", "Evidence Tracking", "Compliance Analytics"],
    image: "/images/quality_audit_1780850801169.png",
    dashboardImage: "/images/product_tab_compliance_1780851018319.png",
    path: "/products/vericea-compliance",
    accentColor: "#F59E0B",
    stat: { value: "100%", label: "Audit Success" }
  },
  {
    id: "factsafe",
    index: 3,
    name: "FactSafe",
    category: "Risk Management",
    tagline: "Proactive Risk Assessment & Management Platform",
    capabilities: ["Risk Register", "Risk Scoring", "Supplier Risk Monitoring"],
    image: "/images/safety_inspection_1780850817856.png",
    dashboardImage: "/images/product_tab_factsafe_1780850981241.png",
    path: "/products/factsafe",
    accentColor: "#EF4444",
    stat: { value: "35%", label: "Risk Reduction" }
  },
  {
    id: "courier-cost-management",
    index: 4,
    name: "Courier Cost Management",
    category: "Logistics Optimization",
    tagline: "Enterprise Logistics Cost Optimization Platform",
    capabilities: ["Courier Cost Analysis", "Vendor Comparison", "Shipment Intelligence"],
    image: "/images/logistics_terminal_1780850837146.png",
    dashboardImage: "/images/product_tab_courier_1780851035678.png",
    path: "/products/courier-cost-management",
    accentColor: "#10B981",
    stat: { value: "12.4%", label: "Cost Savings" }
  },
  {
    id: "family-tree-platform",
    index: 5,
    name: "Family Tree Platform",
    category: "Data Intelligence",
    tagline: "Relationship Mapping & Structured Data Intelligence",
    capabilities: ["Relationship Visualization", "Hierarchical Mapping", "Data Intelligence"],
    image: "/images/family_archives_1780850863160.png",
    dashboardImage: "/images/product_tab_family_tree_1780851053149.png",
    path: "/products/family-tree-platform",
    accentColor: "#A78BFA",
    stat: { value: "100k+", label: "Nodes Handled" }
  }
];

// ── FLAGSHIP ANIMATION VARIANTS ───────────────────────────────────────────────

const flagshipCardVariants = {
  initial: {
    y: 0,
    borderColor: 'rgba(245, 158, 11, 0.12)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  },
  hover: {
    y: -12,
    borderColor: 'rgba(245, 158, 11, 0.8)',
    boxShadow: '0 32px 64px rgba(0,0,0,0.65), 0 0 40px rgba(245,158,11,0.2)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const flagshipImageZoomVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const flagshipOverlayVariants = {
  initial: { opacity: 0.25 },
  hover: {
    opacity: 0.72,
    transition: { duration: 0.45 }
  }
};

const flagshipGlowBarVariants = {
  initial: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const flagshipDetailsVariants = {
  initial: { height: 0, opacity: 0, y: 12 },
  hover: {
    height: 'auto',
    opacity: 1,
    y: 0,
    transition: {
      height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      opacity: { duration: 0.35, delay: 0.08 },
      y: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }
};

const flagshipBtnVariants = {
  initial: { opacity: 0, y: 8 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.15 }
  }
};

// ── FLAGSHIP CARD COMPONENT ───────────────────────────────────────────────────

interface FlagshipPlatform {
  id: string;
  index: number;
  name: string;
  category: string;
  tagline: string;
  capabilities: string[];
  image: string;
  dashboardImage: string;
  path: string;
  accentColor: string;
  stat: { value: string; label: string };
}

function FlagshipCard({ platform, onNavigate, variant = 'standard' }: {
  platform: FlagshipPlatform;
  onNavigate: (path: string) => void;
  variant?: 'hero' | 'standard';
}) {
  const isHero = variant === 'hero';
  return (
    <motion.div
      variants={flagshipCardVariants}
      initial="initial"
      whileHover="hover"
      onClick={() => onNavigate(platform.path)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(245,158,11,0.12)',
        backgroundColor: '#0D1321',
        cursor: 'pointer',
        height: isHero ? '540px' : '420px',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      {/* Animated gold top glow bar */}
      <motion.div
        variants={flagshipGlowBarVariants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${platform.accentColor}, #F59E0B, ${platform.accentColor}, transparent)`,
          zIndex: 10,
          transformOrigin: 'left center'
        }}
      />

      {/* Product number badge */}
      <div style={{
        position: 'absolute',
        top: '18px',
        left: '18px',
        zIndex: 10,
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        background: 'rgba(245,158,11,0.12)',
        border: '1px solid rgba(245,158,11,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: '800',
        color: '#F59E0B',
        fontFamily: 'var(--font-headings)',
        backdropFilter: 'blur(8px)',
      }}>
        {String(platform.index).padStart(2, '0')}
      </div>

      {/* Stat badge top-right */}
      <div style={{
        position: 'absolute',
        top: '18px',
        right: '18px',
        zIndex: 10,
        background: 'rgba(10,15,28,0.75)',
        border: `1px solid ${platform.accentColor}40`,
        borderRadius: '8px',
        padding: '6px 10px',
        backdropFilter: 'blur(8px)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '14px', fontWeight: '800', color: platform.accentColor, fontFamily: 'var(--font-headings)', lineHeight: 1 }}>
          {platform.stat.value}
        </div>
        <div style={{ fontSize: '9px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
          {platform.stat.label}
        </div>
      </div>

      {/* Image area */}
      <div style={{ position: 'relative', height: isHero ? '310px' : '225px', overflow: 'hidden', flexShrink: 0 }}>
        <motion.img
          src={platform.image}
          alt={platform.name}
          variants={flagshipImageZoomVariants}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Gradient overlay */}
        <motion.div
          variants={flagshipOverlayVariants}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,15,28,0.05) 0%, rgba(10,15,28,0.75) 100%)',
          }}
        />
        {/* Category pill on image */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          left: '18px',
          background: 'rgba(10,15,28,0.8)',
          backdropFilter: 'blur(8px)',
          border: `1px solid ${platform.accentColor}30`,
          borderRadius: '20px',
          padding: '4px 12px',
          fontSize: '11px',
          fontWeight: '700',
          color: platform.accentColor,
          textTransform: 'uppercase',
          letterSpacing: '0.8px'
        }}>
          {platform.category}
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: '22px 22px 20px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: isHero ? '21px' : '17px',
          fontWeight: '800',
          color: '#FFFFFF',
          margin: '0 0 6px 0',
          fontFamily: 'var(--font-headings)',
          lineHeight: 1.2,
          letterSpacing: '-0.3px'
        }}>
          {platform.name}
        </h3>
        <p style={{
          fontSize: '12.5px',
          color: '#9CA3AF',
          lineHeight: 1.45,
          margin: 0,
          flexGrow: 1
        }}>
          {platform.tagline}
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '16px 0 0 0' }} />

        {/* Hover-revealed capabilities + button */}
        <motion.div
          variants={flagshipDetailsVariants}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {platform.capabilities.map((cap, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  backgroundColor: platform.accentColor, flexShrink: 0
                }} />
                <span style={{ fontSize: '12.5px', color: '#D1D5DB', fontWeight: '500' }}>{cap}</span>
              </div>
            ))}
          </div>

          <motion.div variants={flagshipBtnVariants} style={{ marginTop: '14px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              color: '#0A0F1C',
              borderRadius: '8px',
              padding: '9px 18px',
              fontSize: '12px',
              fontWeight: '800',
              boxShadow: '0 4px 12px rgba(245,158,11,0.3)',
              letterSpacing: '0.3px'
            }}>
              Explore Platform
              <ArrowRight size={13} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background slideshow slider state
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    // Slideshow transition timer every 5 seconds
    const bgTimer = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => {
      clearInterval(bgTimer);
    };
  }, []);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };

  const heroFadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const buttonHover = {
    whileHover: { scale: 1.03, boxShadow: '0px 6px 12px rgba(245, 158, 11, 0.3)' },
    whileTap: { scale: 0.98 }
  };

  const secondaryButtonHover = {
    whileHover: { scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' },
    whileTap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      style={{ overflow: 'hidden', backgroundColor: 'var(--background)' }}
    >
      {/* --- HERO SECTION --- */}
      <section 
        className="section" 
        style={{ 
          padding: '160px 0 120px 0', 
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0b0f19'
        }}
      >
        {/* Auto-playing fading background slides */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.65)), url(${heroBackgrounds[currentBgIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0
            }}
          />
        </AnimatePresence>

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.12) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            {/* Blurred Left Text Container */}
            <motion.div 
              initial={heroFadeIn.initial}
              animate={heroFadeIn.animate}
              transition={heroFadeIn.transition}
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                padding: '44px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                width: '100%',
                maxWidth: '580px',
                marginRight: 'auto'
              }}
            >
              <div 
                className="section-subtitle" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  background: 'rgba(255, 255, 255, 0.08)', 
                  borderRadius: '20px', 
                  fontSize: '13px', 
                  color: 'var(--accent)', 
                  fontWeight: '600',
                  marginBottom: '16px'
                }}
              >
                <Sparkles size={14} style={{ color: 'var(--cta)' }} />
                <span>Enterprise Software & Technology Consulting</span>
              </div>
              <h1 style={{ fontSize: '48px', lineHeight: '1.15', margin: '0 0 20px 0', letterSpacing: '-1.5px', color: '#ffffff' }}>
                Engineering Digital Excellence for Manufacturing, Compliance & Enterprise Growth
              </h1>
              <p style={{ fontSize: '17px', color: 'rgba(241, 245, 249, 0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
                CEA Infotech delivers enterprise software solutions, compliance platforms, audit intelligence systems and digital transformation initiatives that help organizations improve operational performance, governance and business efficiency.
              </p>
              
              <div className="btn-group">
                <motion.button 
                  onClick={() => navigate('/products')} 
                  className="btn btn-cta"
                  whileHover={buttonHover.whileHover}
                  whileTap={buttonHover.whileTap}
                  style={{ color: '#0F172A' }}
                >
                  Explore Solutions
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact')} 
                  className="btn btn-dark-outline"
                  whileHover={secondaryButtonHover.whileHover}
                  whileTap={secondaryButtonHover.whileTap}
                  style={{ border: '2px solid rgba(255, 255, 255, 0.35)' }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>

            {/* Right side is intentionally left empty so the smart factory background is clearly visible */}
            <div style={{ display: 'none' }} className="mobile-hidden-spacer"></div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: '60px 0', backgroundColor: 'var(--secondary-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Calendar size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={25} suffix="+" duration={1} /></div>
              <div className="stat-label">Years Combined Expertise</div>
              <div className="stat-desc">Strategic executive leadership</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Award size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={100} suffix="+" duration={1.2} /></div>
              <div className="stat-label">Projects Delivered</div>
              <div className="stat-desc">Production-grade systems</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Users size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={50} suffix="+" duration={1} /></div>
              <div className="stat-label">Enterprise Customers</div>
              <div className="stat-desc">Trusted by large organizations</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Building size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={10} suffix="+" duration={1.2} /></div>
              <div className="stat-label">Industry Domains</div>
              <div className="stat-desc">Custom-configured solutions</div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* --- SERVICES OVERVIEW --- */}
      <section className="section section-alt" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Our Capabilities</span>
            <h2 className="section-title">Enterprise Software Services</h2>
            <p className="section-desc">Consulting, custom programming, and application delivery engineered for industrial scale.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Project Management',
                desc: 'Structured execution roadmaps tracking dependencies, risk metrics, and release timelines for system predictability.',
                icon: <Briefcase />
              },
              {
                title: 'Consulting Services',
                desc: 'Deep process diagnostics to align ERP setups, logistics pipelines, and warehouse tracking with corporate targets.',
                icon: <Lightbulb />
              },
              {
                title: 'Web Application Development',
                desc: 'High-performance cloud databases and executive dashboards built utilizing secure React & TypeScript.',
                icon: <Monitor />
              },
              {
                title: 'Mobile Application Development',
                desc: 'Offline-capable floor logging systems enabling supervisors and field teams to report status live.',
                icon: <Smartphone />
              },
              {
                title: 'Product Development',
                desc: 'Transforming industrial requirements into scalable custom SaaS products with modular structures.',
                icon: <Layers />
              }
            ].map((service) => (

              <motion.div
                key={service.title}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className="glass-card"
                whileHover={{ y: -6 }}
              >
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title" style={{ fontSize: '18px', fontWeight: '700' }}>{service.title}</h3>
                <p className="card-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: FLAGSHIP PLATFORMS SHOWCASE (HOME PAGE)  — PREMIUM
          ================================================== */}
      <section
        style={{
          backgroundColor: '#0A0F1C',
          color: '#E5E7EB',
          overflow: 'hidden',
          position: 'relative',
          padding: '120px 0 140px 0'
        }}
      >
        {/* Ambient background decoration */}
        <div style={{
          position: 'absolute', top: '-120px', left: '-120px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0
        }} />
        {/* Subtle grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* ── SECTION HEADER ──────────────────────────────────── */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-80px' }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '40px',
              padding: '7px 18px',
              marginBottom: '24px'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                CEA Proprietary Platforms
              </span>
              <div style={{
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '20px',
                padding: '2px 9px',
                fontSize: '10px',
                fontWeight: '800',
                color: '#F59E0B'
              }}>5 PRODUCTS</div>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: '900',
              color: '#FFFFFF',
              fontFamily: 'var(--font-headings)',
              margin: '0 0 20px 0',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}>
              CEA's Flagship Platforms
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'rgba(229,231,235,0.75)',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Enterprise software platforms engineered to improve manufacturing visibility, compliance governance,
              risk management, logistics optimization, and operational intelligence.
            </p>

            {/* Separator line */}
            <div style={{
              width: '60px', height: '3px', margin: '28px auto 0 auto',
              background: 'linear-gradient(90deg, transparent, #F59E0B, transparent)',
              borderRadius: '2px'
            }} />
          </motion.div>

          {/* ── HERO CARD (Product #1 — full width) ──────────────── */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            style={{ marginBottom: '28px' }}
          >
            <FlagshipCard
              platform={flagshipPlatforms[0]}
              onNavigate={navigate}
              variant="hero"
            />
          </motion.div>

          {/* ── GRID ROW 2 (Products #2 + #3) ───────────────────── */}
          <motion.div
            variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.12 } } }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '28px' }}
          >
            {flagshipPlatforms.slice(1, 3).map((platform) => (
              <motion.div key={platform.id} variants={scrollReveal}>
                <FlagshipCard platform={platform} onNavigate={navigate} variant="standard" />
              </motion.div>
            ))}
          </motion.div>

          {/* ── GRID ROW 3 (Products #4 + #5) ───────────────────── */}
          <motion.div
            variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.12 } } }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}
          >
            {flagshipPlatforms.slice(3, 5).map((platform) => (
              <motion.div key={platform.id} variants={scrollReveal}>
                <FlagshipCard platform={platform} onNavigate={navigate} variant="standard" />
              </motion.div>
            ))}
          </motion.div>

          {/* ── VIEW ALL PRODUCTS CTA ─────────────────────────────── */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
          >
            <p style={{ fontSize: '14px', color: 'rgba(229,231,235,0.5)', fontWeight: '500' }}>
              Ready to explore a specific platform?
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.button
                onClick={() => navigate('/products')}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(245,158,11,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-cta"
                style={{ color: '#0A0F1C', fontWeight: '800' }}
              >
                View All Products
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.07)' }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-dark-outline"
              >
                Request a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTIONS SUCCESSFULLY DELIVERED --- */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)', overflow: 'hidden', position: 'relative' }}>
        {/* Real business imagery in background accents */}
        <div 
          style={{
            position: 'absolute',
            right: '-10%',
            top: '5%',
            width: '450px',
            height: '450px',
            backgroundImage: 'url("/images/manufacturing_floor_1780850784796.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.025,
            pointerEvents: 'none',
            borderRadius: '50%',
            filter: 'grayscale(100%) blur(2px)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            left: '-10%',
            bottom: '5%',
            width: '450px',
            height: '450px',
            backgroundImage: 'url("/images/quality_audit_1780850801169.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.025,
            pointerEvents: 'none',
            borderRadius: '50%',
            filter: 'grayscale(100%) blur(2px)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Our Delivery Record</span>
            <h2 className="section-title">Solutions Successfully Delivered</h2>
            <p className="section-desc">
              Real-world business applications developed across manufacturing, compliance, finance, NGO, logistics and enterprise domains.
            </p>
          </div>

          {/* Section statistics */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '20px', 
            marginBottom: '56px'
          }}>
            {[
              { value: <><CountUp end={12} duration={1} />+</>, label: "Solutions Delivered", sub: "Production-ready systems" },
              { value: <><CountUp end={11} duration={1} />+</>, label: "Industry Domains", sub: "Diverse business verticals" },
              { value: "Global", label: "Project Experience", sub: "Multi-country footprint" },
              { value: "Enterprise", label: "Applications", sub: "Uptime & scale optimized" }
            ].map((stat, idx) => (
              <div key={idx} style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--border-radius-md)', 
                padding: '24px', 
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: idx % 2 === 0 ? 'var(--secondary)' : 'var(--accent)' }}></div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-headings)' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)', marginTop: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Staggered card animations and hover effects */}
          <motion.div 
            variants={{
              initial: {},
              whileInView: {
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-80px" }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            {solutions.map((solution, index) => {
              const IconComp = solution.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 24 },
                    whileInView: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: 'rgba(37, 99, 235, 0.35)', 
                    boxShadow: 'var(--shadow-lg)',
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    width: '32px', 
                    height: '32px', 
                    background: 'linear-gradient(135deg, transparent 50%, rgba(20, 184, 166, 0.08) 50%)',
                    borderRadius: '0 0 0 12px'
                  }} />

                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: 'var(--border-radius-md)', 
                    backgroundColor: 'rgba(34, 211, 238, 0.08)', 
                    color: 'var(--supporting)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComp size={22} strokeWidth={1.75} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary)', margin: 0, fontFamily: 'var(--font-headings)' }}>
                      {solution.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.button 
              onClick={() => navigate('/services')} 
              className="btn btn-primary"
              whileHover={{ scale: 1.03, boxShadow: 'var(--shadow-md)' }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: '12px 30px' }}
            >
              View Our Expertise
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* --- PRODUCTION TRACKING TOOL VIDEO PLACEHOLDER --- */}
      <section className="section" style={{ background: '#020617', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 80%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Production Tracking Tool</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Watch VERICEA in Action</h2>
            <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>Watch how VERICEA improves manufacturing efficiency, production visibility and operational performance.</p>
          </div>

          <motion.div 
            variants={scrollReveal} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={scrollReveal.viewport} 
            className="video-wrapper"
            style={{ border: '1px solid rgba(255, 255, 255, 0.08)', contentVisibility: 'auto' }}
          >
            {/* Real Industrial Control Room Photograph background with dark overlay */}
            <div 
              className="video-placeholder-bg"
              style={{
                backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.85)), url("/images/industrial_control_room_1780849774868.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="video-overlay-details">
                {/* Play button */}
                <motion.button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="video-play-btn" 
                  aria-label="Play product video"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ backgroundColor: 'var(--cta)', color: '#0F172A' }}
                >
                  <Play fill="currentColor" size={28} />
                </motion.button>
                <h3 className="video-info-title">Launch VERICEA Demo Walkthrough</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginTop: '6px' }}>
                  <span className="video-info-subtitle" style={{ color: 'var(--accent)' }}>Operations Overview • 2:40 mins</span>
                  <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--cta)', borderRadius: '4px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>COMING SOON</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- WHY CHOOSE CEA INFOTECH --- */}
      <section className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Our Value Proposition</span>
            <h2 className="section-title">Why Enterprise Leaders Partner With Us</h2>
            <p className="section-desc">Over a decade of deploying high-uptime business software optimized for bottom-line results.</p>
          </div>

          <div className="grid-4">
            {[
              {
                title: 'Global Experience',
                desc: 'Successful deployments in 12 countries, handling cross-border compliance, localized setups, and logistics checks.',
                icon: <Globe />
              },
              {
                title: 'Industry Expertise',
                desc: 'Specialized systems knowledge across 11+ business domains including textiles, finance, and logistics.',
                icon: <Award />
              },
              {
                title: 'Product Innovation',
                desc: 'A robust product line including VERICEA MES, Compliance trackers, and FactSafe assessments.',
                icon: <Rocket />
              },
              {
                title: 'Long-Term Support',
                desc: 'Dedicated support SLAs, training operations, and onsite assistance ensuring consistent uptime.',
                icon: <Headset />
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className="glass-card"
                style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-color)' }}
                whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.25)', boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="card-icon" style={{ backgroundColor: 'var(--alternate-bg)', color: idx === 0 ? 'var(--secondary)' : idx === 1 ? 'var(--cta)' : idx === 2 ? 'var(--accent)' : '#10b981' }}>{item.icon}</div>

                <h3 className="card-title" style={{ fontSize: '18px', fontWeight: '700' }}>{item.title}</h3>
                <p className="card-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUSTED PARTNERS SECTION --- */}
      <section className="section" style={{ 
        padding: '100px 0', 
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Heading */}
          <motion.div 
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="section-title-wrapper" 
            style={{ marginBottom: '56px' }}
          >
            <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Trusted Partners</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800' }}>
              Trusted Partners
            </h2>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              Organizations across manufacturing, engineering, consulting, NGO and enterprise sectors trust CEA Infotech for technology solutions, compliance systems and digital transformation initiatives.
            </p>
          </motion.div>

          {/* Infinite Marquee Logo Carousel */}
          <motion.div 
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="logo-carousel-container"
          >
            <div className="logo-marquee-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Replace placeholders with official customer and partner logos provided by CEA Infotech. */}
              
              {/* Row 1: Left to Right */}
              <div className="marquee-row marquee-row-ltr">
                {[...partnersRow1, ...partnersRow1].map((partner, index) => {
                  const IconComp = partner.icon;
                  return (
                    <motion.div
                      key={`row1-${index}`}
                      whileHover={{ 
                        scale: 1.04, 
                        filter: 'grayscale(0%)', 
                        opacity: 1,
                        borderColor: 'var(--supporting)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'var(--secondary-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '12px 22px',
                        boxShadow: 'var(--shadow-sm)',
                        cursor: 'pointer',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '6px', 
                        backgroundColor: `${partner.color}15`, 
                        color: partner.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComp size={16} strokeWidth={2} />
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-main)', fontFamily: 'var(--font-headings)' }}>
                        {partner.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Row 2: Right to Left */}
              <div className="marquee-row marquee-row-rtl">
                {[...partnersRow2, ...partnersRow2].map((partner, index) => {
                  const IconComp = partner.icon;
                  return (
                    <motion.div
                      key={`row2-${index}`}
                      whileHover={{ 
                        scale: 1.04, 
                        filter: 'grayscale(0%)', 
                        opacity: 1,
                        borderColor: 'var(--supporting)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'var(--secondary-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '12px 22px',
                        boxShadow: 'var(--shadow-sm)',
                        cursor: 'pointer',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '6px', 
                        backgroundColor: `${partner.color}15`, 
                        color: partner.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComp size={16} strokeWidth={2} />
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-main)', fontFamily: 'var(--font-headings)' }}>
                        {partner.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            style={{ 
              textAlign: 'center', 
              marginTop: '48px', 
              fontSize: '15px', 
              color: 'var(--text-muted)', 
              fontWeight: '500',
              fontStyle: 'italic'
            }}
          >
            Building long-term relationships through innovation, reliability and business excellence.
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div 
            variants={scrollReveal} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={scrollReveal.viewport}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '40px', marginBottom: '20px', letterSpacing: '-1px', color: '#ffffff' }}>Ready To Transform Your Operations?</h2>
            <p style={{ fontSize: '18px', color: 'rgba(241, 245, 249, 0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
              Improve productivity, compliance and operational visibility with CEA Infotech solutions. Connect with solutions architect M.D. Manohar and our team.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button 
                onClick={() => navigate('/contact')} 
                className="btn btn-cta"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
              >
                Schedule Consultation
                <PhoneCall size={16} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/services')} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VIDEO PLAYBACK OVERLAY MODAL --- */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(2, 6, 23, 0.96)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              zIndex: 2000, 
              padding: '24px' 
            }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ position: 'relative', width: '100%', maxWidth: '840px', aspectRatio: '16/9', backgroundColor: '#020617', borderRadius: '16px', border: '1px solid rgba(20, 184, 166, 0.3)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)} 
                style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(2, 6, 23, 0.8)', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px', borderRadius: '50%', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '40px', textAlign: 'center' }}>
                <div style={{ position: 'relative', width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'rgba(20, 184, 166, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <Cpu size={36} style={{ color: 'var(--accent)' }} />
                  <span className="map-pulse" style={{ position: 'absolute', width: '72px', height: '72px', borderRadius: '50%', border: '2px solid var(--accent)', opacity: 0.4 }}></span>
                </div>
                <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '24px', fontFamily: 'var(--font-headings)' }}>VERICEA Production Tracking Walkthrough</h3>
                <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '480px', marginBottom: '32px', lineHeight: '1.5' }}>
                  This overlay represents the interactive media player for the VERICEA Manufacturing software. In a production environment, this embeds the explainer video walk-through.
                </p>
                <button onClick={() => setIsVideoModalOpen(false)} className="btn btn-cta btn-sm">
                  Close Walkthrough Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
