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
import CountUp from '../components/CountUp';
import IndiaMap from '../components/IndiaMap';

// Custom CSS Variable scoped wrapper
export default function Partners() {
  const navigate = useNavigate();
  
  // Section 3: Orbit Ecosystem benefits state
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  // Section 5: Business Model state
  const [activeModel, setActiveModel] = useState<number>(0);

  // Section 6: Revenue opportunity state
  const [dashboardModel, setDashboardModel] = useState<'consultant' | 'reseller' | 'distributor'>('consultant');

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
          backgroundImage: 'linear-gradient(rgba(31, 58, 95, 0.78), rgba(14, 31, 53, 0.92)), url("/images/business_consultation_1780850767888.png")',
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
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/images/Vericea.png" alt="Vericea Logo" style={{ height: '14px', width: 'auto', objectFit: 'contain' }} />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Manufacturing</span>
                </div>
              </div>

              {/* Floating Node 2: Logistics */}
              <div className="partners-float-2" style={{ position: 'absolute', right: '10%', top: '25%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/images/Courier Cost Optimizer.png" alt="Courier Cost Optimizer Logo" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Logistics</span>
                </div>
              </div>

              {/* Floating Node 3: Compliance */}
              <div className="partners-float-3" style={{ position: 'absolute', left: '8%', bottom: '25%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/images/Vericea.png" alt="Vericea Logo" style={{ height: '14px', width: 'auto', objectFit: 'contain' }} />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Compliance</span>
                </div>
              </div>

              {/* Floating Node 4: Risk Management */}
              <div className="partners-float-1" style={{ position: 'absolute', right: '18%', bottom: '15%', zIndex: 3 }}>
                <div style={{ padding: '10px 16px', borderRadius: '12px', background: 'rgba(43,74,115,0.9)', border: '1px solid var(--accent)', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/images/Fact_safe.png" alt="FactSafe Logo" style={{ height: '18px', width: 'auto', objectFit: 'contain' }} />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>Risk Management</span>
                </div>
              </div>

              {/* Dynamic Connection lines in background */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <path d="M 120 100 Q 230 180 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 370 140 Q 280 200 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 100 320 Q 200 280 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" />
                <path d="M 340 360 Q 250 280 230 230" fill="none" stroke="rgba(212,168,90,0.15)" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PRODUCT ECOSYSTEM SHOWCASE ────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              OUR SOLUTION SUITES
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Enterprise Software Portfolio
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
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
                focus: 'Smart Factory Operations',
                logo: '/images/Vericea.png'
              },
              {
                title: 'Courier Expense Control & Analytics',
                tag: 'LOGISTICS SPEND',
                img: '/images/flagship_courier.jpg',
                url: '/products/courier-cost-management',
                desc: 'Deep audit analytics mapping shipping invoices to courier SLAs. Reclaims automated refunds for late shipments.',
                focus: 'Logistics Optimization',
                logo: '/images/Courier Cost Optimizer.png'
              },
              {
                title: 'Compliance Audit Management & Tracking',
                tag: 'GOVERNANCE & AUDIT',
                img: '/images/flagship_compliance.jpg',
                url: '/products/vericea-compliance',
                desc: 'Automates scheduling and tracks visual evidence of regulatory compliance metrics across manufacturing facilities.',
                focus: 'Regulatory Governance',
                logo: '/images/Vericea.png'
              },
              {
                title: 'Risk Assessment & Monitoring',
                tag: 'RISK CONTROL',
                img: '/images/flagship_factsafe.jpg',
                url: '/products/factsafe',
                desc: 'Proactive industrial safety monitoring, vendor surveys, and real-time environment dashboard logs.',
                focus: 'Enterprise Risk Dashboard',
                logo: '/images/Fact_safe.png'
              }
            ].map((p, idx) => (
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
                  background: 'rgba(43, 74, 115, 0.45)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
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
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(31,58,95,0.9) 0%, transparent 100%)' }} />
                  <span 
                    style={{ 
                      position: 'absolute', 
                      bottom: '12px', 
                      left: '16px', 
                      fontSize: '10px', 
                      fontWeight: '800', 
                      color: 'var(--accent)', 
                      background: 'rgba(31, 58, 95, 0.9)', 
                      border: '1px solid var(--border-color)', 
                      padding: '3px 8px', 
                      borderRadius: '4px' 
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Info Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {p.logo && (
                    <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center' }}>
                      <img src={p.logo} alt={`${p.title} Logo`} style={{ height: p.logo.includes('courier') ? '48px' : '28px', width: 'auto', objectFit: 'contain' }} />
                    </div>
                  )}
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0, minHeight: '52px', lineHeight: '1.3' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5', marginTop: '10px', flexGrow: 1 }}>
                    {p.desc}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '11px', color: 'var(--supporting)', fontWeight: '600' }}>
                      {p.focus}
                    </span>
                    <button 
                      onClick={() => navigate(p.url)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#ffffff', 
                        fontWeight: '700', 
                        fontSize: '12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px', 
                        cursor: 'pointer' 
                      }}
                    >
                      Details
                      <ChevronRight size={14} color="#D4A85A" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY PARTNERS SAY YES ────────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
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
                  border: '1.5px dashed rgba(212, 168, 90, 0.2)', 
                  borderRadius: '50%',
                  animation: 'benefit-orbit 40s linear infinite',
                  pointerEvents: 'none'
                }} 
              />

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

      {/* ── SECTION 4: 50/50 JOINT VENTURE MODEL ───────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              MUTUAL CO-INVESTMENT MODEL
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              50/50 Revenue Shared Joint Venture
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
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
                background: 'rgba(43, 74, 115, 0.45)', 
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} />
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
                    <CheckCircle2 size={16} color="#D4A85A" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '800', color: '#ffffff' }}>{item.title}</h4>
                      <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
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
                  background: 'rgba(212, 168, 90, 0.12)', 
                  border: '1.5px solid var(--accent)',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 0 25px rgba(212,168,90,0.1)'
                }}
              >
                <HeartHandshake size={32} color="#D4A85A" style={{ animation: 'node-float-3 4s infinite ease-in-out' }} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>50/50 Revenue Split</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '4px' }}>Balanced co-investment synergy</div>
              </div>
              
              {/* Dynamic flowing dot indicator */}
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', position: 'relative', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    position: 'absolute', 
                    height: '100%', 
                    width: '30%', 
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', 
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
                background: 'rgba(43, 74, 115, 0.45)', 
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} />
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
                    <CheckCircle2 size={16} color="#D4A85A" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '800', color: '#ffffff' }}>{item.title}</h4>
                      <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PARTNER BUSINESS MODELS ────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
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

          {/* Model selection tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
            {businessModels.map((model, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveModel(idx);
                  // Sync with dashboard selector
                  if (idx === 0) setDashboardModel('consultant');
                  else if (idx === 1) setDashboardModel('reseller');
                  else if (idx === 2) setDashboardModel('distributor');
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1.5px solid',
                  borderColor: activeModel === idx ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                  background: activeModel === idx ? 'rgba(212, 168, 90, 0.15)' : 'rgba(43, 74, 115, 0.3)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  boxShadow: activeModel === idx ? '0 4px 15px rgba(212,168,90,0.1)' : 'none'
                }}
              >
                {model.title}
              </button>
            ))}
          </div>

          {/* Model active detail box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(43, 74, 115, 0.45)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '36px',
                boxShadow: 'var(--shadow-xl)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', background: 'rgba(212, 168, 90, 0.12)', padding: '4px 10px', borderRadius: '4px' }}>
                    {businessModels[activeModel].badge}
                  </span>
                  <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#ffffff', marginTop: '10px', margin: '8px 0 0 0' }}>
                    {businessModels[activeModel].title}
                  </h3>
                </div>
                
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Capital Commitment</div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff' }}>{businessModels[activeModel].investment}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Yr 3 Target Revenue</div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent)' }}>{businessModels[activeModel].revenue}</div>
                  </div>
                </div>
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '24px 0' }} />

              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 340px' }}>
                  <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Growth Trajectory
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>
                    {businessModels[activeModel].trajectory}
                  </p>

                  <div style={{ marginTop: '20px' }}>
                    <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      Key Capabilities Needed
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {businessModels[activeModel].skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#ffffff',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            padding: '4px 12px',
                            borderRadius: '20px'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div 
                  style={{ 
                    flex: '1 1 240px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    background: 'rgba(14, 31, 53, 0.4)',
                    border: '1px solid rgba(255,255,255,0.04)',
                    padding: '20px',
                    borderRadius: '12px'
                  }}
                >
                  <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', margin: 0 }}>
                    Business Scale Projections
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Initial Team Size:</span>
                      <span style={{ fontWeight: '700', color: '#ffffff' }}>{businessModels[activeModel].teamSize}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Investment ROI Index:</span>
                      <span style={{ fontWeight: '700', color: 'var(--supporting)' }}>{businessModels[activeModel].roi}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Revenue Potential:</span>
                      <span style={{ fontWeight: '700', color: '#ffffff' }}><CountUp end={businessModels[activeModel].revenueVal} prefix="₹" suffix=" Lakhs" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION 6: REVENUE OPPORTUNITY DASHBOARD ───────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              GROWTH SIMULATOR
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Revenue Opportunity Dashboard
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Select a partner model to inspect the simulated cumulative revenue growth trajectory across Year 1, 2, and 3.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '28px', alignItems: 'stretch', flexWrap: 'wrap' }}>
            {/* Control Panel */}
            <div 
              style={{ 
                width: '280px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                flexShrink: 0
              }}
            >
              {([
                { id: 'consultant', label: 'Growth Consultant', desc: 'Investment: ₹5–10L' },
                { id: 'reseller', label: 'Tech Reseller', desc: 'Investment: ₹10–20L' },
                { id: 'distributor', label: 'Regional Distributor', desc: 'Investment: ₹20–50L' }
              ] as const).map((tab) => {
                const isSelected = dashboardModel === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setDashboardModel(tab.id);
                      // Sync main active model tab
                      if (tab.id === 'consultant') setActiveModel(0);
                      else if (tab.id === 'reseller') setActiveModel(1);
                      else if (tab.id === 'distributor') setActiveModel(2);
                    }}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                      background: isSelected ? 'rgba(212, 168, 90, 0.12)' : 'rgba(27, 42, 74, 0.3)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontSize: '14px', fontWeight: '800', color: isSelected ? '#ffffff' : 'var(--text-main)' }}>
                      {tab.label}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {tab.desc}
                    </div>
                  </button>
                );
              })}

              <div 
                style={{ 
                  borderRadius: '12px', 
                  padding: '16px', 
                  background: 'rgba(14, 31, 53, 0.4)', 
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  marginTop: '12px'
                }}
              >
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Net Profit yr 3</div>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', marginTop: '2px' }}>
                  {revenueData[dashboardModel].profit}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--supporting)', fontWeight: '600', marginTop: '2px' }}>
                  ~{revenueData[dashboardModel].margin} margin split
                </div>
              </div>
            </div>

            {/* Simulated Live Bar Chart Area */}
            <div 
              style={{ 
                flex: '1 1 420px', 
                borderRadius: '18px', 
                padding: '28px', 
                background: 'rgba(43, 74, 115, 0.45)', 
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h4 style={{ margin: 0, fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <PieChart size={16} color="#D4A85A" />
                  Growth Curve (₹ In Lakhs)
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Cumulative Projections</span>
              </div>

              {/* Chart Visual */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-end', 
                  justifyContent: 'space-around', 
                  height: '200px', 
                  borderBottom: '2px stroke rgba(255,255,255,0.06)',
                  paddingBottom: '8px',
                  position: 'relative'
                }}
              >
                {/* Horizontal reference lines */}
                <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

                {/* Year 1 Bar */}
                <div style={{ textAlign: 'center', width: '64px', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                    ₹{revenueData[dashboardModel].year1}L
                  </div>
                  <motion.div
                    style={{
                      width: '100%',
                      background: 'linear-gradient(180deg, var(--accent), var(--primary-bg))',
                      borderRadius: '8px 8px 0 0',
                      boxShadow: '0 0 15px rgba(212,168,90,0.15)'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(revenueData[dashboardModel].year1 / 300) * 150}px` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  />
                  <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', marginTop: '8px' }}>Year 1</div>
                </div>

                {/* Year 2 Bar */}
                <div style={{ textAlign: 'center', width: '64px', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                    ₹{revenueData[dashboardModel].year2}L
                  </div>
                  <motion.div
                    style={{
                      width: '100%',
                      background: 'linear-gradient(180deg, var(--supporting), var(--primary-bg))',
                      borderRadius: '8px 8px 0 0',
                      boxShadow: '0 0 15px rgba(230,194,122,0.15)'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(revenueData[dashboardModel].year2 / 300) * 150}px` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  />
                  <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', marginTop: '8px' }}>Year 2</div>
                </div>

                {/* Year 3 Bar */}
                <div style={{ textAlign: 'center', width: '64px', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>
                    ₹{revenueData[dashboardModel].year3}L
                  </div>
                  <motion.div
                    style={{
                      width: '100%',
                      background: 'linear-gradient(180deg, var(--accent), var(--supporting))',
                      borderRadius: '8px 8px 0 0',
                      boxShadow: '0 0 25px rgba(212,168,90,0.3)'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(revenueData[dashboardModel].year3 / 300) * 150}px` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  />
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', marginTop: '8px' }}>Year 3</div>
                </div>
              </div>

              {/* KPI Indicators bottom row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div>
                  Customers: <span style={{ color: '#ffffff', fontWeight: '700' }}>{revenueData[dashboardModel].customers}</span>
                </div>
                <div>
                  Status: <span style={{ color: 'var(--success)', fontWeight: '700' }}>High Potential Yield</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: INDIA MARKET OPPORTUNITY ───────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              PRIORITY TERRITORIES
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              India Market Opportunity
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Click on the pulsing gold markers to highlight priorities, industry clusters, and key territory opportunities.
            </p>
          </motion.div>

          <IndiaMap />
        </div>
      </section>


      {/* ── SECTION 9: WHO WE ARE LOOKING FOR ────────────────────────────── */}
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative' }}>
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              IDEAL PROFILES
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Who We Are Looking For
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              Are you positioned to build regional success? Tap on a category below to explore custom synergy scores and target focus areas.
            </p>
          </motion.div>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'stretch', flexWrap: 'wrap' }}>
            {/* Left Column: Interactive Grid of Pills */}
            <div style={{ flex: '1 1 420px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
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
                      background: isActive ? 'rgba(212, 168, 90, 0.15)' : 'rgba(43, 74, 115, 0.3)',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.25s'
                    }}
                  >
                    <div style={{ color: isActive ? '#ffffff' : 'var(--accent)', flexShrink: 0 }}>
                      <AudIcon size={18} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: isActive ? '800' : '600', color: isActive ? '#ffffff' : 'var(--text-main)' }}>
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
                    background: 'rgba(43, 74, 115, 0.45)',
                    border: '1px solid var(--accent)',
                    borderRadius: '18px',
                    padding: '32px',
                    boxShadow: 'var(--shadow-xl)',
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
                      <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#D4A85A', background: 'rgba(212, 168, 90, 0.12)', padding: '4px 10px', borderRadius: '4px' }}>
                        {targetAudiences[activeAudience].badge}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--success)' }}>
                        Synergy Score: {targetAudiences[activeAudience].synergy}%
                      </span>
                    </div>
                    
                    <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: '0 0 10px 0' }}>
                      {targetAudiences[activeAudience].title}
                    </h3>
                    
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                      {targetAudiences[activeAudience].desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner Focus Area:</span>
                      <span style={{ fontWeight: '700', color: 'var(--supporting)' }}>{targetAudiences[activeAudience].focus}</span>
                    </div>
                    
                    {/* Synergy Progress Bar */}
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden', marginTop: '12px' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${targetAudiences[activeAudience].synergy}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--supporting))' }}
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
      <section style={{ padding: '100px 0', borderBottom: '1px solid var(--gold-divider)', position: 'relative', overflow: 'hidden' }}>
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
      <section style={{ padding: '120px 0', position: 'relative' }}>
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
