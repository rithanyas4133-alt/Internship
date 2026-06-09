import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  Play, 
  Sparkles, 
  X,
  CheckCircle,
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
  AlertTriangle,
  Truck,
  Network,
  Cog,
  Shirt,
  ShoppingBag,
  Landmark,
  HeartHandshake,
  Rocket,
  Headset,
  Cpu,
  Recycle,
  HeartPulse,
  Droplets,
  BarChart3,
  CalendarDays,
  Wallet,
  Clock,
  Heart,
  Target,
  CircleDot,
  TrendingUp
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
  { name: "Atlas Export Enterprises", icon: Globe, color: "#0E7490" },
  { name: "Atlas Processing Mills", icon: Factory, color: "#F59E0B" },
  { name: "Shripranav Textile Creations Pvt Ltd", icon: Layers, color: "#F59E0B" },
  { name: "CBC Fashions (Asia) Pvt Ltd", icon: Shirt, color: "#EC4899" },
  { name: "Ashwath Inc", icon: Building, color: "#6366F1" },
  { name: "Kandhan Knits", icon: Layers, color: "#8B5CF6" },
  { name: "Masturlal Pvt Ltd", icon: ShieldCheck, color: "#10B981" },
  { name: "Research Manufacturing & Development Corporation", icon: Cpu, color: "#3B82F6" },
  { name: "Omega Scientific", icon: Award, color: "#F59E0B" },
  { name: "Mii Ret Cam", icon: Smartphone, color: "#0E7490" },
  { name: "Dynamic Engineering", icon: Cog, color: "#6B7280" },
  { name: "Zonestra USA", icon: Globe, color: "#0E7490" }
];

