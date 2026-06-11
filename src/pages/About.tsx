import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  HeartHandshake,
  Target,
  Lightbulb,
  MapPin,
  Calendar,
  CheckCircle,
  Layers,
  Users,
  ShieldCheck,
  ArrowRight,
  Award,
  Globe,
  Briefcase,
  Handshake,
  Rocket,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ── ENTERPRISE COMMAND CENTER ─────────────────────────────────────────────────

const NODES = [
  { id: 'erp',      label: 'Enterprise Resource\nPlanning',     angle: 0,    color: '#22D3EE' },
  { id: 'prod',     label: 'Production\nTracking',              angle: 40,   color: '#F59E0B' },
  { id: 'comp',     label: 'Compliance\nTracking',              angle: 80,   color: '#10B981' },
  { id: 'hrms',     label: 'HRMS &\nPayroll',                   angle: 120,  color: '#A78BFA' },
  { id: 'retail',   label: 'Retail\nSolutions',                 angle: 160,  color: '#F472B6' },
  { id: 'finance',  label: 'Financial\nAccounting',             angle: 200,  color: '#FB923C' },
  { id: 'property', label: 'Property\nManagement',              angle: 240,  color: '#34D399' },
  { id: 'ngo',      label: 'NGO\nSolutions',                    angle: 280,  color: '#60A5FA' },
  { id: 'custom',   label: 'Custom Enterprise\nApplications',   angle: 320,  color: '#FBBF24' },
];

