import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  Play, 
  Sparkles, 
  X,
  Check,
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
  Truck,
  Network,
  Cog,
  Rocket,
  Headset,
  Cpu,
  Recycle,
  HeartPulse,
  Droplets,
  BarChart3,
  CalendarDays,
  Wallet,
  Clock
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

const solutions = [
  {
    title: "Brand-Supplier Risk Survey Tool",
    image: "/images/sol_supplier_risk.jpg",
    path: "/services"
  },
  {
    title: "Scrap Management System",
    image: "/images/sol_scrap_mgmt.jpg",
    path: "/services"
  },
  {
    title: "Courier Cost Management System",
    image: "/images/sol_courier.jpg",
    path: "/products/courier-cost-management"
  },
  {
    title: "Overtime Tracking & Approval System",
    image: "/images/sol_overtime.jpg",
    path: "/services"
  },
  {
    title: "Women Health Beneficiaries Tracking",
    image: "/images/sol_women_health.jpg",
    path: "/services"
  },
  {
    title: "Job Portal & Recruitment System",
    image: "/images/sol_job_portal.jpg",
    path: "/services"
  },
  {
    title: "Community Water Plant System",
    image: "/images/sol_water_plant.jpg",
    path: "/services"
  },
  {
    title: "MIS Framework for NGO Operations",
    image: "/images/sol_ngo_mis.jpg",
    path: "/services"
  },
  {
    title: "Golf Tee Time Booking System",
    image: "/images/sol_golf.jpg",
    path: "/services"
  },
  {
    title: "Country Development Project Monitoring",
    image: "/images/sol_dev_project.jpg",
    path: "/services"
  },
  {
    title: "Microfinance Accounting Product",
    image: "/images/sol_microfinance.jpg",
    path: "/services"
  },
  {
    title: "Family Tree Platform",
    image: "/images/sol_family_tree.jpg",
    path: "/products/family-tree-platform"
  }
];

const partnersRow1 = [
  { name: "Bosch", icon: Cog, color: "#22D3EE" },
  { name: "Siemens", icon: Cpu, color: "#D4AF37" },
  { name: "Schneider Electric", icon: Layers, color: "#22D3EE" },
  { name: "Honeywell", icon: ShieldCheck, color: "#D4AF37" },
  { name: "ABB", icon: Cog, color: "#22D3EE" }
];

const partnersRow2 = [
  { name: "Tata Group", icon: Building, color: "#D4AF37" },
  { name: "TVS", icon: Factory, color: "#22D3EE" },
  { name: "Ashok Leyland", icon: Truck, color: "#D4AF37" },
  { name: "Larsen & Toubro", icon: Briefcase, color: "#22D3EE" },
  { name: "Mahindra", icon: Factory, color: "#D4AF37" }
];

// ── FLAGSHIP PLATFORMS DATA ──────────────────────────────────────────────────

