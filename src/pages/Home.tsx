import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  Play, 
  Sparkles, 
  X,
  Calendar,
  Award,
  Globe,
  Building,
  Users,
  Rocket,
  Headset
} from 'lucide-react';
import EnterpriseShowcaseCarousel from '../components/EnterpriseShowcaseCarousel';


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

const customerLogos = [
  { name: 'Vrutti', path: '/images/Vrutti logo.png' },
  { name: 'AIC', path: '/images/AIC.png' },
  { name: 'Ashwath Inc', path: '/images/Ashwath Inc logo.jpg' },
  { name: 'Atlas Export Enterprises', path: '/images/Atlas Export Enterprises logo-1.jpg' },
  { name: 'Aviram', path: '/images/Aviram logo-v1.png' },
  { name: 'CBC', path: '/images/cbc-logo.png' },
  { name: 'Deal', path: '/images/Deal-Final-Logo.jpg' },
  { name: 'Dynamic Eng', path: '/images/Dynamic Eng logo.jpg' },
  { name: 'High Octavez', path: '/images/high octavez.png' },
  { name: 'Kandhan Knitts', path: '/images/Kandhan Knitts logo.png' },
  { name: 'Genygolf', path: '/images/LOGO-with-genygolf.png' },
  { name: 'Masturlal', path: '/images/Masturlal site_logo-2.png' },
  { name: 'Omega Scientific', path: '/images/omega Scientific.png' },
  { name: 'Poshan Abhiyaan', path: '/images/POSAHN-ABHIYAAN-LOGO.png' },
  { name: 'Premier Fine Linens', path: '/images/Premier Fine Linens logo.png' },
  { name: 'RDMC', path: '/images/rdmc logo.jpg' },
  { name: 'Sira', path: '/images/sira_logo.png' },
  { name: 'Skilfil', path: '/images/skilfil logo.png' },
  { name: 'Skilift Consulting', path: '/images/Skilift Consulting logo.png' },
  { name: 'Swasti', path: '/images/swasti logo.png' }
];


