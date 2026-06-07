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
  MapPin,
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
  Cpu
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

export default function Home() {
  const navigate = useNavigate();
  const [activeProductTab, setActiveProductTab] = useState<'manufacturing' | 'compliance' | 'factsafe' | 'courier' | 'familytree'>('manufacturing');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background slideshow slider state
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Simulated live dashboard data updates for premium visual experience
  const [oeeVal, setOeeVal] = useState(86.4);
  const [activeJobs, setActiveJobs] = useState(12);
  const [reconciledCount, setReconciledCount] = useState(2486);
  const [auditScore, setAuditScore] = useState(98.6);

  useEffect(() => {
    // Slideshow transition timer every 5 seconds
    const bgTimer = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    const interval = setInterval(() => {
      setOeeVal(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setAuditScore(prev => +(Math.max(97.5, Math.min(100, prev + (Math.random() * 0.1 - 0.05)))).toFixed(1));
      if (Math.random() > 0.8) {
        setActiveJobs(prev => Math.max(8, Math.min(16, prev + (Math.random() > 0.5 ? 1 : -1))));
        setReconciledCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 3000);

    return () => {
      clearInterval(bgTimer);
      clearInterval(interval);
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
                  style={{ color: '#0F172A' }}
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


      {/* --- ABOUT CEA INFOTECH --- */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
            >
              <span className="section-subtitle">Corporate Focus</span>
              <h2 className="section-title">Bangalore HQ Technology Solutions & Integration Specialist</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                CEA Infotech is a Bangalore-based technology company specializing in ERP solutions, production tracking systems, compliance management and custom software development. Under the architectural stewardship of Managing Director M.D. Manohar (35+ years global IT experience), we build highly dependable applications that optimize production floors and resolve logistics constraints.
              </p>
              
              <div style={{ padding: '16px', background: 'var(--background)', borderRadius: '12px', border: '1px solid rgba(15, 23, 42, 0.08)', display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', flexShrink: 0 }}>
                  MD
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', marginBottom: '1px' }}>M.D. Manohar</h4>
                  <p style={{ fontSize: '11px', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Founder & Managing Director • 35+ Yrs IT Exp</p>
                </div>
              </div>
            </motion.div>

            {/* Modern Visual Cards with Real Photographic Backgrounds */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { 
                  title: 'Customer Success', 
                  desc: 'Focusing on business outcomes, yield optimization, and measurable operations uptime.', 
                  image: '/images/business_consultation_1780850767888.png',
                  icon: <Award /> 
                },
                { 
                  title: 'Technology Innovation', 
                  desc: 'Bridging legacy shop floors with responsive Web, Mobile, and API integrations.', 
                  image: '/images/manufacturing_floor_1780850784796.png',
                  icon: <Cpu /> 
                },
                { 
                  title: 'Long-Term Partnerships', 
                  desc: 'Enterprise SLAs and solutions engineered for future scalability and expansion.', 
                  image: '/images/quality_audit_1780850801169.png',
                  icon: <HeartHandshake /> 
                }
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={scrollReveal.viewport}
                  whileHover={{ scale: 1.02 }}
                  style={{ 
                    position: 'relative',
                    borderRadius: '12px', 
                    padding: '24px', 
                    display: 'flex', 
                    gap: '16px', 
                    alignItems: 'flex-start', 
                    cursor: 'pointer',
                    minHeight: '120px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid rgba(15, 23, 42, 0.1)'
                  }}
                >
                  {/* Photo background with dark overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url(${card.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 1
                    }}
                  />
                  <div style={{ color: 'var(--accent)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '8px', flexShrink: 0, zIndex: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
                    {card.icon}
                  </div>
                  <div style={{ zIndex: 2 }}>
                    <h4 style={{ fontSize: '16px', color: '#ffffff', fontWeight: '600', marginBottom: '4px' }}>{card.title}</h4>
                    <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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

      {/* --- FEATURED PRODUCTS --- */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '44px' }}>
            <span className="section-subtitle">Our Software Suite</span>
            <h2 className="section-title">Product Ecosystem & Live Previews</h2>
            <p className="section-desc">Deploy ready-to-scale software platforms designed to optimize execution, mitigate safety risks, and audit logistics.</p>
          </div>

          {/* Interactive tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[
              { id: 'manufacturing', label: 'VERICEA Manufacturing', icon: <Factory size={16} /> },
              { id: 'compliance', label: 'VERICEA Compliance', icon: <ShieldCheck size={16} /> },
              { id: 'factsafe', label: 'FactSafe', icon: <AlertTriangle size={16} /> },
              { id: 'courier', label: 'Courier Cost Mgr', icon: <Truck size={16} /> },
              { id: 'familytree', label: 'Family Tree Platform', icon: <Network size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveProductTab(tab.id as any)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '30px',
                  border: 'none',
                  backgroundColor: activeProductTab === tab.id ? 'var(--primary)' : 'var(--alternate-bg)',
                  color: activeProductTab === tab.id ? '#ffffff' : 'var(--text-muted)',
                  fontFamily: 'var(--font-headings)',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content display grid */}
          <div className="grid-2" style={{ background: 'var(--background)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(15,23,42,0.06)' }}>
            <AnimatePresence mode="wait">
              {activeProductTab === 'manufacturing' && (
                <motion.div
                  key="mfg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Track. Measure. Improve.</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Factory size={32} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '26px', color: 'var(--primary)', margin: 0 }}>VERICEA Manufacturing (MES)</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                    A comprehensive manufacturing execution and WIP tracking system designed to streamline shop floor operations, minimize bottlenecks, and provide absolute operational transparency.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Production Tracking (real-time loom and stage logging)</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Efficiency Monitoring (OEE parameters mapping)</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Plant floor productivity analytics and yield reporting</li>
                  </ul>
                  <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                    Learn More Details
                  </button>
                </motion.div>
              )}

              {activeProductTab === 'compliance' && (
                <motion.div
                  key="comp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Create. Maintain. Monitor.</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ShieldCheck size={32} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '26px', color: 'var(--primary)', margin: 0 }}>VERICEA Compliance Hub</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                    Automated audit trail and compliance management platform ensuring seamless adherence to industrial safety and product quality parameters.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Audit Tracking & logs validation</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Compliance Monitoring scoreboards</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Evidence Management locker with security vaults</li>
                  </ul>
                  <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                    Learn More Details
                  </button>
                </motion.div>
              )}

              {activeProductTab === 'factsafe' && (
                <motion.div
                  key="safe"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Industrial Risk Assessment</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <AlertTriangle size={32} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '26px', color: 'var(--primary)', margin: 0 }}>FactSafe Risk Management</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                    Enterprise risk management system cataloging safety checks, mapping mitigation pathways, and organizing routine safety audits across factories and construction zones.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Floor safety audit log templates</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Hazard mapping & alert routing controls</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Dynamic compliance status grids</li>
                  </ul>
                  <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                    Learn More Details
                  </button>
                </motion.div>
              )}

              {activeProductTab === 'courier' && (
                <motion.div
                  key="cour"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Logistics Cost Optimization</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Truck size={32} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '26px', color: 'var(--primary)', margin: 0 }}>Courier Cost Management</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                    Prevent transport discrepancies and overbilling. Automatically checks courier rate cards, maps weight deviations, and reconciles supplier invoices.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Multi-carrier rate card audits</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Automated discrepancy calculations</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Detailed logistics saving metrics panels</li>
                  </ul>
                  <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                    Learn More Details
                  </button>
                </motion.div>
              )}

              {activeProductTab === 'familytree' && (
                <motion.div
                  key="fam"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Preserve Heritage & Legacies</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Network size={32} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '26px', color: 'var(--primary)', margin: 0 }}>Family Tree Platform</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>
                    A highly scalable multilingual solution mapping generational hierarchies, organizing family media vaults, and offering secure invitation-only access permissions.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--text-main)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Interactive node-graph generation visualizers</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Multi-language asset structures</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} style={{ color: 'var(--accent)' }} /> Media file lockers and generation maps</li>
                  </ul>
                  <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                    Learn More Details
                  </button>
                </motion.div>
              )}
            </AnimatePresence>


            {/* Dashboard Console Overlaying Real Domain Photography */}
            <div 
              style={{ 
                position: 'relative',
                borderRadius: '16px', 
                padding: '16px', 
                color: '#fff', 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '340px', 
                justifyContent: 'stretch', 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                contentVisibility: 'auto'
              }}
            >
              {/* Background photograph with dark overlay shifting based on active tab selection */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.45)), url(${
                    activeProductTab === 'manufacturing' ? '/images/manufacturing_floor_1780850784796.png' :
                    activeProductTab === 'compliance' ? '/images/quality_audit_1780850801169.png' :
                    activeProductTab === 'factsafe' ? '/images/safety_inspection_1780850817856.png' :
                    activeProductTab === 'courier' ? '/images/logistics_terminal_1780850837146.png' :
                    '/images/family_archives_1780850863160.png'
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'background-image 0.5s ease',
                  zIndex: 1
                }}
              />
              
              <div 
                style={{ 
                  position: 'relative', 
                  zIndex: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%', 
                  justifyContent: 'space-between', 
                  flexGrow: 1, 
                  gap: '12px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)' }}>System Health Status</span>
                  <span style={{ fontSize: '10px', color: '#10b981' }}>● ONLINE</span>
                </div>

                {activeProductTab === 'manufacturing' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Plant OEE Rating</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#10b981' }}>{oeeVal}%</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Active WIP Orders</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>{activeJobs} Run Bins</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Floor Efficiency Level</span>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(oeeVal - 60) * 2.5}%`, height: '100%', backgroundColor: 'var(--secondary)', transition: 'width 0.5s ease' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProductTab === 'compliance' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Audit Score Rating</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent)' }}>{auditScore}%</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Locker Files Verified</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>4,920 Docs</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Risk Factor Index</span>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '12%', height: '100%', backgroundColor: '#10b981' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProductTab === 'factsafe' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Vulnerability Score</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#10b981' }}>Low (12/100)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Active Plant Drills</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>100% Completed</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Hazards Resolved</span>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '98%', height: '100%', backgroundColor: '#10b981' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProductTab === 'courier' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Total Audit Savings</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#10b981' }}>$12,482</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Reconciled Invoices</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>{reconciledCount} Units</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Overcharge Discrepancy Rate</span>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '4.8%', height: '100%', backgroundColor: 'var(--cta)' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeProductTab === 'familytree' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Generations Mapped</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent)' }}>8 Generations</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Registered Profiles</span>
                      <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>148 Members</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Render Performance</span>
                      <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '92%', height: '100%', backgroundColor: '#10b981' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b' }}>
                  <span>DB Latency: 4ms</span>
                  <span>Version 2.4.1</span>
                </div>
              </div>
            </div>
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

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Sectors We Transform</span>
            <h2 className="section-title">Designed for Complex Industrial Environments</h2>
            <p className="section-desc">Our software suites adapt to the distinct database, scale, and compliance requirements of diverse sectors.</p>
          </div>

          <div className="industry-grid">
            {[
              { title: 'Manufacturing', desc: 'Real-time plant OEE monitors, WIP audits, and material flow logs.', icon: <Factory /> },
              { title: 'Engineering', desc: 'Custom project lifecycle tracking, dependency logging, and structural blueprint updates.', icon: <Cog /> },
              { title: 'Textiles & Apparel', desc: 'Batch dye house tracking, raw material configuration, and operator efficiency logs.', icon: <Shirt /> },
              { title: 'Retail', desc: 'Stock synchronization, supplier analytics, and courier reconciliation metrics.', icon: <ShoppingBag /> },
              { title: 'Finance', desc: 'Reconciliation ledgers, audit trail history logs, and localized security configs.', icon: <Landmark /> },
              { title: 'NGO', desc: 'Grant reporting accounts, localized project logs, and compliance score monitoring.', icon: <HeartHandshake /> },
              { title: 'Logistics', desc: 'Courier rate auditing, invoice checkers, and shipping savings audits.', icon: <Truck /> },
              { title: 'Construction', desc: 'Material procurement logs, site safety checks, and heavy machine usage diaries.', icon: <Building /> }
            ].map((industry) => (

              <motion.div
                key={industry.title}
                className="industry-card"
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                style={{ backgroundColor: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
              >
                <div className="industry-icon-wrapper" style={{ backgroundColor: 'var(--alternate-bg)', color: 'var(--secondary)' }}>
                  {industry.icon}
                </div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-desc">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE CEA INFOTECH --- */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
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

      {/* --- CUSTOMER LOGO SECTION --- */}
      <section className="section section-alt" style={{ padding: '60px 0', backgroundColor: '#F1F5F9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Trusted By Industry Leaders</span>
          </div>
          <div className="logo-carousel-container">
            <div className="logo-marquee-wrapper">
              <div className="logo-marquee-content">
                {/* Loop names for continuous marquee ticker effect */}
                {[...Array(2)].flatMap((_, outerIdx) => 
                  [
                    { name: 'Apex Engineering', icon: <Cog size={16} /> },
                    { name: 'Zen Textiles', icon: <Shirt size={16} /> },
                    { name: 'Helix Logistics', icon: <Truck size={16} /> },
                    { name: 'ProRetail Ltd.', icon: <ShoppingBag size={16} /> },
                    { name: 'Centric NGO', icon: <HeartHandshake size={16} /> },
                    { name: 'Alpha Microfinance', icon: <Landmark size={16} /> },
                    { name: 'Vardhman Fabrics', icon: <Layers size={16} /> },
                    { name: 'Bangalore Ironworks', icon: <Factory size={16} /> }
                  ].map((partner, innerIdx) => (
                    <div key={`${outerIdx}-${innerIdx}`} className="logo-placeholder-item" style={{ color: 'var(--primary)', opacity: '0.8' }}>
                      <div className="logo-icon-placeholder" style={{ backgroundColor: 'rgba(15,23,42,0.08)' }}>
                        {partner.icon}
                      </div>
                      <span>{partner.name}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE MAP --- */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2">
            {/* Column 1: Headquarters Details */}
            <motion.div
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
            >
              <span className="section-subtitle">Global Presence</span>
              <h2 className="section-title">Bangalore Headquarters & R&D Hub</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
                CEA Infotech coordinates its global software and ERP deployments from Hebbal, Bangalore. Under the solution architecture and architectural stewardship of M.D. Manohar (35+ years global IT experience), our solution engineers deploy automated tracking, risk, and logistics software worldwide.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                Our solutions are designed to support complex industrial operations across 12 countries, including Singapore, Indonesia, USA, Bangladesh, Latvia, UAE, Oman, and Kenya. By combining a robust localized headquarters with global delivery capabilities, we ensure consistent high uptime and support for enterprise clients worldwide.
              </p>
            </motion.div>

            {/* Column 2: Real Google Map with Overlay Address */}
            <motion.div
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
            >
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(15, 23, 42, 0.1)', boxShadow: 'var(--shadow-xl)', position: 'relative', height: '400px' }}>
                <iframe
                  title="CEA Global Presence Map"
                  src="https://maps.google.com/maps?q=Bangalore,%20India&t=&z=2&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Overlay card containing the quoted address lines */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', padding: '16px', borderRadius: '12px', color: '#fff', boxShadow: '0 12px 36px rgba(0,0,0,0.4)' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <MapPin size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      <strong style={{ color: '#fff', display: 'block', marginBottom: '4px', fontSize: '14px' }}>CEA Infotech Private Limited</strong>
                      <span>B-205 Century Marvel Apartments, Kempapura, Hebbal, Bangalore - 560024, India</span>
                      <div style={{ marginTop: '8px', display: 'flex', gap: '16px', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                        <span>Ph: +91 9980138172</span>
                        <span>Email: manohar.md@ceainfotech.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #2563EB 100%)', position: 'relative', overflow: 'hidden' }}>
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
                style={{ color: '#0F172A' }}
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
                <button onClick={() => setIsVideoModalOpen(false)} className="btn btn-cta btn-sm" style={{ color: '#0F172A' }}>
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