const partnersRow2 = [
  { name: "Solidaridad India", icon: HeartHandshake, color: "#10B981" },
  { name: "Skilift Consulting Company", icon: TrendingUp, color: "#3B82F6" },
  { name: "SkilFil Consultants", icon: Briefcase, color: "#6366F1" },
  { name: "Catalyst Group", icon: Rocket, color: "#EC4899" },
  { name: "Catalyst Management Services", icon: Award, color: "#F59E0B" },
  { name: "Vrutti", icon: Users, color: "#8B5CF6" },
  { name: "Swasti", icon: Heart, color: "#EF4444" },
  { name: "Fuzhio", icon: Sparkles, color: "#F59E0B" },
  { name: "GenYGolf Australia", icon: Target, color: "#10B981" },
  { name: "UNODC Nigeria", icon: ShieldCheck, color: "#3B82F6" },
  { name: "UNICEF India", icon: HeartHandshake, color: "#0E7490" },
  { name: "Al Ansari Group UAE", icon: Building, color: "#6366F1" },
  { name: "A", icon: CircleDot, color: "#F59E0B" }
];

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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
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
                Transforming Manufacturing Through Smart Digital Solutions
              </h1>
              <p style={{ fontSize: '17px', color: 'rgba(241, 245, 249, 0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
                ERP • Production Tracking • Compliance Management • Web & Mobile Application Development. Link legacy floor operations with high-performance digital architectures.
              </p>
              
              <div className="btn-group">
                <motion.button 
                  onClick={() => navigate('/products')} 
                  className="btn btn-cta"
                  whileHover={buttonHover.whileHover}
                  whileTap={buttonHover.whileTap}
                  style={{ color: '#0B1F3A' }}
                >
                  Explore Products
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact')} 
                  className="btn btn-dark-outline"
                  whileHover={secondaryButtonHover.whileHover}
                  whileTap={secondaryButtonHover.whileTap}
                  style={{ border: '2px solid rgba(255, 255, 255, 0.35)' }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>

            {/* Right side is intentionally left empty so the smart factory background is clearly visible */}
            <div style={{ display: 'none' }} className="mobile-hidden-spacer"></div>
          </div>
        </div>
      </section>

      {/* --- COMPANY SNAPSHOT --- */}
      <section className="section section-alt" style={{ padding: '60px 0', backgroundColor: '#F1F5F9' }}>
        <div className="container">
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px', background: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
            >
              <div className="stat-icon-wrapper">
                <Calendar size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: 'var(--secondary)' }}><CountUp end={2015} duration={1} /></div>
              <div className="stat-label" style={{ color: 'var(--primary)' }}>Established</div>
              <div className="stat-desc">Bangalore Headquarters</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px', background: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
            >
              <div className="stat-icon-wrapper">
                <Award size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: 'var(--secondary)' }}><CountUp end={35} suffix="+" duration={1.2} /></div>
              <div className="stat-label" style={{ color: 'var(--primary)' }}>Years Experience</div>
              <div className="stat-desc">Founder IT Experience</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px', background: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
            >
              <div className="stat-icon-wrapper">
                <Building size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: 'var(--secondary)' }}><CountUp end={11} suffix="+" duration={1} /></div>
              <div className="stat-label" style={{ color: 'var(--primary)' }}>Industry Domains</div>
              <div className="stat-desc">Sectors Custom Configured</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px', background: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
            >
              <div className="stat-icon-wrapper">
                <Globe size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: 'var(--secondary)' }}><CountUp end={12} suffix="+" duration={1} /></div>
              <div className="stat-label" style={{ color: 'var(--primary)' }}>Global Reach</div>
              <div className="stat-desc">Deployed Solution Networks</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px', background: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
            >
              <div className="stat-icon-wrapper">
                <Users size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: 'var(--secondary)' }}><CountUp end={185} suffix="+" duration={1.2} /></div>
              <div className="stat-label" style={{ color: 'var(--primary)' }}>Team Leadership</div>
              <div className="stat-desc">Managed Professionals</div>
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
                style={{ background: '#ffffff', borderColor: 'rgba(15, 23, 42, 0.06)' }}
                whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.25)', boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="card-icon" style={{ backgroundColor: 'var(--alternate-bg)', color: 'var(--secondary)' }}>{service.icon}</div>
                <h3 className="card-title" style={{ fontSize: '18px', fontWeight: '700' }}>{service.title}</h3>
                <p className="card-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CEA'S FLAGSHIP PRODUCTS --- */}
      <section className="section" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div className="container">
          {/* Section Header */}
          <motion.div 
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="section-title-wrapper"
            style={{ marginBottom: '80px' }}
          >
            <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Our Proprietary Software</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800' }}>
              CEA's Flagship Products
            </h2>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              Innovative software solutions developed by CEA Infotech to improve manufacturing efficiency, strengthen compliance management and support operational excellence.
            </p>
          </motion.div>

          {/* Flagship Products Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '100px' }}>
            
            {/* PRODUCT 1: VERICEA Manufacturing */}
            <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
              {/* Left Column: Text & Features */}
              <motion.div
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    Track. Measure. Improve.
                  </span>
                  <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-headings)' }}>
                    VERICEA Manufacturing
                  </h3>
                </div>

                {/* Special Badge */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    background: 'rgba(20, 184, 166, 0.08)', 
                    border: '1px solid rgba(20, 184, 166, 0.2)', 
                    color: 'var(--accent)', 
                    borderRadius: '20px', 
                    padding: '6px 14px', 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    width: 'fit-content'
                  }}
                >
                  <ShieldCheck size={13} />
                  <span>Trademark & Copyright Protected</span>
                </motion.div>

                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Improve production efficiency through real-time tracking, operational visibility and manufacturing analytics.
                </p>

                {/* Feature Highlights Grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '12px 24px', 
                  marginTop: '10px',
                  background: 'rgba(241, 245, 249, 0.5)',
                  padding: '20px',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid rgba(15, 23, 42, 0.04)'
                }}>
                  {[
                    "Production Tracking",
                    "Efficiency Monitoring",
                    "Manufacturing Analytics",
                    "Real-Time Visibility",
                    "Supports 11+ Manufacturing Domains"
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: '600', color: 'var(--text-main)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Visual Preview */}
              <motion.div
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                style={{ position: 'relative' }}
              >
                {/* Simulated Browser Frame with Glassmorphism */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--border-radius-lg)',
                  border: '1px solid rgba(15, 23, 42, 0.1)',
                  boxShadow: 'var(--shadow-xl)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {/* Safari dots */}
                  <div style={{
                    height: '36px',
                    background: '#f1f5f9',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    gap: '6px'
                  }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
                    <span style={{ fontSize: '11px', color: '#94a3b8', marginLeft: '12px', fontWeight: '500' }}>vericea-mes-dashboard.cea</span>
                  </div>

                  {/* Browser contents: stacked factory photo + dashboard */}
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                    {/* Factory background photo */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.5)), url("/images/manufacturing_floor_1780850784796.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}></div>

                    {/* Dashboard mock overlay that zooms on hover */}
                    <div style={{
                      position: 'absolute',
                      top: '10%',
                      left: '8%',
                      right: '8%',
                      bottom: '10%',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}>
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="/images/vericea_dashboard_mockup.png" 
                        alt="VERICEA Manufacturing Dashboard" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* PRODUCT 2: VERICEA Compliance */}
            <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
              {/* Left Column: Text & Features */}
              <motion.div
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    Create. Maintain. Monitor.
                  </span>
                  <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-headings)' }}>
                    VERICEA Compliance
                  </h3>
                </div>

                {/* Special Badge */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    background: 'rgba(20, 184, 166, 0.08)', 
                    border: '1px solid rgba(20, 184, 166, 0.2)', 
                    color: 'var(--accent)', 
                    borderRadius: '20px', 
                    padding: '6px 14px', 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    width: 'fit-content'
                  }}
                >
                  <ShieldCheck size={13} />
                  <span>Trademark & Copyright Protected</span>
                </motion.div>

                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  Manage compliance activities, audits and evidence tracking through a centralized platform.
                </p>

                {/* Feature Highlights Grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '12px 24px', 
                  marginTop: '10px',
                  background: 'rgba(241, 245, 249, 0.5)',
                  padding: '20px',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid rgba(15, 23, 42, 0.04)'
                }}>
                  {[
                    "Compliance Monitoring",
                    "Audit Management",
                    "Evidence Tracking",
                    "Corrective Actions",
                    "Daily, Weekly & Monthly Tracking"
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: '600', color: 'var(--text-main)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Visual Preview */}
              <motion.div
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
                style={{ position: 'relative' }}
              >
                {/* Simulated Browser Frame */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--border-radius-lg)',
                  border: '1px solid rgba(15, 23, 42, 0.1)',
                  boxShadow: 'var(--shadow-xl)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {/* Safari dots */}
                  <div style={{
                    height: '36px',
                    background: '#f1f5f9',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    gap: '6px'
                  }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
                    <span style={{ fontSize: '11px', color: '#94a3b8', marginLeft: '12px', fontWeight: '500' }}>vericea-compliance.cea</span>
                  </div>

                  {/* Browser contents */}
                  <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                    {/* Compliance background photo */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.5)), url("/images/quality_audit_1780850801169.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}></div>

                    {/* Dashboard mock overlay that zooms on hover */}
                    <div style={{
                      position: 'absolute',
                      top: '10%',
                      left: '8%',
                      right: '8%',
                      bottom: '10%',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}>
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src="/images/product_tab_compliance_1780851018319.png" 
                        alt="VERICEA Compliance Dashboard" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* ADDITIONAL SOLUTIONS SECTION */}
          <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>
                Enterprise Applications
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary)' }}>
                Additional Digital Solutions
              </h3>
            </div>

            {/* Grid of smaller cards */}
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                {
                  title: "FactSafe",
                  tagline: "Identify. Assess. Mitigate.",
                  desc: "Risk Assessment & Monitoring Platform",
                  icon: <AlertTriangle size={22} />,
                  color: "#ef4444"
                },
                {
                  title: "Courier Cost Management",
                  tagline: "Optimize. Control. Reduce.",
                  desc: "Logistics Cost Optimization Solution",
                  icon: <Truck size={22} />,
                  color: "#3b82f6"
                },
                {
                  title: "Family Tree Platform",
                  tagline: "Connect. Preserve. Scale.",
                  desc: "Scalable Multilingual Relationship Management Platform",
                  icon: <Network size={22} />,
                  color: "#F59E0B"
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: 'rgba(14, 116, 144, 0.25)', 
                    boxShadow: 'var(--shadow-xl)',
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    height: '100%'
                  }}
                >
                  {/* Icon Wrapper */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: `${solution.color}10`,
                    color: solution.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {solution.icon}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexGrow: 1 }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: solution.color, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {solution.tagline}
                    </span>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', margin: 0, fontFamily: 'var(--font-headings)' }}>
                      {solution.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5', margin: '4px 0 0 0' }}>
                      {solution.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- SOLUTIONS SUCCESSFULLY DELIVERED --- */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', overflow: 'hidden', position: 'relative' }}>
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
                background: '#ffffff', 
                border: '1px solid rgba(15, 23, 42, 0.06)', 
                borderRadius: 'var(--border-radius-md)', 
                padding: '24px', 
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden'
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
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 23, 42, 0.07)',
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s, box-shadow 0.2s'
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
                    backgroundColor: 'rgba(37, 99, 235, 0.05)', 
                    color: 'var(--secondary)', 
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
                  style={{ backgroundColor: 'var(--cta)', color: '#0B1F3A' }}
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
                style={{ backgroundColor: 'var(--background)', borderColor: 'rgba(15,23,42,0.06)' }}
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
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(15, 23, 42, 0.05)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
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
                        borderColor: 'var(--secondary)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#ffffff',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
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
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--primary)', fontFamily: 'var(--font-headings)' }}>
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
                        borderColor: 'var(--secondary)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#ffffff',
                        border: '1px solid rgba(15, 23, 42, 0.08)',
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
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--primary)', fontFamily: 'var(--font-headings)' }}>
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
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0E7490 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

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
                style={{ color: '#0B1F3A' }}
              >
                Schedule Consultation
                <PhoneCall size={16} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/services')} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03, borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                style={{ border: '2px solid rgba(255,255,255,0.25)' }}
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
                <button onClick={() => setIsVideoModalOpen(false)} className="btn btn-cta btn-sm" style={{ color: '#0B1F3A' }}>
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