const flagshipPlatforms = [
  {
    id: "vericea-manufacturing",
    index: 1,
    name: "VERICEA Manufacturing",
    category: "Manufacturing Intelligence",
    tagline: "Real-Time Production Visibility & Defect Intelligence",
    capabilities: ["Production Tracking", "Defect Monitoring", "Operational Dashboards"],
    image: "/images/flagship_manufacturing.jpg",
    dashboardImage: "/images/product_tab_manufacturing_1780851000218.png",
    path: "/products/vericea-manufacturing",
    accentColor: "#22D3EE",
    stat: { value: "22%", label: "OEE Increase" }
  },
  {
    id: "vericea-compliance",
    index: 2,
    name: "VERICEA Compliance",
    category: "Compliance Governance",
    tagline: "Audit Readiness & Compliance Governance Platform",
    capabilities: ["Audit Scheduling", "Evidence Tracking", "Compliance Analytics"],
    image: "/images/flagship_compliance.jpg",
    dashboardImage: "/images/product_tab_compliance_1780851018319.png",
    path: "/products/vericea-compliance",
    accentColor: "#F59E0B",
    stat: { value: "100%", label: "Audit Success" }
  },
  {
    id: "factsafe",
    index: 3,
    name: "FactSafe",
    category: "Risk Management",
    tagline: "Proactive Risk Assessment & Management Platform",
    capabilities: ["Risk Register", "Risk Scoring", "Supplier Risk Monitoring"],
    image: "/images/flagship_factsafe.jpg",
    dashboardImage: "/images/product_tab_factsafe_1780850981241.png",
    path: "/products/factsafe",
    accentColor: "#EF4444",
    stat: { value: "35%", label: "Risk Reduction" }
  },
  {
    id: "courier-cost-management",
    index: 4,
    name: "Courier Cost Management",
    category: "Logistics Optimization",
    tagline: "Enterprise Logistics Cost Optimization Platform",
    capabilities: ["Courier Cost Analysis", "Vendor Comparison", "Shipment Intelligence"],
    image: "/images/flagship_courier.jpg",
    dashboardImage: "/images/product_tab_courier_1780851035678.png",
    path: "/products/courier-cost-management",
    accentColor: "#10B981",
    stat: { value: "12.4%", label: "Cost Savings" }
  },
  {
    id: "family-tree-platform",
    index: 5,
    name: "Family Tree Platform",
    category: "Data Intelligence",
    tagline: "Relationship Mapping & Structured Data Intelligence",
    capabilities: ["Relationship Visualization", "Hierarchical Mapping", "Data Intelligence"],
    image: "/images/flagship_familytree.jpg",
    dashboardImage: "/images/product_tab_family_tree_1780851053149.png",
    path: "/products/family-tree-platform",
    accentColor: "#A78BFA",
    stat: { value: "100k+", label: "Nodes Handled" }
  }
];

// ── FLAGSHIP ANIMATION VARIANTS ───────────────────────────────────────────────

