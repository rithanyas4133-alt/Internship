import { motion, useInView, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  HeartHandshake, Target, Lightbulb, CheckCircle,
  Award, Globe, Briefcase, Handshake,
  Rocket, Layers, ArrowRight, Calendar,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const NODES = [
  { id: 'erp',      label: 'Enterprise Resource\nPlanning',   angle: 0,   color: '#22D3EE' },
  { id: 'prod',     label: 'Production\nTracking',            angle: 40,  color: '#F59E0B' },
  { id: 'comp',     label: 'Compliance\nTracking',            angle: 80,  color: '#10B981' },
  { id: 'hrms',     label: 'HRMS &\nPayroll',                 angle: 120, color: '#A78BFA' },
  { id: 'retail',   label: 'Retail\nSolutions',               angle: 160, color: '#F472B6' },
  { id: 'finance',  label: 'Financial\nAccounting',           angle: 200, color: '#FB923C' },
  { id: 'property', label: 'Property\nManagement',            angle: 240, color: '#34D399' },
  { id: 'ngo',      label: 'NGO\nSolutions',                  angle: 280, color: '#60A5FA' },
  { id: 'custom',   label: 'Custom Enterprise\nApplications', angle: 320, color: '#FBBF24' },
];

const INDUSTRIES = [
  { id: 'manufacturing', label: 'Manufacturing',         image: '/images/ind_manufacturing.jpg', span: 2, row: 1 },
  { id: 'construction',  label: 'Construction',          image: '/images/ind_construction.jpg',  span: 1, row: 1 },
  { id: 'engineering',   label: 'Engineering',           image: '/images/ind_engineering.jpg',   span: 1, row: 1 },
  { id: 'apparel',       label: 'Apparel',               image: '/images/ind_apparel.jpg',       span: 1, row: 2 },
  { id: 'textiles',      label: 'Home Textiles',         image: '/images/ind_home_textiles.jpg', span: 1, row: 2 },
  { id: 'retail',        label: 'Retail',                image: '/images/ind_retail.jpg',        span: 2, row: 2 },
  { id: 'finance',       label: 'Finance',               image: '/images/ind_finance.jpg',       span: 1, row: 3 },
  { id: 'ngo',           label: 'NGO Operations',        image: '/images/ind_ngo.jpg',           span: 1, row: 3 },
  { id: 'compliance',    label: 'Compliance Management', image: '/images/ind_compliance.jpg',    span: 2, row: 3 },
];

// CUSTOMERS array removed because it is unused

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — CEA DIGITAL ECOSYSTEM (Command Center)
// ─────────────────────────────────────────────────────────────────────────────

function DigitalEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [pulse, setPulse] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => setPulse(p => (p + 1) % NODES.length), 2000);
    return () => clearInterval(t);
  }, [isInView]);

  const R = 270, CX = 420, CY = 420;
  const pos = (angle: number, r = R) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
  };

  return (
    <section style={{ background: 'var(--primary-bg)', padding: '110px 0 120px', overflow: 'hidden', position: 'relative' }}>
      {/* Animated grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)',
        backgroundSize: '56px 56px', pointerEvents: 'none',
      }} />
      {/* Radial ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '900px', height: '900px', borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(var(--accent-rgb),0.07) 0%,rgba(34,211,238,0.03) 35%,transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Scan line */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 6, ease: 'linear', repeat: Infinity, repeatDelay: 2 }}
        style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(34,211,238,0.18),transparent)', pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '40px', padding: '6px 18px', marginBottom: '22px' }}>
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22D3EE', boxShadow: '0 0 10px #22D3EE' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#22D3EE', letterSpacing: '1.5px', textTransform: 'uppercase' }}>CEA Digital Ecosystem</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px,3.8vw,52px)', fontWeight: '800', color: 'var(--text-main)', margin: '0 0 16px', fontFamily: 'var(--font-headings)', letterSpacing: '-0.5px' }}>
            Enterprise Command Center
          </h2>
          <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.65 }}>
            An interconnected enterprise ecosystem delivering manufacturing excellence, compliance governance, operational intelligence, and business transformation.
          </p>
        </motion.div>

        {/* SVG Network */}
        <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 840 840" style={{ width: '100%', maxWidth: '840px', height: 'auto', overflow: 'visible' }}>
            <defs>
              {NODES.map(n => (
                <radialGradient key={n.id} id={`eco-grad-${n.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={n.color} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={n.color} stopOpacity="0" />
                </radialGradient>
              ))}
              <radialGradient id="eco-center-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
              <filter id="eco-glow">
                <feGaussianBlur stdDeviation="3.5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="eco-glow-strong">
                <feGaussianBlur stdDeviation="7" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <marker id="eco-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(var(--accent-rgb),0.5)" />
              </marker>
            </defs>

            {/* Orbit rings */}
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <circle cx={CX} cy={CY} r={R * 0.55} fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" strokeDasharray="5 9" />
            <circle cx={CX} cy={CY} r={R * 0.3} fill="none" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
            {/* Center ambient glow */}
            <circle cx={CX} cy={CY} r={100} fill="url(#eco-center-grad)" />

            {/* Connection lines */}
            {NODES.map((n, i) => {
              const p = pos(n.angle);
              const active = hoveredNode === n.id || pulse === i;
              return (
                <motion.line key={`l-${n.id}`}
                  x1={CX} y1={CY} x2={p.x} y2={p.y}
                  stroke={active ? n.color : 'rgba(255,255,255,0.06)'}
                  strokeWidth={active ? 1.8 : 0.8}
                  strokeDasharray={active ? 'none' : '3 7'}
                  markerEnd={active ? 'url(#eco-arrow)' : undefined}
                  filter={active ? 'url(#eco-glow)' : undefined}
                  animate={{ opacity: active ? 1 : 0.35 }}
                  transition={{ duration: 0.35 }}
                />
              );
            })}

            {/* Pulse travel dots */}
            {NODES.map((n, i) => {
              if (pulse !== i && hoveredNode !== n.id) return null;
              const p = pos(n.angle);
              return (
                <motion.circle key={`pd-${n.id}`} r="4.5" fill={n.color}
                  filter="url(#eco-glow-strong)"
                  animate={{ x: [CX, p.x], y: [CY, p.y], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
                />
              );
            })}

            {/* Secondary micro-pulses on inner ring */}
            {NODES.map((n, i) => {
              const innerP = pos(n.angle, R * 0.55);
              const active = hoveredNode === n.id || pulse === i;
              if (!active) return null;
              return (
                <motion.circle key={`mp-${n.id}`} cx={innerP.x} cy={innerP.y} r="3"
                  fill={n.color} opacity={0.5} filter="url(#eco-glow)"
                  animate={{ r: [3, 6, 3], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              );
            })}

            {/* Outer nodes */}
            {NODES.map((n, i) => {
              const p = pos(n.angle);
              const active = hoveredNode === n.id || pulse === i;
              const lines = n.label.split('\n');
              const ta = p.x < CX - 15 ? 'end' : p.x > CX + 15 ? 'start' : 'middle';
              const lox = p.x < CX - 15 ? -24 : p.x > CX + 15 ? 24 : 0;
              const loy = p.y < CY - 15 ? -24 : p.y > CY + 15 ? 24 : 0;
              return (
                <g key={n.id} onMouseEnter={() => setHoveredNode(n.id)} onMouseLeave={() => setHoveredNode(null)} style={{ cursor: 'pointer' }}>
                  {/* Halo */}
                  <motion.circle cx={p.x} cy={p.y}
                    animate={{ r: active ? 38 : 24, opacity: active ? 0.55 : 0.12 }}
                    transition={{ duration: 0.3 }}
                    fill={`url(#eco-grad-${n.id})`}
                  />
                  {/* Ring */}
                  <motion.circle cx={p.x} cy={p.y}
                    animate={{ r: active ? 20 : 14, fill: active ? n.color : 'var(--primary-bg)', stroke: n.color, strokeWidth: active ? 2.5 : 1.5 }}
                    transition={{ duration: 0.28 }}
                    filter={active ? 'url(#eco-glow)' : undefined}
                  />
                  {/* Number */}
                  <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="10" fontWeight="800"
                    fill={active ? '#020810' : n.color} fontFamily="var(--font-headings)">
                    {String(i + 1).padStart(2, '0')}
                  </text>
                  {/* Labels */}
                  <motion.g animate={{ opacity: active ? 1 : 0.6 }} transition={{ duration: 0.22 }}>
                    {lines.map((ln, li) => (
                      <text key={li}
                        x={p.x + lox}
                        y={p.y + loy + li * 15 + (lines.length > 1 ? -7 : 0)}
                        textAnchor={ta} fontSize="11.5" fontWeight="700"
                        fill={active ? n.color : 'rgba(209,213,219,0.75)'}
                        fontFamily="var(--font-headings)"
                        filter={active ? 'url(#eco-glow)' : undefined}
                      >{ln}</text>
                    ))}
                  </motion.g>
                </g>
              );
            })}

            {/* Center hub */}
            <g>
              {/* Outer spinner ring */}
              <motion.circle cx={CX} cy={CY} r={76}
                fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="12 24"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />
              {/* Counter spinner */}
              <motion.circle cx={CX} cy={CY} r={68}
                fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth="0.75" strokeDasharray="6 14"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />
              <circle cx={CX} cy={CY} r={60} fill="#06101F" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" />
              {/* Pulse ring */}
              <motion.circle cx={CX} cy={CY} r={60}
                fill="none" stroke="rgba(245,158,11,0.15)"
                animate={{ r: [60, 72, 60], opacity: [0.15, 0.4, 0.15] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <text x={CX} y={CY - 14} textAnchor="middle" fontSize="12" fontWeight="800" fill="#F59E0B" fontFamily="var(--font-headings)" letterSpacing="1.5">CEA</text>
              <text x={CX} y={CY + 2} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="rgba(209,213,219,0.65)" fontFamily="var(--font-headings)">INFOTECH</text>
              <text x={CX} y={CY + 17} textAnchor="middle" fontSize="7.5" fontWeight="500" fill="rgba(245,158,11,0.75)" fontFamily="var(--font-headings)" letterSpacing="0.8">DIGITAL ECOSYSTEM</text>
            </g>
          </svg>
        </div>

        {/* Legend pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '9px', marginTop: '44px' }}
        >
          {NODES.map(n => (
            <motion.div key={n.id}
              onHoverStart={() => setHoveredNode(n.id)}
              onHoverEnd={() => setHoveredNode(null)}
              animate={{ background: hoveredNode === n.id ? `${n.color}1A` : 'rgba(255,255,255,0.04)', borderColor: hoveredNode === n.id ? `${n.color}70` : 'rgba(255,255,255,0.08)' }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center', gap: '7px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '5px 14px', cursor: 'default' }}
            >
              <motion.div
                animate={{ boxShadow: hoveredNode === n.id ? `0 0 10px ${n.color}` : 'none' }}
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: n.color, flexShrink: 0 }}
              />
              <span style={{ fontSize: '11.5px', fontWeight: '600', color: hoveredNode === n.id ? n.color : 'rgba(209,213,219,0.65)', fontFamily: 'var(--font-headings)', whiteSpace: 'nowrap', transition: 'color 0.2s' }}>
                {n.label.replace('\n', ' ')}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — INDUSTRIES WE EMPOWER (Industry Wall)
// ─────────────────────────────────────────────────────────────────────────────

function IndustriesWall() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{ background: '#060C18', padding: '110px 0 120px', overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(245,158,11,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.018) 1px,transparent 1px)',
        backgroundSize: '80px 80px', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '40px', padding: '6px 18px', marginBottom: '20px' }}>
            <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#F59E0B', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Industries We Empower</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px,3.8vw,52px)', fontWeight: '800', color: '#fff', margin: '0 0 16px', fontFamily: 'var(--font-headings)', letterSpacing: '-0.5px' }}>
            Interactive Industry Wall
          </h2>
          <p style={{ fontSize: '15.5px', color: 'rgba(209,213,219,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.65 }}>
            Delivering tailored technology solutions across diverse industrial and operational environments.
          </p>
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', maxWidth: '1140px', margin: '0 auto' }}
        >
          {INDUSTRIES.map((ind, i) => {
            const isH = hovered === ind.id;
            const anyH = hovered !== null;
            return (
              <motion.div key={ind.id}
                onHoverStart={() => setHovered(ind.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  opacity: anyH && !isH ? 0.42 : 1,
                  scale: isH ? 1.025 : anyH ? 0.978 : 1,
                }}
                transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  gridColumn: `span ${ind.span}`,
                  height: ind.span === 2 ? '250px' : '195px',
                  position: 'relative', borderRadius: '14px', overflow: 'hidden', cursor: 'default',
                  border: isH ? '1.5px solid rgba(245,158,11,0.72)' : '1px solid rgba(255,255,255,0.055)',
                  boxShadow: isH ? '0 0 32px rgba(245,158,11,0.22),0 14px 44px rgba(0,0,0,0.65)' : '0 4px 22px rgba(0,0,0,0.45)',
                }}
              >
                {/* Photo */}
                <motion.img src={ind.image} alt={ind.label}
                  animate={{ scale: isH ? 1.09 : 1 }}
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay */}
                <motion.div animate={{ opacity: isH ? 0.5 : 0.72 }} transition={{ duration: 0.35 }}
                  style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(4,8,16,0.96) 0%,rgba(4,8,16,0.25) 55%,transparent 100%)' }}
                />
                {/* Gold top bar */}
                <motion.div
                  animate={{ scaleX: isH ? 1 : 0, opacity: isH ? 1 : 0 }}
                  transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2.5px', background: 'linear-gradient(90deg,transparent,#F59E0B,#FDE68A,#F59E0B,transparent)', transformOrigin: 'left' }}
                />
                {/* Index badge */}
                <div style={{ position: 'absolute', top: '11px', left: '11px', fontSize: '9.5px', fontWeight: '800', color: isH ? '#F59E0B' : 'rgba(156,163,175,0.6)', fontFamily: 'var(--font-headings)', letterSpacing: '0.5px', background: 'rgba(4,8,16,0.7)', backdropFilter: 'blur(6px)', border: `1px solid ${isH ? 'rgba(245,158,11,0.45)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '5px', padding: '2px 7px', transition: 'color 0.3s,border-color 0.3s' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Label */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                  <motion.h3
                    animate={{ y: isH ? -5 : 0, color: isH ? '#F59E0B' : '#FFFFFF' }}
                    transition={{ duration: 0.3 }}
                    style={{ margin: 0, fontSize: ind.span === 2 ? '17px' : '14px', fontWeight: '800', fontFamily: 'var(--font-headings)', lineHeight: 1.2, textShadow: '0 2px 14px rgba(0,0,0,0.9)' }}
                  >
                    {ind.label}
                  </motion.h3>
                  <motion.div
                    animate={{ opacity: isH ? 1 : 0, y: isH ? 0 : 7 }}
                    transition={{ duration: 0.3, delay: 0.06 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}
                  >
                    <div style={{ width: '22px', height: '1.5px', background: '#F59E0B', borderRadius: '1px' }} />
                    <span style={{ fontSize: '10.5px', fontWeight: '700', color: 'rgba(245,158,11,0.9)', letterSpacing: '0.6px', textTransform: 'uppercase' }}>CEA Solutions Available</span>
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

// ─────────────────────────────────────────────────────────────────────────────
// CORE VALUES — PREMIUM VISUAL STORYTELLING
// ─────────────────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    id: 'quality',
    title: 'Quality',
    theme: 'Manufacturing Operations',
    desc: 'Delivering robust, high-performance enterprise systems built to last.',
    image: '/images/val_quality.jpg',
    color: '#D4AF37',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    theme: 'Executive Collaboration',
    desc: 'Transparent, honest and ethical partnership at every level.',
    image: '/images/val_integrity.jpg',
    color: '#D4AF37',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    theme: 'Digital Transformation',
    desc: 'Continuous R&D driving next-generation technological tools.',
    image: '/images/val_innovation.jpg',
    color: '#D4AF37',
  },
  {
    id: 'accountability',
    title: 'Accountability',
    theme: 'Project Governance',
    desc: 'Taking complete ownership of every promise and milestone.',
    image: '/images/val_accountability.jpg',
    color: '#D4AF37',
  },
  {
    id: 'reliability',
    title: 'Reliability',
    theme: 'Enterprise Infrastructure',
    desc: 'A dependable long-term technology partner you can count on.',
    image: '/images/val_reliability.jpg',
    color: '#D4AF37',
  },
];

interface ConnectionLineProps {
  from: { x: number; y: number } | undefined;
  to: { x: number; y: number } | null;
  isHovered: boolean;
  color: string;
}

function ConnectionLine({ from, to, isHovered, color }: ConnectionLineProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setProgress(0);
      return;
    }
    let start: number | null = null;
    let animId: number;

    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const p = (elapsed % duration) / duration;
      setProgress(p);
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  if (!from || !to) return null;

  const dotX = from.x + (to.x - from.x) * progress;
  const dotY = from.y + (to.y - from.y) * progress;

  return (
    <>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={isHovered ? color : 'rgba(255, 255, 255, 0.05)'}
        strokeWidth={isHovered ? 2.5 : 1}
        strokeDasharray={isHovered ? 'none' : '4 8'}
        style={{
          transition: 'stroke 0.3s, stroke-width 0.3s',
        }}
      />
      {isHovered && (
        <line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke={color}
          strokeWidth={5}
          opacity={0.15}
          style={{ filter: 'blur(3px)' }}
        />
      )}
      {isHovered && (
        <circle
          cx={dotX}
          cy={dotY}
          r={4.5}
          fill="#D4AF37"
          style={{
            filter: 'drop-shadow(0 0 6px #D4AF37)',
          }}
        />
      )}
    </>
  );
}

interface GlassValueNodeProps {
  v: typeof CORE_VALUES[0];
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  nodeRef: React.RefObject<HTMLDivElement | null>;
  parallaxStyle?: any;
}

function GlassValueNode({
  v,
  index,
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  nodeRef,
  parallaxStyle,
}: GlassValueNodeProps) {
  return (
    <motion.div
      ref={nodeRef}
      style={{
        ...parallaxStyle,
        width: '240px',
        zIndex: isHovered ? 20 : 10,
      }}
    >
      <motion.div
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        animate={{
          scale: isHovered ? 1.05 : 1,
          opacity: isDimmed ? 0.42 : 1,
          boxShadow: isHovered
            ? '0 0 30px rgba(212, 175, 55, 0.25), 0 20px 48px rgba(0, 0, 0, 0.8)'
            : '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          borderColor: isHovered ? '#D4AF37' : 'rgba(212, 175, 55, 0.15)',
          backgroundColor: isHovered ? 'rgba(10, 15, 28, 0.85)' : 'rgba(10, 15, 28, 0.55)',
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          background: 'rgba(10, 15, 28, 0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '20px 24px',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.35 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            transformOrigin: 'left',
          }}
        />

        <div style={{
          fontSize: '9px',
          fontWeight: '900',
          color: isHovered ? '#D4AF37' : 'rgba(255, 255, 255, 0.25)',
          fontFamily: 'var(--font-headings)',
          letterSpacing: '1px',
          marginBottom: '8px',
          textTransform: 'uppercase',
          transition: 'color 0.3s',
        }}>
          Value {String(index + 1).padStart(2, '0')}
        </div>

        <h4 style={{
          fontSize: '18px',
          fontWeight: '800',
          margin: '0 0 4px 0',
          fontFamily: 'var(--font-headings)',
          letterSpacing: '-0.3px',
          transition: 'color 0.3s',
          color: isHovered ? '#D4AF37' : '#FFFFFF',
        }}>
          {v.title}
        </h4>
        <div style={{
          fontSize: '11px',
          color: 'rgba(209, 213, 219, 0.55)',
          fontWeight: '500',
          lineHeight: 1.2,
        }}>
          {v.theme}
        </div>
      </motion.div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <motion.div
          animate={{
            backgroundColor: isHovered ? '#D4AF37' : 'rgba(255, 255, 255, 0.15)',
            boxShadow: isHovered ? '0 0 10px #D4AF37' : 'none',
            scale: isHovered ? 1.25 : 1,
          }}
          transition={{ duration: 0.25 }}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            border: '2px solid #040810',
          }}
        />
      </div>
    </motion.div>
  );
}

function CoreValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = {
    quality: useRef<HTMLDivElement>(null),
    integrity: useRef<HTMLDivElement>(null),
    innovation: useRef<HTMLDivElement>(null),
    accountability: useRef<HTMLDivElement>(null),
    reliability: useRef<HTMLDivElement>(null),
  };

  const [coords, setCoords] = useState<{
    center: { x: number; y: number } | null;
    nodes: Record<string, { x: number; y: number }>;
  }>({
    center: null,
    nodes: {},
  });

  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  const bgX = useTransform(smoothX, [-1, 1], ['-15px', '15px']);
  const bgY = useTransform(smoothY, [-1, 1], ['-10px', '10px']);
  const centerImgX = useTransform(smoothX, [-1, 1], ['-8px', '8px']);
  const centerImgY = useTransform(smoothY, [-1, 1], ['-6px', '6px']);

  const nodeOffsetLeftX = useTransform(smoothX, [-1, 1], ['-5px', '5px']);
  const nodeOffsetLeftY = useTransform(smoothY, [-1, 1], ['-3px', '3px']);
  const nodeOffsetRightX = useTransform(smoothX, [-1, 1], ['5px', '-5px']);
  const nodeOffsetRightY = useTransform(smoothY, [-1, 1], ['3px', '-3px']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const updateCoords = () => {
    if (!containerRef.current || !centerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const getCenter = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      };
    };

    const centerCoords = getCenter(centerRef.current);
    const newNodes: Record<string, { x: number; y: number }> = {};
    
    Object.entries(nodeRefs).forEach(([key, ref]) => {
      if (ref.current) {
        newNodes[key] = getCenter(ref.current);
      }
    });

    setCoords({
      center: centerCoords,
      nodes: newNodes,
    });
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 968);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (containerRef.current) {
      const observer = new ResizeObserver(() => {
        updateCoords();
      });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', checkMobile);
      };
    }
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update coords on resize and when mobile status changes
  useEffect(() => {
    updateCoords();
    const t = setTimeout(updateCoords, 300);
    return () => clearTimeout(t);
  }, [isMobile, hovered]);

  const activeValue = CORE_VALUES.find(v => v.id === hovered);

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: '#040810',
        padding: '120px 0 130px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background Animated Grid */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          position: 'absolute',
          inset: '-20px',
          backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vw',
        maxWidth: '900px',
        maxHeight: '900px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, rgba(10, 15, 28, 0.0) 65%)',
        pointerEvents: 'none',
      }} />

      {/* Top golden border divider */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '40px',
            padding: '6px 18px',
            marginBottom: '22px',
          }}>
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#D4AF37',
                boxShadow: '0 0 8px #D4AF37',
              }}
            />
            <span style={{
              fontSize: '11px',
              fontWeight: '750',
              color: '#D4AF37',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Our Foundations
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 3.8vw, 52px)',
            fontWeight: '800',
            color: '#FFFFFF',
            margin: '0 0 14px 0',
            fontFamily: 'var(--font-headings)',
            letterSpacing: '-0.5px',
          }}>
            Core Values
          </h2>
          <p style={{
            fontSize: '15.5px',
            color: 'rgba(209, 213, 219, 0.6)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            The principles that govern our projects, decisions and operations.
          </p>
        </motion.div>

        {isMobile ? (
          /* Mobile Layout */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
            {/* Centerpiece Image */}
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              width: '100%',
              aspectRatio: '16/10',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
            }}>
              <img src="/images/val_centerpiece.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    key={hovered}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <img src={CORE_VALUES.find(v => v.id === hovered)?.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4, 8, 15, 0.9) 0%, rgba(4, 8, 15, 0.2) 60%)' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Description Box */}
            <div style={{
              width: '100%',
              minHeight: '120px',
              textAlign: 'center',
              padding: '16px 20px',
              background: 'rgba(10, 15, 28, 0.45)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(212, 175, 55, 0.1)',
            }}>
              {activeValue ? (
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '800', color: '#D4AF37', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{activeValue.theme}</div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', margin: '0 0 6px 0', fontFamily: 'var(--font-headings)' }}>{activeValue.title}</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(209, 213, 219, 0.85)', margin: 0, lineHeight: 1.45 }}>{activeValue.desc}</p>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>CEA Pillars</div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', margin: '0 0 6px 0', fontFamily: 'var(--font-headings)' }}>Enterprise DNA</h4>
                  <p style={{ fontSize: '13px', color: 'rgba(209, 213, 219, 0.55)', margin: 0, lineHeight: 1.45 }}>Tap on our values below to explore.</p>
                </div>
              )}
            </div>

            {/* Interactive Glass Nodes List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CORE_VALUES.map((v) => {
                const isSelected = hovered === v.id;
                return (
                  <div
                    key={v.id}
                    onClick={() => setHovered(isSelected ? null : v.id)}
                    style={{
                      borderRadius: '12px',
                      border: `1px solid ${isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}`,
                      background: isSelected ? 'rgba(10, 15, 28, 0.85)' : 'rgba(10, 15, 28, 0.45)',
                      padding: '14px 20px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: isSelected ? '0 0 15px rgba(212, 175, 55, 0.15)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: isSelected ? '#D4AF37' : '#fff', fontFamily: 'var(--font-headings)' }}>{v.title}</div>
                      <div style={{ fontSize: '10.5px', color: 'rgba(209, 213, 219, 0.5)' }}>{v.theme}</div>
                    </div>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isSelected ? '0 0 8px #D4AF37' : 'none',
                      transition: 'all 0.3s ease',
                    }} />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Desktop Premium Network Layout with 3-Column Grid */
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 460px 1fr',
              columnGap: '40px',
              rowGap: '20px',
              alignItems: 'center',
              minHeight: '750px',
            }}
          >
            {/* SVG Connection Lines */}
            {coords.center && (
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {CORE_VALUES.map((v) => (
                  <ConnectionLine
                    key={v.id}
                    from={coords.nodes[v.id]}
                    to={coords.center}
                    isHovered={hovered === v.id}
                    color="#D4AF37"
                  />
                ))}
              </svg>
            )}

            {/* Left Column: Quality & Innovation */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '140px',
              alignItems: 'flex-end',
              zIndex: 10,
            }}>
              {/* Quality */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <GlassValueNode
                  v={CORE_VALUES[0]}
                  index={0}
                  isHovered={hovered === 'quality'}
                  isDimmed={hovered !== null && hovered !== 'quality'}
                  onHoverStart={() => setHovered('quality')}
                  onHoverEnd={() => setHovered(null)}
                  nodeRef={nodeRefs.quality}
                  parallaxStyle={{ x: nodeOffsetLeftX, y: nodeOffsetLeftY }}
                />
              </motion.div>

              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <GlassValueNode
                  v={CORE_VALUES[2]}
                  index={2}
                  isHovered={hovered === 'innovation'}
                  isDimmed={hovered !== null && hovered !== 'innovation'}
                  onHoverStart={() => setHovered('innovation')}
                  onHoverEnd={() => setHovered(null)}
                  nodeRef={nodeRefs.innovation}
                  parallaxStyle={{ x: nodeOffsetLeftX, y: nodeOffsetLeftY }}
                />
              </motion.div>
            </div>

            {/* Center Column: Centerpiece, Description, Reliability */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              zIndex: 10,
            }}>
              {/* Large centerpiece visual */}
              <motion.div
                ref={centerRef}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.18)',
                  boxShadow: '0 32px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(212, 175, 55, 0.05)',
                }}
              >
                {/* Gold corner brackets */}
                {[
                  { top: -1, left: -1, borderTop: '3px solid #D4AF37', borderLeft: '3px solid #D4AF37', borderRadius: '24px 0 0 0' },
                  { top: -1, right: -1, borderTop: '3px solid #D4AF37', borderRight: '3px solid #D4AF37', borderRadius: '0 24px 0 0' },
                  { bottom: -1, left: -1, borderBottom: '3px solid #D4AF37', borderLeft: '3px solid #D4AF37', borderRadius: '0 0 0 24px' },
                  { bottom: -1, right: -1, borderBottom: '3px solid #D4AF37', borderRight: '3px solid #D4AF37', borderRadius: '0 0 24px 0' },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      zIndex: 5,
                      pointerEvents: 'none',
                      ...s
                    }}
                  />
                ))}

                {/* Default Centerpiece */}
                <motion.img
                  src="/images/val_centerpiece.jpg"
                  alt="CEA Centerpiece"
                  style={{
                    x: centerImgX,
                    y: centerImgY,
                    width: '108%',
                    height: '108%',
                    objectFit: 'cover',
                    marginLeft: '-4%',
                    marginTop: '-4%',
                  }}
                />
                
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 35%, rgba(4, 8, 15, 0.7) 100%)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }} />

                {/* Hover Imagery Masks */}
                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)', scale: 1.05 }}
                      animate={{ opacity: 1, clipPath: 'circle(100% at 50% 50%)', scale: 1 }}
                      exit={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)', scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <motion.img
                        src={CORE_VALUES.find(cv => cv.id === hovered)?.image}
                        alt={hovered}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(4, 8, 15, 0.9) 0%, rgba(4, 8, 15, 0.2) 60%)',
                      }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Description box */}
              <div style={{
                width: '100%',
                minHeight: '110px',
                textAlign: 'center',
                padding: '18px 24px',
                background: 'rgba(10, 15, 28, 0.45)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(212, 175, 55, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                borderColor: activeValue ? 'rgba(212, 175, 55, 0.35)' : 'rgba(212, 175, 55, 0.1)',
                boxShadow: activeValue ? '0 12px 32px rgba(0, 0, 0, 0.35), 0 0 15px rgba(212, 175, 55, 0.05)' : '0 12px 32px rgba(0, 0, 0, 0.25)',
              }}>
                <AnimatePresence mode="wait">
                  {activeValue ? (
                    <motion.div
                      key={activeValue.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        color: '#D4AF37',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}>
                        {activeValue.theme}
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#FFFFFF',
                        margin: '0 0 8px 0',
                        fontFamily: 'var(--font-headings)',
                        letterSpacing: '-0.3px',
                      }}>
                        {activeValue.title}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(209, 213, 219, 0.85)',
                        margin: 0,
                        lineHeight: 1.5,
                        maxWidth: '400px',
                      }}>
                        {activeValue.desc}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: 'rgba(255, 255, 255, 0.35)',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}>
                        CEA Pillars
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#FFFFFF',
                        margin: '0 0 8px 0',
                        fontFamily: 'var(--font-headings)',
                        letterSpacing: '-0.3px',
                      }}>
                        Enterprise DNA
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: 'rgba(209, 213, 219, 0.55)',
                        margin: 0,
                        lineHeight: 1.5,
                        maxWidth: '400px',
                      }}>
                        Hover over our core values to see how they govern our projects, decisions and operations.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Reliability (Bottom Center) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ marginTop: '10px' }}
              >
                <GlassValueNode
                  v={CORE_VALUES[4]}
                  index={4}
                  isHovered={hovered === 'reliability'}
                  isDimmed={hovered !== null && hovered !== 'reliability'}
                  onHoverStart={() => setHovered('reliability')}
                  onHoverEnd={() => setHovered(null)}
                  nodeRef={nodeRefs.reliability}
                  parallaxStyle={{ y: useTransform(smoothY, [-1, 1], ['6px', '-6px']) }}
                />
              </motion.div>
            </div>

            {/* Right Column: Integrity & Accountability */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '140px',
              alignItems: 'flex-start',
              zIndex: 10,
            }}>
              {/* Integrity */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <GlassValueNode
                  v={CORE_VALUES[1]}
                  index={1}
                  isHovered={hovered === 'integrity'}
                  isDimmed={hovered !== null && hovered !== 'integrity'}
                  onHoverStart={() => setHovered('integrity')}
                  onHoverEnd={() => setHovered(null)}
                  nodeRef={nodeRefs.integrity}
                  parallaxStyle={{ x: nodeOffsetRightX, y: nodeOffsetRightY }}
                />
              </motion.div>

              {/* Accountability */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <GlassValueNode
                  v={CORE_VALUES[3]}
                  index={3}
                  isHovered={hovered === 'accountability'}
                  isDimmed={hovered !== null && hovered !== 'accountability'}
                  onHoverStart={() => setHovered('accountability')}
                  onHoverEnd={() => setHovered(null)}
                  nodeRef={nodeRefs.accountability}
                  parallaxStyle={{ x: nodeOffsetRightX, y: nodeOffsetRightY }}
                />
              </motion.div>
            </div>
          </div>
        )}
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
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const countries = ['India', 'Singapore', 'Indonesia', 'Bangladesh', 'Nigeria', 'UAE', 'Nepal', 'Kenya', 'Iran', 'USA'];
  const timeline = [
    { year: '2015', title: 'CEA Infotech Founded' },
    { year: '2016–2020', title: 'Product & Service Expansion' },
    { year: '2021–2024', title: 'Growth Across Industries & Global Markets' },
    { year: 'Present', title: 'Enterprise Solutions & Product Innovation' },
  ];
  const whyChoose = [
    { title: '35+ Years Leadership', desc: 'Decades of industry expertise driving strategic technology decisions.', icon: <Award size={24} />, color: 'wi-amber' },
    { title: '11+ Industry Domains', desc: 'Deep domain knowledge across manufacturing, finance, retail and more.', icon: <Layers size={24} />, color: 'wi-blue' },
    { title: 'Global Delivery', desc: 'Proven track record of successful project delivery across 10+ countries.', icon: <Globe size={24} />, color: 'wi-teal' },
    { title: 'Custom Enterprise Solutions', desc: 'Tailored software architectures built for specific business requirements.', icon: <Briefcase size={24} />, color: 'wi-amber' },
    { title: 'Long-Term Relationships', desc: 'Trusted partnerships built on reliability, transparency and results.', icon: <Handshake size={24} />, color: 'wi-blue' },
    { title: 'Product Innovation', desc: 'Continuous R&D delivering scalable products for modern enterprises.', icon: <Rocket size={24} />, color: 'wi-teal' },
  ];
  // Images mapped for visual previews (kept as references — replace with production assets as needed)
  const panelImages: Record<string, string> = {
    '35+ Years Leadership': '/images/executive_meeting.jpg',
    '11+ Industry Domains': '/images/multi_industry_ecosystem.jpg',
    'Global Delivery': '/images/world_operations_map.jpg',
    'Custom Enterprise Solutions': '/images/enterprise_architecture.jpg',
    'Long-Term Relationships': '/images/partnership_visual.jpg',
    'Product Innovation': '/images/digital_innovation_lab.jpg',
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Vertical panel helper component
  function VerticalPanel({ index, title, desc, image }: { index: number; title: string; desc: string; image: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.55 });

    useEffect(() => {
      if (inView) setActiveIndex(index);
    }, [inView, index]);

    const isActive = activeIndex === index;
    const isCompressed = activeIndex !== index;

    return (
      <motion.article
        ref={ref}
        className={`vertical-panel ${isActive ? 'expanded' : ''} ${isCompressed && !isActive ? 'compressed' : ''}`}
        style={{ backgroundImage: `linear-gradient(rgba(4,8,16,0.36), rgba(4,8,16,0.36)), url(${image})` }}
        onClick={() => setActiveIndex(index)}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="vertical-inner">
          <header className="vertical-header">
            <h3 className="vertical-title">{title}</h3>
          </header>

          <motion.div className="vertical-body" animate={isActive ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }} transition={{ duration: 0.45 }}>
            <div className="gold-line" />
            <p>{desc}</p>
          </motion.div>
        </div>
      </motion.article>
    );
  }
  const founderHighlights = ['35+ Years IT Experience', 'ERP Specialist', 'CRM & SCM Expertise', 'Financial Systems', 'Global Project Delivery'];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="Professional corporate office" loading="eager" />
        </div>
        <div className="about-hero-overlay" />
        <div className="container">
          <motion.div className="about-hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <motion.span className="section-subtitle" style={{ color: 'var(--cta)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
              About CEA Infotech
            </motion.span>
            <h1>Empowering Businesses Through Technology Excellence</h1>
            <p>Over a decade of delivering enterprise software solutions, manufacturing systems and business transformation services.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="about-who-section">
        <div className="container">
          <div className="about-who-grid">
            <motion.div className="about-who-image" {...fadeInUp}>
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80" alt="Professional team collaboration" loading="lazy" />
            </motion.div>
            <motion.div className="about-who-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="section-subtitle">Who We Are</span>
              <h2>CEA Infotech Private Limited</h2>
              <p>Established in June 2015 and headquartered in Bangalore, India, CEA Infotech is a technology-driven enterprise delivering solutions that transform business operations.</p>
              <p>We specialize in enterprise software solutions, consulting services, manufacturing systems, compliance management and custom application development.</p>
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

      {/* ===== VISION ===== */}
      <section className="about-vision-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Our Vision</span>
            <h2 className="section-title">What Drives Us Forward</h2>
            <p className="section-desc">Our foundation is anchored on customer success, business excellence and continuous innovation.</p>
          </motion.div>
          <motion.div className="grid-3" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-amber"><HeartHandshake size={28} /></div>
              <h3>Customer Success</h3>
              <p>Building long-term customer relationships through trusted solutions and services.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-blue"><Target size={28} /></div>
              <h3>Business Excellence</h3>
              <p>Helping organizations overcome challenges and improve operational efficiency.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-teal"><Lightbulb size={28} /></div>
              <h3>Continuous Innovation</h3>
              <p>Delivering scalable software products and digital transformation solutions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <CoreValuesSection />

      {/* ===== FOUNDER ===== */}
      <section className="about-founder-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Leadership</span>
            <h2 className="section-title">Founder & Director</h2>
          </motion.div>
          <motion.div className="founder-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <div className="founder-grid">
              <div className="founder-photo-area">
                <div className="founder-avatar"><span className="founder-avatar-initials">MD</span></div>
                <div className="founder-name-area"><h3>M.D. Manohar</h3><p>Founder & Director</p></div>
              </div>
              <div className="founder-details">
                <span className="section-subtitle">Executive Profile</span>
                <h2>35+ Years of IT Industry Leadership</h2>
                <div className="founder-highlights">
                  {founderHighlights.map(h => (
                    <span key={h} className="founder-badge"><CheckCircle size={14} />{h}</span>
                  ))}
                </div>
                <div className="founder-global">
                  <h4>Projects Delivered Across</h4>
                  <div className="founder-countries">
                    {countries.map(c => <span key={c} className="founder-country-tag">{c}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION A: CEA DIGITAL ECOSYSTEM ===== */}
      <DigitalEcosystem />

      {/* ===== SECTION B: INDUSTRIES WE EMPOWER ===== */}
      <IndustriesWall />

      {/* ===== COMPANY JOURNEY ===== */}
      <section className="about-journey-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Milestones</span>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-desc">A decade of growth, innovation and global impact.</p>
          </motion.div>
          <div className="h-timeline">
            <div className="h-timeline-line" />
            <motion.div className="h-timeline-items" variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              {timeline.map((item, i) => (
                <motion.div key={i} variants={staggerItem} className="h-timeline-item">
                  <div className="h-timeline-card">
                    <div className="h-timeline-year"><Calendar size={14} /><span>{item.year}</span></div>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="h-timeline-dot" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE CEA — VERTICAL STORY EXPERIENCE ===== */}
      <section className="about-why-section vertical-story-section">
        <div className="container-full">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Our Advantage</span>
            <h2 className="section-title">Why Choose CEA Infotech</h2>
            <p className="section-desc">The differentiators that make us a trusted technology partner.</p>
          </motion.div>

          <div className="vertical-story-wrap">
            <div className="gold-progress-wrap">
              <div className="gold-progress" style={{ top: `${(activeIndex / Math.max(1, whyChoose.length - 1)) * 100}%` }} />
            </div>

            <div className="vertical-panels">
              {whyChoose.map((item, i) => (
                <VerticalPanel key={item.title} index={i} title={item.title} desc={item.desc} image={panelImages[item.title] || '/images/placeholder.jpg'} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div className="about-cta-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2>Let's Build Smarter Business Solutions Together</h2>
            <p>Partner with CEA Infotech to transform operations through innovative technology solutions.</p>
            <button className="btn-cta-about" onClick={() => navigate('/contact')}>
              Contact Us <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
