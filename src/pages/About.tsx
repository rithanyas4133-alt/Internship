import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Target, 
  Lightbulb, 
  MapPin, 
  Calendar, 
  UserCheck, 
  Settings, 
  Layers, 
  Users, 
  ShieldCheck, 
  FolderLock,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

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

  const storyTimeline = [
    {
      year: 'June 2015',
      title: 'Company Founded',
      description: 'CEA Infotech Private Limited was established in Bangalore, India, by M.D. Manohar with a core vision to build business-optimizing software architectures.'
    },
    {
      year: '2017 - 2019',
      title: 'Global Footprint Expansion',
      description: 'Expanded technical advisory services across USA, Singapore, UAE, Latvia, Nigeria, and Oman, deploying tailored ERP and Supply Chain configurations.'
    },
    {
      year: '2020 - 2022',
      title: 'Launch of VERICEA Product Suite',
      description: 'Transitioned from a pure software consultancy to a SaaS provider. Developed VERICEA Manufacturing and VERICEA Compliance to automate floor tracking.'
    },
    {
      year: '2023 - Present',
      title: 'Diverse Domain Delivery',
      description: 'Delivering operational excellence across 11+ industry domains including Textiles, Logistics, Finance, and NGOs, supporting complex digital transformations.'
    }
  ];

  const coreStrengths = [
    { name: 'Enterprise ERP', icon: <Settings /> },
    { name: 'Production Tracking', icon: <TrendingUp /> },
    { name: 'Compliance Tracking', icon: <ShieldCheck /> },
    { name: 'HRMS Solutions', icon: <Users /> },
    { name: 'Retail Systems', icon: <Layers /> },
    { name: 'Microfinance Platforms', icon: <FolderLock /> },
    { name: 'Custom Software Development', icon: <UserCheck /> }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Our Journey & Purpose</span>
          <h1 className="inner-hero-title">Driving Innovation Through Technology Solutions</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            We engineer premium business platforms that help organizations streamline operations, control costs, and maintain compliance.
          </p>
        </div>
      </section>

      {/* --- COMPANY STORY TIMELINE --- */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Milestones</span>
            <h2 className="section-title">The CEA Infotech Story</h2>
            <p className="section-desc">From a premier Bangalore consultancy to a global SaaS product house.</p>
          </div>

          <div className="timeline">
            {storyTimeline.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-year" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={16} />
                    <span>{item.year}</span>
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--primary)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Vision & Core Values</span>
            <h2 className="section-title">What Drives Our Core Team</h2>
            <p className="section-desc">Our foundation is anchored on customer success and business excellence.</p>
          </div>

          <div className="grid-3">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ color: 'var(--cta)' }}><HeartHandshake /></div>
              <h3 className="card-title">Customer Success</h3>
              <p className="card-text">
                To provide solutions and services that increase customer satisfaction and build long-term customer relationships based on trust and reliability.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ color: 'var(--secondary)' }}><Target /></div>
              <h3 className="card-title">Business Excellence</h3>
              <p className="card-text">
                To build business solutions that help organizations overcome critical operational challenges, minimize overheads, and streamline processes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="glass-card">
              <div className="card-icon" style={{ color: 'var(--accent)' }}><Lightbulb /></div>
              <h3 className="card-title">Technology Innovation</h3>
              <p className="card-text">
                To actively develop, market, and deliver cutting-edge software products and services that keep industries future-ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '48px', border: '1px solid rgba(0,180,216,0.2)', overflow: 'hidden' }}>
            <div className="grid-2">
              {/* Left Column: Details */}
              <div>
                <span className="section-subtitle">Founder Spotlight</span>
                <h2 style={{ fontSize: '36px', marginBottom: '8px' }}>M.D. Manohar</h2>
                <h3 style={{ fontSize: '18px', color: 'var(--secondary)', fontWeight: '500', marginBottom: '24px' }}>
                  Managing Director • 35+ Years IT Industry Experience
                </h3>
                
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>
                  A veteran leader in enterprise system architectures. M.D. Manohar has designed and implemented major systems globally, focusing on ERP configuration, CRM integration, supply chain logic, and heavy manufacturing workflows.
                </p>

                {/* Badges of Specialties */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {['ERP Specialist', 'CRM Systems Architecture', 'SCM Operations Expert', 'Manufacturing Technology Expert'].map((spec) => (
                    <span key={spec} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary)', padding: '6px 14px', backgroundColor: 'var(--alternate-bg)', borderRadius: '4px', border: '1px solid rgba(0,180,216,0.1)' }}>
                      {spec}
                    </span>
                  ))}
                </div>

                <div style={{ borderLeft: '3px solid var(--cta)', paddingLeft: '16px', marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Global Project Deployment:</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    India, Singapore, USA, UAE, Kenya, Nigeria, Bangladesh, Latvia, Indonesia, Nepal, Oman, and Iran.
                  </p>
                </div>
              </div>

              {/* Right Column: Graphic Avatar/Badge card */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '280px', height: '280px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: 'var(--shadow-xl)' }}>
                  <UserCheck size={80} style={{ color: 'var(--accent)', marginBottom: '12px' }} />
                  <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px' }}>35+ Years</span>
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.7)', fontWeight: '600' }}>IT Leadership</span>
                  
                  {/* Floating visual elements */}
                  <div style={{ position: 'absolute', bottom: '15px', right: '-10px', backgroundColor: 'var(--background)', color: 'var(--primary)', border: '1px solid rgba(0,180,216,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} style={{ color: 'var(--cta)' }} />
                    Bangalore, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE STRENGTHS --- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Capabilities</span>
            <h2 className="section-title">Core Strengths & Domains</h2>
            <p className="section-desc">Our development practices cover standard and customized enterprise frameworks.</p>
          </div>

          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {coreStrengths.map((strength, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="glass-card" 
                style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div className="card-icon" style={{ marginBottom: '16px', color: 'var(--secondary)' }}>{strength.icon}</div>
                <h3 className="card-title" style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>{strength.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="section" style={{ borderTop: '1px solid rgba(10,37,64,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Want to see our product features?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px auto' }}>
            Explore the specialized features built directly into our VERICEA suite for industrial environments.
          </p>
          <button onClick={() => navigate('/products')} className="btn btn-cta">
            View Products Suite
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </motion.div>
  );
}
