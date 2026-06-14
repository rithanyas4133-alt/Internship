import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  Repeat,
  Users,
  BookOpen,
  LifeBuoy,
  MapPin,
  Briefcase,
  Globe,
  ArrowRight,
  Zap,
  DollarSign,
  ShieldCheck,
  Truck,
  Factory,
  FileCheck,
  Building2
} from 'lucide-react';
import CountUp from '../components/CountUp';

export default function Partners() {
  const navigate = useNavigate();
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const onLearnMore = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const cityDescriptions: Record<string, string> = {
    'Bangalore': 'Manufacturing & Technology Hub',
    'Chennai': 'Automotive & Textiles Center',
    'Coimbatore': 'Textile Manufacturing Cluster',
    'Tiruppur': 'Garment Export Hub',
    'Pune': 'Engineering & Logistics Base',
    'Surat': 'Textiles & Exports Port',
    'Noida': 'IT & Business Services',
    'Ludhiana': 'Industrial Manufacturing'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  } as any;

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  } as any;

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 }
    }
  } as any;

  const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  } as any;

  const slideFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }
    }
  } as any;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'var(--primary-bg)', color: 'var(--text-main)' }}>
      {/* HERO */}
      <motion.section 
        className="section" 
        style={{ padding: '120px 0 80px 0', background: 'var(--primary-bg)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
      >
        <div className="container" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <motion.div style={{ flex: 1, maxWidth: 760 }} variants={fadeInUp}>
            <h1 style={{ fontFamily: 'var(--font-headings)', color: '#F5F5F5', fontSize: '44px', margin: 0, lineHeight: 1.03 }}>
              Partner with CEA Infotech
            </h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '18px', fontSize: '16px', maxWidth: 680 }}>
              Build a scalable business through ERP, CRM, AI, Compliance, and Enterprise Software Solutions.
            </p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '22px' }}>
              <button className="btn btn-cta" onClick={() => navigate('/contact')}>
                Become a Partner
                <ArrowRight size={14} style={{ marginLeft: 8 }} />
              </button>
              <button className="btn" onClick={() => window.open('/images/partners_prospectus.pdf', '_blank')}>
                Download Prospectus
              </button>
            </div>
          </motion.div>

          <motion.div style={{ width: 420, minWidth: 320 }} variants={scaleIn}>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(200,162,118,0.12)', background: 'rgba(17,34,64,0.6)', padding: 18, backdropFilter: 'blur(6px)' }}>
              <img src="/images/partners_illustration.png" alt="Enterprise partnership illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 12 }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            bottom: 30, 
            left: '50%', 
            transform: 'translateX(-50%)', 
            cursor: 'pointer',
            zIndex: 10
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={() => {
            const nextSection = document.querySelector('.section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div style={{
            width: 28,
            height: 44,
            borderRadius: 14,
            border: '2px solid rgba(200,162,118,0.4)',
            position: 'relative',
            background: 'rgba(17,34,64,0.4)',
            backdropFilter: 'blur(4px)'
          }}>
            <motion.div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: '#C8A276',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 8px rgba(200,162,118,0.5)'
              }}
              animate={{
                y: [8, 20, 8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
          <div style={{
            marginTop: 8,
            fontSize: 11,
            color: 'rgba(200,162,118,0.7)',
            textAlign: 'center',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>
            Scroll
          </div>
        </motion.div>
      </motion.section>

      {/* WHY PARTNER */}
      <motion.section 
        className="section" 
        style={{ padding: '56px 0' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 20 }}
            variants={fadeInUp}
          >
            Why partner with us
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
            {[
              { title: 'Recurring Revenue', icon: Repeat },
              { title: 'Market-Ready Solutions', icon: Award },
              { title: 'Dedicated Technical Support', icon: LifeBuoy },
              { title: 'Training & Enablement', icon: BookOpen },
              { title: 'Exclusive Growth Territories', icon: Globe },
              { title: 'Long-Term Business Partnership', icon: Users }
            ].map((c) => (
              <motion.div 
                key={c.title} 
                style={{ borderRadius: 16, padding: 18, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)', display: 'flex', gap: 12, alignItems: 'center', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg, rgba(200,162,118,0.06), rgba(212,175,55,0.03))', border: '1px solid rgba(200,162,118,0.12)' }}>
                  <c.icon color="#C8A276" />
                </div>
                <div>
                  <div style={{ color: '#F5F5F5', fontWeight: 700 }}>{c.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SOLUTION PORTFOLIO */}
      <motion.section 
        className="section" 
        style={{ padding: '56px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}
            variants={fadeInUp}
          >
            Solution Portfolio
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[{
              title: 'Vericea Production & Defect Tracking',
              tagline: 'Real-time production monitoring and quality control',
              img: '/images/flagship_manufacturing.jpg',
              path: '/products/vericea-manufacturing',
              accent: '#C8A276',
              icon: Factory,
              highlights: ['Real-time production monitoring', 'Digital production registers', 'Defect tracking & rework analysis', 'Productivity dashboards', 'WIP visibility']
            },{
              title: 'Courier Administration App',
              tagline: 'Intelligent courier expense management and optimization',
              img: '/images/flagship_courier.jpg',
              path: '/products/courier-cost-management',
              accent: '#D4AF37',
              icon: Truck,
              highlights: ['Intelligent courier recommendations', 'Invoice vs AWB validation', 'Approval workflows', 'Department-wise analytics', 'Cost optimization']
            },{
              title: 'Vericea Compliance',
              tagline: 'Comprehensive compliance audit management',
              img: '/images/flagship_compliance.jpg',
              path: '/products/vericea-compliance',
              accent: '#C8A276',
              icon: FileCheck,
              highlights: ['Compliance audit management', 'Internal and buyer audits', 'Evidence collection', 'Corrective actions', 'Audit readiness']
            },{
              title: 'FactSafe',
              tagline: 'Built on Facts. Designed for Safety.',
              img: '/images/flagship_factsafe.jpg',
              path: '/products/factsafe',
              accent: '#D4AF37',
              icon: ShieldCheck,
              highlights: ['Proactive risk assessment', 'Centralized risk register', 'Risk scoring and prioritization', 'Real-time monitoring', 'Multi-level supplier visibility']
            },{
              title: 'CEA Enterprise Solutions',
              tagline: '35+ years of leadership in enterprise software excellence',
              img: '/images/why_leadership.jpg',
              path: '/contact',
              accent: '#C8A276',
              icon: Building2,
              highlights: ['ERP expertise & consulting', 'Web & mobile applications', 'Custom enterprise solutions', 'Project delivery excellence']
            }].map((p) => (
              <motion.div 
                key={p.title} 
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                style={{ borderRadius: 16, overflow: 'hidden', background: 'rgba(17,34,64,0.7)', border: '1px solid rgba(200,162,118,0.08)', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              >
                <motion.div 
                  style={{ height: 180, overflow: 'hidden', position: 'relative' }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </motion.div>
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(200,162,118,0.08)', color: p.accent, border: '1px solid rgba(200,162,118,0.12)' }}>
                      <p.icon size={20} />
                    </div>
                    <div style={{ fontWeight: 800, color: '#F5F5F5', fontSize: 15, lineHeight: 1.3 }}>{p.title}</div>
                  </div>
                  <div style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: '0.02em' }}>
                    {p.tagline}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>
                    {p.highlights.slice(0, 3).join(' • ')}
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <button 
                      className="btn" 
                      onClick={() => onLearnMore(p.path)}
                      style={{ width: '100%', padding: '10px 16px' }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PARTNERSHIP MODEL */}
      <motion.section 
        className="section" 
        style={{ padding: '64px 0' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}
            variants={fadeInUp}
          >
            Partnership Model
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px 1fr', gap: 16, alignItems: 'center' }}>
            <motion.div 
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }} 
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <h4 style={{ color: '#F5F5F5', margin: 0, fontSize: 16, fontWeight: 700 }}>CEA Infotech Provides</h4>
              <ul style={{ color: 'var(--text-muted)', marginTop: 8, paddingLeft: 20, lineHeight: 1.8 }}>
                <li>Product Development</li>
                <li>Hosting & Infrastructure</li>
                <li>Security & Compliance</li>
                <li>Implementation Services</li>
                <li>Technical Support</li>
                <li>Product Upgrades</li>
              </ul>
            </motion.div>

            <motion.div 
              style={{ position: 'relative', display: 'grid', placeItems: 'center' }} 
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div style={{ width: 380, height: 240, borderRadius: 18, background: 'rgba(17,34,64,0.65)', border: '1px solid rgba(200,162,118,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ textAlign: 'center', padding: 20 }}>
                  <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 14, marginBottom: 8 }}>Partnership Ecosystem</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.5 }}>Shared revenue, co-selling and mutual enablement.</div>
                </div>
                {/* animated connection lines (decorative) */}
                <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  <line x1="20" y1="40" x2="360" y2="40" stroke="rgba(200,162,118,0.12)" strokeWidth="2" />
                  <line x1="20" y1="200" x2="360" y2="200" stroke="rgba(200,162,118,0.08)" strokeWidth="2" />
                </svg>
              </div>
            </motion.div>

            <motion.div 
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }} 
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <h4 style={{ color: '#F5F5F5', margin: 0, fontSize: 16, fontWeight: 700 }}>Partner Provides</h4>
              <ul style={{ color: 'var(--text-muted)', marginTop: 8, paddingLeft: 20, lineHeight: 1.8 }}>
                <li>Sales & Business Development</li>
                <li>Marketing & Promotion</li>
                <li>Customer Acquisition</li>
                <li>Territory Expansion</li>
                <li>Relationship Management</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* REVENUE OPPORTUNITY */}
      <motion.section 
        className="section" 
        style={{ padding: '56px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}
            variants={fadeInUp}
          >
            Revenue Opportunity
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            <motion.div 
              style={{ borderRadius: 16, padding: 20, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#F5F5F5', fontWeight: 800, fontSize: 15 }}>Growth Consultant</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Investment: ₹5–10 Lakhs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 13 }}>Potential Revenue</div>
                  <div style={{ color: '#F5F5F5', fontSize: 16, fontWeight: 700, marginTop: 2 }}>₹150 Lakhs by Year 3</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ borderRadius: 16, padding: 20, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#F5F5F5', fontWeight: 800, fontSize: 15 }}>Tech Reseller</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Investment: ₹10–20 Lakhs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 13 }}>Potential Revenue</div>
                  <div style={{ color: '#F5F5F5', fontSize: 16, fontWeight: 700, marginTop: 2 }}>₹150 Lakhs by Year 3</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ borderRadius: 18, padding: 22, background: 'linear-gradient(180deg, rgba(200,162,118,0.06), rgba(212,175,55,0.03))', border: '1px solid rgba(200,162,118,0.18)', boxShadow: '0 10px 40px rgba(200,162,118,0.06)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 14px 50px rgba(200,162,118,0.1)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#0B192C', fontWeight: 900, fontSize: 15 }}>Regional Distributor</div>
                  <div style={{ color: '#0B192C', fontSize: 13, marginTop: 4, opacity: 0.8 }}>Investment: ₹20–50 Lakhs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#0B192C', fontWeight: 900, fontSize: 13 }}>Potential Revenue</div>
                  <div style={{ color: '#0B192C', fontSize: 16, fontWeight: 900, marginTop: 2 }}>₹300+ Lakhs by Year 3</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* INDIA MARKET OPPORTUNITY */}
      <motion.section 
        className="section" 
        style={{ padding: '56px 0' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}
            variants={fadeInUp}
          >
            India Market Opportunity
          </motion.h2>

          <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <motion.div 
              style={{ flex: '1 1 520px', borderRadius: 16, padding: 18, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)', boxShadow: 'var(--shadow-sm)' }}
              variants={scaleIn}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium India Map with realistic silhouette */}
              <div style={{ width: '100%', height: 420, position: 'relative' }}>
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(200,162,118,0.4)" />
                      <stop offset="100%" stopColor="rgba(200,162,118,0)" />
                    </radialGradient>
                  </defs>
                  
                  {/* India Land Mass - Realistic Silhouette */}
                  <g fill="#1E3552" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
                    <path d="M280,80 L320,75 L350,85 L380,95 L400,110 L420,130 L440,150 L460,170 L480,185 L500,200 L520,215 L540,230 L560,245 L580,260 L600,275 L620,290 L640,305 L660,320 L680,335 L700,350 L720,365 L740,380 L760,395 L780,410 L800,425 L820,440 L840,455 L860,470 L880,485 L900,500 L920,515 L940,530 L960,545 L980,560 L1000,575 L1000,600 L980,615 L960,630 L940,645 L920,660 L900,675 L880,690 L860,705 L840,720 L820,735 L800,750 L780,765 L760,780 L740,795 L720,810 L700,825 L680,840 L660,855 L640,870 L620,885 L600,900 L580,915 L560,930 L540,945 L520,960 L500,975 L480,990 L460,1000 L440,1000 L420,990 L400,975 L380,960 L360,945 L340,930 L320,915 L300,900 L280,885 L260,870 L240,855 L220,840 L200,825 L180,810 L160,795 L140,780 L120,765 L100,750 L80,735 L60,720 L40,705 L20,690 L0,675 L0,650 L20,635 L40,620 L60,605 L80,590 L100,575 L120,560 L140,545 L160,530 L180,515 L200,500 L220,485 L240,470 L260,455 L280,440 L300,425 L320,410 L340,395 L360,380 L380,365 L400,350 L420,335 L440,320 L460,305 L480,290 L500,275 L520,260 L540,245 L560,230 L580,215 L600,200 L620,185 L640,170 L660,155 L680,140 L700,125 L720,110 L740,95 L760,80 L780,65 L800,50 L820,35 L840,20 L860,5 L880,0 L900,0 L920,15 L940,30 L960,45 L980,60 L1000,75 L1000,100 L980,115 L960,130 L940,145 L920,160 L900,175 L880,190 L860,205 L840,220 L820,235 L800,250 L780,265 L760,280 L740,295 L720,310 L700,325 L680,340 L660,355 L640,370 L620,385 L600,400 L580,415 L560,430 L540,445 L520,460 L500,475 L480,490 L460,505 L440,520 L420,535 L400,550 L380,565 L360,580 L340,595 L320,610 L300,625 L280,640 L260,655 L240,670 L220,685 L200,700 L180,715 L160,730 L140,745 L120,760 L100,775 L80,790 L60,805 L40,820 L20,835 L0,850 L0,875 L20,890 L40,905 L60,920 L80,935 L100,950 L120,965 L140,980 L160,995 L180,1000 L200,1000 L220,985 L240,970 L260,955 L280,940 L300,925 L320,910 L340,895 L360,880 L380,865 L400,850 L420,835 L440,820 L460,805 L480,790 L500,775 L520,760 L540,745 L560,730 L580,715 L600,700 L620,685 L640,670 L660,655 L680,640 L700,625 L720,610 L740,595 L760,580 L780,565 L800,550 L820,535 L840,520 L860,505 L880,490 L900,475 L920,460 L940,445 L960,430 L980,415 L1000,400 L1000,375 L980,360 L960,345 L940,330 L920,315 L900,300 L880,285 L860,270 L840,255 L820,240 L800,225 L780,210 L760,195 L740,180 L720,165 L700,150 L680,135 L660,120 L640,105 L620,90 L600,75 L580,60 L560,45 L540,30 L520,15 L500,0 L480,0 L460,15 L440,30 L420,45 L400,60 L380,75 L360,90 L340,105 L320,120 L300,135 L280,150 L260,165 L240,180 L220,195 L200,210 L180,225 L160,240 L140,255 L120,270 L100,285 L80,300 L60,315 L40,330 L20,345 L0,360 L0,385 L20,400 L40,415 L60,430 L80,445 L100,460 L120,475 L140,490 L160,505 L180,520 L200,535 L220,550 L240,565 L260,580 L280,595 L300,610 L320,625 L340,640 L360,655 L380,670 L400,685 L420,700 L440,715 L460,730 L480,745 L500,760 L520,775 L540,790 L560,805 L580,820 L600,835 L620,850 L640,865 L660,880 L680,895 L700,910 L720,925 L740,940 L760,955 L780,970 L800,985 L820,1000 L840,1000 L860,985 L880,970 L900,955 L920,940 L940,925 L960,910 L980,895 L1000,880 L1000,855 L980,840 L960,825 L940,810 L920,795 L900,780 L880,765 L860,750 L840,735 L820,720 L800,705 L780,690 L760,675 L740,660 L720,645 L700,630 L680,615 L660,600 L640,585 L620,570 L600,555 L580,540 L560,525 L540,510 L520,495 L500,480 L480,465 L460,450 L440,435 L420,420 L400,405 L380,390 L360,375 L340,360 L320,345 L300,330 L280,315 L260,300 L240,285 L220,270 L200,255 L180,240 L160,225 L140,210 L120,195 L100,180 L80,165 L60,150 L40,135 L20,120 L0,105 L0,80 L20,65 L40,50 L60,35 L80,20 L100,5 L120,0 L140,0 L160,15 L180,30 L200,45 L220,60 L240,75 L260,90 L280,105 L300,120 L320,135 L340,150 L360,165 L380,180 L400,195 L420,210 L440,225 L460,240 L480,255 L500,270 L520,285 L540,300 L560,315 L580,330 L600,345 L620,360 L640,375 L660,390 L680,405 L700,420 L720,435 L740,450 L760,465 L780,480 L800,495 L820,510 L840,525 L860,540 L880,555 L900,570 L920,585 L940,600 L960,615 L980,630 L1000,645 L1000,670 L980,685 L960,700 L940,715 L920,730 L900,745 L880,760 L860,775 L840,790 L820,805 L800,820 L780,835 L760,850 L740,865 L720,880 L700,895 L680,910 L660,925 L640,940 L620,955 L600,970 L580,985 L560,1000 L540,1000 L520,985 L500,970 L480,955 L460,940 L440,925 L420,910 L400,895 L380,880 L360,865 L340,850 L320,835 L300,820 L280,805 L260,790 L240,775 L220,760 L200,745 L180,730 L160,715 L140,700 L120,685 L100,670 L80,655 L60,640 L40,625 L20,610 L0,595 L0,570 L20,555 L40,540 L60,525 L80,510 L100,495 L120,480 L140,465 L160,450 L180,435 L200,420 L220,405 L240,390 L260,375 L280,360 L300,345 L320,330 L340,315 L360,300 L380,285 L400,270 L420,255 L440,240 L460,225 L480,210 L500,195 L520,180 L540,165 L560,150 L580,135 L600,120 L620,105 L640,90 L660,75 L680,60 L700,45 L720,30 L740,15 L760,0 L780,0 L800,15 L820,30 L840,45 L860,60 L880,75 L900,90 L920,105 L940,120 L960,135 L980,150 L1000,165 L1000,190 L980,205 L960,220 L940,235 L920,250 L900,265 L880,280 L860,295 L840,310 L820,325 L800,340 L780,355 L760,370 L740,385 L720,400 L700,415 L680,430 L660,445 L640,460 L620,475 L600,490 L580,505 L560,520 L540,535 L520,550 L500,565 L480,580 L460,595 L440,610 L420,625 L400,640 L380,655 L360,670 L340,685 L320,700 L300,715 L280,730 L260,745 L240,760 L220,775 L200,790 L180,805 L160,820 L140,835 L120,850 L100,865 L80,880 L60,895 L40,910 L20,925 L0,940 L0,965 L20,980 L40,995 L60,1000 L80,1000 L100,985 L120,970 L140,955 L160,940 L180,925 L200,910 L220,895 L240,880 L260,865 L280,850 L300,835 L320,820 L340,805 L360,790 L380,775 L400,760 L420,745 L440,730 L460,715 L480,700 L500,685 L520,670 L540,655 L560,640 L580,625 L600,610 L620,595 L640,580 L660,565 L680,550 L700,535 L720,520 L740,505 L760,490 L780,475 L800,460 L820,445 L840,430 L860,415 L880,400 L900,385 L920,370 L940,355 L960,340 L980,325 L1000,310 L1000,285 L980,270 L960,255 L940,240 L920,225 L900,210 L880,195 L860,180 L840,165 L820,150 L800,135 L780,120 L760,105 L740,90 L720,75 L700,60 L680,45 L660,30 L640,15 L620,0 L600,0 L580,15 L560,30 L540,45 L520,60 L500,75 L480,90 L460,105 L440,120 L420,135 L400,150 L380,165 L360,180 L340,195 L320,210 L300,225 L280,240 L260,255 L240,270 L220,285 L200,300 L180,315 L160,330 L140,345 L120,360 L100,375 L80,390 L60,405 L40,420 L20,435 L0,450 L0,475 L20,490 L40,505 L60,520 L80,535 L100,550 L120,565 L140,580 L160,595 L180,610 L200,625 L220,640 L240,655 L260,670 L280,685 L300,700 L320,715 L340,730 L360,745 L380,760 L400,775 L420,790 L440,805 L460,820 L480,835 L500,850 L520,865 L540,880 L560,895 L580,910 L600,925 L620,940 L640,955 L660,970 L680,985 L700,1000 L720,1000 L740,985 L760,970 L780,955 L800,940 L820,925 L840,910 L860,895 L880,880 L900,865 L920,850 L940,835 L960,820 L980,805 L1000,790 L1000,765 L980,750 L960,735 L940,720 L920,705 L900,690 L880,675 L860,660 L840,645 L820,630 L800,615 L780,600 L760,585 L740,570 L720,555 L700,540 L680,525 L660,510 L640,495 L620,480 L600,465 L580,450 L560,435 L540,420 L520,405 L500,390 L480,375 L460,360 L440,345 L420,330 L400,315 L380,300 L360,285 L340,270 L320,255 L300,240 L280,225 L260,210 L240,195 L220,180 L200,165 L180,150 L160,135 L140,120 L120,105 L100,90 L80,75 L60,60 L40,45 L20,30 L0,15 L0,0 L20,0 L40,15 L60,30 L80,45 L100,60 L120,75 L140,90 L160,105 L180,120 L200,135 L220,150 L240,165 L260,180 L280,195 L300,210 L320,225 L340,240 L360,255 L380,270 L400,285 L420,300 L440,315 L460,330 L480,345 L500,360 L520,375 L540,390 L560,405 L580,420 L600,435 L620,450 L640,465 L660,480 L680,495 L700,510 L720,525 L740,540 L760,555 L780,570 L800,585 L820,600 L840,615 L860,630 L880,645 L900,660 L920,675 L940,690 L960,705 L980,720 L1000,735 L1000,760 L980,775 L960,790 L940,805 L920,820 L900,835 L880,850 L860,865 L840,880 L820,895 L800,910 L780,925 L760,940 L740,955 L720,970 L700,985 L680,1000 L660,1000 L640,985 L620,970 L600,955 L580,940 L560,925 L540,910 L520,895 L500,880 L480,865 L460,850 L440,835 L420,820 L400,805 L380,790 L360,775 L340,760 L320,745 L300,730 L280,715 L260,700 L240,685 L220,670 L200,655 L180,640 L160,625 L140,610 L120,595 L100,580 L80,565 L60,550 L40,535 L20,520 L0,505 L0,480 L20,465 L40,450 L60,435 L80,420 L100,405 L120,390 L140,375 L160,360 L180,345 L200,330 L220,315 L240,300 L260,285 L280,270 L300,255 L320,240 L340,225 L360,210 L380,195 L400,180 L420,165 L440,150 L460,135 L480,120 L500,105 L520,90 L540,75 L560,60 L580,45 L600,30 L620,15 L640,0 L660,0 L680,15 L700,30 L720,45 L740,60 L760,75 L780,90 L800,105 L820,120 L840,135 L860,150 L880,165 L900,180 L920,195 L940,210 L960,225 L980,240 L1000,255 L1000,280 L980,295 L960,310 L940,325 L920,340 L900,355 L880,370 L860,385 L840,400 L820,415 L800,430 L780,445 L760,460 L740,475 L720,490 L700,505 L680,520 L660,535 L640,550 L620,565 L600,580 L580,595 L560,610 L540,625 L520,640 L500,655 L480,670 L460,685 L440,700 L420,715 L400,730 L380,745 L360,760 L340,775 L320,790 L300,805 L280,820 L260,835 L240,850 L220,865 L200,880 L180,895 L160,910 L140,925 L120,940 L100,955 L80,970 L60,985 L40,1000 L60,1000 L80,985 L100,970 L120,955 L140,940 L160,925 L180,910 L200,895 L220,880 L240,865 L260,850 L280,835 L300,820 L320,805 L340,790 L360,775 L380,760 L400,745 L420,730 L440,715 L460,700 L480,685 L500,670 L520,655 L540,640 L560,625 L580,610 L600,595 L620,580 L640,565 L660,550 L680,535 L700,520 L720,505 L740,490 L760,475 L780,460 L800,445 L820,430 L840,415 L860,400 L880,385 L900,370 L920,355 L940,340 L960,325 L980,310 L1000,295 L1000,270 L980,255 L960,240 L940,225 L920,210 L900,195 L880,180 L860,165 L840,150 L820,135 L800,120 L780,105 L760,90 L740,75 L720,60 L700,45 L680,30 L660,15 L640,0 L620,0 L600,15 L580,30 L560,45 L540,60 L520,75 L500,90 L480,105 L460,120 L440,135 L420,150 L400,165 L380,180 L360,195 L340,210 L320,225 L300,240 L280,255 L260,270 L240,285 L220,300 L200,315 L180,330 L160,345 L140,360 L120,375 L100,390 L80,405 L60,420 L40,435 L20,450 L0,465 L0,490 L20,505 L40,520 L60,535 L80,550 L100,565 L120,580 L140,595 L160,610 L180,625 L200,640 L220,655 L240,670 L260,685 L280,700 L300,715 L320,730 L340,745 L360,760 L380,775 L400,790 L420,805 L440,820 L460,835 L480,850 L500,865 L520,880 L540,895 L560,910 L580,925 L600,940 L620,955 L640,970 L660,985 L680,1000 L700,1000 L720,985 L740,970 L760,955 L780,940 L800,925 L820,910 L840,895 L860,880 L880,865 L900,850 L920,835 L940,820 L960,805 L980,790 L1000,775 L1000,750 L980,735 L960,720 L940,705 L920,690 L900,675 L880,660 L860,645 L840,630 L820,615 L800,600 L780,585 L760,570 L740,555 L720,540 L700,525 L680,510 L660,495 L640,480 L620,465 L600,450 L580,435 L560,420 L540,405 L520,390 L500,375 L480,360 L460,345 L440,330 L420,315 L400,300 L380,285 L340,270 L320,255 L300,240 L280,225 L260,210 L240,195 L220,180 L200,165 L180,150 L160,135 L140,120 L120,105 L100,90 L80,75 L60,60 L40,45 L20,30 L0,15 L0,0 L0,0 Z" />
                  </g>

                  {/* Connection Lines */}
                  <g stroke="rgba(200,162,118,0.18)" strokeWidth="1" fill="none">
                    <line x1="360" y1="470" x2="460" y2="560" />
                    <line x1="460" y1="560" x2="520" y2="600" />
                    <line x1="520" y1="600" x2="500" y2="640" />
                    <line x1="500" y1="640" x2="490" y2="650" />
                    <line x1="490" y1="650" x2="580" y2="660" />
                    <line x1="580" y1="660" x2="580" y2="240" />
                    <line x1="580" y1="240" x2="520" y2="180" />
                  </g>

                  {/* City Markers with Pulsing Animation and Tooltips */}
                  {[
                    { name: 'Bangalore', x: 520, y: 600 },
                    { name: 'Chennai', x: 580, y: 660 },
                    { name: 'Coimbatore', x: 500, y: 640 },
                    { name: 'Tiruppur', x: 490, y: 650 },
                    { name: 'Pune', x: 460, y: 560 },
                    { name: 'Surat', x: 360, y: 470 },
                    { name: 'Noida', x: 580, y: 240 },
                    { name: 'Ludhiana', x: 520, y: 180 }
                  ].map((c) => (
                    <g key={c.name}>
                      {/* Pulsing Glow Effect */}
                      <motion.circle
                        cx={c.x} cy={c.y} r="12"
                        fill="url(#markerGlow)"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Clickable Marker Area */}
                      <motion.circle
                        cx={c.x} cy={c.y} r="16"
                        fill="transparent"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHoveredCity(c.name)}
                        onMouseLeave={() => setHoveredCity(null)}
                        onClick={() => navigate('/contact')}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Outer Ring */}
                      <circle cx={c.x} cy={c.y} r="8" fill="#C8A276" stroke="#D4AF37" strokeWidth="2" filter="url(#glow)" />
                      
                      {/* Inner Circle */}
                      <circle cx={c.x} cy={c.y} r="4" fill="#0B192C" />
                      
                      {/* City Label */}
                      <text x={c.x + 14} y={c.y + 6} fill="#F5F5F5" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500">
                        {c.name}
                      </text>
                      
                      {/* Tooltip */}
                      {hoveredCity === c.name && (
                        <motion.g
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <rect
                            x={c.x - 60}
                            y={c.y - 45}
                            width={120}
                            height={32}
                            rx={6}
                            fill="rgba(11,25,44,0.95)"
                            stroke="rgba(200,162,118,0.3)"
                            strokeWidth="1"
                          />
                          <text
                            x={c.x}
                            y={c.y - 26}
                            fill="#C8A276"
                            fontSize="10"
                            fontFamily="Inter, sans-serif"
                            fontWeight="600"
                            textAnchor="middle"
                          >
                            {cityDescriptions[c.name]}
                          </text>
                          {/* Tooltip Arrow */}
                          <polygon
                            points={`${c.x},${c.y - 13} ${c.x - 5},${c.y - 13} ${c.x},${c.y - 8}`}
                            fill="rgba(11,25,44,0.95)"
                            stroke="rgba(200,162,118,0.3)"
                            strokeWidth="1"
                          />
                        </motion.g>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            </motion.div>

            <motion.div style={{ width: 320, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 12 }} variants={itemVariants}>
              <div style={{ borderRadius: 12, padding: 16, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ color: '#F5F5F5', fontWeight: 800, fontSize: 15 }}>MSME Clusters</div>
                <ul style={{ color: 'var(--text-muted)', marginTop: 10, paddingLeft: 20, lineHeight: 1.8 }}>
                  <li>Bangalore — Manufacturing & Tech</li>
                  <li>Chennai — Automotive & Textiles</li>
                  <li>Pune — Engineering & Logistics</li>
                  <li>Surat — Textiles & Exports</li>
                </ul>
              </div>

              <div style={{ borderRadius: 12, padding: 16, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ color: '#F5F5F5', fontWeight: 800, fontSize: 15 }}>Highlights</div>
                <div style={{ color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.6 }}>
                  Location markers with gold highlight indicate prioritized territories for initial rollout and partnership development.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* IDEAL PARTNER PROFILE */}
      <motion.section 
        className="section" 
        style={{ padding: '56px 0' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}
            variants={fadeInUp}
          >
            Ideal Partner Profile
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
            {['Business Consultants','Sales Professionals','Technology Resellers','Compliance Experts','System Integrators','Regional Distributors','Strategic Investors'].map((t) => (
              <motion.div 
                key={t} 
                className="glass-card" 
                style={{ padding: 16, borderRadius: 14, cursor: 'pointer', border: '1px solid rgba(200,162,118,0.06)', background: 'rgba(17,34,64,0.55)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(200,162,118,0.06)', border: '1px solid rgba(200,162,118,0.08)' }}>
                    <Briefcase color="#C8A276" size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#F5F5F5', fontWeight: 800, fontSize: 14 }}>{t}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 2 }}>Tap for fit & next steps</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SUCCESS METRICS */}
      <motion.section 
        className="section" 
        style={{ padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <motion.div 
              style={{ flex: '1 1 180px', padding: 20, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 22 }}><CountUp end={4} /></div>
              <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Market Ready Products</div>
            </motion.div>

            <motion.div 
              style={{ flex: '1 1 180px', padding: 20, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 22 }}><CountUp end={8} /></div>
              <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Target Industry Clusters</div>
            </motion.div>

            <motion.div 
              style={{ flex: '1 1 180px', padding: 20, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 22 }}><CountUp end={300} suffix={'+'} /></div>
              <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Lakh Revenue Potential</div>
            </motion.div>

            <motion.div 
              style={{ flex: '1 1 180px', padding: 20, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-normal)' }}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
            >
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 22 }}>100%</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>Partner Enablement Support</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section 
        className="section" 
        style={{ padding: '64px 0 120px 0' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeInUp}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
            style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '30px', marginBottom: 8 }}
            variants={fadeInUp}
          >
            Ready to Build a High-Growth Partnership?
          </motion.h2>
          <motion.p 
            style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 600, margin: '0 auto 24px auto' }}
            variants={fadeInUp}
          >
            Join our ecosystem of enterprise partners and unlock scalable revenue opportunities with market-ready solutions.
          </motion.p>
          <motion.div 
            style={{ display: 'flex', gap: 12, justifyContent: 'center' }}
            variants={itemVariants}
          >
            <motion.button 
              className="btn btn-cta" 
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Become a Partner
            </motion.button>
            <motion.button 
              className="btn" 
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Schedule a Discussion
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