function EnterpriseCommandCenter() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [pulse, setPulse] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => setPulse(p => (p + 1) % NODES.length), 1800);
    return () => clearInterval(t);
  }, [isInView]);

  const RADIUS = 260;
  const CX = 400;
  const CY = 400;

  const getPos = (angleDeg: number, r: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
  };

  return (
    <section style={{ background: '#060C1A', padding: '100px 0 110px', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: '40px', padding: '6px 18px', marginBottom: '20px'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#F59E0B', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Core Strengths</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: '800', color: '#fff', margin: '0 0 12px', fontFamily: 'var(--font-headings)', letterSpacing: '-0.5px' }}>
            Enterprise Command Center
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(209,213,219,0.7)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            CEA Infotech's integrated digital ecosystem — nine capability pillars orbiting a unified enterprise core.
          </p>
        </motion.div>

        <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 800 800" style={{ width: '100%', maxWidth: '780px', height: 'auto', overflow: 'visible' }}>
            <defs>
              {NODES.map(node => (
                <radialGradient key={node.id} id={`about-grad-${node.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={node.color} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={node.color} stopOpacity="0" />
                </radialGradient>
              ))}
              <filter id="about-glow-filter">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="about-strong-glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <marker id="about-arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(245,158,11,0.4)" />
              </marker>
            </defs>

            <circle cx={CX} cy={CY} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <circle cx={CX} cy={CY} r={RADIUS * 0.6} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 8" />

            {NODES.map((node, i) => {
              const pos = getPos(node.angle, RADIUS);
              const isActive = hoveredNode === node.id || pulse === i;
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1={CX} y1={CY} x2={pos.x} y2={pos.y}
                  stroke={isActive ? node.color : 'rgba(255,255,255,0.07)'}
                  strokeWidth={isActive ? 1.5 : 0.8}
                  strokeDasharray={isActive ? 'none' : '4 6'}
                  animate={{ opacity: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.4 }}
                  markerEnd={isActive ? 'url(#about-arrowhead)' : undefined}
                  filter={isActive ? 'url(#about-glow-filter)' : undefined}
                />
              );
            })}

            {NODES.map((node, i) => {
              if (pulse !== i && hoveredNode !== node.id) return null;
              const pos = getPos(node.angle, RADIUS);
              return (
                <motion.circle
                  key={`pulse-${node.id}`}
                  r="4"
                  fill={node.color}
                  filter="url(#about-strong-glow)"
                  initial={{ opacity: 0 }}
                  animate={{ x: [CX, pos.x], y: [CY, pos.y], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
                />
              );
            })}

            {NODES.map((node, i) => {
              const pos = getPos(node.angle, RADIUS);
              const isActive = hoveredNode === node.id || pulse === i;
              const labelLines = node.label.split('\n');
              const textAnchor = pos.x < CX - 10 ? 'end' : pos.x > CX + 10 ? 'start' : 'middle';
              const labelOffsetX = pos.x < CX - 10 ? -22 : pos.x > CX + 10 ? 22 : 0;
              const labelOffsetY = pos.y < CY - 10 ? -22 : pos.y > CY + 10 ? 22 : 0;
              return (
                <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)} style={{ cursor: 'pointer' }}>
                  <motion.circle cx={pos.x} cy={pos.y} animate={{ r: isActive ? 32 : 22, opacity: isActive ? 0.5 : 0.15 }} transition={{ duration: 0.35 }} fill={`url(#about-grad-${node.id})`} />
                  <motion.circle cx={pos.x} cy={pos.y} animate={{ r: isActive ? 18 : 13, fill: isActive ? node.color : '#0D1828', stroke: node.color, strokeWidth: isActive ? 2.5 : 1.5 }} transition={{ duration: 0.3 }} filter={isActive ? 'url(#about-glow-filter)' : undefined} />
                  <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill={isActive ? '#0A0F1C' : node.color} fontFamily="var(--font-headings)">{String(i + 1).padStart(2, '0')}</text>
                  <motion.g animate={{ opacity: isActive ? 1 : 0.65 }} transition={{ duration: 0.25 }}>
                    {labelLines.map((line, li) => (
                      <text key={li} x={pos.x + labelOffsetX} y={pos.y + labelOffsetY + li * 14 + (labelLines.length > 1 ? -7 : 0)} textAnchor={textAnchor} fontSize="11" fontWeight="700" fill={isActive ? node.color : 'rgba(209,213,219,0.8)'} fontFamily="var(--font-headings)">{line}</text>
                    ))}
                  </motion.g>
                </g>
              );
            })}

            <g>
              <circle cx={CX} cy={CY} r={72} fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx={CX} cy={CY} r={58} fill="#0D1828" stroke="rgba(245,158,11,0.35)" strokeWidth="1.5" />
              <motion.circle cx={CX} cy={CY} r={58} fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="20 180" animate={{ rotate: 360 }} transition={{ duration: 12, ease: 'linear', repeat: Infinity }} style={{ transformOrigin: `${CX}px ${CY}px` }} />
              <text x={CX} y={CY - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#F59E0B" fontFamily="var(--font-headings)" letterSpacing="1">CEA</text>
              <text x={CX} y={CY + 3} textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(209,213,219,0.7)" fontFamily="var(--font-headings)">INFOTECH</text>
              <text x={CX} y={CY + 16} textAnchor="middle" fontSize="8" fontWeight="500" fill="rgba(245,158,11,0.8)" fontFamily="var(--font-headings)" letterSpacing="0.5">DIGITAL ECOSYSTEM</text>
            </g>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '40px' }}
        >
          {NODES.map(node => (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: hoveredNode === node.id ? `${node.color}18` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hoveredNode === node.id ? node.color + '60' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '20px', padding: '5px 13px', cursor: 'default', transition: 'all 0.25s',
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: node.color, flexShrink: 0, boxShadow: hoveredNode === node.id ? `0 0 8px ${node.color}` : 'none' }} />
              <span style={{ fontSize: '11.5px', fontWeight: '600', color: hoveredNode === node.id ? node.color : 'rgba(209,213,219,0.7)', fontFamily: 'var(--font-headings)', whiteSpace: 'nowrap' }}>
                {node.label.replace('\n', ' ')}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── INDUSTRY WALL ─────────────────────────────────────────────────────────────

const INDUSTRIES = [
  { id: 'manufacturing', label: 'Manufacturing',         image: '/images/ind_manufacturing.jpg',  span: 2 },
  { id: 'construction',  label: 'Construction',          image: '/images/ind_construction.jpg',   span: 1 },
  { id: 'engineering',   label: 'Engineering',           image: '/images/ind_engineering.jpg',    span: 1 },
  { id: 'apparel',       label: 'Apparel',               image: '/images/ind_apparel.jpg',        span: 1 },
  { id: 'textiles',      label: 'Home Textiles',         image: '/images/ind_home_textiles.jpg',  span: 1 },
  { id: 'retail',        label: 'Retail',                image: '/images/ind_retail.jpg',         span: 2 },
  { id: 'finance',       label: 'Finance',               image: '/images/ind_finance.jpg',        span: 1 },
  { id: 'ngo',           label: 'NGO Operations',        image: '/images/ind_ngo.jpg',            span: 1 },
  { id: 'compliance',    label: 'Compliance Management', image: '/images/ind_compliance.jpg',     span: 2 },
];

function IndustryWall() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{ background: '#080E1C', padding: '100px 0 110px', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(245,158,11,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: '40px', padding: '6px 18px', marginBottom: '20px'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#F59E0B', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Domain Expertise</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: '800', color: '#fff', margin: '0 0 12px', fontFamily: 'var(--font-headings)', letterSpacing: '-0.5px' }}>
            Interactive Industry Wall
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(209,213,219,0.7)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Nine industry verticals. One enterprise technology partner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', maxWidth: '1100px', margin: '0 auto' }}
        >
          {INDUSTRIES.map((ind, i) => {
            const isHovered = hovered === ind.id;
            const anyHovered = hovered !== null;
            return (
              <motion.div
                key={ind.id}
                onHoverStart={() => setHovered(ind.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{ opacity: anyHovered && !isHovered ? 0.45 : 1, scale: isHovered ? 1.02 : anyHovered ? 0.98 : 1 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  gridColumn: `span ${ind.span}`,
                  height: ind.span === 2 ? '240px' : '190px',
                  position: 'relative', borderRadius: '14px', overflow: 'hidden', cursor: 'default',
                  border: isHovered ? '1.5px solid rgba(245,158,11,0.7)' : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isHovered ? '0 0 28px rgba(245,158,11,0.2), 0 12px 40px rgba(0,0,0,0.6)' : '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                <motion.img src={ind.image} alt={ind.label} animate={{ scale: isHovered ? 1.08 : 1 }} transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <motion.div animate={{ opacity: isHovered ? 0.55 : 0.72 }} transition={{ duration: 0.35 }} style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,12,26,0.95) 0%, rgba(6,12,26,0.3) 60%, transparent 100%)' }} />
                <motion.div animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #F59E0B, #FCD34D, #F59E0B, transparent)', transformOrigin: 'left' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '10px', fontWeight: '800', color: isHovered ? '#F59E0B' : 'rgba(156,163,175,0.7)', fontFamily: 'var(--font-headings)', letterSpacing: '0.5px', background: 'rgba(6,12,26,0.65)', backdropFilter: 'blur(6px)', border: `1px solid ${isHovered ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '5px', padding: '2px 7px', transition: 'color 0.3s, border-color 0.3s' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                  <motion.h3 animate={{ y: isHovered ? -4 : 0, color: isHovered ? '#F59E0B' : '#FFFFFF' }} transition={{ duration: 0.3 }} style={{ margin: 0, fontSize: ind.span === 2 ? '17px' : '14px', fontWeight: '800', fontFamily: 'var(--font-headings)', lineHeight: 1.2, letterSpacing: '-0.2px', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                    {ind.label}
                  </motion.h3>
                  <motion.div animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }} transition={{ duration: 0.3, delay: 0.05 }} style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                    <div style={{ width: '20px', height: '1.5px', background: '#F59E0B', borderRadius: '1px' }} />
                    <span style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(245,158,11,0.9)', letterSpacing: '0.5px' }}>CEA SOLUTIONS AVAILABLE</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const countries = [
    'India', 'Singapore', 'Indonesia', 'Bangladesh', 'Nigeria',
    'UAE', 'Nepal', 'Kenya', 'Iran', 'USA'
  ];

  const timeline = [
    { year: '2015', title: 'CEA Infotech Founded' },
    { year: '2016–2020', title: 'Product & Service Expansion' },
    { year: '2021–2024', title: 'Growth Across Industries & Global Markets' },
    { year: 'Present', title: 'Enterprise Solutions & Product Innovation' }
  ];

  const whyChoose = [
    { title: '35+ Years Leadership', desc: 'Decades of industry expertise driving strategic technology decisions.', icon: <Award size={24} />, color: 'wi-amber' },
    { title: '11+ Industry Domains', desc: 'Deep domain knowledge across manufacturing, finance, retail and more.', icon: <Layers size={24} />, color: 'wi-blue' },
    { title: 'Global Delivery', desc: 'Proven track record of successful project delivery across 10+ countries.', icon: <Globe size={24} />, color: 'wi-teal' },
    { title: 'Custom Enterprise Solutions', desc: 'Tailored software architectures built for specific business requirements.', icon: <Briefcase size={24} />, color: 'wi-amber' },
    { title: 'Long-Term Relationships', desc: 'Trusted partnerships built on reliability, transparency and results.', icon: <Handshake size={24} />, color: 'wi-blue' },
    { title: 'Product Innovation', desc: 'Continuous R&D delivering scalable products for modern enterprises.', icon: <Rocket size={24} />, color: 'wi-teal' }
  ];

  const founderHighlights = [
    '35+ Years IT Experience',
    'ERP Specialist',
    'CRM & SCM Expertise',
    'Financial Systems',
    'Global Project Delivery'
  ];

  return (
    <div>
      {/* ===== SECTION 1: HERO BANNER ===== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Professional corporate office environment"
            loading="eager"
          />
        </div>
        <div className="about-hero-overlay" />
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="section-subtitle"
              style={{ color: 'var(--cta)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              About CEA Infotech
            </motion.span>
            <h1>Empowering Businesses Through Technology Excellence</h1>
            <p>
              Over a decade of delivering enterprise software solutions, manufacturing systems and business transformation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: WHO WE ARE ===== */}
      <section className="about-who-section">
        <div className="container">
          <div className="about-who-grid">
            <motion.div
              className="about-who-image"
              {...fadeInUp}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Professional team collaboration in modern office"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="about-who-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-subtitle">Who We Are</span>
              <h2>CEA Infotech Private Limited</h2>
              <p>
                Established in June 2015 and headquartered in Bangalore, India, CEA Infotech is a technology-driven enterprise delivering solutions that transform business operations.
              </p>
              <p>
                We specialize in enterprise software solutions, consulting services, manufacturing systems, compliance management and custom application development.
              </p>
              <div className="about-who-badge-row">
                <span className="about-who-badge">Enterprise Software</span>
                <span className="about-who-badge">Manufacturing Systems</span>
                <span className="about-who-badge">Compliance Management</span>
                <span className="about-who-badge">Custom Development</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: VISION ===== */}
      <section className="about-vision-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Our Vision</span>
            <h2 className="section-title">What Drives Us Forward</h2>
            <p className="section-desc">Our foundation is anchored on customer success, business excellence and continuous innovation.</p>
          </motion.div>

          <motion.div
            className="grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-amber">
                <HeartHandshake size={28} />
              </div>
              <h3>Customer Success</h3>
              <p>Building long-term customer relationships through trusted solutions and services.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-blue">
                <Target size={28} />
              </div>
              <h3>Business Excellence</h3>
              <p>Helping organizations overcome challenges and improve operational efficiency.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-teal">
                <Lightbulb size={28} />
              </div>
              <h3>Continuous Innovation</h3>
              <p>Delivering scalable software products and digital transformation solutions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3.5: CORE VALUES ===== */}
      <section className="about-values-section" style={{ padding: '100px 0', backgroundColor: 'var(--secondary-bg)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Our Pillars</span>
            <h2 className="section-title">Core Values</h2>
            <p className="section-desc">The principles that govern our projects, decisions and operations.</p>
          </motion.div>

          <motion.div
            className="grid-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}
          >
            {[
              { title: 'Quality', desc: 'Delivering robust, high-performance enterprise systems.', icon: <CheckCircle size={24} style={{ color: 'var(--supporting)' }} /> },
              { title: 'Integrity', desc: 'Transparent, honest, and ethical partnership at all levels.', icon: <ShieldCheck size={24} style={{ color: 'var(--accent)' }} /> },
              { title: 'Innovation', desc: 'Continuous research driving advanced technological tools.', icon: <Lightbulb size={24} style={{ color: 'var(--supporting)' }} /> },
              { title: 'Accountability', desc: 'Taking complete ownership of our promises and milestones.', icon: <Target size={24} style={{ color: 'var(--accent)' }} /> },
              { title: 'Reliability', desc: 'Serving as a dependable, long-term technical partner.', icon: <Award size={24} style={{ color: 'var(--supporting)' }} /> }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card"
                whileHover={{ y: -6, borderColor: 'var(--accent)' }}
                style={{ padding: '28px 20px', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>{value.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--secondary)', lineHeight: '1.5', margin: 0 }}>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 4: FOUNDER & LEADERSHIP ===== */}
      <section className="about-founder-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Leadership</span>
            <h2 className="section-title">Founder & Director</h2>
          </motion.div>

          <motion.div
            className="founder-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="founder-grid">
              <div className="founder-photo-area">
                <div className="founder-avatar">
                  <span className="founder-avatar-initials">MD</span>
                </div>
                <div className="founder-name-area">
                  <h3>M.D. Manohar</h3>
                  <p>Founder & Director</p>
                </div>
              </div>

              <div className="founder-details">
                <span className="section-subtitle">Executive Profile</span>
                <h2>35+ Years of IT Industry Leadership</h2>

                <div className="founder-highlights">
                  {founderHighlights.map((h) => (
                    <span key={h} className="founder-badge">
                      <CheckCircle size={14} />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="founder-global">
                  <h4>Projects Delivered Across</h4>
                  <div className="founder-countries">
                    {countries.map((c) => (
                      <span key={c} className="founder-country-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 5: CORE STRENGTHS — ENTERPRISE COMMAND CENTER ===== */}
      <EnterpriseCommandCenter />

      {/* ===== SECTION 6: DOMAIN EXPERTISE — INTERACTIVE INDUSTRY WALL ===== */}
      <IndustryWall />

      {/* ===== SECTION 7: GLOBAL EXPERIENCE ===== */}
      <section className="about-global-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Global Reach</span>
            <h2 className="section-title">Trusted Across Multiple Countries</h2>
            <p className="section-desc">Delivering enterprise solutions and technology consulting across continents.</p>
          </motion.div>

          <motion.div
            className="global-map-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="global-countries-grid">
              {countries.map((country) => (
                <motion.div
                  key={country}
                  variants={staggerItem}
                  className="global-country-card"
                >
                  <div className="global-country-icon">
                    <MapPin size={20} />
                  </div>
                  <h4>{country}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 8: COMPANY JOURNEY ===== */}
      <section className="about-journey-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Milestones</span>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-desc">A decade of growth, innovation and global impact.</p>
          </motion.div>

          <div className="h-timeline">
            <div className="h-timeline-line" />
            <motion.div
              className="h-timeline-items"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="h-timeline-item"
                >
                  <div className="h-timeline-card">
                    <div className="h-timeline-year">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="h-timeline-dot" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: WHY CHOOSE US ===== */}
      <section className="about-why-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Our Advantage</span>
            <h2 className="section-title">Why Choose CEA Infotech</h2>
            <p className="section-desc">The differentiators that make us a trusted technology partner.</p>
          </motion.div>

          <motion.div
            className="why-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {whyChoose.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="why-card">
                <div className={`why-icon ${item.color}`}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 10: CTA ===== */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Let's Build Smarter Business Solutions Together</h2>
            <p>Partner with CEA Infotech to transform operations through innovative technology solutions.</p>
            <button
              className="btn-cta-about"
              onClick={() => navigate('/contact')}
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
