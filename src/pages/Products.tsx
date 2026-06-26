import { useState, useRef, useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, 
  ShieldCheck, 
  AlertTriangle, 
  Truck, 
  Network, 
  Check,
  // CheckCircle removed (unused)
  ArrowRight, 
  Database, 
  Sparkles, 
  Clock, 
  Award,
  Layers,
  TrendingUp,
  Settings
  ,Send
 } from 'lucide-react';



// Product Type
interface Product {
  id: string;
  name: string;
  tagline: string;
  oneLiner: string;
  description: string;
  keyFeatures: string[];
  businessValue: string;
  industries: string[];
  image: string;
  icon: ReactNode;
  logo?: string;
  path: string;
}

export default function Products() {
  const navigate = useNavigate();
  const inquiryRef = useRef<HTMLDivElement>(null);
  
  // Selection state for products (slider index & transition direction)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: 'Vericea® Manufacturing',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // scrollReveal removed (unused)
  const railRef = useRef<HTMLDivElement>(null);

  const productsData: Product[] = [
    {
      id: 'vericea-manufacturing',
      name: 'Vericea® Manufacturing',
      tagline: 'Transforming Production Visibility Into Operational Excellence',
      oneLiner: 'Live shop-floor production tracking and equipment efficiency analytics.',
      description: 'A production tracking platform that helps manufacturing companies monitor activities, improve efficiency and optimize shop-floor operations.',
      keyFeatures: [
        'Production Tracking',
        'Efficiency Monitoring',
        'Workflow Management',
        'Performance Analytics',
        'Manufacturing Insights'
      ],
      businessValue: 'Improves productivity, visibility and operational control across manufacturing units.',
      industries: ['Textiles', 'Apparel', 'Engineering', 'Manufacturing'],
      image: '/images/manufacturing_floor_1780850784796.png',
      icon: <Factory size={22} />,
      logo: '/images/Vericea.png',
      path: '/products/vericea-manufacturing'
    },
    {
      id: 'vericea-compliance',
      name: 'Vericea® Compliance',
      tagline: 'Create. Maintain. Monitor.',
      oneLiner: 'Automated audit tracking and secure compliance evidence vaults.',
      description: 'A compliance management platform that helps organizations track activities, manage evidence and maintain audit readiness.',
      keyFeatures: [
        'Compliance Tracking',
        'Audit Management',
        'Evidence Collection',
        'Notifications & Alerts',
        'Reporting Dashboard'
      ],
      businessValue: 'Improves compliance visibility and supports continuous audit preparedness.',
      industries: ['Manufacturing', 'Export Houses', 'Factories', 'Compliance Teams'],
      image: '/images/quality_audit_1780850801169.png',
      icon: <ShieldCheck size={22} />,
      logo: '/images/Vericea.png',
      path: '/products/vericea-compliance'
    },
    {
      id: 'factsafe',
      name: 'FactSafe',
      tagline: 'Proactive Risk Assessment & Monitoring',
      oneLiner: 'Vulnerability mapping and real-time hazard mitigation protocols.',
      description: 'A risk assessment solution that enables organizations to identify, evaluate and monitor operational and business risks.',
      keyFeatures: [
        'Risk Assessment',
        'Monitoring',
        'Reporting',
        'Analytics',
        'Risk Visibility'
      ],
      businessValue: 'Supports informed decision-making and risk mitigation.',
      industries: ['Manufacturing', 'Factories', 'Export Houses', 'Compliance Teams'],
      image: '/images/safety_inspection_1780850817856.png',
      icon: <AlertTriangle size={22} />,
      logo: '/images/Fact_safe.png',
      path: '/products/factsafe'
    },
    {
      id: 'courier-cost-management',
      name: 'Courier Cost Management System',
      tagline: 'Smarter Logistics Cost Control',
      oneLiner: 'Reconciliation and automated rate-card verification for shipping.',
      description: 'A platform designed to optimize courier operations and reduce logistics expenses through monitoring and analytics.',
      keyFeatures: [
        'Shipment Tracking',
        'Cost Analysis',
        'Vendor Monitoring',
        'Expense Reporting',
        'Operational Visibility'
      ],
      businessValue: 'Reduces logistics costs and improves efficiency.',
      industries: ['Logistics', 'Apparel', 'Textiles', 'Export Organizations'],
      image: '/images/logistics_terminal_1780850837146.png',
      icon: <Truck size={22} />,
      logo: '/images/Courier Cost Optimizer.png',
      path: '/products/courier-cost-management'
    },
    {
      id: 'family-tree-platform',
      name: 'Family Tree Platform',
      tagline: 'Scalable Relationship Mapping Solution',
      oneLiner: 'Multilingual and secure relational network mapping visualizations.',
      description: 'A multilingual platform designed for relationship management and family tree visualization.',
      keyFeatures: [
        'Multi-language Support',
        'Relationship Mapping',
        'Search & Navigation',
        'Scalable Architecture',
        'Secure Data Management'
      ],
      businessValue: 'Simplifies complex relationship tracking and visualization.',
      industries: ['Consulting', 'NGOs', 'Demographics', 'Government Projects'],
      image: '/images/family_archives_1780850863160.png',
      icon: <Network size={22} />,
      path: '/products/family-tree-platform'
    }
  ];

  const challengeSolutionData = [
    {
      challenge: "Production Tracking Challenges",
      solution: "Vericea® Manufacturing",
      desc: "Real-time production monitoring, efficiency tracking and operational visibility.",
      icon: <Factory size={22} />
    },
    {
      challenge: "Compliance Monitoring Difficulties",
      solution: "Vericea® Compliance",
      desc: "Automated compliance activities, evidence management and audit readiness.",
      icon: <ShieldCheck size={22} />
    },
    {
      challenge: "Manual Processes",
      solution: "Workflow Automation Solutions",
      desc: "Digitize and automate business workflows to improve efficiency.",
      icon: <Settings size={22} />
    },
    {
      challenge: "Reporting Inefficiencies",
      solution: "Analytics Dashboards",
      desc: "Real-time reporting, KPI monitoring and decision support.",
      icon: <TrendingUp size={22} />
    },
    {
      challenge: "Audit Readiness Issues",
      solution: "Vericea® Compliance",
      desc: "Continuous compliance monitoring and audit preparation.",
      icon: <ShieldCheck size={22} />
    },
    {
      challenge: "Risk Management Challenges",
      solution: "FactSafe",
      desc: "Risk identification, assessment and monitoring.",
      icon: <AlertTriangle size={22} />
    },
    {
      challenge: "Logistics Cost Control",
      solution: "Courier Cost Management",
      desc: "Track courier expenses and optimize logistics costs.",
      icon: <Truck size={22} />
    }
  ];

  const standouts = [
    { title: 'Industry-Focused Design', icon: <Factory size={24} />, desc: 'Our solutions are tailored around physical floor processes and real sector compliance rules.' },
    { title: 'Scalable Architecture', icon: <Layers size={24} />, desc: 'Ready for deployment across multiple branches, offline-sync models, and high database volumes.' },
    { title: 'Real-Time Visibility', icon: <TrendingUp size={24} />, desc: 'Immediate shop-floor status updates, machinery telemetry, and automated cost warnings.' },
    { title: 'Compliance Readiness', icon: <ShieldCheck size={24} />, desc: 'Integrated checklists and digital audit lockers to verify compliance with international standards.' },
    { title: 'Data-Driven Decisions', icon: <Database size={24} />, desc: 'Robust analytics engines translate raw operational logs into clear dashboards.' },
    { title: 'Continuous Innovation', icon: <Sparkles size={24} />, desc: 'Regular software improvements, interface redesigns, and API integrations with ERPs.' },
    { title: 'Operational Efficiency', icon: <Clock size={24} />, desc: 'Eliminate manual logs and reduce machinery downtime stages, boosting resource utility.' },
    { title: 'Long-Term Business Value', icon: <Award size={24} />, desc: 'Demonstrable reductions in courier costs, audit penalties, and assembly tracking errors.' }
  ];

  // 3D Coverflow Carousel component
  function CoverflowCarousel({ items, onCardClick }: { items: typeof challengeSolutionData, onCardClick: (s: string) => void }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (isHovered) return;
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [isHovered, items.length]);

    return (
      <div 
        style={{ position: 'relative', width: '100%', height: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px', overflow: 'hidden' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: 'relative', width: '340px', height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
          {items.map((item, i) => {
            const diff = (i - activeIndex + items.length) % items.length;
            let offset = diff;
            if (offset > Math.floor(items.length / 2)) offset -= items.length;
            
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);
            
            const x = offset * 220; 
            const z = -absOffset * 150;
            const rotateY = offset > 0 ? -35 : offset < 0 ? 35 : 0;
            const scale = isCenter ? 1.05 : 0.85;
            const opacity = isCenter ? 1 : Math.max(0, 1 - absOffset * 0.4);
            const zIndex = items.length - absOffset;

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{ x, z, rotateY, scale, opacity, zIndex }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) {
                    setActiveIndex((prev) => (prev + 1) % items.length);
                  } else if (info.offset.x > 60) {
                    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
                  }
                }}
                style={{
                  position: 'absolute',
                  width: '340px',
                  cursor: isCenter ? 'default' : 'pointer',
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(i);
                  }
                }}
              >
                <motion.div
                  className="eco-card"
                  whileHover={isCenter ? { scale: 1.02 } : {}}
                  style={{
                    background: 'linear-gradient(135deg, rgba(11, 25, 44, 0.8), rgba(3, 10, 20, 0.9))',
                    backdropFilter: 'blur(16px)',
                    border: isCenter ? '1px solid rgba(200, 162, 118, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isCenter ? '0 16px 40px rgba(200, 162, 118, 0.15), 0 0 20px rgba(200, 162, 118, 0.1) inset' : '0 10px 30px rgba(0,0,0,0.6)',
                    padding: '32px',
                    borderRadius: '20px',
                    transformOrigin: 'center center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'border 200ms ease, box-shadow 300ms ease, transform 300ms ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(200,162,118,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--supporting)' }}>
                      {item.icon}
                    </div>
                    <div className="solution-badge" style={{ backgroundColor: 'rgba(200,162,118,0.15)', color: 'var(--supporting)', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 }}>
                      {item.solution}
                    </div>
                  </div>
                  <div style={{ marginTop: '28px', flexGrow: 1 }}>
                    <div style={{ fontSize: '12px', color: '#f87171', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Challenge</div>
                    <div className="challenge-title" style={{ fontSize: '22px', color: '#ffffff', fontWeight: 800, marginBottom: '12px', lineHeight: 1.3 }}>{item.challenge}</div>
                    <div className="challenge-desc" style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                  <div style={{ marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
                    <button 
                      onClick={(e) => { 
                        if (isCenter) {
                          e.stopPropagation(); 
                          onCardClick(item.solution); 
                        }
                      }} 
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--supporting)', 
                        fontWeight: 700, 
                        cursor: isCenter ? 'pointer' : 'default',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        padding: 0
                      }}
                    >
                      Learn more about this solution <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Navigation Dots */}
        <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '8px' }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: activeIndex === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === i ? 'var(--supporting)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    );
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(true);
      }, 550);
    }
  };

  const selectProductAndScroll = (productName: string) => {
    const matchingIndex = productsData.findIndex(p => p.name === productName);
    if (matchingIndex !== -1) {
      setDirection(matchingIndex > currentIndex ? 1 : -1);
      setCurrentIndex(matchingIndex);
    }
    setFormData(prev => ({ ...prev, product: productName }));
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEcosystem = () => {
    const section = document.getElementById('ecosystem-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeProduct = productsData[currentIndex];

  // Resolve accent tint (handles hex or css var references)
  const resolveTint = (accent: string, alpha = 0.08) => {
    try {
      if (!accent) return `rgba(var(--primary-rgb), 0.02)`;
      if (accent.startsWith('var(')) {
        const name = accent.slice(4, -1).trim();
        const map: Record<string, string> = {
          '--cta': '--accent-rgb',
          '--accent': '--accent-rgb',
          '--supporting': '--supporting-rgb',
          '--secondary': '--secondary-rgb',
          '--primary': '--primary-rgb'
        };
        const rgbVar = map[name] || `${name}-rgb`;
        return `rgba(var(${rgbVar}), ${alpha})`;
      }
      if (accent.startsWith('#')) {
        const hex = accent.replace('#', '');
        const rr = parseInt(hex.substring(0, 2), 16);
        const gg = parseInt(hex.substring(2, 4), 16);
        const bb = parseInt(hex.substring(4, 6), 16);
        return `rgba(${rr}, ${gg}, ${bb}, ${alpha})`;
      }
      return accent;
    } catch {
      return `rgba(var(--primary-rgb), 0.02)`;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="products-page products-page-bg"
      style={{ overflow: 'hidden', color: 'var(--text-main)' }}
    >
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section 

        className="section surface-royal"

        style={{ 
          padding: '180px 0 140px 0', 
          color: 'var(--text-main)',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(11, 25, 44, 0.72), rgba(11, 25, 44, 0.85)), url("/images/smart_factory_hero_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(200, 162, 118, 0.18)'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(200, 162, 118, 0.06) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}
            >
              <div 
                className="section-subtitle" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  background: 'rgba(200, 162, 118, 0.12)', 
                  borderRadius: '20px', 
                  fontSize: '13px', 
                  color: 'var(--accent)', 
                  fontWeight: '600',
                  border: '1px solid rgba(200, 162, 118, 0.3)',
                  width: 'max-content'
                }}
              >
                <Sparkles size={14} style={{ color: 'var(--cta)' }} />
                <span>Enterprise Grade Platforms</span>
              </div>
              
              <h1 style={{ fontSize: '52px', lineHeight: '1.15', letterSpacing: '-1.5px', color: '#ffffff', fontWeight: '800', margin: 0, fontFamily: 'var(--font-headings)' }}>
                CEA Flagship Products
              </h1>
              
              <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.6', margin: 0, maxWidth: '680px' }}>
                Purpose-built software platforms designed to improve operational efficiency, production visibility, compliance management and business performance.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                <motion.button 
                  onClick={() => selectProductAndScroll(activeProduct.name)} 
                  className="btn btn-cta"
                  whileHover={{ scale: 1.03, boxShadow: '0px 6px 12px rgba(200, 162, 118, 0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Request Product Demo
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={scrollToEcosystem} 
                  className="btn btn-dark-outline"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#ffffff' }}
                >
                  Explore Solutions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: OUR PRODUCT ECOSYSTEM (CAROUSEL SLIDER)
          ================================================== */}

      <section id="ecosystem-section" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', backgroundColor: '#FAF7F2', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <h2 className="section-title" style={{
              fontSize: '36px',
              fontWeight: '800',
              fontFamily: 'var(--font-headings)',
              background: 'linear-gradient(135deg, #0B1F3F 0%, #2563EB 50%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '10px'
            }}>
              Core Platforms
            </h2>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#374151',
              margin: '0 0 16px 0',
              fontFamily: 'var(--font-headings)'
            }}>
              Our Product Ecosystem
            </h3>
            <p className="section-desc" style={{ color: '#4b5563', margin: '0' }}>
              Explore CEA's flagship enterprise software platforms designed for scalable business operations.
            </p>
          </div>

          {/* Slider Controls Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#0284C7', letterSpacing: '1px' }}>
                Active Platform
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#0B1220' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: resolveTint('var(--supporting)', 0.08),
                  color: '#0284C7',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {activeProduct.icon}
                </span>
                {activeProduct.name}
              </h3>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#475569', fontFamily: 'var(--font-headings)' }}>
                {String(currentIndex + 1).padStart(2, '0')} <span style={{ opacity: 0.4 }}>/</span> {String(productsData.length).padStart(2, '0')}
              </span>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(11, 18, 32, 0.08)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(11, 18, 32, 0.15)',
                    backgroundColor: 'rgba(11, 18, 32, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0B1220'
                  }}
                >
                  <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(11, 18, 32, 0.08)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(11, 18, 32, 0.15)',
                    backgroundColor: 'rgba(11, 18, 32, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0B1220'
                  }}
                >
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Interactive Detailed Presentation Panel */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 250 : dir < 0 ? -250 : 0,
                    opacity: 0
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      x: { type: 'spring', stiffness: 200, damping: 24 },
                      opacity: { duration: 0.25 }
                    }
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -250 : dir < 0 ? 250 : 0,
                    opacity: 0,
                    transition: {
                      x: { type: 'spring', stiffness: 200, damping: 24 },
                      opacity: { duration: 0.25 }
                    }
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-card"
                style={{
                  padding: '44px',
                  width: '100%',
                  borderRadius: '20px'
                }}
              >
                <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
                  {/* Left Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    <div>
                      <span 
                        style={{ 
                          color: 'var(--supporting)', 
                          fontSize: '12.5px', 
                          fontWeight: '700', 
                          textTransform: 'uppercase', 
                          letterSpacing: '1px',
                          display: 'block',
                          marginBottom: '4px'
                        }}
                      >
                        {activeProduct.tagline}
                      </span>
                      {activeProduct.logo && (
                        <div style={{ 
                          marginBottom: '16px',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span className="vericea-logo-wrap">
                            <img 
                              src={activeProduct.logo} 
                              alt={`${activeProduct.name} Logo`} 
                              style={{ 
                                height: activeProduct.id.includes('courier') ? '54px' : '36px', 
                                width: 'auto', 
                                objectFit: 'contain' 
                              }} 
                            />
                            {activeProduct.id.includes('vericea') && (
                              <sup className="vericea-logo-sup">®</sup>
                            )}
                          </span>
                        </div>
                      )}
                      <h2 style={{ fontSize: '32px', color: '#ffffff', fontWeight: '800', margin: 0 }}>
                        {activeProduct.name}
                      </h2>
                      <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '12px', lineHeight: '1.6' }}>
                        {activeProduct.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '0.5px', marginBottom: '12px' }}>
                        Key Features
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                        {activeProduct.keyFeatures.map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#f8fafc' }}>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(200, 162, 118, 0.12)', color: 'var(--supporting)', display: 'flex', alignItems: 'center', justifyItems: 'center', flexShrink: 0 }}>
                              <Check size={11} style={{ margin: 'auto' }} />
                            </div>
                            <span style={{ fontWeight: '500' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Value & Target Industries */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--supporting)', letterSpacing: '0.5px', marginBottom: '6px' }}>
                          Business Value
                        </h4>
                        <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.4', margin: 0 }}>
                          {activeProduct.businessValue}
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--supporting)', letterSpacing: '0.5px', marginBottom: '6px' }}>
                          Target Industries
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                          {activeProduct.industries.map((ind, idx) => (
                            <span 
                              key={idx} 
                              style={{ 
                                fontSize: '11.5px', 
                                backgroundColor: 'var(--card-bg)', 
                                color: 'var(--text-main)', 
                                padding: '3px 10px', 
                                borderRadius: '4px',
                                fontWeight: '600',
                                border: '1px solid var(--border-color)'
                              }}
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '8px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <button 
                        onClick={() => selectProductAndScroll(activeProduct.name)} 
                        className="btn btn-cta btn-sm"
                        style={{ padding: '10px 22px', color: '#0F172A' }}
                      >
                        Request Product Demo
                      </button>
                      <button 
                        onClick={() => navigate(activeProduct.path)} 
                        className="btn btn-dark-outline btn-sm"
                        style={{ padding: '10px 22px', border: '2px solid rgba(255,255,255,0.25)', color: '#ffffff', minWidth: '140px' }}
                      >
                        View Product Details
                      </button>
                    </div>
                  </div>

                  {/* Right Interactive Mockup Screen */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div 
                      onClick={() => navigate(activeProduct.path)}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      style={{
                        width: '100%',
                        background: '#020617',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '12px',
                        boxShadow: 'var(--shadow-xl)',
                        overflow: 'hidden',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontWeight: '600' }}>{activeProduct.name} Showcase</span>
                        <span style={{ fontSize: '10px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> Live details
                        </span>
                      </div>
                      <img 
                        src={activeProduct.image} 
                        alt={`${activeProduct.name} Core Product`}
                        style={{ 
                          width: '100%', 
                          display: 'block', 
                          height: 'auto', 
                          maxHeight: '360px', 
                          borderRadius: '8px', 
                          objectFit: 'cover'
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicator Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {productsData.map((prod, index) => {
              const isActive = index === currentIndex;
              return (
                <motion.button
                  key={prod.id}
                  onClick={() => handleDotClick(index)}
                  style={{
                    width: isActive ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? 'var(--supporting)' : 'var(--border-color)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    padding: 0
                  }}
                  whileHover={{ scale: 1.2 }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: BUSINESS CHALLENGES SOLVED BY OUR PRODUCTS
          ================================================== */}

      <section className="section surface-royal about-section-texture" style={{
        padding: '100px 0',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      }}>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Diagnostics & Resolution</span>
            <h2 className="section-title" style={{ color: '#ffffff', letterSpacing: '-1px', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>Business Challenges Solved By Our Products</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>
              Every product in the CEA portfolio is designed to solve a specific operational, compliance or management challenge.
            </p>
          </div>

          {/* Enterprise Solution Coverflow - 3D Carousel */}
          <div style={{
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '8px',
            transition: 'all 300ms ease',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
          }}>
            <CoverflowCarousel
              items={challengeSolutionData}
              onCardClick={(sol) => selectProductAndScroll(
                sol === "Workflow Automation Solutions" ? "Vericea® Manufacturing" : 
                sol === "Analytics Dashboards" ? "Vericea® Manufacturing" : 
                sol === "Courier Cost Management" ? "Courier Cost Management System" :
                sol
              )}
            />
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: WHY OUR PRODUCTS STAND OUT
          ================================================== */}

      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0', backgroundColor: '#FAF7F2', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <h2 className="section-title" style={{
              fontSize: '36px',
              fontWeight: '800',
              fontFamily: 'var(--font-headings)',
              background: 'linear-gradient(135deg, #0B1F3F 0%, #2563EB 50%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '10px'
            }}>
              Architectural Quality
            </h2>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#374151',
              margin: '0 0 16px 0',
              fontFamily: 'var(--font-headings)'
            }}>
              Why Our Products Stand Out
            </h3>
            <p className="section-desc" style={{ color: '#4b5563', margin: '0' }}>We build enterprise software that integrates directly, ensures compliance, and scales easily.</p>
          </div>

          <div className="capability-section">
            <div className="capability-inner">
              <div className="capability-rail-wrap">
              <motion.div ref={railRef} className="capability-rail"
                drag="x"
                dragElastic={0.08}
                dragConstraints={{ left: -9999, right: 9999 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ staggerChildren: 0.16 }}
              >
                {/* Map titles to contextual visuals (replace with production assets as available) */}
                {standouts.map((st, i) => {
                  const isLarge = i % 2 === 0; // Large on even indices
                  const sizeClass = isLarge ? 'capability-panel--large' : 'capability-panel--medium';
                  const keySafe = st.title.toLowerCase().replace(/\s+/g, '-');
                  const images: Record<string, string> = {
                    'industry-focused-design': '/images/ind_manufacturing.jpg',
                    'scalable-architecture': '/images/ind_engineering.jpg',
                    'real-time-visibility': '/images/industrial_control_room_1780849774868.png',
                    'compliance-readiness': '/images/ind_compliance.jpg',
                    'data-driven-decisions': '/images/quality_audit_1780850801169.png',
                    'continuous-innovation': '/images/ind_construction.jpg',
                    'operational-efficiency': '/images/manufacturing_floor_1780850784796.png',
                    'long-term-business-value': '/images/business_consultation_1780850767888.png',
                  };
                  const imageUrl = images[keySafe] || images['data-driven-decisions'];

                  return (
                      <motion.div
                        key={i}
                        className={`capability-panel ${sizeClass} gold-border`}
                        whileHover={{ scale: 1.035 }}
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
                        tabIndex={0}
                        role="group"
                        aria-label={`${st.title}: ${st.desc}`}
                        onMouseMove={(e) => {
                          const el = e.currentTarget as HTMLDivElement;
                          const rect = el.getBoundingClientRect();
                          const px = (e.clientX - rect.left) / rect.width - 0.5;
                          const py = (e.clientY - rect.top) / rect.height - 0.5;
                          const img = el.querySelector('.capability-image') as HTMLElement | null;
                          if (img) img.style.transform = `translate(${px * 10}px, ${py * 10}px) scale(1.06)`;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLDivElement;
                          const img = el.querySelector('.capability-image') as HTMLElement | null;
                          if (img) img.style.transform = '';
                        }}
                        onKeyDown={(e) => {
                          const el = e.currentTarget as HTMLDivElement;
                          if (e.key === 'ArrowRight') {
                            const next = el.nextElementSibling as HTMLElement | null;
                            if (next) next.focus(); else (railRef.current as HTMLElement | null)?.scrollBy({ left: 360, behavior: 'smooth' });
                          }
                          if (e.key === 'ArrowLeft') {
                            const prev = el.previousElementSibling as HTMLElement | null;
                            if (prev) prev.focus(); else (railRef.current as HTMLElement | null)?.scrollBy({ left: -360, behavior: 'smooth' });
                          }
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            el.click();
                          }
                        }}
                      >
                      <div className="capability-image parallax" style={{ backgroundImage: `url(${imageUrl})` }} />
                      <div className="capability-overlay" />
                      <div className="capability-gold-border" />
                      <div className="capability-corner tl" />
                      <div className="capability-corner tr" />
                      <div className="capability-content">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div className="capability-icon">{st.icon}</div>
                          <div className="capability-title">{st.title}</div>
                        </div>
                        <div className="capability-desc">{st.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
              <button aria-hidden className="rail-control rail-prev" onClick={() => railRef.current?.scrollBy({ left: -420, behavior: 'smooth' })}>
                ‹
              </button>
              <button aria-hidden className="rail-control rail-next" onClick={() => railRef.current?.scrollBy({ left: 420, behavior: 'smooth' })}>
                ›
              </button>
              </div>

              {/* Gold sweep line (animated on scroll) */}
              <motion.div className="capability-gold-sweep" initial={{ width: 0 }} whileInView={{ width: '92%' }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 1.6, ease: [0.2,0.9,0.2,1] }} />
            </div>
          </div>
        </div>
      </section>






      {/* ==================================================
          SECTION: PRODUCT INQUIRY & FINAL CTA
          ================================================== */}

      <section ref={inquiryRef} className="section surface-royal contact-section-texture" id="inquiry-form" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)' }}>

        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Request Information</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Request A Product Demo</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>Select a product and tell us about your operational challenges.</p>
          </div>

          <div 
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '16px'
            }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '24px 0' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(16,185,129,0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: '#ffffff', fontWeight: '800' }}>Inquiry Submitted Successfully</h3>
                <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px auto' }}>
                  Thank you for contacting us. A product consultant from our office will email you shortly with access parameters.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary btn-sm" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff' }}>
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#ffffff' }} htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#ffffff' }} htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        fontSize: '14.5px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                    />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#ffffff' }} htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#ffffff',
                        fontSize: '14.5px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                    />
                    {errors.company && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#ffffff' }} htmlFor="product">Product of Interest</label>
                  <select 
                    id="product" 
                    name="product" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#112240',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    value={formData.product}
                    onChange={handleInputChange}
                  >
                    <option value="Vericea® Manufacturing">Vericea® Manufacturing</option>
                    <option value="Vericea® Compliance">Vericea® Compliance</option>
                    <option value="FactSafe">FactSafe (Risk Platform)</option>
                    <option value="Courier Cost Management">Courier Cost Management System</option>
                    <option value="Family Tree Platform">Family Tree Platform</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#ffffff' }} htmlFor="message">How can we help you?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical'
                    }}
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your production lines, sizing requirements, or compliance issues..."
                  ></textarea>
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-cta" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#0F172A' }}>
                  Send Inquiry
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA PANEL
          ================================================== */}

      <section className="section surface-matte contact-section-texture" style={{ position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 162, 118, 0.06) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200, 162, 118, 0.06) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '36px', marginBottom: '16px', letterSpacing: '-1.5px', color: '#ffffff', fontWeight: '800' }}>
              Looking For The Right Software Solution?
            </h2>
            <p style={{ fontSize: '16px', color: '#cbd5e1', marginBottom: '36px', lineHeight: '1.6' }}>
              Explore how CEA Infotech's products can help your organization improve efficiency, visibility and operational excellence.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button 
                onClick={() => selectProductAndScroll(activeProduct.name)} 
                className="btn btn-cta"
                whileHover={{ scale: 1.03, boxShadow: '0px 6px 12px rgba(200, 162, 118, 0.35)' }}
                whileTap={{ scale: 0.98 }}
                style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Request A Demo
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                onClick={() => selectProductAndScroll(activeProduct.name)} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                whileTap={{ scale: 0.98 }}
                style={{ border: '2px solid rgba(255, 255, 255, 0.25)', color: '#ffffff' }}
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


    </motion.div>
  );
}