// â”€â”€ FLAGSHIP PLATFORMS DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const flagshipPlatforms = [
  {
    id: "vericea-manufacturing",
    index: 1,
    name: "Vericea® Manufacturing",
    category: "Manufacturing Intelligence",
    tagline: "Real-Time Production Visibility & Defect Intelligence",
    capabilities: ["Production Tracking", "Defect Monitoring", "Operational Dashboards"],
    image: "/images/flagship_manufacturing.jpg",
    dashboardImage: "/images/product_tab_manufacturing_1780851000218.png",
    path: "/products/vericea-manufacturing",
    accentColor: "#38BDF8",
    stat: { value: "22%", label: "OEE Increase" }
  },
  {
    id: "vericea-compliance",
    index: 2,
    name: "Vericea® Compliance",
    category: "Compliance Governance",
    tagline: "Audit Readiness & Compliance Governance Platform",
    capabilities: ["Audit Scheduling", "Evidence Tracking", "Compliance Analytics"],
    image: "/images/flagship_compliance.jpg",
    dashboardImage: "/images/product_tab_compliance_1780851018319.png",
    path: "/products/vericea-compliance",
    accentColor: "#38BDF8",
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

// ————————————————————————————————————————————————————————————————————————————————

const flagshipCardVariants = {
  initial: {
    y: 0,
    borderColor: 'rgba(56, 189, 248, 0.18)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)'
  },
  hover: {
    y: -6,
    borderColor: 'rgba(56, 189, 248, 0.45)',
    backgroundColor: 'rgba(18, 24, 38, 0.92)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
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

// ————————————————————————————————————————————————————————————————————————————————

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
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(56, 189, 248, 0.18)',
        backgroundColor: 'rgba(18, 24, 38, 0.85)',
        cursor: 'pointer',
        minHeight: isHero ? '750px' : '620px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
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
          background: `linear-gradient(90deg, transparent, ${platform.accentColor}, var(--accent), ${platform.accentColor}, transparent)`,
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
        background: 'rgba(var(--accent-rgb),0.12)',
        border: '1px solid rgba(var(--accent-rgb),0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: '800',
        color: 'var(--accent)',
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
        <div style={{ fontSize: '9px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
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
          fontSize: isHero ? '24px' : '20px',
          fontWeight: '800',
          margin: '0 0 6px 0',
          fontFamily: 'var(--font-headings)',
          lineHeight: 1.2,
          letterSpacing: '-0.3px'
        }}>
          {platform.name}
        </h3>
        <p style={{
          fontSize: '18px',
          color: '#E2E8F0',
          lineHeight: 1.45,
          margin: 0,
          flexGrow: 1
        }}>
          {platform.tagline}
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '16px 0 0 0' }} />

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
                <span style={{ fontSize: '18px', color: '#E2E8F0', fontWeight: '500' }}>{cap}</span>
              </div>
            ))}
          </div>

          <motion.div variants={flagshipBtnVariants} style={{ marginTop: '14px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'linear-gradient(135deg, #38BDF8, #38BDF8)',
              borderRadius: '8px',
              padding: '9px 18px',
              fontSize: '18px',
              fontWeight: '800',
              boxShadow: '0 4px 12px rgba(56, 189, 248,0.3)',
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

// ——— SOLUTIONS COVERFLOW CAROUSEL —————————————————————————————————————————————

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

  return (
    <div
      style={{ width: '100%', overflow: 'hidden', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left / right fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #0B0F19, transparent)', zIndex: 10, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #0B0F19, transparent)', zIndex: 10, pointerEvents: 'none' }} />

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
                  ? '1.5px solid rgba(56, 189, 248, 0.75)'
                  : '1px solid rgba(255,255,255,0.08)',
                boxShadow: isCenter
                  ? '0 0 32px rgba(56, 189, 248, 0.22), 0 16px 48px rgba(0,0,0,0.6)'
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

              {/* Teal top bar on center card */}
              {isCenter && (
                <motion.div
                  layoutId="teal-bar"
                  style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #38BDF8, #38BDF8, #38BDF8, transparent)',
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
                  fontSize: isCenter ? '18px' : '16px',
                  fontWeight: '700',
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
                      background: 'rgba(56, 189, 248,0.18)',
                      border: '1px solid rgba(56, 189, 248,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowRight size={13} color="#38BDF8" />
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
                color: isCenter ? '#38BDF8' : '#9CA3AF',
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
              animate={{ width: dotActive ? '22px' : '6px', backgroundColor: dotActive ? '#38BDF8' : 'rgba(255,255,255,0.2)' }}
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
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isConveyorHovered, setIsConveyorHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const conveyorContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const conveyorCardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

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
    whileHover: { scale: 1.02, boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' },
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
          position: 'relative',
          overflow: 'hidden',
          background: '#0B1220'
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
              backgroundImage: `linear-gradient(180deg, rgba(11, 17, 31, 0.82) 0%, rgba(15, 23, 42, 0.92) 100%), url(${heroBackgrounds[currentBgIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(4px)',
              transform: 'scale(1.05)',
              zIndex: 0
            }}
          />
        </AnimatePresence>

        {/* Premium layered glow effects */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            {/* Blurred Left Text Container (Glassmorphic Hero Card) */}
            <motion.div 
              initial={heroFadeIn.initial}
              animate={heroFadeIn.animate}
              transition={heroFadeIn.transition}
              style={{
                background: 'rgba(15, 23, 42, 0.60)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '44px',
                borderRadius: '16px',
                border: '1px solid rgba(56, 189, 248, 0.20)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
                width: '100%',
                maxWidth: '580px',
                marginRight: 'auto'
              }}
            >
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  background: 'rgba(2, 132, 199, 0.08)', 
                  border: '1px solid rgba(2, 132, 199, 0.15)',
                  borderRadius: '20px', 
                  fontSize: '12px', 
                  color: '#0284C7', 
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '16px'
                }}
              >
                <Sparkles size={13} />
                <span>CEA Infotech Global</span>
              </div>
              <h1 
                className="premium-hero-shine"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '800',
                  lineHeight: '1.15',
                  margin: '0 0 16px 0',
                  letterSpacing: '-2px'
                }}
              >
                Enterprise Software &<br />
                <span style={{ color: '#38BDF8', WebkitTextFillColor: '#38BDF8' }}>Technology Consulting</span>
              </h1>
              <h2 style={{
                fontSize: '22px',
                fontWeight: '600',
                lineHeight: '1.45',
                color: '#E2E8F0',
                margin: '0 0 20px 0',
                letterSpacing: '-0.5px'
              }}>
                Engineering Digital Excellence for Manufacturing, Compliance & Enterprise Growth
              </h2>
              <p style={{ fontSize: '16px', color: '#CBD5E1', marginBottom: '36px', lineHeight: '1.7' }}>
                CEA Infotech delivers enterprise software solutions, compliance platforms, audit intelligence systems and digital transformation initiatives that help organizations improve operational performance, governance and business efficiency.
              </p>
              
              <div className="btn-group">
                <motion.button 
                  onClick={() => navigate('/products')} 
                  className="btn"
                  whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(56, 189, 248, 0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: '#38BDF8', color: '#0B1220', border: 'none', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Explore Solutions
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact')} 
                  className="btn"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ border: '1.5px solid rgba(255,255,255,0.18)', backgroundColor: 'transparent', color: '#FFFFFF', fontWeight: '600', backdropFilter: 'blur(4px)' }}
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


      <section className="section" style={{ padding: '60px 0', backgroundColor: '#FAF7F2', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', position: 'relative', overflow: 'hidden' }}>
        {/* Layered radial gradients and dotted grid pattern */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(239, 231, 218, 0.35) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(245, 240, 232, 0.4) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.075) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4, borderColor: '#38BDF8' }}
              style={{
                padding: '24px',
                backgroundColor: '#0B0F19',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '16px',
                color: '#FFFFFF' }}
            >
              <div className="stat-icon-wrapper" style={{ color: '#38BDF8', marginBottom: '12px' }}>
                <Calendar size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: '#38BDF8', fontSize: '48px', fontWeight: '800', fontFamily: 'var(--font-headings)' }}>
                <CountUp end={25} suffix="+" duration={1} />
              </div>
              <div className="stat-label" style={{ fontSize: '18px', fontWeight: '700', marginTop: '6px', color: '#FFFFFF' }}>
                Years Combined Expertise
              </div>
              <div className="stat-desc" style={{ fontSize: '15px', color: '#E2E8F0', marginTop: '4px' }}>
                Strategic executive leadership
              </div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4, borderColor: '#38BDF8' }}
              style={{
                padding: '24px',
                backgroundColor: '#0B0F19',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '16px',
                color: '#FFFFFF' }}
            >
              <div className="stat-icon-wrapper" style={{ color: '#38BDF8', marginBottom: '12px' }}>
                <Award size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: '#38BDF8', fontSize: '48px', fontWeight: '800', fontFamily: 'var(--font-headings)' }}>
                <CountUp end={100} suffix="+" duration={1.2} />
              </div>
              <div className="stat-label" style={{ fontSize: '18px', fontWeight: '700', marginTop: '6px', color: '#FFFFFF' }}>
                Projects Delivered
              </div>
              <div className="stat-desc" style={{ fontSize: '15px', color: '#E2E8F0', marginTop: '4px' }}>
                Production-grade systems
              </div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4, borderColor: '#38BDF8' }}
              style={{
                padding: '24px',
                backgroundColor: '#0B0F19',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '16px',
                color: '#FFFFFF' }}
            >
              <div className="stat-icon-wrapper" style={{ color: '#38BDF8', marginBottom: '12px' }}>
                <Users size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: '#38BDF8', fontSize: '48px', fontWeight: '800', fontFamily: 'var(--font-headings)' }}>
                <CountUp end={50} suffix="+" duration={1} />
              </div>
              <div className="stat-label" style={{ fontSize: '18px', fontWeight: '700', marginTop: '6px', color: '#FFFFFF' }}>
                Enterprise Customers
              </div>
              <div className="stat-desc" style={{ fontSize: '15px', color: '#E2E8F0', marginTop: '4px' }}>
                Trusted by large organizations
              </div>
            </motion.div>

            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="glass-card stat-card"
              whileHover={{ y: -4, borderColor: '#38BDF8' }}
              style={{
                padding: '24px',
                backgroundColor: '#0B0F19',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '16px',
                color: '#FFFFFF' }}
            >
              <div className="stat-icon-wrapper" style={{ color: '#38BDF8', marginBottom: '12px' }}>
                <Building size={22} strokeWidth={1.5} />
              </div>
              <div className="stat-number" style={{ color: '#38BDF8', fontSize: '48px', fontWeight: '800', fontFamily: 'var(--font-headings)' }}>
                <CountUp end={10} suffix="+" duration={1.2} />
              </div>
              <div className="stat-label" style={{ fontSize: '18px', fontWeight: '700', marginTop: '6px', color: '#FFFFFF' }}>
                Industry Domains
              </div>
              <div className="stat-desc" style={{ fontSize: '15px', color: '#E2E8F0', marginTop: '4px' }}>
                Custom-configured solutions
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* --- SERVICES OVERVIEW (Enterprise Capability Showcase Carousel) --- */}

      <section className="section" style={{ padding: '80px 0', backgroundColor: '#0B0F19' }}>

        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: '#38BDF8' }}>Our Capabilities</span>
            <h2 className="section-title" style={{
              color: '#FFFFFF',
              textShadow: '0 0 12px rgba(56, 189, 248, 0.15), 0 0 24px rgba(56, 189, 248, 0.08), 0 2px 12px rgba(255, 255, 255, 0.10)'
            }}>Enterprise Software Services</h2>
            <p className="section-desc" style={{ color: '#94A3B8', fontSize: '18px' }}>Consulting, custom programming, and application delivery engineered for industrial scale.</p>
          </div>

          <EnterpriseShowcaseCarousel />
        </div>
      </section>

      {/* ==================================================
          SECTION: FLAGSHIP PLATFORMS SHOWCASE (HOME PAGE)  — PREMIUM
          ================================================== */}
      <section
        className="section"
        style={{
          backgroundColor: '#FAF7F2',
          overflow: 'hidden',
          position: 'relative',
          padding: '120px 0 140px 0',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        {/* Layered radial gradients and dotted grid pattern */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(239, 231, 218, 0.35) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(245, 240, 232, 0.4) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(255, 248, 238, 0.6) 0%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.075) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* —— SECTION HEADER ————————————————————————————————— */}
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
              background: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.15)',
              borderRadius: '40px',
              padding: '7px 18px',
              marginBottom: '24px'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0284C7' }} />
              <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#0284C7' }}>
                CEA Proprietary Platforms
              </span>
              <div style={{
                background: 'rgba(2, 132, 199, 0.15)',
                border: '1px solid rgba(2, 132, 199, 0.3)',
                borderRadius: '20px',
                padding: '2px 9px',
                fontSize: '10px',
                fontWeight: '800',
                color: '#0284C7'
              }}>5 PRODUCTS</div>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: '900',
              fontFamily: 'var(--font-headings)',
              margin: '0 0 20px 0',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #0B1F3F 0%, #2563EB 50%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              CEA Flagship Platforms
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#475569',
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
              background: 'linear-gradient(90deg, transparent, #38BDF8, transparent)',
              borderRadius: '2px'
            }} />
          </motion.div>

          {/* —— HERO CARD (Product #1 — full width) ———————————————— */}
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

          {/* —— GRID ROW 2 (Products #2 + #3) ————————————————————— */}
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

          {/* —— GRID ROW 3 (Products #4 + #5) ————————————————————— */}
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

          {/* —— VIEW ALL PRODUCTS CTA ————————————————————— */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
          >
            <p style={{ fontSize: '14px', color: '#475569', fontWeight: '500' }}>
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
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(11, 15, 25, 0.05)' }}
                whileTap={{ scale: 0.98 }}
                className="btn"
                style={{
                  border: '2px solid #0B0F19',
                  backgroundColor: 'transparent',
                  fontWeight: '700'
                }}
              >
                Request a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTIONS SUCCESSFULLY DELIVERED --- */}
      <section className="section" style={{ overflow: 'hidden', position: 'relative', padding: '80px 0', backgroundColor: '#0B0F19' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-subtitle" style={{ color: '#38BDF8' }}>Our Delivery Record</span>
            <h2 className="section-title" >Solutions Successfully Delivered</h2>
          </div>
        </div>

        {/* Coverflow Carousel — full bleed */}
        <SolutionsCoverflow solutions={solutions} onNavigate={navigate} />
      </section>

      {/* --- DUAL VIDEO SHOWCASE SECTION --- */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FAF7F2', padding: '120px 0', borderTop: '1px solid rgba(0, 0, 0, 0.05)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        {/* Layered radial gradients and dotted grid pattern */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(239, 231, 218, 0.35) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(245, 240, 232, 0.4) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.075) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-subtitle" style={{ color: '#475569', fontWeight: 600 }}>WATCH VERICEA® IN ACTION</span>
            <h2 className="section-title" style={{
              background: 'linear-gradient(135deg, #0B1F3F 0%, #2563EB 50%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Vericea® Product Demonstrations</h2>
            <p className="section-desc" style={{ color: '#475569', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>Explore how Vericea® helps organizations improve planning, operational efficiency, project visibility, and execution excellence.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Card 1 */}
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="video-card-premium"
              onClick={() => setActiveVideoUrl('/images/WhatsApp Video 2026-06-24 at 5.55.10 AM.mp4')}
            >
              <video 
                src="/images/WhatsApp Video 2026-06-24 at 5.55.10 AM.mp4" 
                muted 
                preload="metadata" 
                className="video-card-element"
                playsInline
              />
              <div className="video-play-overlay">
                <div className="video-play-btn-circle">
                  <Play fill="currentColor" size={24} style={{ marginLeft: '2px' }} />
                </div>
                <h3 className="video-card-title">Capacity Planning & Resource Optimization</h3>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              className="video-card-premium"
              onClick={() => setActiveVideoUrl('/images/WhatsApp Video 2026-06-24 at 5.55.57 AM.mp4')}
            >
              <video 
                src="/images/WhatsApp Video 2026-06-24 at 5.55.57 AM.mp4" 
                muted 
                preload="metadata" 
                className="video-card-element"
                playsInline
              />
              <div className="video-play-overlay">
                <div className="video-play-btn-circle">
                  <Play fill="currentColor" size={24} style={{ marginLeft: '2px' }} />
                </div>
                <h3 className="video-card-title">Construction Project Management</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- WHY CHOOSE CEA INFOTECH --- */}
      <section className="section" style={{ backgroundColor: '#0B0F19', padding: '120px 0' }}>

        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: '#38BDF8' }}>Our Value Proposition</span>
            <h2 className="section-title" >Why Enterprise Leaders Partner With Us</h2>
            <p className="section-desc" style={{ color: '#94A3B8', fontSize: '18px' }}>Over a decade of deploying high-uptime business software optimized for bottom-line results.</p>
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
                desc: 'A robust product line including Vericea® MES, Compliance trackers, and FactSafe assessments.',
                icon: <Rocket />
              },
              {
                title: 'Long-Term Support',
                desc: 'Dedicated support SLAs, training operations, and onsite assistance ensuring consistent uptime.',
                icon: <Headset />
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className="glass-card"
                style={{ backgroundColor: '#121826', border: '1px solid rgba(56, 189, 248, 0.2)' }}
                whileHover={{ y: -6, borderColor: '#38BDF8', boxShadow: '0 12px 40px rgba(56, 189, 248, 0.15)' }}
              >
                <div className="card-icon" style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.2)' }}>{item.icon}</div>

                <h3 className="card-title" style={{ fontSize: '22px', fontWeight: '700' }}>{item.title}</h3>
                <p className="card-text" style={{ fontSize: '18px', lineHeight: '1.6', color: '#D1D5DB' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR CUSTOMERS SHOWCASE SECTION --- */}
      <section className="section" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        backgroundColor: '#FAF7F2', 
        padding: '100px 0 110px 0', 
        borderTop: '1px solid rgba(0, 0, 0, 0.05)', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)' 
      }}>
        {/* Layered radial gradients */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(239, 231, 218, 0.35) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(245, 240, 232, 0.4) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

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
            <span className="section-subtitle" style={{ color: '#38BDF8' }}>OUR CUSTOMERS</span>
            <h2 className="section-title" style={{ 
              fontSize: '38px', 
              fontWeight: '800',
              background: 'linear-gradient(135deg, #0B1F3F 0%, #2563EB 50%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Organizations We Serve
            </h2>
            <p className="section-desc" style={{ fontSize: '18px', lineHeight: '1.6', color: '#475569' }}>
              Trusted by organizations across diverse industries, CEA Infotech delivers technology, compliance, and digital transformation solutions that drive measurable business outcomes.
            </p>
          </motion.div>
        </div>

        {/* Conveyor Belt Wrapper */}
        <div 
          style={{ 
            overflow: 'hidden', 
            width: '100%', 
            position: 'relative', 
            padding: '16px 0',
            zIndex: 2
          }}
          onMouseEnter={() => setIsConveyorHovered(true)}
          onMouseLeave={() => {
            setIsConveyorHovered(false);
            setHoveredCardIndex(null);
          }}
        >


          {/* Data Pulse travelling across all logos */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.02) 15%, rgba(56, 189, 248, 0.06) 20%, rgba(56, 189, 248, 0.12) 25%, rgba(56, 189, 248, 0.06) 30%, rgba(56, 189, 248, 0.02) 35%, transparent)',
            pointerEvents: 'none',
            mixBlendMode: 'plus-lighter',
            animation: 'data-pulse-sweep 10s cubic-bezier(0.25, 1, 0.5, 1) infinite',
            animationPlayState: isConveyorHovered ? 'paused' : 'running',
            zIndex: 3
          }} />

          <motion.div 
            variants={conveyorContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'flex',
              gap: '24px',
              width: 'max-content',
              animation: 'conveyor-left-to-right 45s linear infinite',
              animationPlayState: isConveyorHovered ? 'paused' : 'running',
              paddingLeft: '24px'
            }}
          >
            {/* Double the customerLogos for a seamless infinite loop */}
            {[...customerLogos, ...customerLogos].map((logo, index) => {
              const isCardHovered = hoveredCardIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={conveyorCardVariants}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  className="customer-logo-card"
                  style={{
                    transform: isCardHovered ? 'scale(1.03) translateY(-6px)' : 'scale(1) translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="customer-logo-container">
                    <img 
                      src={logo.path} 
                      alt={`${logo.name} Logo`} 
                      className="customer-logo-img"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Animated Gold Tracking Line */}
        <div className="container" style={{ position: 'relative', marginTop: '16px', zIndex: 2 }}>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ 
              position: 'relative', 
              height: '2px', 
              width: '100%', 
              overflow: 'hidden', 
              backgroundColor: 'rgba(56, 189, 248, 0.15)', 
              borderRadius: '1px',
              transformOrigin: 'left'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '240px',
              background: 'linear-gradient(90deg, transparent, #38BDF8, #BCC0C0, #38BDF8, transparent)',
              animation: 'gold-tracker-flow 3.5s linear infinite',
              animationPlayState: isConveyorHovered ? 'paused' : 'running'
            }} />
          </motion.div>
        </div>

        {/* Supporting Text / Tagline */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            style={{ 
              textAlign: 'center', 
              marginTop: '48px', 
              fontSize: '15px', 
              color: '#475569', 
              fontWeight: '500',
              fontStyle: 'italic'
            }}
          >
            Delivering value and building lasting partnerships across industries.
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0B0F19', padding: '120px 0' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div 
            variants={scrollReveal} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={scrollReveal.viewport}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '40px', marginBottom: '20px', letterSpacing: '-1px' }}>Ready To Transform Your Operations?</h2>
            <p style={{ fontSize: '18px', color: '#E2E8F0', marginBottom: '40px', lineHeight: '1.6' }}>
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
                whileHover={{ scale: 1.03, borderColor: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                style={{ border: '2px solid rgba(255, 255, 255, 0.35)' }}
              >
                Explore Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VIDEO PLAYBACK OVERLAY MODAL --- */}
      <AnimatePresence>
        {activeVideoUrl && (
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
            onClick={() => setActiveVideoUrl(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ position: 'relative', width: '100%', maxWidth: '960px', aspectRatio: '16/9', backgroundColor: '#020617', borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.3)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideoUrl(null)} 
                style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(2, 6, 23, 0.8)', border: 'none', color: '#fff', cursor: 'pointer', padding: '8px', borderRadius: '50%', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