const flagshipCardVariants = {
  initial: {
    y: 0,
    borderColor: 'rgba(245, 158, 11, 0.12)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  },
  hover: {
    y: -12,
    borderColor: 'rgba(245, 158, 11, 0.8)',
    boxShadow: '0 32px 64px rgba(0,0,0,0.65), 0 0 40px rgba(245,158,11,0.2)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const flagshipImageZoomVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const flagshipOverlayVariants = {
  initial: { opacity: 0.25 },
  hover: {
    opacity: 0.72,
    transition: { duration: 0.45 }
  }
};

const flagshipGlowBarVariants = {
  initial: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const flagshipDetailsVariants = {
  initial: { height: 0, opacity: 0, y: 12 },
  hover: {
    height: 'auto',
    opacity: 1,
    y: 0,
    transition: {
      height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      opacity: { duration: 0.35, delay: 0.08 },
      y: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }
};

const flagshipBtnVariants = {
  initial: { opacity: 0, y: 8 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.15 }
  }
};

// ── FLAGSHIP CARD COMPONENT ───────────────────────────────────────────────────

interface FlagshipPlatform {
  id: string;
  index: number;
  name: string;
  category: string;
  tagline: string;
  capabilities: string[];
  image: string;
  dashboardImage: string;
  path: string;
  accentColor: string;
  stat: { value: string; label: string };
}

function FlagshipCard({ platform, onNavigate, variant = 'standard' }: {
  platform: FlagshipPlatform;
  onNavigate: (path: string) => void;
  variant?: 'hero' | 'standard';
}) {
  const isHero = variant === 'hero';
  return (
    <motion.div
      variants={flagshipCardVariants}
      initial="initial"
      whileHover="hover"
      onClick={() => onNavigate(platform.path)}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(245,158,11,0.12)',
        backgroundColor: '#0D1321',
        cursor: 'pointer',
        height: isHero ? '720px' : '580px',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
    >
      {/* Animated gold top glow bar */}
      <motion.div
        variants={flagshipGlowBarVariants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${platform.accentColor}, #F59E0B, ${platform.accentColor}, transparent)`,
          zIndex: 10,
          transformOrigin: 'left center'
        }}
      />

      {/* Product number badge */}
      <div style={{
        position: 'absolute',
        top: '18px',
        left: '18px',
        zIndex: 10,
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        background: 'rgba(245,158,11,0.12)',
        border: '1px solid rgba(245,158,11,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: '800',
        color: '#F59E0B',
        fontFamily: 'var(--font-headings)',
        backdropFilter: 'blur(8px)',
      }}>
        {String(platform.index).padStart(2, '0')}
      </div>

      {/* Stat badge top-right */}
      <div style={{
        position: 'absolute',
        top: '18px',
        right: '18px',
        zIndex: 10,
        background: 'rgba(10,15,28,0.75)',
        border: `1px solid ${platform.accentColor}40`,
        borderRadius: '8px',
        padding: '6px 10px',
        backdropFilter: 'blur(8px)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '14px', fontWeight: '800', color: platform.accentColor, fontFamily: 'var(--font-headings)', lineHeight: 1 }}>
          {platform.stat.value}
        </div>
        <div style={{ fontSize: '9px', fontWeight: '600', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
          {platform.stat.label}
        </div>
      </div>

      {/* Image area */}
      <div style={{ position: 'relative', height: isHero ? '430px' : '330px', overflow: 'hidden', flexShrink: 0 }}>
        {/* Real photo fills the card image area */}
        <motion.img
          src={platform.image}
          alt={platform.name}
          variants={flagshipImageZoomVariants}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        {/* Gradient overlay */}
        <motion.div
          variants={flagshipOverlayVariants}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,15,28,0.05) 0%, rgba(10,15,28,0.75) 100%)',
          }}
        />
        {/* Category pill on image */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          left: '18px',
          background: 'rgba(10,15,28,0.8)',
          backdropFilter: 'blur(8px)',
          border: `1px solid ${platform.accentColor}30`,
          borderRadius: '20px',
          padding: '4px 12px',
          fontSize: '11px',
          fontWeight: '700',
          color: platform.accentColor,
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          zIndex: 2,
        }}>
          {platform.category}
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: '22px 22px 20px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: isHero ? '21px' : '17px',
          fontWeight: '800',
          color: '#FFFFFF',
          margin: '0 0 6px 0',
          fontFamily: 'var(--font-headings)',
          lineHeight: 1.2,
          letterSpacing: '-0.3px'
        }}>
          {platform.name}
        </h3>
        <p style={{
          fontSize: '12.5px',
          color: '#9CA3AF',
          lineHeight: 1.45,
          margin: 0,
          flexGrow: 1
        }}>
          {platform.tagline}
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '16px 0 0 0' }} />

        {/* Hover-revealed capabilities + button */}
        <motion.div
          variants={flagshipDetailsVariants}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {platform.capabilities.map((cap, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  backgroundColor: platform.accentColor, flexShrink: 0
                }} />
                <span style={{ fontSize: '12.5px', color: '#D1D5DB', fontWeight: '500' }}>{cap}</span>
              </div>
            ))}
          </div>

          <motion.div variants={flagshipBtnVariants} style={{ marginTop: '14px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              color: '#0A0F1C',
              borderRadius: '8px',
              padding: '9px 18px',
              fontSize: '12px',
              fontWeight: '800',
              boxShadow: '0 4px 12px rgba(245,158,11,0.3)',
              letterSpacing: '0.3px'
            }}>
              Explore Platform
              <ArrowRight size={13} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── SOLUTIONS COVERFLOW CAROUSEL ─────────────────────────────────────────────

interface SolutionItem {
  title: string;
  image: string;
  path: string;
}

