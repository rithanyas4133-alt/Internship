import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  AlertOctagon, 
  LockKeyhole, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2
} from 'lucide-react';

export default function ComplianceHub() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  const modules = [
    {
      title: 'Audit Management',
      icon: <FileCheck2 />,
      desc: 'Schedule internal audits, orchestrate custom safety checklists, and allocate checklists to plant inspectors.'
    },
    {
      title: 'Compliance Tracking',
      icon: <ShieldCheck />,
      desc: 'Track regulatory progress bars across multi-plant locations. Check ISO, OSHA, and environmental standard status.'
    },
    {
      title: 'Corrective Actions (CAPA)',
      icon: <AlertOctagon />,
      desc: 'Automatically flag audit failures, log corrective actions, and route issue tickets to supervisors.'
    },
    {
      title: 'Evidence Locker',
      icon: <LockKeyhole />,
      desc: 'Upload inspection logs, sign off safety certifications, and store encrypted PDFs in an audit-ready archive.'
    },
    {
      title: 'Compliance Analytics',
      icon: <BarChart3 />,
      desc: 'Consolidate compliance statistics, review incident metrics, and predict regulatory flags before audit cycles.'
    }
  ];

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero" style={{ paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Create • Maintain • Monitor</span>
          <h1 className="inner-hero-title">VERICEA Compliance Hub</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            Unified audit tracking, evidence management, and corrective action workflows for enterprise compliance.
          </p>
        </div>
      </section>

      {/* --- COMPLIANCE CORE MODULES --- */}
      <section className="section" style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Planned Core Modules</span>
            <h2 className="section-title">The Compliance Management Framework</h2>
            <p className="section-desc">Modular features designed to prepare your operations for regulatory compliance reviews.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {modules.map((mod, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                initial="initial" 
                whileInView="whileInView" 
                viewport={{ once: true }}
                className="glass-card"
              >
                <div className="card-icon" style={{ color: 'var(--secondary)' }}>{mod.icon}</div>
                <h3 className="card-title">{mod.title}</h3>
                <p className="card-text">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM COMING SOON VISUAL --- */}
      <section className="section section-alt" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Sneak Peek</span>
            <h2 className="section-title">Future-Ready Interface</h2>
            <p className="section-desc">Our Bangalore development team is actively building this console. Preview what is coming soon.</p>
          </div>

          <motion.div 
            variants={fadeInUp} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }}
            className="compliance-coming-soon-container"
          >
            {/* Blurred Mockup Container */}
            <div className="mock-dashboard-preview">
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Compliance Hub Core Metrics</span>
                <span style={{ fontSize: '11px', color: '#fff', opacity: 0.5 }}>ISO Audits</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', height: '260px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{ height: '56px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}></div>
                  ))}
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.04)', padding: '24px' }}>
                  <div style={{ width: '40%', height: '14px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '16px' }}></div>
                  <div style={{ width: '80%', height: '8px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '60%', height: '8px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>

            {/* Coming Soon Glass Overlay */}
            <div className="coming-soon-overlay">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', backgroundColor: 'rgba(0,180,216,0.15)', border: '1px solid var(--secondary)', borderRadius: '20px', color: 'var(--accent)', fontSize: '12px', fontWeight: '700', marginBottom: '18px' }}>
                <Sparkles size={14} />
                <span>ACTIVE DEVELOPMENT</span>
              </div>
              
              <h3 style={{ fontSize: '28px', color: 'var(--background)', marginBottom: '12px' }}>Launching Q4 2026</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '480px', marginBottom: '32px', lineHeight: '1.6' }}>
                The VERICEA Compliance Hub module is in active development. Register your email below to request early beta access or receive direct notifications on release.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: '600', fontSize: '15px' }}
                >
                  <CheckCircle2 size={18} />
                  <span>Early Access Requested. We will notify you!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleNotifySubmit} style={{ display: 'flex', gap: '12px', width: '100%', maxWidth: '440px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div style={{ flexGrow: 1 }}>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="name@company.com" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      style={{ height: '48px', backgroundColor: 'rgba(2, 6, 23, 0.5)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                    />
                    {error && <span style={{ color: '#ef4444', fontSize: '11px', textAlign: 'left', display: 'block', marginTop: '4px' }}>{error}</span>}
                  </div>
                  <button type="submit" className="btn btn-cta" style={{ height: '48px' }}>
                    Request Beta Access
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTROLS INFO SHEET --- */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Ready to deploy compliance controls?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px auto' }}>
            We customize current VERICEA audit schedules and manual dashboards to keep your teams prepared for upcoming inspections.
          </p>
          <button onClick={() => window.location.href = '/contact'} className="btn btn-cta">
            Schedule Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </motion.div>
  );
}
