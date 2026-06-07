import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Settings, 
  Globe, 
  Zap, 
  PhoneCall, 
  Play, 
  Sparkles, 
  X,
  LineChart,
  Users,
  Award
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

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tracking');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Simulated live dashboard data updates for premium visual experience
  const [oeeVal, setOeeVal] = useState(84.6);
  const [yieldVal, setYieldVal] = useState(99.1);
  const [activeJobs, setActiveJobs] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setOeeVal(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setYieldVal(prev => +(Math.max(98.5, Math.min(99.8, prev + (Math.random() * 0.2 - 0.1)))).toFixed(1));
      if (Math.random() > 0.8) {
        setActiveJobs(prev => Math.max(10, Math.min(18, prev + (Math.random() > 0.5 ? 1 : -1))));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      style={{ overflow: 'hidden' }}
    >
      {/* --- HERO SECTION --- */}
      <section className="section" style={{ padding: '160px 0 100px 0', background: 'radial-gradient(circle at top right, rgba(0, 180, 216, 0.08) 0%, transparent 45%)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="section-subtitle" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--alternate-bg)', borderRadius: '20px', fontSize: '12px' }}
              >
                <Sparkles size={14} style={{ color: 'var(--cta)' }} />
                <span>Next-Gen Enterprise Solutions</span>
              </motion.div>
              <h1 style={{ fontSize: '48px', lineHeight: '1.15', margin: '16px 0 20px 0', letterSpacing: '-1.5px' }}>
                Transforming Manufacturing Through <span style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smart Digital Solutions</span>
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
                Increase floor efficiency, track work-in-progress, and automate audit compliance using modern SaaS-based systems tailored for heavy industries.
              </p>
              
              {/* Pill badge showing scope */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
                {['ERP System', 'Production Tracking', 'Compliance Management', 'Custom Software'].map((badge) => (
                  <span key={badge} style={{ fontSize: '13px', fontWeight: '500', padding: '6px 14px', background: '#f1f5f9', color: 'var(--primary)', borderRadius: '6px', border: '1px solid rgba(10,37,64,0.06)' }}>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="btn-group">
                <button onClick={() => navigate('/products')} className="btn btn-cta">
                  Explore Products
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('/contact')} className="btn btn-secondary">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Dashboard Visualizer Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="dashboard-mock">
                <div className="dashboard-header">
                  <div className="dashboard-dots">
                    <span className="dashboard-dot"></span>
                    <span className="dashboard-dot"></span>
                    <span className="dashboard-dot"></span>
                  </div>
                  <div className="dashboard-title">VERICEA Manufacturing Console</div>
                  <div style={{ width: '38px' }}></div>
                </div>
                <div className="dashboard-body">
                  {/* Left sidebar nav */}
                  <div className="dashboard-sidebar">
                    <div 
                      onClick={() => setActiveTab('tracking')} 
                      className={`sidebar-item ${activeTab === 'tracking' ? 'active' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="sidebar-icon" style={{ backgroundColor: activeTab === 'tracking' ? 'var(--secondary)' : 'rgba(255,255,255,0.3)' }}></span>
                      <span className="sidebar-label">WIP Monitor</span>
                    </div>
                    <div 
                      onClick={() => setActiveTab('efficiency')} 
                      className={`sidebar-item ${activeTab === 'efficiency' ? 'active' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="sidebar-icon" style={{ backgroundColor: activeTab === 'efficiency' ? 'var(--secondary)' : 'rgba(255,255,255,0.3)' }}></span>
                      <span className="sidebar-label">OEE Metrics</span>
                    </div>
                    <div 
                      onClick={() => setActiveTab('jobs')} 
                      className={`sidebar-item ${activeTab === 'jobs' ? 'active' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="sidebar-icon" style={{ backgroundColor: activeTab === 'jobs' ? 'var(--secondary)' : 'rgba(255,255,255,0.3)' }}></span>
                      <span className="sidebar-label">Active Orders</span>
                    </div>
                  </div>

                  {/* Main content viewport */}
                  <div className="dashboard-content">
                    {/* Top Widgets Row */}
                    <div className="content-top">
                      <div className="mini-widget">
                        <span className="mini-label">Floor OEE</span>
                        <span className="mini-value">{oeeVal}%</span>
                        <span className="mini-trend">+0.8% today</span>
                      </div>
                      <div className="mini-widget">
                        <span className="mini-label">Quality Yield</span>
                        <span className="mini-value">{yieldVal}%</span>
                        <span className="mini-trend" style={{ color: '#10b981' }}>Optimal</span>
                      </div>
                      <div className="mini-widget">
                        <span className="mini-label">Active Jobs</span>
                        <span className="mini-value">{activeJobs}</span>
                        <span className="mini-trend" style={{ color: 'var(--accent)' }}>Normal load</span>
                      </div>
                    </div>

                    {/* Bottom Dynamic Chart */}
                    <div className="content-chart">
                      <div className="chart-header-widget">
                        <span className="chart-title">Real-Time Floor Productivity (Units/Hr)</span>
                        <span style={{ fontSize: '9px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                          Live Feed
                        </span>
                      </div>
                      <div className="chart-bars">
                        {[45, 62, 54, 78, 92, 85, 74, 88, 95, 108, 120, 115].map((val, idx) => (
                          <div key={idx} className="chart-bar-container">
                            <div 
                              className="chart-bar-fill" 
                              style={{ 
                                height: `${(val / 120) * 58}px`,
                                transition: 'height 0.5s ease'
                              }}
                            ></div>
                            <span className="chart-label">{9 + idx}:00</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMPANY SNAPSHOT --- */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card stat-card">
              <div className="stat-number">
                <CountUp end={2015} duration={1} />
              </div>
              <div className="stat-label">Established</div>
              <div className="stat-desc">Bangalore, India</div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card stat-card">
              <div className="stat-number">
                <CountUp end={35} duration={1} suffix="+" />
              </div>
              <div className="stat-label">Founder IT Exp</div>
              <div className="stat-desc">M.D. Manohar Leadership</div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card stat-card">
              <div className="stat-number">
                <CountUp end={11} duration={1} suffix="+" />
              </div>
              <div className="stat-label">Industry Domains</div>
              <div className="stat-desc">Wide sector mastery</div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card stat-card">
              <div className="stat-number">
                <CountUp end={12} duration={1} suffix="+" />
              </div>
              <div className="stat-label">Global Markets</div>
              <div className="stat-desc">Cross-continent coverage</div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card stat-card">
              <div className="stat-number">
                <CountUp end={185} duration={1} suffix="+" />
              </div>
              <div className="stat-label">Team Leadership</div>
              <div className="stat-desc">Years cumulative exp</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES OVERVIEW --- */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Our Capabilities</span>
            <h2 className="section-title">Enterprise IT Services</h2>
            <p className="section-desc">We combine consulting and custom software delivery to resolve core operational bottlenecks.</p>
          </div>

          <div className="grid-4">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon"><Settings /></div>
              <h3 className="card-title">Project Management</h3>
              <p className="card-text">Tailored engineering timelines, risk management, and rigorous quality tracking for heavy industry platforms.</p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon"><Globe /></div>
              <h3 className="card-title">Consulting Services</h3>
              <p className="card-text">Specialized mapping of ERP, CRM, and supply chain management architectures to increase floor output.</p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon"><Layers /></div>
              <h3 className="card-title">Web App Development</h3>
              <p className="card-text">High-performance, secure dashboards and business analytics panels built for cross-device visibility.</p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon"><Zap /></div>
              <h3 className="card-title">Mobile App Development</h3>
              <p className="card-text">Native floor tracking applications, offline log capabilities, and alerts directly to supervisor handsets.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT OVERVIEW --- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Our Software Suite</span>
            <h2 className="section-title">Product Ecosystem</h2>
            <p className="section-desc">Innovative, ready-to-deploy platforms built to streamline tracking, logistics, compliance, and assessments.</p>
          </div>

          <div className="grid-4">
            {/* Product 1 */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="product-card">
              <div className="product-card-header">
                <span className="product-tagline">Track. Measure. Improve.</span>
                <h3 className="card-title" style={{ marginTop: '4px' }}>VERICEA Mfg</h3>
              </div>
              <ul className="product-features-list">
                <li className="product-feature-item">
                  <LineChart size={16} className="product-feature-icon" />
                  <span>Production Tracking</span>
                </li>
                <li className="product-feature-item">
                  <BarChart3 size={16} className="product-feature-icon" />
                  <span>Efficiency Monitoring</span>
                </li>
                <li className="product-feature-item">
                  <Layers size={16} className="product-feature-icon" />
                  <span>WIP Management</span>
                </li>
              </ul>
              <div className="product-card-footer">
                <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm w-full" style={{ width: '100%' }}>
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="product-card">
              <div className="product-card-header">
                <span className="product-tagline">Create. Maintain. Monitor.</span>
                <h3 className="card-title" style={{ marginTop: '4px' }}>VERICEA Compliance</h3>
              </div>
              <ul className="product-features-list">
                <li className="product-feature-item">
                  <ShieldCheck size={16} className="product-feature-icon" />
                  <span>Audit Trail Systems</span>
                </li>
                <li className="product-feature-item">
                  <BarChart3 size={16} className="product-feature-icon" />
                  <span>Compliance Analytics</span>
                </li>
                <li className="product-feature-item">
                  <Layers size={16} className="product-feature-icon" />
                  <span>Evidence Locker</span>
                </li>
              </ul>
              <div className="product-card-footer">
                <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm w-full" style={{ width: '100%' }}>
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="product-card">
              <div className="product-card-header">
                <span className="product-tagline">Identify. Assess. Mitigate.</span>
                <h3 className="card-title" style={{ marginTop: '4px' }}>FactSafe</h3>
              </div>
              <ul className="product-features-list">
                <li className="product-feature-item">
                  <ShieldCheck size={16} className="product-feature-icon" />
                  <span>Risk Assessment Module</span>
                </li>
                <li className="product-feature-item">
                  <BarChart3 size={16} className="product-feature-icon" />
                  <span>Vulnerability Mapping</span>
                </li>
                <li className="product-feature-item">
                  <Layers size={16} className="product-feature-icon" />
                  <span>Mitigation Reports</span>
                </li>
              </ul>
              <div className="product-card-footer">
                <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm w-full" style={{ width: '100%' }}>
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Product 4 */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="product-card">
              <div className="product-card-header">
                <span className="product-tagline">Optimize Logistics</span>
                <h3 className="card-title" style={{ marginTop: '4px' }}>Courier Cost Mgr</h3>
              </div>
              <ul className="product-features-list">
                <li className="product-feature-item">
                  <Truck size={16} className="product-feature-icon" />
                  <span>Logistics Cost Audits</span>
                </li>
                <li className="product-feature-item">
                  <BarChart3 size={16} className="product-feature-icon" />
                  <span>Rate Card Validation</span>
                </li>
                <li className="product-feature-item">
                  <Layers size={16} className="product-feature-icon" />
                  <span>Courier Billing Check</span>
                </li>
              </ul>
              <div className="product-card-footer">
                <button onClick={() => navigate('/products')} className="btn btn-primary btn-sm w-full" style={{ width: '100%' }}>
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VIDEO PLACEHOLDER SECTION --- */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Production Tracking Tool</span>
            <h2 className="section-title">See VERICEA in Action</h2>
            <p className="section-desc">Watch how VERICEA improves manufacturing efficiency, WIP tracking, and provides real-time production visibility.</p>
          </div>

          <motion.div 
            variants={fadeInUp} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }} 
            className="video-wrapper"
          >
            <div className="video-placeholder-bg">
              {/* Animated rings pulsing in the background */}
              <div className="video-overlay-details">
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="video-play-btn" 
                  aria-label="Play product video"
                >
                  <Play fill="currentColor" size={28} />
                </button>
                <h3 className="video-info-title">Watch Explainer Video</h3>
                <span className="video-info-subtitle">VERICEA Operational Run • 2:40 mins</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Our Value</span>
            <h2 className="section-title">Why Industry Leaders Choose Us</h2>
            <p className="section-desc">Over a decade of robust solutions designed to align with strict operational goals.</p>
          </div>

          <div className="grid-4">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,180,216,0.1)' }}><Award style={{ color: 'var(--cta)' }} /></div>
              <h3 className="card-title">Industry Expertise</h3>
              <p className="card-text">Specialized domain experience in production line operations, textiles, retail SCM, and microfinance.</p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,180,216,0.1)' }}><Globe style={{ color: 'var(--secondary)' }} /></div>
              <h3 className="card-title">Global Experience</h3>
              <p className="card-text">Solutions successfully deployed across 12 countries, handling cross-border compliance and localized setups.</p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,180,216,0.1)' }}><Zap style={{ color: 'var(--accent)' }} /></div>
              <h3 className="card-title">Product Innovation</h3>
              <p className="card-text">Modern SaaS dashboards built with responsive architectures to unify office control rooms and plant floors.</p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ backgroundColor: '#fff', border: '1px solid rgba(0,180,216,0.1)' }}><Users style={{ color: 'var(--primary)' }} /></div>
              <h3 className="card-title">Long-Term Support</h3>
              <p className="card-text">Rigorous SLAs, onsite deployment assistance, and system training to ensure high operational uptime.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CUSTOMER LOGO SECTION --- */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Trusted By Global Manufacturers</span>
          </div>
          <div className="logo-carousel-container">
            <div className="logo-marquee-wrapper">
              <div className="logo-marquee-content">
                {/* Dual arrays for endless scrolling loop */}
                {[...Array(2)].flatMap((_, outerIdx) => 
                  ['TechMfg Inc.', 'Apex Engineering', 'Zen Textiles', 'Helix Logistics', 'ProRetail Ltd.', 'Global NGO', 'Alpha Microfinance'].map((name, innerIdx) => (
                    <div key={`${outerIdx}-${innerIdx}`} className="logo-placeholder-item">
                      <div className="logo-icon-placeholder">
                        <Settings size={16} />
                      </div>
                      <span>{name}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div 
            variants={fadeInUp} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }}
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '38px', marginBottom: '20px', letterSpacing: '-1px' }}>Ready To Transform Your Operations?</h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '36px' }}>
              Connect with our product consultants to evaluate VERICEA and discover optimization opportunities for your floor.
            </p>
            <button onClick={() => navigate('/contact')} className="btn btn-cta" style={{ margin: '0 auto' }}>
              Schedule Consultation
              <PhoneCall size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- VIDEO PLAYBACK OVERLAY MODAL --- */}
      {isVideoModalOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: 'rgba(2, 6, 23, 0.9)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 2000, 
            padding: '24px' 
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '800px', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
            <button 
              onClick={() => setIsVideoModalOpen(false)} 
              style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', cursor: 'pointer', padding: '6px', borderRadius: '50%', zIndex: 10 }}
            >
              <X size={20} />
            </button>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '40px', textAlign: 'center' }}>
              <Settings size={64} className="product-feature-icon" style={{ animation: 'spin 4s linear infinite', marginBottom: '16px', color: 'var(--secondary)' }} />
              <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '20px' }}>VERICEA Production Tracking Walkthrough</h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '400px', marginBottom: '24px' }}>
                This modal represents the placeholder player for the VERICEA Manufacturing explainer video.
              </p>
              <button onClick={() => setIsVideoModalOpen(false)} className="btn btn-cta btn-sm">
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
