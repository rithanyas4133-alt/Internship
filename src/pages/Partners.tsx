import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  Repeat,
  Users,
  Globe,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  Sparkles,
  PieChart,
  Briefcase,
  Target,
  FileCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
  Lock,
  Info
} from 'lucide-react';
import IndiaMap from '../components/IndiaMap';
import WorldMap from '../components/WorldMap';

// Custom CSS Variable scoped wrapper
export default function Partners() {
  const navigate = useNavigate();
  
  // Section 3: Orbit Ecosystem benefits state
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  // Section 9: Ideal profiles active selection state
  const [activeAudience, setActiveAudience] = useState<number>(0);
  
  // Mouse parallax hook for Hero Visual
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setMousePos({ x, y });
  };

  // Section 3 Benefits data
  const benefits = [
    {
      title: 'Ready-to-Market Products',
      icon: Award,
      desc: 'Deploy 4 pre-built, robust enterprise software suites with proven product-market fit.',
      detail: 'Instantly sell high-value solutions like Vericea and FactSafe without waiting for custom coding or R&D.'
    },
    {
      title: 'Low Technology Risk',
      icon: ShieldCheck,
      desc: 'CEA handles development, hosting, and security. Zero developer overhead for you.',
      detail: 'Leverage our robust, certified enterprise infrastructure. We manage updates, bugs, hosting, and security audits.'
    },
    {
      title: 'Faster First Revenue',
      icon: Zap,
      desc: 'Shorter sales cycles and ready-to-use demos get you earning in weeks, not months.',
      detail: 'Our streamlined implementation frameworks allow you to close deals and execute deployments in record time.'
    },
    {
      title: 'Run It Your Way',
      icon: Target,
      desc: 'Complete commercial autonomy. Set your own margins, service fees, and terms.',
      detail: 'Operate as an independent entity. You maintain complete control over customer pricing and billing schedules.'
    },
    {
      title: 'Recurring SaaS Revenue',
      icon: Repeat,
      desc: 'Predictable multi-year licensing fee splits with customers. Compound your wealth.',
      detail: 'Generate long-term recurring revenue. Annual subscription renewals secure stable year-on-year business growth.'
    },
    {
      title: '5 Industries To Sell Into',
      icon: Layers,
      desc: 'Target Apparel, Manufacturing, Logistics, Construction, and Finance markets.',
      detail: 'Wide-open addressable market. Tap into diverse MSME clusters spanning engineering, textiles, and compliance.'
    }
  ];

  // Section 5 Business Models data
  const businessModels = [
    {
      title: 'Growth Consultant',
      badge: 'Strategic Enabler',
      investment: '₹5–10 Lakhs',
      investmentVal: 10,
      teamSize: '1–3 Experts',
      revenue: '₹1.5 Crores',
      revenueVal: 150,
      roi: '15x',
      trajectory: 'Focuses on integrating compliance audit solutions, process mapping, and advisory audits into regional manufacturing clusters.',
      skills: ['Business Auditing', 'Regulatory Compliance', 'Client Relationship Advisory']
    },
    {
      title: 'Tech Reseller',
      badge: 'Integration Specialist',
      investment: '₹10–20 Lakhs',
      investmentVal: 20,
      teamSize: '3–5 Engineers',
      revenue: '₹1.5 Crores',
      revenueVal: 150,
      roi: '7.5x',
      trajectory: 'Drives SaaS deployments, custom system configurations, and handles localized front-line support services for enterprise clients.',
      skills: ['Software Sales', 'SaaS Implementation', 'First-Line Technical Support']
    },
    {
      title: 'Regional Distributor',
      badge: 'Territory Champion',
      investment: '₹20–50 Lakhs',
      investmentVal: 50,
      teamSize: '5–10 Professionals',
      revenue: '₹3.0+ Crores',
      revenueVal: 300,
      roi: '6x+',
      trajectory: 'Enjoys complete exclusive administrative control over designated states. Builds, trains, and manages their own sub-reseller networks.',
      skills: ['Sales Management', 'Network Building', 'Large Territory Operations']
    }
  ];

  // Section 6 Revenue projections data
  const revenueData = {
    consultant: {
      year1: 25,
      year2: 75,
      year3: 150,
      profit: '₹60 Lakhs',
      margin: '40%',
      customers: '12 clients'
    },
    reseller: {
      year1: 30,
      year2: 85,
      year3: 150,
      profit: '₹75 Lakhs',
      margin: '50%',
      customers: '15 clients'
    },
    distributor: {
      year1: 50,
      year2: 150,
      year3: 300,
      profit: '₹1.8 Crores',
      margin: '60%',
      customers: '40+ clients (including sub-resellers)'
    }
  };



  // Section 9 Target Audiences
  const targetAudiences = [
    { title: 'BD Professionals', icon: Users, badge: 'Direct Sales Partner', synergy: 95, focus: 'Direct Lead Gen & Demos', desc: 'Individual business developers with deep relationships inside target factories. Tap into your existing contacts to introduce Vericea suites.' },
    { title: 'Sales Agencies', icon: TrendingUp, badge: 'Channel Accelerator', synergy: 90, focus: 'Market Campaigns', desc: 'Established regional agencies looking to expand their portfolio with premium enterprise SaaS packages.' },
    { title: 'Industry Consultants', icon: Briefcase, badge: 'Process Advisory', synergy: 92, focus: 'Scoping & Workflow Audits', desc: 'Operations and management consultants auditing manufacturer workflows. Recommend CEA platforms to address yield and efficiency issues.' },
    { title: 'Compliance Firms', icon: FileCheck, badge: 'Governance Partner', synergy: 96, focus: 'Continuous Audit Preparedness', desc: 'Auditing bodies looking to automate proof collection. Introduce Vericea Compliance to eliminate manual paperwork and secure constant audit readiness.' },
    { title: 'Tech Resellers', icon: Cpu, badge: 'Systems Integrator', synergy: 88, focus: 'Local Deployments & Tech Support', desc: 'IT resellers who package software services. Sell, setup, and provide first-line localized support for CEA platforms.' },
    { title: 'Solution Providers', icon: Sparkles, badge: 'Implementation Partner', synergy: 85, focus: 'Custom Technical Scoping', desc: 'Software development agencies looking to bundle ready-made tools rather than coding systems from scratch.' },
    { title: 'Regional Partners', icon: Globe, badge: 'Territory Master', synergy: 94, focus: 'Exclusive Territory Control', desc: 'Prominent business developers seeking control over exclusive territories. Build sub-reseller routes within your state.' },
    { title: 'Industry Networks', icon: Layers, badge: 'Network Accelerator', synergy: 87, focus: 'Consortium-Wide Deployments', desc: 'Associations representing local manufacturers. Introduce CEA to members to digitize and optimize entire cluster sectors.' },
    { title: 'Strategic Investors', icon: HeartHandshake, badge: 'Equity Growth Partner', synergy: 82, focus: 'Territory Scaling & Funding', desc: 'Capital partners backing regional distributor models. Fund territory rollout operations and scale reseller teams.' }
  ];

  // Intersection reveal animations helper
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  return (
    <div className="partners-page" onMouseMove={handleMouseMove}>
      {/* Background texture wrapper */}
      <div className="partners-page-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

      {/* ── SECTION 1: HERO ────────────────────────────────────────────────── */}
      <section 
        style={{ 
          padding: '160px 0 100px 0', 
          position: 'relative', 
          zIndex: 1,
          borderBottom: '1px solid var(--gold-divider)',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(11, 25, 44, 0.9), rgba(11, 25, 44, 0.96)), url("/images/business_consultation_1780850767888.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 540px' }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span 
                style={{ 
                  color: 'var(--supporting)', 
                  fontWeight: '800', 
                  textTransform: 'uppercase', 
                  fontSize: '13px', 
                  letterSpacing: '2.5px',
                  display: 'inline-block',
                  marginBottom: '14px'
                }}
              >
                CEA INFOTECH CO-INVESTMENT JOINT VENTURE
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ 
                fontFamily: 'var(--font-headings)', 
                color: '#ffffff', 
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
                lineHeight: 1.05,
                fontWeight: 900,
                margin: 0,
                letterSpacing: '-1.5px'
              }}
            >
              We Built The Software.<br />
              <span style={{ color: 'var(--accent)' }}>You Build The Empire.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ 
                color: 'var(--text-muted)', 
                marginTop: '20px', 
                fontSize: '18px', 
                lineHeight: 1.6,
                maxWidth: '620px'
              }}
            >
              A co-investment joint venture for entrepreneurs, consultants, sales organizations, and growth partners. Leverage ready-to-market software packages to capitalize on booming industrial clusters.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}
            >
              <button className="btn btn-cta" onClick={() => navigate('/contact')}>
                Become a Partner
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  // Direct download fallback
                  window.open('/images/partners_prospectus.pdf', '_blank');
                }}
              >
                Download Prospectus
              </button>
            </motion.div>
          </div>

          {/* Interactive Parallax Ecosystem Canvas */}
          <div style={{ flex: '1 1 420px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <motion.div
              style={{
                width: '460px',
                height: '460px',
                position: 'relative'
              }}
              animate={{
                x: mousePos.x,
                y: mousePos.y
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {/* Outer orbit lines */}
              <div style={{ position: 'absolute', inset: '40px', border: '1px dashed rgba(212, 168, 90, 0.15)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', inset: '100px', border: '1px dashed rgba(212, 168, 90, 0.1)', borderRadius: '50%' }} />

              {/* Central Glowing Core */}
              <div 
                style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212,168,90,0.2) 0%, transparent 70%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                <div 
                  style={{ 
                    width: '74px', 
                    height: '74px', 
                    borderRadius: '50%', 
                    background: 'rgba(31, 58, 95, 0.9)', 
                    border: '2px solid var(--accent)',
                    boxShadow: '0 0 30px rgba(212,168,90,0.3)',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <Cpu size={30} color="#D4A85A" />
                </div>
              </div>

              {/* Floating Node 1: Manufacturing */}
              <div className="partners-float-1" style={{ position: 'absolute', left: '15%', top: '15%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A85A' }} />
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Manufacturing</span>
                  </div>
                </div>
              </div>

              {/* Floating Node 2: Logistics */}
              <div className="partners-float-2" style={{ position: 'absolute', right: '10%', top: '25%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A85A' }} />
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Logistics</span>
                  </div>
                </div>
              </div>

              {/* Floating Node 3: Compliance */}
              <div className="partners-float-3" style={{ position: 'absolute', left: '8%', bottom: '25%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A85A' }} />
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Compliance</span>
                  </div>
                </div>
              </div>

              {/* Floating Node 4: Risk Management */}
              <div className="partners-float-1" style={{ position: 'absolute', right: '18%', bottom: '15%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A85A' }} />
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Risk Management</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Connection lines in background */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <path d="M 120 100 Q 230 180 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 370 140 Q 280 200 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 340 360 Q 250 280 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PRODUCT ECOSYSTEM SHOWCASE ────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--soft-surface) 0%, var(--light-surface) 100%)', borderBottom: '1px solid rgba(11, 25, 44, 0.1)' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#0F172A', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              OUR SOLUTION SUITES
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0B192C', marginTop: '10px' }}>
              Enterprise Software Portfolio
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Explore the market-ready platforms. Each package is tailored to optimize production, manage logistics spend, control audit checklists, or minimize vendor risk.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Production Efficiency & Defect Tracking',
                tag: 'OEE & DEFECTS',
                img: '/images/flagship_manufacturing.jpg',
                url: '/products/vericea-manufacturing',
                desc: 'Real-time production visibility, yield metrics, and AI-enabled defect tracking to optimize factory floor execution.',
                focus: 'Smart Factory Operations'
              },
              {
                title: 'Courier Expense Control & Analytics',
                tag: 'LOGISTICS SPEND',
                img: '/images/flagship_courier.jpg',
                url: '/products/courier-cost-management',
                desc: 'Deep audit analytics mapping shipping invoices to courier SLAs. Reclaims automated refunds for late shipments.',
                focus: 'Logistics Optimization'
              },
              {
                title: 'Compliance Audit Management & Tracking',
                tag: 'GOVERNANCE & AUDIT',
                img: '/images/flagship_compliance.jpg',
                url: '/products/vericea-compliance',
                desc: 'Automates scheduling and tracks visual evidence of regulatory compliance metrics across manufacturing facilities.',
                focus: 'Regulatory Governance'
              },
              {
                title: 'Risk Assessment & Monitoring',
                tag: 'RISK CONTROL',
                img: '/images/flagship_factsafe.jpg',
                url: '/products/factsafe',
                desc: 'Proactive industrial safety monitoring, vendor surveys, and real-time environment dashboard logs.',
                focus: 'Enterprise Risk Dashboard'
              }
            ].map((p, idx) => {
              // Alternate background: Card 1 (idx=0) & 3 (idx=2) are Royal Blue (Dark)
              // Card 2 (idx=1) & 4 (idx=3) are Light Enterprise Blue (Light)
              const isDarkCard = idx % 2 === 0;
              const cardBg = isDarkCard ? '#0B192C' : '#E6EFF6';
              const cardBorder = isDarkCard ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(11, 25, 44, 0.08)';
              const cardTitleColor = isDarkCard ? '#ffffff' : '#0B192C';
              const cardDescColor = isDarkCard ? '#CBD5E1' : '#334155';
              const cardFocusColor = isDarkCard ? '#D4A85A' : '#9E7D55';
              const cardBtnColor = isDarkCard ? '#ffffff' : '#0B192C';

              return (
                <motion.div
                  key={idx}
                  className="gold-border-glow-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: cardBg,
                    border: cardBorder,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Visual Area */}
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="showcase-img"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: isDarkCard ? 'linear-gradient(to top, #0B192C 0%, transparent 100%)' : 'linear-gradient(to top, #E6EFF6 0%, transparent 100%)' }} />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        bottom: '12px', 
                        left: '16px', 
                        fontSize: '10px', 
                        fontWeight: '800', 
                        color: isDarkCard ? 'var(--accent)' : '#9E7D55', 
                        background: isDarkCard ? 'rgba(11, 25, 44, 0.9)' : 'rgba(230, 239, 246, 0.9)', 
                        border: isDarkCard ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(11, 25, 44, 0.1)', 
                        padding: '3px 8px', 
                        borderRadius: '4px' 
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  {/* Info Content */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: cardTitleColor, margin: 0, minHeight: '52px', lineHeight: '1.3' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: cardDescColor, fontSize: '13px', lineHeight: '1.5', marginTop: '10px', flexGrow: 1 }}>
                      {p.desc}
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '12px', borderTop: isDarkCard ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(11, 25, 44, 0.08)' }}>
                      <span style={{ fontSize: '11px', color: cardFocusColor, fontWeight: '750' }}>
                        {p.focus}
                      </span>
                      <button 
                        onClick={() => navigate(p.url)}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: cardBtnColor, 
                          fontWeight: '700', 
                          fontSize: '12px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '4px', 
                          cursor: 'pointer' 
                        }}
                      >
                        Details
                        <ChevronRight size={14} color={isDarkCard ? "#D4A85A" : "#9E7D55"} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY PARTNERS SAY YES ────────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              TANGIBLE BENEFITS
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Why Partners Say Yes
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              An interactive look at our partnership benefits. Hover over or tap any node to inspect detailed business impact metrics.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Interactive orbit visualizer */}
            <div 
              style={{ 
                flex: '1 1 420px', 
                height: '420px', 
                position: 'relative', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
              }}
            >
              {/* Outer boundary circular path */}
              <div 
                style={{ 
                  position: 'absolute', 
                  width: '320px', 
                  height: '320px', 
                  border: '2px dashed rgba(212, 175, 55, 0.45)', // Brighter gold border
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }} 
              />

              {/* Radial spoke connection lines with bright matte gold & glow */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <defs>
                  <filter id="gold-spoke-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {benefits.map((_, idx) => {
                  const angle = (idx * 360) / 6;
                  const radius = 160;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <g key={idx}>
                      {/* Thicker base line with glow */}
                      <line
                        x1={210}
                        y1={210}
                        x2={210 + x}
                        y2={210 + y}
                        stroke="#D4AF37"
                        strokeWidth="3.5"
                        opacity="0.5"
                        filter="url(#gold-spoke-glow)"
                      />
                      {/* Active running pulse on top */}
                      <motion.line
                        x1={210}
                        y1={210}
                        x2={210 + x}
                        y2={210 + y}
                        stroke="#D4AF37"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                        animate={{ strokeDashoffset: [0, -28] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central Core: CEA Partner Network */}
              <div 
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'rgba(43, 74, 115, 0.95)',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 35px rgba(212,168,90,0.25)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '12px',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CEA</div>
                <div style={{ fontSize: '14px', fontWeight: '900', color: '#ffffff', marginTop: '2px', lineHeight: 1.2 }}>Partner Ecosystem</div>
              </div>

              {/* Six orbiting benefit nodes */}
              {benefits.map((b, idx) => {
                const angle = (idx * 360) / 6;
                // Calculate position relative to center
                const radius = 160; // radius of orbit
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                const isSelected = activeBenefit === idx;
                const BIcon = b.icon;

                return (
                  <motion.div
                    key={idx}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 3
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <button
                      onClick={() => setActiveBenefit(isSelected ? null : idx)}
                      onMouseEnter={() => setActiveBenefit(idx)}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--accent)' : 'rgba(43, 74, 115, 0.9)',
                        border: isSelected ? '2px solid #ffffff' : '1px solid var(--accent)',
                        boxShadow: isSelected ? '0 0 20px var(--accent)' : 'var(--shadow-sm)',
                        display: 'grid',
                        placeItems: 'center',
                        color: isSelected ? '#1F3A5F' : '#D4A85A',
                        cursor: 'pointer',
                        transition: 'all 0.25s'
                      }}
                    >
                      <BIcon size={20} />
                    </button>
                    
                    {/* Small tag next to node */}
                    <div
                      style={{
                        position: 'absolute',
                        left: x > 0 ? '56px' : 'auto',
                        right: x <= 0 ? '56px' : 'auto',
                        top: '14px',
                        whiteSpace: 'nowrap',
                        background: 'rgba(14, 31, 53, 0.85)',
                        border: '1px solid rgba(212,168,90,0.15)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '10px',
                        color: '#ffffff',
                        fontWeight: '700',
                        opacity: 0.95,
                        pointerEvents: 'none'
                      }}
                    >
                      {b.title}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Benefit details display panel */}
            <div style={{ flex: '1 1 360px' }}>
              <AnimatePresence mode="wait">
                {activeBenefit !== null ? (
                  <motion.div
                    key={activeBenefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: 'rgba(43, 74, 115, 0.5)',
                      border: '1px solid var(--accent)',
                      borderRadius: '18px',
                      padding: '28px',
                      boxShadow: 'var(--shadow-lg)',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(212, 168, 90, 0.15)', display: 'grid', placeItems: 'center' }}>
                        {(() => {
                          const IconComp = benefits[activeBenefit].icon;
                          return <IconComp size={22} color="#D4A85A" />;
                        })()}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '12px', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                          BENEFIT HIGHLIGHT
                        </h4>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                          {benefits[activeBenefit].title}
                        </h3>
                      </div>
                    </div>
                    
                    <p style={{ fontSize: '15px', color: '#ffffff', fontWeight: '600', lineHeight: '1.5' }}>
                      {benefits[activeBenefit].desc}
                    </p>
                    
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                      {benefits[activeBenefit].detail}
                    </p>
                  </motion.div>
                ) : (
                  <div 
                    style={{
                      background: 'rgba(43, 74, 115, 0.2)',
                      border: '1px dashed var(--border-color)',
                      borderRadius: '18px',
                      padding: '40px 28px',
                      textAlign: 'center',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <Info size={32} color="#D4A85A" style={{ marginBottom: '12px' }} />
                    <h4 style={{ color: '#ffffff', fontWeight: '800', margin: '0 0 4px 0' }}>Explore Benefits Network</h4>
                    <p style={{ margin: 0, fontSize: '13px' }}>Hover over or select any of the benefit orbital nodes in the network system to read detailed metrics.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REVENUE SHARING MODEL ───────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--soft-surface) 0%, var(--light-surface) 100%)', borderBottom: '1px solid rgba(11, 25, 44, 0.1)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#0F172A', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              MUTUAL CO-INVESTMENT MODEL
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0B192C', marginTop: '10px' }}>
              Revenue Sharing Joint Venture
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              A premium split-screen breakdown showing exactly how roles are distributed to drive scalable success.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', flexWrap: 'wrap' }}>
            {/* Left side: CEA Infotech Provides */}
            <div 
              style={{ 
                flex: '1 1 320px', 
                borderRadius: '18px', 
                padding: '28px', 
                background: 'rgba(255, 255, 255, 0.9)', 
                border: '1px solid rgba(11, 25, 44, 0.08)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0B192C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} color="#9E7D55" />
                CEA Infotech Provides
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'Core Technology', desc: 'Secure enterprise cloud codebase.' },
                  { title: 'Server Infrastructure', desc: 'Scalable cloud databases and data lakes.' },
                  { title: 'Hosting & Security', desc: '24/7 server monitoring, SSL, backup controls.' },
                  { title: 'Implementation Consulting', desc: 'Assistance during complex system scoping.' },
                  { title: 'Dedicated Support', desc: 'Expert level troubleshooting assistance.' },
                  { title: 'Product Upgrades', desc: 'Continuous enhancements and version patches.' },
                  { title: 'Consulting Advisory', desc: 'Pre-sales technical and security consults.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="#9E7D55" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '800', color: '#0B192C' }}>{item.title}</h4>
                      <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#475569' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center animated visual */}
            <div 
              style={{ 
                width: '180px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '16px',
                textAlign: 'center',
                flexGrow: 1,
                alignSelf: 'center'
              }}
            >
              <div 
                style={{ 
                  width: '74px', 
                  height: '74px', 
                  borderRadius: '50%', 
                  background: 'rgba(158, 125, 85, 0.12)', 
                  border: '1.5px solid #9E7D55',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 0 25px rgba(158,125,85,0.08)'
                }}
              >
                <HeartHandshake size={32} color="#9E7D55" style={{ animation: 'node-float-3 4s infinite ease-in-out' }} />
              </div>
              <div>
                <div style={{ color: '#0B192C', fontWeight: '900', fontSize: '15px' }}>Revenue Sharing Split</div>
                <div style={{ color: '#475569', fontSize: '11px', marginTop: '4px' }}>Balanced co-investment synergy</div>
              </div>
              
              {/* Dynamic flowing dot indicator */}
              <div style={{ width: '100%', height: '4px', background: 'rgba(11, 25, 44, 0.08)', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    position: 'absolute', 
                    height: '100%', 
                    width: '30%', 
                    background: 'linear-gradient(90deg, transparent, #9E7D55, transparent)', 
                    animation: 'data-pulse-sweep 2.5s infinite linear' 
                  }} 
                />
              </div>
            </div>

            {/* Right side: Partner Provides */}
            <div 
              style={{ 
                flex: '1 1 320px', 
                borderRadius: '18px', 
                padding: '28px', 
                background: 'rgba(255, 255, 255, 0.9)', 
                border: '1px solid rgba(11, 25, 44, 0.08)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0B192C', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} color="#9E7D55" />
                Partner Provides
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'Local Sales & Demos', desc: 'Direct outreach, scoping meetings, closes.' },
                  { title: 'Marketing Campaigns', desc: 'Localized ads, mailers, regional MSME outreach.' },
                  { title: 'Lead Generation', desc: 'Identifying local factories needing digitizing.' },
                  { title: 'Customer Acquisition', desc: 'Managing purchase orders and contract signups.' },
                  { title: 'Territory Expansion', desc: 'Opening sub-franchises and reseller routes.' },
                  { title: 'Relationship Management', desc: 'First line contact and business reviews.' },
                  { title: 'Local Integration Support', desc: 'Assisting client with setup checklists.' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} color="#9E7D55" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '800', color: '#0B192C' }}>{item.title}</h4>
                      <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#475569' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PARTNER BUSINESS MODELS ────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              SCALABLE BUSINESS PATHS
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Choose Your Business Model
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Preserving all prospectus model details. Select a tier below to inspect investment, team scale, and growth trajectory.
            </p>
          </motion.div>

          {/* 3-Column Comparative Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {businessModels.map((model, idx) => {
              const ModelIcon = idx === 0 ? Briefcase : idx === 1 ? Cpu : Globe;
              const modelImage = idx === 0 
                ? '/images/business_consultation_1780850767888.png' 
                : idx === 1 
                  ? '/images/industrial_control_room_1780849774868.png' 
                  : '/images/logistics_terminal_1780850837146.png';

              // Specific titles for Technology Reseller (mapping Tech Reseller to Technology Reseller)
              const displayTitle = idx === 1 ? 'Technology Reseller' : model.title;

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(200, 162, 118, 0.15)' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'rgba(17, 34, 64, 0.65)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-lg)',
                    backdropFilter: 'blur(8px)',
                    height: '100%'
                  }}
                >
                  <div>
                    {/* Visual Imagery */}
                    <div style={{ height: '180px', borderRadius: '12px', overflow: 'hidden', position: 'relative', marginBottom: '20px' }}>
                      <img 
                        src={modelImage} 
                        alt={displayTitle} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 25, 44, 0.8) 0%, transparent 100%)' }} />
                    </div>

                    {/* Badge and Icon header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', background: 'rgba(212, 168, 90, 0.12)', padding: '4px 10px', borderRadius: '4px' }}>
                        {model.badge}
                      </span>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(212, 168, 90, 0.15)', display: 'grid', placeItems: 'center' }}>
                        <ModelIcon size={18} color="#D4A85A" />
                      </div>
                    </div>

                    {/* Model Title */}
                    <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', margin: '0 0 16px 0' }}>
                      {displayTitle}
                    </h3>

                    {/* Trajectory */}
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 24px 0', minHeight: '68px' }}>
                      {model.trajectory}
                    </p>

                    {/* Key Metrics / Revenue Opportunity */}
                    <div style={{ background: 'rgba(14, 31, 53, 0.4)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255,255,255,0.03)', marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                        REVENUE OPPORTUNITY
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Capital Commitment:</span>
                          <span style={{ fontWeight: '700', color: '#ffffff' }}>{model.investment}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Yr 3 Target Revenue:</span>
                          <span style={{ fontWeight: '750', color: 'var(--accent)' }}>{model.revenue}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>ROI Index / Team:</span>
                          <span style={{ fontWeight: '700', color: 'var(--supporting)' }}>{model.roi} / {model.teamSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div>
                    <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      KEY CAPABILITIES
                    </h4>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {model.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          style={{
                            fontSize: '10px',
                            fontWeight: '600',
                            color: '#ffffff',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: '3px 10px',
                            borderRadius: '20px'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: REVENUE OPPORTUNITY DASHBOARD ───────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--soft-surface) 0%, var(--light-surface) 100%)', borderBottom: '1px solid rgba(11, 25, 44, 0.1)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#0F172A', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              GROWTH SIMULATOR
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0B192C', marginTop: '10px' }}>
              Revenue Opportunity Dashboard
            </h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Simulated cumulative revenue growth trajectories and profit yield parameters compared side-by-side across all three partner models.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {([
              { id: 'consultant', label: 'Growth Consultant', barColor: 'linear-gradient(180deg, #3B82F6, #1D4ED8)', accentColor: '#3B82F6' },
              { id: 'reseller', label: 'Technology Reseller', barColor: 'linear-gradient(180deg, #10B981, #047857)', accentColor: '#10B981' },
              { id: 'distributor', label: 'Regional Distributor', barColor: 'linear-gradient(180deg, #F59E0B, #B45309)', accentColor: '#F59E0B' }
            ] as const).map((dashboard) => {
              const data = revenueData[dashboard.id];
              return (
                <motion.div
                  key={dashboard.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    borderRadius: '18px', 
                    padding: '24px', 
                    background: 'rgba(255, 255, 255, 0.9)', 
                    border: '1px solid rgba(11, 25, 44, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '440px'
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#0B192C', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <PieChart size={16} color={dashboard.accentColor} />
                        {dashboard.label}
                      </h4>
                      <span style={{ fontSize: '11px', color: '#475569', fontWeight: '600' }}>Simulated Dashboard</span>
                    </div>

                    {/* Projections summary box */}
                    <div style={{ borderRadius: '12px', padding: '16px', background: 'rgba(11, 25, 44, 0.04)', border: '1px solid rgba(11, 25, 44, 0.06)', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <span style={{ fontSize: '9px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '750' }}>Yr 3 Profit Potential</span>
                          <div style={{ fontSize: '22px', fontWeight: '900', color: '#0B192C', marginTop: '2px' }}>
                            {data.profit}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '9px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: '750' }}>Margin Share</span>
                          <div style={{ fontSize: '14px', fontWeight: '800', color: '#9E7D55', marginTop: '2px' }}>
                            ~{data.margin} split
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chart Visual */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-end', 
                        justifyContent: 'space-around', 
                        height: '160px', 
                        borderBottom: '2px solid rgba(11, 25, 44, 0.1)',
                        paddingBottom: '8px',
                        position: 'relative',
                        marginBottom: '16px'
                      }}
                    >
                      {/* Horizontal reference lines */}
                      <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed rgba(11, 25, 44, 0.05)', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed rgba(11, 25, 44, 0.05)', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed rgba(11, 25, 44, 0.05)', pointerEvents: 'none' }} />

                      {/* Year 1 Bar */}
                      <div style={{ textAlign: 'center', width: '56px', position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#0B192C', marginBottom: '4px' }}>
                          ₹{data.year1}L
                        </div>
                        <motion.div
                          style={{
                            width: '100%',
                            background: dashboard.barColor,
                            borderRadius: '6px 6px 0 0',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(data.year1 / 300) * 110}px` }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                        />
                        <div style={{ fontSize: '10px', fontWeight: '700', color: '#475569', marginTop: '6px' }}>Year 1</div>
                      </div>

                      {/* Year 2 Bar */}
                      <div style={{ textAlign: 'center', width: '56px', position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#0B192C', marginBottom: '4px' }}>
                          ₹{data.year2}L
                        </div>
                        <motion.div
                          style={{
                            width: '100%',
                            background: dashboard.barColor,
                            borderRadius: '6px 6px 0 0',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(data.year2 / 300) * 110}px` }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                        />
                        <div style={{ fontSize: '10px', fontWeight: '700', color: '#475569', marginTop: '6px' }}>Year 2</div>
                      </div>

                      {/* Year 3 Bar */}
                      <div style={{ textAlign: 'center', width: '56px', position: 'relative', zIndex: 1 }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', color: '#0B192C', marginBottom: '4px' }}>
                          ₹{data.year3}L
                        </div>
                        <motion.div
                          style={{
                            width: '100%',
                            background: dashboard.barColor,
                            borderRadius: '6px 6px 0 0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(data.year3 / 300) * 110}px` }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                        />
                        <div style={{ fontSize: '10px', fontWeight: '800', color: '#0B192C', marginTop: '6px' }}>Year 3</div>
                      </div>
                    </div>
                  </div>

                  {/* KPI Indicators bottom row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#475569', borderTop: '1px solid rgba(11, 25, 44, 0.08)', paddingTop: '12px' }}>
                    <div>
                      Target Scale: <span style={{ color: '#0B192C', fontWeight: '700' }}>{data.customers}</span>
                    </div>
                    <div>
                      Yield Profile: <span style={{ color: 'var(--success)', fontWeight: '700' }}>Verified ROI</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PRIORITY TERRITORIES ───────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              PRIORITY TERRITORIES
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Priority Territories & Global Footprint
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Interactive expansion mapping showing high-priority domestic clusters and target international hubs.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A85A', boxShadow: '0 0 8px #D4A85A' }} />
                India Opportunities (Royal Blue + Gold)
              </h3>
              <IndiaMap />
            </div>
            
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A85A', boxShadow: '0 0 8px #D4A85A' }} />
                Global Expansion (Royal Blue + Gold)
              </h3>
              <WorldMap />
            </div>
          </div>
        </div>
      </section>


      {/* ── SECTION 9: WHO WE ARE LOOKING FOR ────────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--soft-surface) 0%, var(--light-surface) 100%)', borderBottom: '1px solid rgba(11, 25, 44, 0.1)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#0F172A', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              IDEAL PROFILES
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#0B192C', marginTop: '10px' }}>
              Who We Are Looking For
            </h2>
            <p style={{ color: '#475569', fontSize: '16px', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Are you positioned to build regional success? Tap on a category below to explore custom synergy scores and target focus areas.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '36px', alignItems: 'stretch', flexWrap: 'wrap' }}>
            {/* Left Column: Interactive Grid of Pills */}
            <div style={{ flex: '1 1 420px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              {targetAudiences.map((aud, idx) => {
                const AudIcon = aud.icon;
                const isActive = activeAudience === idx;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveAudience(idx)}
                    style={{
                      borderRadius: '12px',
                      padding: '16px',
                      background: isActive ? 'rgba(158, 125, 85, 0.15)' : 'rgba(255, 255, 255, 0.85)',
                      border: '1.5px solid',
                      borderColor: isActive ? '#9E7D55' : 'rgba(11, 25, 44, 0.08)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ color: isActive ? '#9E7D55' : '#475569', flexShrink: 0 }}>
                      <AudIcon size={18} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: isActive ? '800' : '650', color: isActive ? '#0B192C' : '#334155' }}>
                      {aud.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Premium Active Detail Card */}
            <div style={{ width: '380px', minWidth: '280px', flexGrow: 1, display: 'flex' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAudience}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1.5px solid #9E7D55',
                    borderRadius: '18px',
                    padding: '32px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    minHeight: '320px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#9E7D55', background: 'rgba(158, 125, 85, 0.12)', padding: '4px 10px', borderRadius: '4px' }}>
                        {targetAudiences[activeAudience].badge}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: '750', color: '#047857' }}>
                        Synergy Score: {targetAudiences[activeAudience].synergy}%
                      </span>
                    </div>
                    
                    <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#0B192C', margin: '0 0 12px 0' }}>
                      {targetAudiences[activeAudience].title}
                    </h3>
                    
                    <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.6', margin: 0 }}>
                      {targetAudiences[activeAudience].desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '24px', borderTop: '1px solid rgba(11, 25, 44, 0.08)', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner Focus Area:</span>
                      <span style={{ fontWeight: '800', color: '#9E7D55' }}>{targetAudiences[activeAudience].focus}</span>
                    </div>
                    
                    {/* Synergy Progress Bar */}
                    <div style={{ width: '100%', height: '6px', background: 'rgba(11, 25, 44, 0.08)', borderRadius: '3px', overflow: 'hidden', marginTop: '12px' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${targetAudiences[activeAudience].synergy}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #9E7D55, #D4AF37)' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: TERRITORIES ARE EXCLUSIVE ─────────────────────────── */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)', borderBottom: '1px solid var(--gold-divider)', position: 'relative', overflow: 'hidden' }}>
        {/* Glowing visual indicators in the background */}
        <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,90,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container">
          <div 
            style={{ 
              borderRadius: '20px', 
              padding: '48px', 
              background: 'linear-gradient(135deg, rgba(43,74,115,0.7) 0%, rgba(27,42,74,0.8) 100%)', 
              border: '1.5px solid var(--accent)',
              boxShadow: 'var(--shadow-xl)',
              backdropFilter: 'blur(8px)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 420px' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--accent)', background: 'rgba(212,168,90,0.12)', padding: '4px 10px', borderRadius: '4px' }}>
                  EXCLUSIVE ROLLOUT
                </span>
                <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#ffffff', marginTop: '12px', letterSpacing: '-0.8px', lineHeight: 1.15 }}>
                  Claim Your Territory.<br />
                  Build Your Market.
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6', marginTop: '16px' }}>
                  Territories are locked strictly on a first-come, first-served basis to secure regional resellers against margin dilution. Partnering with CEA ensures exclusive distribution routes across your chosen state or metro.
                </p>

                {/* Exclusivity lock icon badges */}
                <div style={{ display: 'flex', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Lock size={16} color="#D4A85A" />
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>Strict Territory Lock</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#D4A85A" />
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>100% Margin Integrity</span>
                  </div>
                </div>
              </div>

              {/* Side contact visual block */}
              <div 
                style={{ 
                  flex: '1 1 280px',
                  background: 'rgba(14, 31, 53, 0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <h4 style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--text-muted)' }}>
                  Regional Opportunities
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>South India:</span>
                    <span style={{ fontWeight: '700', color: '#ffffff' }}>Chennai, Coimbatore, Tiruppur</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>West India:</span>
                    <span style={{ fontWeight: '700', color: '#ffffff' }}>Pune, Surat</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>North India:</span>
                    <span style={{ fontWeight: '700', color: '#ffffff' }}>Noida, Ludhiana</span>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '10px', marginTop: '4px', fontSize: '11px', color: 'var(--supporting)', fontWeight: '600' }}>
                  Contact us immediately to verify state exclusivity availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, var(--secondary-bg) 0%, var(--primary-bg) 100%)', position: 'relative' }}>
        {/* Subtle glow background */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(31,58,95,0.85) 0%, transparent 60%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2.5px' }}>
            GET STARTED TODAY
          </span>
          <h2 
            style={{ 
              fontSize: '44px', 
              fontWeight: 900, 
              color: '#ffffff', 
              marginTop: '16px',
              fontFamily: 'var(--font-headings)',
              lineHeight: 1.1,
              letterSpacing: '-1px'
            }}
          >
            Let's Build Success Together
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
            Tap into a multi-crore revenue framework backed by market-ready systems. Set up a strategic alignment discussion with our executive team.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
            <button className="btn btn-cta" onClick={() => navigate('/contact')}>
              Become a Partner
              <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
              Schedule a Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