function SolutionsCoverflow({
  solutions,
  onNavigate,
}: {
  solutions: SolutionItem[];
  onNavigate: (path: string) => void;
}) {
  const CARD_W = 340;
  const CARD_H = 220;
  const GAP = 20;
  const STEP = CARD_W + GAP;

  const total = solutions.length;
  // Duplicate list for seamless infinite scroll
  const items = [...solutions, ...solutions, ...solutions];
  const startOffset = total; // start in middle copy

  const [activeIdx, setActiveIdx] = useState(startOffset);
  const [isHovered, setIsHovered] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setActiveIdx((prev) => {
      const next = prev + 1;
      // Seamlessly jump when we've consumed middle copy
      if (next >= total * 2) return total;
      return next;
    });
  }, [total]);

  useEffect(() => {
    if (isHovered) {
      if (autoRef.current) clearInterval(autoRef.current);
      return;
    }
    autoRef.current = setInterval(advance, 2400);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [isHovered, advance]);

  const visibleWidth = STEP * 3 - GAP;

  return (
    <div
      style={{ width: '100%', overflow: 'hidden', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left / right fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--secondary-bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--secondary-bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />

      {/* Track */}
      <motion.div
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          alignItems: 'center',
          height: `${CARD_H + 48}px`, // extra for lift
          paddingBottom: '12px',
          willChange: 'transform',
        }}
        animate={{
          x: `calc(50vw - ${(activeIdx - startOffset) * STEP + CARD_W / 2}px - ${startOffset * STEP}px)`,
        }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      >
        {items.map((sol, i) => {
          const relIdx = i - startOffset;
          const dist = i - activeIdx;
          const isCenter = dist === 0;
          const isAdjacent = Math.abs(dist) === 1;

          return (
            <motion.div
              key={`${sol.title}-${i}`}
              onClick={() => {
                if (isCenter) {
                  onNavigate(sol.path);
                } else {
                  setActiveIdx(i);
                }
              }}
              animate={{
                scale: isCenter ? 1.12 : isAdjacent ? 0.93 : 0.82,
                opacity: isCenter ? 1 : isAdjacent ? 0.72 : 0.38,
                y: isCenter ? -10 : 0,
              }}
              whileHover={isCenter ? {
                scale: 1.15,
                transition: { duration: 0.25 }
              } : {
                opacity: 0.9,
                scale: isAdjacent ? 0.96 : 0.86,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              style={{
                position: 'relative',
                width: `${CARD_W}px`,
                height: `${CARD_H}px`,
                flexShrink: 0,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: isCenter
                  ? '1.5px solid rgba(245,158,11,0.75)'
                  : '1px solid rgba(255,255,255,0.08)',
                boxShadow: isCenter
                  ? '0 0 32px rgba(245,158,11,0.22), 0 16px 48px rgba(0,0,0,0.6)'
                  : '0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              {/* Photo */}
              <motion.img
                src={sol.image}
                alt={sol.title}
                whileHover={isCenter ? { scale: 1.06, transition: { duration: 0.5 } } : {}}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: isCenter
                  ? 'linear-gradient(to top, rgba(10,15,28,0.88) 0%, rgba(10,15,28,0.1) 55%)'
                  : 'linear-gradient(to top, rgba(10,15,28,0.92) 0%, rgba(10,15,28,0.3) 100%)',
              }} />

              {/* Gold top bar on center card */}
              {isCenter && (
                <motion.div
                  layoutId="gold-bar"
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #F59E0B, #FCD34D, #F59E0B, transparent)',
                  }}
                />
              )}

              {/* Title */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  fontSize: isCenter ? '14px' : '12.5px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-headings)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.2px',
                  textShadow: '0 1px 8px rgba(0,0,0,0.8)',
                  maxWidth: '85%',
                }}>
                  {sol.title}
                </span>
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: 'rgba(245,158,11,0.18)',
                      border: '1px solid rgba(245,158,11,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={13} color="#F59E0B" />
                  </motion.div>
                )}
              </div>

              {/* Index badge */}
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                background: 'rgba(10,15,28,0.7)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                padding: '3px 8px',
                fontSize: '10px', fontWeight: '700',
                color: isCenter ? '#F59E0B' : '#9CA3AF',
                letterSpacing: '0.5px',
                fontFamily: 'var(--font-headings)',
              }}>
                {String((relIdx % total + total) % total + 1).padStart(2, '0')}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '7px', marginTop: '6px' }}>
        {solutions.map((_, i) => {
          const dotActive = ((activeIdx - startOffset) % total + total) % total === i;
          return (
            <motion.button
              key={i}
              onClick={() => setActiveIdx(startOffset + i)}
              animate={{ width: dotActive ? '22px' : '6px', backgroundColor: dotActive ? '#F59E0B' : 'rgba(255,255,255,0.2)' }}
              transition={{ duration: 0.3 }}
              style={{
                height: '6px', borderRadius: '3px', border: 'none',
                cursor: 'pointer', padding: 0, flexShrink: 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background slideshow slider state
  const [currentBgIndex, setCurrentBgIndex] = useState(0);


      {/* Radial glow center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
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

        {/* SVG Network */}
        <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <svg
            viewBox="0 0 800 800"
            style={{ width: '100%', maxWidth: '780px', height: 'auto', overflow: 'visible' }}
          >
            <defs>
              {NODES.map(node => (
                <radialGradient key={node.id} id={`grad-${node.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={node.color} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={node.color} stopOpacity="0" />
                </radialGradient>
              ))}
              <filter id="glow-filter">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="strong-glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(245,158,11,0.4)" />
              </marker>
            </defs>

            {/* Orbit rings */}
            <circle cx={CX} cy={CY} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <circle cx={CX} cy={CY} r={RADIUS * 0.6} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 8" />

            {/* Connection lines */}
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
                  markerEnd={isActive ? 'url(#arrowhead)' : undefined}
                  filter={isActive ? 'url(#glow-filter)' : undefined}
                />
              );
            })}

            {/* Pulse travel dot on active line */}
            {NODES.map((node, i) => {
              if (pulse !== i && hoveredNode !== node.id) return null;
              const pos = getPos(node.angle, RADIUS);
              return (
                <motion.circle
                  key={`pulse-${node.id}`}
                  r="4"
                  fill={node.color}
                  filter="url(#strong-glow)"
                  initial={{ atX: CX, atY: CY, opacity: 0 }}
                  animate={{
                    x: [CX, pos.x],
                    y: [CY, pos.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
                />
              );
            })}

            {/* Outer nodes */}
            {NODES.map((node, i) => {
              const pos = getPos(node.angle, RADIUS);
              const isActive = hoveredNode === node.id || pulse === i;
              const labelLines = node.label.split('\n');
              const textAnchor = pos.x < CX - 10 ? 'end' : pos.x > CX + 10 ? 'start' : 'middle';
              const labelOffsetX = pos.x < CX - 10 ? -22 : pos.x > CX + 10 ? 22 : 0;
              const labelOffsetY = pos.y < CY - 10 ? -22 : pos.y > CY + 10 ? 22 : 0;

              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Glow halo */}
                  <motion.circle
                    cx={pos.x} cy={pos.y}
                    animate={{ r: isActive ? 32 : 22, opacity: isActive ? 0.5 : 0.15 }}
                    transition={{ duration: 0.35 }}
                    fill={`url(#grad-${node.id})`}
                  />
                  {/* Node circle */}
                  <motion.circle
                    cx={pos.x} cy={pos.y}
                    animate={{
                      r: isActive ? 18 : 13,
                      fill: isActive ? node.color : '#0D1828',
                      stroke: node.color,
                      strokeWidth: isActive ? 2.5 : 1.5,
                    }}
                    transition={{ duration: 0.3 }}
                    filter={isActive ? 'url(#glow-filter)' : undefined}
                  />
                  {/* Index number inside node */}
                  <text
                    x={pos.x} y={pos.y + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="800"
                    fill={isActive ? '#0A0F1C' : node.color}
                    fontFamily="var(--font-headings)"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </text>
                  {/* Label */}
                  <motion.g
                    animate={{ opacity: isActive ? 1 : 0.65 }}
                    transition={{ duration: 0.25 }}
                  >
                    {labelLines.map((line, li) => (
                      <text
                        key={li}
                        x={pos.x + labelOffsetX}
                        y={pos.y + labelOffsetY + li * 14 + (labelLines.length > 1 ? -7 : 0)}
                        textAnchor={textAnchor}
                        fontSize="11"
                        fontWeight="700"
                        fill={isActive ? node.color : 'rgba(209,213,219,0.8)'}
                        fontFamily="var(--font-headings)"
                      >
                        {line}
                      </text>
                    ))}
                  </motion.g>
                </g>
              );
            })}

            {/* Center hub */}
            <g>
              <circle cx={CX} cy={CY} r={72} fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="1" strokeDasharray="3 5" />
              <circle cx={CX} cy={CY} r={58} fill="#0D1828" stroke="rgba(245,158,11,0.35)" strokeWidth="1.5" />
              <motion.circle
                cx={CX} cy={CY} r={58}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeDasharray="20 180"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
                style={{ transformOrigin: `${CX}px ${CY}px` }}
              />
              <text x={CX} y={CY - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#F59E0B" fontFamily="var(--font-headings)" letterSpacing="1">CEA</text>
              <text x={CX} y={CY + 3} textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(209,213,219,0.7)" fontFamily="var(--font-headings)">INFOTECH</text>
              <text x={CX} y={CY + 16} textAnchor="middle" fontSize="8" fontWeight="500" fill="rgba(245,158,11,0.8)" fontFamily="var(--font-headings)" letterSpacing="0.5">DIGITAL ECOSYSTEM</text>
            </g>
          </svg>
        </div>

        {/* Node legend strip */}
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
                borderRadius: '20px', padding: '5px 13px', cursor: 'default',
                transition: 'all 0.25s',
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
        {/* Header */}
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

        {/* Mosaic grid */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {INDUSTRIES.map((ind, i) => {
            const isHovered = hovered === ind.id;
            const anyHovered = hovered !== null;
            return (
              <motion.div
                key={ind.id}
                onHoverStart={() => setHovered(ind.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  opacity: anyHovered && !isHovered ? 0.45 : 1,
                  scale: isHovered ? 1.02 : anyHovered ? 0.98 : 1,
                }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  gridColumn: `span ${ind.span}`,
                  height: ind.span === 2 ? '240px' : '190px',
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'default',
                  border: isHovered ? '1.5px solid rgba(245,158,11,0.7)' : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isHovered ? '0 0 28px rgba(245,158,11,0.2), 0 12px 40px rgba(0,0,0,0.6)' : '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                {/* Background image with zoom */}
                <motion.img
                  src={ind.image}
                  alt={ind.label}
                  animate={{ scale: isHovered ? 1.08 : 1 }}
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Dark overlay */}
                <motion.div
                  animate={{ opacity: isHovered ? 0.55 : 0.72 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(6,12,26,0.95) 0%, rgba(6,12,26,0.3) 60%, transparent 100%)',
                  }}
                />

                {/* Gold top border sweep on hover */}
                <motion.div
                  animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #F59E0B, #FCD34D, #F59E0B, transparent)',
                    transformOrigin: 'left',
                  }}
                />

                {/* Index */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  fontSize: '10px', fontWeight: '800', color: isHovered ? '#F59E0B' : 'rgba(156,163,175,0.7)',
                  fontFamily: 'var(--font-headings)', letterSpacing: '0.5px',
                  background: 'rgba(6,12,26,0.65)', backdropFilter: 'blur(6px)',
                  border: `1px solid ${isHovered ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '5px', padding: '2px 7px',
                  transition: 'color 0.3s, border-color 0.3s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Label at bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
                  <motion.h3
                    animate={{ y: isHovered ? -4 : 0, color: isHovered ? '#F59E0B' : '#FFFFFF' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      margin: 0, fontSize: ind.span === 2 ? '17px' : '14px',
                      fontWeight: '800', fontFamily: 'var(--font-headings)',
                      lineHeight: 1.2, letterSpacing: '-0.2px',
                      textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                    }}
                  >
                    {ind.label}
                  </motion.h3>
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}
                  >
                    <div style={{ width: '20px', height: '1.5px', background: '#F59E0B', borderRadius: '1px' }} />
                    <span style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(245,158,11,0.9)', letterSpacing: '0.5px' }}>
                      CEA SOLUTIONS AVAILABLE
                    </span>
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

export default function Home() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Background slideshow slider state
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    // Slideshow transition timer every 5 seconds
    const bgTimer = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => {
      clearInterval(bgTimer);
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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
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
                Engineering Digital Excellence for Manufacturing, Compliance & Enterprise Growth
              </h1>
              <p style={{ fontSize: '17px', color: 'rgba(241, 245, 249, 0.85)', marginBottom: '32px', lineHeight: '1.6' }}>
                CEA Infotech delivers enterprise software solutions, compliance platforms, audit intelligence systems and digital transformation initiatives that help organizations improve operational performance, governance and business efficiency.
              </p>
              
              <div className="btn-group">
                <motion.button 
                  onClick={() => navigate('/products')} 
                  className="btn btn-cta"
                  whileHover={buttonHover.whileHover}
                  whileTap={buttonHover.whileTap}
                  style={{ color: '#0F172A' }}
                >
                  Explore Solutions
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact')} 
                  className="btn btn-dark-outline"
                  whileHover={secondaryButtonHover.whileHover}
                  whileTap={secondaryButtonHover.whileTap}
                  style={{ border: '2px solid rgba(255, 255, 255, 0.35)' }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>

            {/* Right side is intentionally left empty so the smart factory background is clearly visible */}
            <div style={{ display: 'none' }} className="mobile-hidden-spacer"></div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: '60px 0', backgroundColor: 'var(--secondary-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Calendar size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={25} suffix="+" duration={1} /></div>
              <div className="stat-label">Years Combined Expertise</div>
              <div className="stat-desc">Strategic executive leadership</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Award size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={100} suffix="+" duration={1.2} /></div>
              <div className="stat-label">Projects Delivered</div>
              <div className="stat-desc">Production-grade systems</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Users size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={50} suffix="+" duration={1} /></div>
              <div className="stat-label">Enterprise Customers</div>
              <div className="stat-desc">Trusted by large organizations</div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4 }}
              style={{ padding: '24px' }}
            >
              <div className="stat-icon-wrapper">
                <Building size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number"><CountUp end={10} suffix="+" duration={1.2} /></div>
              <div className="stat-label">Industry Domains</div>
              <div className="stat-desc">Custom-configured solutions</div>
            </motion.div>
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
                whileHover={{ y: -6 }}
              >
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title" style={{ fontSize: '18px', fontWeight: '700' }}>{service.title}</h3>
                <p className="card-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: FLAGSHIP PLATFORMS SHOWCASE (HOME PAGE)  — PREMIUM
          ================================================== */}
      <section
        style={{
          backgroundColor: '#0A0F1C',
          color: '#E5E7EB',
          overflow: 'hidden',
          position: 'relative',
          padding: '120px 0 140px 0'
        }}
      >
        {/* Ambient background decoration */}
        <div style={{
          position: 'absolute', top: '-120px', left: '-120px',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0
        }} />
        {/* Subtle grid lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* ── SECTION HEADER ──────────────────────────────────── */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-80px' }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '40px',
              padding: '7px 18px',
              marginBottom: '24px'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                CEA Proprietary Platforms
              </span>
              <div style={{
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '20px',
                padding: '2px 9px',
                fontSize: '10px',
                fontWeight: '800',
                color: '#F59E0B'
              }}>5 PRODUCTS</div>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: '900',
              color: '#FFFFFF',
              fontFamily: 'var(--font-headings)',
              margin: '0 0 20px 0',
              letterSpacing: '-1.5px',
              lineHeight: 1.1
            }}>
              CEA's Flagship Platforms
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'rgba(229,231,235,0.75)',
              lineHeight: 1.7,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Enterprise software platforms engineered to improve manufacturing visibility, compliance governance,
              risk management, logistics optimization, and operational intelligence.
            </p>

            {/* Separator line */}
            <div style={{
              width: '60px', height: '3px', margin: '28px auto 0 auto',
              background: 'linear-gradient(90deg, transparent, #F59E0B, transparent)',
              borderRadius: '2px'
            }} />
          </motion.div>

          {/* ── HERO CARD (Product #1 — full width) ──────────────── */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            style={{ marginBottom: '28px' }}
          >
            <FlagshipCard
              platform={flagshipPlatforms[0]}
              onNavigate={navigate}
              variant="hero"
            />
          </motion.div>

          {/* ── GRID ROW 2 (Products #2 + #3) ───────────────────── */}
          <motion.div
            variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.12 } } }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '28px' }}
          >
            {flagshipPlatforms.slice(1, 3).map((platform) => (
              <motion.div key={platform.id} variants={scrollReveal}>
                <FlagshipCard platform={platform} onNavigate={navigate} variant="standard" />
              </motion.div>
            ))}
          </motion.div>

          {/* ── GRID ROW 3 (Products #4 + #5) ───────────────────── */}
          <motion.div
            variants={{ initial: {}, whileInView: { transition: { staggerChildren: 0.12 } } }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-60px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}
          >
            {flagshipPlatforms.slice(3, 5).map((platform) => (
              <motion.div key={platform.id} variants={scrollReveal}>
                <FlagshipCard platform={platform} onNavigate={navigate} variant="standard" />
              </motion.div>
            ))}
          </motion.div>

          {/* ── VIEW ALL PRODUCTS CTA ─────────────────────────────── */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
          >
            <p style={{ fontSize: '14px', color: 'rgba(229,231,235,0.5)', fontWeight: '500' }}>
              Ready to explore a specific platform?
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.button
                onClick={() => navigate('/products')}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(245,158,11,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-cta"
                style={{ color: '#0A0F1C', fontWeight: '800' }}
              >
                View All Products
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.07)' }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-dark-outline"
              >
                Request a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTIONS SUCCESSFULLY DELIVERED --- */}
      <section style={{ backgroundColor: 'var(--secondary-bg)', overflow: 'hidden', position: 'relative', padding: '72px 0 80px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-subtitle">Our Delivery Record</span>
            <h2 className="section-title">Solutions Successfully Delivered</h2>
          </div>
        </div>

        {/* Coverflow Carousel — full bleed */}
        <SolutionsCoverflow solutions={solutions} onNavigate={navigate} />
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


      {/* --- WHY CHOOSE CEA INFOTECH --- */}
      <section className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
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
                style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-color)' }}
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

      {/* --- TRUSTED PARTNERS SECTION --- */}
      <section className="section" style={{ 
        padding: '100px 0', 
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Heading */}
          <motion.div 
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="section-title-wrapper" 
            style={{ marginBottom: '56px' }}
          >
            <span className="section-subtitle" style={{ color: 'var(--secondary)' }}>Trusted Partners</span>
            <h2 className="section-title" style={{ fontSize: '38px', fontWeight: '800' }}>
              Trusted Partners
            </h2>
            <p className="section-desc" style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              Organizations across manufacturing, engineering, consulting, NGO and enterprise sectors trust CEA Infotech for technology solutions, compliance systems and digital transformation initiatives.
            </p>
          </motion.div>

          {/* Infinite Marquee Logo Carousel */}
          <motion.div 
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="logo-carousel-container"
          >
            <div className="logo-marquee-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Replace placeholders with official customer and partner logos provided by CEA Infotech. */}
              
              {/* Row 1: Left to Right */}
              <div className="marquee-row marquee-row-ltr">
                {[...partnersRow1, ...partnersRow1].map((partner, index) => {
                  const IconComp = partner.icon;
                  return (
                    <motion.div
                      key={`row1-${index}`}
                      whileHover={{ 
                        scale: 1.04, 
                        filter: 'grayscale(0%)', 
                        opacity: 1,
                        borderColor: 'var(--supporting)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'var(--secondary-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '12px 22px',
                        boxShadow: 'var(--shadow-sm)',
                        cursor: 'pointer',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '6px', 
                        backgroundColor: `${partner.color}15`, 
                        color: partner.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComp size={16} strokeWidth={2} />
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-main)', fontFamily: 'var(--font-headings)' }}>
                        {partner.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Row 2: Right to Left */}
              <div className="marquee-row marquee-row-rtl">
                {[...partnersRow2, ...partnersRow2].map((partner, index) => {
                  const IconComp = partner.icon;
                  return (
                    <motion.div
                      key={`row2-${index}`}
                      whileHover={{ 
                        scale: 1.04, 
                        filter: 'grayscale(0%)', 
                        opacity: 1,
                        borderColor: 'var(--supporting)',
                        boxShadow: 'var(--shadow-md)'
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'var(--secondary-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '12px 22px',
                        boxShadow: 'var(--shadow-sm)',
                        cursor: 'pointer',
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '6px', 
                        backgroundColor: `${partner.color}15`, 
                        color: partner.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComp size={16} strokeWidth={2} />
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-main)', fontFamily: 'var(--font-headings)' }}>
                        {partner.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            style={{ 
              textAlign: 'center', 
              marginTop: '48px', 
              fontSize: '15px', 
              color: 'var(--text-muted)', 
              fontWeight: '500',
              fontStyle: 'italic'
            }}
          >
            Building long-term relationships through innovation, reliability and business excellence.
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

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
              >
                Schedule Consultation
                <PhoneCall size={16} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/services')} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
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
                <button onClick={() => setIsVideoModalOpen(false)} className="btn btn-cta btn-sm">
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
