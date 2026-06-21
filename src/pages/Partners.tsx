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
  ChevronLeft,
  Sparkles,
  PieChart,
  Briefcase,
  Target,
  FileCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
  Info,
  Factory,
  Truck,
  AlertTriangle
} from 'lucide-react';
import CountUp from '../components/CountUp';
import IndiaMap from '../components/IndiaMap';
import WorldMap from '../components/WorldMap';


function PartnersHeroEcosystem() {
  const CX = 230;
  const CY = 230;
  const R = 135; // Orbit radius

  const pos = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
  };

  const nodes = [
    {
      name: 'Vericea® Manufacturing',
      icon: <Factory size={18} color="#FFD700" />,
      angle: 315, // Top Left
      color: '#D4AF37'
    },
    {
      name: 'Vericea® Compliance',
      icon: <ShieldCheck size={18} color="#FFD700" />,
      angle: 45, // Top Right
      color: '#D4AF37'
    },
    {
      name: 'Logistics',
      icon: <Truck size={18} color="#FFD700" />,
      angle: 135, // Bottom Right
      color: '#D4AF37'
    },
    {
      name: 'Risk Management',
      icon: <AlertTriangle size={18} color="#FFD700" />,
      angle: 225, // Bottom Left
      color: '#D4AF37'
    }
  ];

  return (
    <svg 
      viewBox="0 0 460 460" 
      style={{ 
        width: '100%', 
        height: '100%', 
        overflow: 'visible' 
      }}
    >
      <defs>
        <filter id="partners-hero-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="partners-center-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle outer glow backdrop */}
      <circle cx={CX} cy={CY} r={100} fill="url(#partners-center-glow-grad)" />

      {/* Orbit Rings */}
      <motion.circle 
        cx={CX} 
        cy={CY} 
        r={R} 
        fill="none" 
        stroke="rgba(212, 175, 55, 0.2)" 
        strokeWidth="1.5" 
        strokeDasharray="6 12" 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'center' }}
      />
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(212, 175, 55, 0.05)" strokeWidth="4" />

      {/* Thick Gold Connection Lines with Glow */}
      {nodes.map((n, idx) => {
        const p = pos(n.angle);
        return (
          <g key={`lines-${idx}`}>
            {/* Outer blur glowing line for high contrast */}
            <motion.line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="#D4AF37"
              strokeWidth="6"
              opacity="0.25"
              filter="url(#partners-hero-glow)"
              animate={{ opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
            />
            {/* Main thick connection line */}
            <motion.line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="#C8A276"
              strokeWidth="2.5"
              opacity="0.85"
              animate={{ opacity: [0.75, 0.95, 0.75] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
            />
            {/* Bright highlight line on top */}
            <line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="#FFD700"
              strokeWidth="1"
              opacity="0.9"
            />
          </g>
        );
      })}

      {/* Pulse travel dots along connection lines */}
      {nodes.map((n, idx) => {
        const p = pos(n.angle);
        return (
          <motion.circle
            key={`pulse-${idx}`}
            cx={0}
            cy={0}
            r={4.5}
            fill="#FFD700"
            filter="url(#partners-hero-glow)"
            animate={{
              x: [CX, p.x],
              y: [CY, p.y],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.75
            }}
          />
        );
      })}

      {/* Product Nodes */}
      {nodes.map((n, idx) => {
        const p = pos(n.angle);
        return (
          <motion.g
            key={`node-${idx}`}
            animate={{
              y: [0, -6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.8
            }}
          >
            <foreignObject
              x={p.x - 85}
              y={p.y - 32}
              width={170}
              height={64}
              style={{ overflow: 'visible' }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(11, 19, 36, 0.9)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(212, 175, 55, 0.35)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.65), 0 0 15px rgba(212, 175, 55, 0.1)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  height: '100%',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  color: '#FFFFFF'
                }}
              >
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '8px',
                    width: '30px',
                    height: '30px',
                    flexShrink: 0
                  }}
                >
                  {n.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div 
                    style={{ 
                      fontSize: '12px', 
                      fontWeight: '800', 
                      lineHeight: '1.25',
                      fontFamily: 'var(--font-headings)',
                      letterSpacing: '-0.2px'
                    }}
                  >
                    {n.name}
                  </div>
                </div>
              </motion.div>
            </foreignObject>
          </motion.g>
        );
      })}

      {/* Central Hub Element */}
      <g>
        {/* Glow backdrop circle behind center element */}
        <motion.circle 
          cx={CX} 
          cy={CY} 
          r={45} 
          fill="none" 
          stroke="rgba(212, 175, 55, 0.4)" 
          strokeWidth="2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center' }}
          filter="url(#partners-hero-glow)"
        />
        
        {/* HTML Content inside center SVG */}
        <foreignObject
          x={CX - 38}
          y={CY - 38}
          width={76}
          height={76}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, #1E293B 0%, #0F172A 100%)',
              border: '2.5px solid #D4AF37',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              boxSizing: 'border-box'
            }}
          >
            <img 
              src="/images/logo.png" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain' 
              }} 
              alt="CEA" 
            />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
}


// Custom CSS Variable scoped wrapper
export default function Partners() {
  const navigate = useNavigate();
  
  // Section 3: Orbit Ecosystem benefits state
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  // Section 5: Business Model state
  const [activeModel, setActiveModel] = useState<number>(0);

  // Section 6: Hover tooltip state for comparative chart
  const [hoveredBar, setHoveredBar] = useState<{ model: string; year: string; value: number } | null>(null);

  // Section 9: Ideal profiles active selection state
  const [activeAudience, setActiveAudience] = useState<number>(0);
  
  // Section 7: Active Map slider state
  const [activeMap, setActiveMap] = useState<'india' | 'world'>('india');
  
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
      detail: 'Instantly sell high-value solutions like Vericea® and FactSafe without waiting for custom coding or R&D.'
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

  // Section 6 Revenue projections data (no profit or margin details)
  const revenueModels = [
    {
      key: 'consultant',
      label: 'Growth Consultant',
      investment: '₹5–10L',
      color: '#38BDF8', // Arctic Blue
      year1: 25,
      year2: 75,
      year3: 150
    },
    {
      key: 'reseller',
      label: 'Tech Reseller',
      investment: '₹10–20L',
      color: '#96B3D6', // Sleek light blue
      year1: 30,
      year2: 85,
      year3: 150
    },
    {
      key: 'distributor',
      label: 'Regional Distributor',
      investment: '₹20–50L',
      color: '#ffffff', // White
      year1: 50,
      year2: 150,
      year3: 300
    }
  ];



  // Section 9 Target Audiences
  const targetAudiences = [
    { title: 'BD Professionals', icon: Users, badge: 'Direct Sales Partner', synergy: 95, focus: 'Direct Lead Gen & Demos', desc: 'Individual business developers with deep relationships inside target factories. Tap into your existing contacts to introduce Vericea® suites.' },
    { title: 'Sales Agencies', icon: TrendingUp, badge: 'Channel Accelerator', synergy: 90, focus: 'Market Campaigns', desc: 'Established regional agencies looking to expand their portfolio with premium enterprise SaaS packages.' },
    { title: 'Industry Consultants', icon: Briefcase, badge: 'Process Advisory', synergy: 92, focus: 'Scoping & Workflow Audits', desc: 'Operations and management consultants auditing manufacturer workflows. Recommend CEA platforms to address yield and efficiency issues.' },
    { title: 'Compliance Firms', icon: FileCheck, badge: 'Governance Partner', synergy: 96, focus: 'Continuous Audit Preparedness', desc: 'Auditing bodies looking to automate proof collection. Introduce Vericea® Compliance to eliminate manual paperwork and secure constant audit readiness.' },
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
          backgroundImage: 'linear-gradient(rgba(11, 17, 31, 0.82), rgba(15, 23, 42, 0.92)), url("/images/business_consultation_1780850767888.png")',
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
              <PartnersHeroEcosystem />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PRODUCT ECOSYSTEM SHOWCASE ────────────────────────── */}

      <section className="section surface-matte" style={{ padding: '100px 0' }}>

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
                  background: 'rgba(30, 41, 59, 0.45)',
                  border: '1.5px solid var(--border-color)',
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
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,17,31,0.9) 0%, transparent 100%)' }} />
                  <span 
                    style={{ 
                      position: 'absolute', 
                      bottom: '12px', 
                      left: '16px', 
                      fontSize: '12px', 
                      fontWeight: '800', 
                      color: 'var(--accent)', 
                      background: 'rgba(15, 23, 42, 0.9)', 
                      border: '1.5px solid var(--border-color)', 
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
                      <span className="vericea-logo-wrap">
                        <img src={p.logo} alt={`${p.title} Logo`} style={{ height: p.logo.includes('courier') ? '48px' : '28px', width: 'auto', objectFit: 'contain' }} />
                        {p.logo.includes('Vericea.png') && (
                          <sup className="vericea-logo-sup">®</sup>
                        )}
                      </span>
                    </div>
                  )}
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0, minHeight: '52px', lineHeight: '1.3' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: '1.5', marginTop: '10px', flexGrow: 1 }}>
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
                        fontSize: '13px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px', 
                        cursor: 'pointer' 
                      }}
                    >
                      Details
                      <ChevronRight size={14} color="#38BDF8" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY PARTNERS SAY YES ────────────────────────────────── */}
      <section className="section surface-royal" style={{ padding: '100px 0', position: 'relative' }}>
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
                alignItems: 'center',
                overflow: 'visible'
              }}
            >
              <svg
                className="orbit-svg-ring"
                viewBox="0 0 420 420"
                aria-hidden="true"
                style={{ width: '100%', height: '100%', maxWidth: '420px', maxHeight: '420px' }}
              >
                <circle className="orbit-ring-halo" cx="210" cy="210" r="152" />
                <circle className="orbit-ring-main" cx="210" cy="210" r="152" />
                <circle className="orbit-ring-flow" cx="210" cy="210" r="152" />
                {benefits.map((_, idx) => {
                  const angle = (idx * 360) / 6;
                  const radius = 152;
                  const x1 = 210 + Math.cos((angle * Math.PI) / 180) * 38;
                  const y1 = 210 + Math.sin((angle * Math.PI) / 180) * 38;
                  const x2 = 210 + Math.cos((angle * Math.PI) / 180) * (radius - 8);
                  const y2 = 210 + Math.sin((angle * Math.PI) / 180) * (radius - 8);
                  const isSelected = activeBenefit === idx;

                  return (
                    <line
                      key={`connector-${idx}`}
                      className={`orbit-connector ${isSelected ? 'is-active' : ''}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      style={{
                        opacity: isSelected ? 1 : 0.55,
                        stroke: isSelected ? 'rgba(56,189,248, 0.9)' : 'rgba(56,189,248, 0.38)'
                      }}
                    />
                  );
                })}
              </svg>

              {/* Central Core: CEA Partner Network */}
              <div 
                className="orbit-center-core"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'rgba(15, 23, 42, 0.95)',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 35px rgba(56,189,248,0.2)',
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
                const radius = 152;
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
                      className={`orbit-benefit-node ${isSelected ? 'is-active' : ''}`}
                      onClick={() => setActiveBenefit(isSelected ? null : idx)}
                      onMouseEnter={() => setActiveBenefit(idx)}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--accent)' : 'rgba(15, 23, 42, 0.9)',
                        display: 'grid',
                        placeItems: 'center',
                        color: isSelected ? '#0B111F' : '#38BDF8',
                        cursor: 'pointer',
                        transition: 'all 0.25s'
                      }}
                    >
                      <BIcon size={20} />
                    </button>
                    
                    {/* Small tag next to node */}
                    <div
                      className="orbit-node-label"
                      style={{
                        position: 'absolute',
                        left: x > 0 ? '56px' : 'auto',
                        right: x <= 0 ? '56px' : 'auto',
                        top: '14px',
                        whiteSpace: 'nowrap',
                        background: 'rgba(14, 31, 53, 0.88)',
                        border: '1px solid rgba(56,189,248,0.15)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '10px',
                        color: '#ffffff',
                        fontWeight: '700',
                        opacity: 0.97,
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
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1.5px solid var(--accent)',
                      borderRadius: '18px',
                      padding: '28px',
                      boxShadow: 'var(--shadow-lg)',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'grid', placeItems: 'center' }}>
                        {(() => {
                          const IconComp = benefits[activeBenefit].icon;
                          return <IconComp size={22} color="#38BDF8" />;
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
                    
                    <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                      {benefits[activeBenefit].detail}
                    </p>
                  </motion.div>
                ) : (
                  <div 
                    style={{
                      background: 'rgba(164, 182, 204, 0.1)',
                      border: '1.5px dashed rgba(56, 189, 248, 0.45)',
                      borderRadius: '18px',
                      padding: '40px 28px',
                      textAlign: 'center',
                    }}
                  >
                    <Info size={32} color="#38BDF8" style={{ marginBottom: '12px' }} />
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
      <section className="section surface-matte" style={{ padding: '100px 0', position: 'relative' }}>

        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              MUTUAL CO-INVESTMENT MODEL
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Strategic Co-Investment Partnership
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
                background: 'rgba(30, 41, 59, 0.45)', 
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
                    <CheckCircle2 size={16} color="#38BDF8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>{item.title}</h4>
                      <p style={{ margin: '1px 0 0 0', fontSize: '13.5px', color: 'var(--text-muted)' }}>{item.desc}</p>
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
                  background: 'rgba(56, 189, 248, 0.12)', 
                  border: '1.5px solid var(--accent)',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: '0 0 25px rgba(56,189,248,0.08)'
                }}
              >
                <HeartHandshake size={32} color="#38BDF8" style={{ animation: 'node-float-3 4s infinite ease-in-out' }} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>Shared Growth Partnership</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px', maxWidth: '160px', margin: '4px auto 0 auto', lineHeight: '1.4' }}>
                  Both parties contribute their respective strengths to build scalable and sustainable market growth.
                </div>
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
                background: 'rgba(30, 41, 59, 0.45)', 
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
                    <CheckCircle2 size={16} color="#38BDF8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#ffffff' }}>{item.title}</h4>
                      <p style={{ margin: '1px 0 0 0', fontSize: '13.5px', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PARTNER BUSINESS MODELS ────────────────────────────── */}
      <section className="section surface-royal" style={{ padding: '100px 0', position: 'relative' }}>
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
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1.5px solid',
                  borderColor: activeModel === idx ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                  background: activeModel === idx ? 'rgba(56, 189, 248, 0.15)' : 'rgba(30, 41, 59, 0.3)',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  boxShadow: activeModel === idx ? '0 4px 15px rgba(56,189,248,0.08)' : 'none'
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
                background: 'rgba(30, 41, 59, 0.45)',
                border: '1.5px solid var(--border-color)',
                borderRadius: '20px',
                padding: '36px',
                boxShadow: 'var(--shadow-xl)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)', background: 'rgba(56, 189, 248, 0.12)', padding: '4px 10px', borderRadius: '4px' }}>
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
                  <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Growth Trajectory
                  </h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>
                    {businessModels[activeModel].trajectory}
                  </p>

                  <div style={{ marginTop: '20px' }}>
                    <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      Key Capabilities Needed
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {businessModels[activeModel].skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          style={{
                            fontSize: '12px',
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

      {/* ── SECTION 6: REVENUE OPPORTUNITY PROJECTION ───────────────────────── */}

      <section className="section surface-matte" style={{ padding: '100px 0 60px 0', position: 'relative' }}>

        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: 'var(--supporting)', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
              GROWTH SIMULATOR
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              Revenue Opportunity Projection
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
              A comparative analysis of the cumulative revenue potential across the three partnership models over a three-year horizon.
            </p>
          </motion.div>

          {/* Chart Wrapper Card */}
          <div 
            style={{ 
              borderRadius: '20px', 
              padding: '36px', 
              background: 'rgba(30, 41, 59, 0.25)', 
              border: '1.5px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {/* Chart Top Header & Legend */}
            <div 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '20px',
                marginBottom: '40px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '20px'
              }}
            >
              <div>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <PieChart size={16} color="#38BDF8" />
                  Growth Curve (₹ In Lakhs)
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Cumulative Projections</span>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {revenueModels.map((model) => (
                  <div key={model.key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: model.color }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff' }}>{model.label}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{model.investment} investment</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grouped Bar Chart */}
            <div style={{ position: 'relative', paddingLeft: '40px', paddingRight: '20px' }}>
              {/* Y-Axis Labels */}
              <div style={{ position: 'absolute', left: 0, top: 0, height: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'right', width: '30px' }}>
                <span>300L</span>
                <span>225L</span>
                <span>150L</span>
                <span>75L</span>
                <span>0L</span>
              </div>

              {/* Main Grid Area */}
              <div 
                style={{ 
                  height: '320px', 
                  borderBottom: '2px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                  paddingBottom: '4px'
                }}
              >
                {/* Grid Lines */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
                  <div style={{ height: '1px', background: 'transparent' }} />
                </div>

                {/* Year 1 Group */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 0' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                    {revenueModels.map((model) => {
                      const val = model.year1;
                      const isHovered = hoveredBar?.model === model.key && hoveredBar?.year === 'Year 1';
                      return (
                        <div 
                          key={model.key} 
                          style={{ position: 'relative' }}
                          onMouseEnter={() => setHoveredBar({ model: model.key, year: 'Year 1', value: val })}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          {/* Bar Tooltip */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{
                                position: 'absolute',
                                bottom: `calc(${(val / 300) * 300}px + 10px)`,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(14, 31, 53, 0.95)',
                                border: `1px solid ${model.color}`,
                                borderRadius: '8px',
                                padding: '8px 12px',
                                zIndex: 10,
                                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                                pointerEvents: 'none',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{model.label}</div>
                              <div style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff', marginTop: '2px' }}>₹{val} Lakhs</div>
                              <div style={{ fontSize: '10px', color: model.color, marginTop: '2px' }}>{model.investment} investment</div>
                            </motion.div>
                          )}

                          {/* Bar Pillar */}
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${(val / 300) * 300}px` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            style={{
                              width: '32px',
                              background: `linear-gradient(180deg, ${model.color}, ${model.color}33)`,
                              borderRadius: '4px 4px 0 0',
                              cursor: 'pointer',
                              transition: 'filter 0.2s',
                              filter: hoveredBar && !isHovered ? 'brightness(0.5) grayscale(0.2)' : 'none',
                              boxShadow: isHovered ? `0 0 15px ${model.color}40` : 'none'
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Year 2 Group */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 0' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                    {revenueModels.map((model) => {
                      const val = model.year2;
                      const isHovered = hoveredBar?.model === model.key && hoveredBar?.year === 'Year 2';
                      return (
                        <div 
                          key={model.key} 
                          style={{ position: 'relative' }}
                          onMouseEnter={() => setHoveredBar({ model: model.key, year: 'Year 2', value: val })}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          {/* Bar Tooltip */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{
                                position: 'absolute',
                                bottom: `calc(${(val / 300) * 300}px + 10px)`,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(14, 31, 53, 0.95)',
                                border: `1px solid ${model.color}`,
                                borderRadius: '8px',
                                padding: '8px 12px',
                                zIndex: 10,
                                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                                pointerEvents: 'none',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{model.label}</div>
                              <div style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff', marginTop: '2px' }}>₹{val} Lakhs</div>
                              <div style={{ fontSize: '10px', color: model.color, marginTop: '2px' }}>{model.investment} investment</div>
                            </motion.div>
                          )}

                          {/* Bar Pillar */}
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${(val / 300) * 300}px` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                            style={{
                              width: '32px',
                              background: `linear-gradient(180deg, ${model.color}, ${model.color}33)`,
                              borderRadius: '4px 4px 0 0',
                              cursor: 'pointer',
                              transition: 'filter 0.2s',
                              filter: hoveredBar && !isHovered ? 'brightness(0.5) grayscale(0.2)' : 'none',
                              boxShadow: isHovered ? `0 0 15px ${model.color}40` : 'none'
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Year 3 Group */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 0' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                    {revenueModels.map((model) => {
                      const val = model.year3;
                      const isHovered = hoveredBar?.model === model.key && hoveredBar?.year === 'Year 3';
                      return (
                        <div 
                          key={model.key} 
                          style={{ position: 'relative' }}
                          onMouseEnter={() => setHoveredBar({ model: model.key, year: 'Year 3', value: val })}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          {/* Bar Tooltip */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              style={{
                                position: 'absolute',
                                bottom: `calc(${(val / 300) * 300}px + 10px)`,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(14, 31, 53, 0.95)',
                                border: `1px solid ${model.color}`,
                                borderRadius: '8px',
                                padding: '8px 12px',
                                zIndex: 10,
                                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                                pointerEvents: 'none',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{model.label}</div>
                              <div style={{ fontSize: '14px', fontWeight: '800', color: '#ffffff', marginTop: '2px' }}>₹{val} Lakhs</div>
                              <div style={{ fontSize: '10px', color: model.color, marginTop: '2px' }}>{model.investment} investment</div>
                            </motion.div>
                          )}

                          {/* Bar Pillar */}
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${(val / 300) * 300}px` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                            style={{
                              width: '32px',
                              background: `linear-gradient(180deg, ${model.color}, ${model.color}33)`,
                              borderRadius: '4px 4px 0 0',
                              cursor: 'pointer',
                              transition: 'filter 0.2s',
                              filter: hoveredBar && !isHovered ? 'brightness(0.5) grayscale(0.2)' : 'none',
                              boxShadow: isHovered ? `0 0 15px ${model.color}40` : 'none'
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* X-Axis Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '12px', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>
                <div style={{ width: '100px', textAlign: 'center', color: '#ffffff' }}>Year 1</div>
                <div style={{ width: '100px', textAlign: 'center', color: '#ffffff' }}>Year 2</div>
                <div style={{ width: '100px', textAlign: 'center', color: '#ffffff' }}>Year 3</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7: PRIORITY TERRITORIES & GLOBAL FOOTPRINT ────────── */}
      <section 
        className="section partners-section-texture" 
        style={{ 
          padding: '100px 0', 
          position: 'relative',
          borderBottom: '1px solid var(--gold-divider)',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <motion.div 
            {...fadeIn}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px' }}>
              PRIORITY TERRITORIES & GLOBAL FOOTPRINT
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginTop: '10px' }}>
              India & International Market Opportunities
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '660px', margin: '12px auto 0 auto', fontSize: '15px' }}>
              Explore partnership territories across India’s industrial corridors and high-potential global markets. Click on markers to discover regional opportunities.
            </p>
          </motion.div>

          {/* Segmented Map Switcher Slider */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div 
              style={{ 
                display: 'inline-flex',
                background: 'rgba(15, 23, 42, 0.6)', 
                border: '1.5px solid rgba(56, 189, 248, 0.25)', 
                borderRadius: '9999px',
                padding: '6px',
                position: 'relative',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                zIndex: 5
              }}
            >
              <button
                onClick={() => setActiveMap('india')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'transparent',
                  color: activeMap === 'india' ? '#0B111F' : '#CBD5E1',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                India Coverage
                {activeMap === 'india' && (
                  <motion.div
                    layoutId="activeMapIndicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#38BDF8',
                      borderRadius: '9999px',
                      zIndex: -1,
                      boxShadow: '0 2px 10px rgba(56, 189, 248, 0.3)'
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveMap('world')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'transparent',
                  color: activeMap === 'world' ? '#0B111F' : '#CBD5E1',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                World Expansion
                {activeMap === 'world' && (
                  <motion.div
                    layoutId="activeMapIndicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#38BDF8',
                      borderRadius: '9999px',
                      zIndex: -1,
                      boxShadow: '0 2px 10px rgba(56, 189, 248, 0.3)'
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Sliding container hosting the maps */}
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'visible' }}>
            {/* Side Navigation Arrow Buttons */}
            <AnimatePresence>
              {activeMap === 'world' && (
                <motion.button 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="map-arrow-btn map-arrow-btn-left"
                  onClick={() => setActiveMap('india')}
                  aria-label="Previous Map"
                >
                  <ChevronLeft size={24} color="#38BDF8" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {activeMap === 'india' && (
                <motion.button 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="map-arrow-btn map-arrow-btn-right"
                  onClick={() => setActiveMap('world')}
                  aria-label="Next Map"
                >
                  <ChevronRight size={24} color="#38BDF8" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {activeMap === 'india' ? (
                <motion.div
                  key="india-map-slide"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', minHeight: '56px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.35)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <Globe size={18} color="#38BDF8" />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#ffffff' }}>India — National Market Coverage</h3>
                      <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>Industrial corridors, MSME clusters, and high-growth manufacturing regions</p>
                    </div>
                  </div>
                  <IndiaMap />
                </motion.div>
              ) : (
                <motion.div
                  key="world-map-slide"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', minHeight: '56px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.35)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <Globe size={18} color="#38BDF8" />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#ffffff' }}>International — Global Expansion</h3>
                      <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>Strategic hubs across Middle East, Southeast Asia, Europe, and North America</p>
                    </div>
                  </div>
                  <WorldMap />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* ── SECTION 9: WHO WE ARE LOOKING FOR ────────────────────────────── */}

      <section className="section surface-matte" style={{ padding: '100px 0', position: 'relative' }}>

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
                      background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(30, 41, 59, 0.3)',
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
                    background: 'rgba(30, 41, 59, 0.45)',
                    border: '1.5px solid var(--accent)',
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
                      <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', padding: '4px 10px', borderRadius: '4px' }}>
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

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section className="section surface-matte" style={{ padding: '120px 0', position: 'relative' }}>
        {/* Subtle glow background */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(11,17,31,0.85) 0%, transparent 60%)' }} />
        
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
