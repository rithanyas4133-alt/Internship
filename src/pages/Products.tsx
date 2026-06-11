import { useState, useRef, type ReactNode } from 'react';
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
}

export default function Products() {
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
    product: 'VERICEA Manufacturing',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll animations variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // scrollReveal removed (unused)
  const railRef = useRef<HTMLDivElement | null>(null);

  const productsData: Product[] = [
    {
      id: 'vericea-manufacturing',
      name: 'VERICEA Manufacturing',
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
      icon: <Factory size={22} />
    },
    {
      id: 'vericea-compliance',
      name: 'VERICEA Compliance',
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
      icon: <ShieldCheck size={22} />
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
      icon: <AlertTriangle size={22} />
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
      icon: <Truck size={22} />
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
      icon: <Network size={22} />
    }
  ];

  const challengeSolutionData = [
    {
      challenge: "Production Tracking Challenges",
      solution: "VERICEA Manufacturing",
      desc: "Real-time production monitoring, efficiency tracking and operational visibility.",
      icon: <Factory size={22} />
    },
    {
      challenge: "Compliance Monitoring Difficulties",
      solution: "VERICEA Compliance",
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
      solution: "VERICEA Compliance",
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
    } catch (e) {
      return `rgba(var(--primary-rgb), 0.02)`;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="products-page"
      style={{ overflow: 'hidden', backgroundColor: 'var(--background)', color: 'var(--text-main)' }}
    >
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section 
        className="section section-dark"
        style={{ 
          padding: '180px 0 140px 0', 
          color: 'var(--text-main)',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(15, 28, 50, 0.55), rgba(31, 58, 95, 0.68)), url("/images/products_hero_bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(184,155,94,0.18)'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(184,155,94,0.06) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
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
                  background: 'rgba(184,155,94,0.12)', 
                  borderRadius: '20px', 
                  fontSize: '13px', 
                  color: 'var(--accent)', 
                  fontWeight: '600',
                  border: '1px solid rgba(184,155,94,0.3)',
                  width: 'max-content'
                }}
              >
                <Sparkles size={14} style={{ color: 'var(--cta)' }} />
                <span>Enterprise Grade Platforms</span>
              </div>
              
              <h1 style={{ fontSize: '52px', lineHeight: '1.15', letterSpacing: '-1.5px', color: '#ffffff', fontWeight: '800', margin: 0, fontFamily: 'var(--font-headings)' }}>
                CEA's Flagship Products
              </h1>
              
              <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.6', margin: 0, maxWidth: '680px' }}>
                Purpose-built software platforms designed to improve operational efficiency, production visibility, compliance management and business performance.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                <motion.button 
                  onClick={() => selectProductAndScroll(activeProduct.name)} 
                  className="btn btn-cta"
                  whileHover={{ scale: 1.03, boxShadow: '0px 6px 12px rgba(184,155,94,0.35)' }}
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
      <section id="ecosystem-section" className="section section-dark" style={{ backgroundColor: 'var(--secondary-bg)', borderBottom: '1px solid rgba(var(--primary-rgb),0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Core Platforms</span>
            <h2 className="section-title" style={{ color: 'var(--text-main)' }}>Our Product Ecosystem</h2>
            <p className="section-desc" style={{ color: 'var(--text-muted)' }}>Explore CEA's flagship enterprise software platforms designed for scalable business operations.</p>
          </div>

          {/* Slider Controls Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--supporting)', letterSpacing: '1px' }}>
                Active Platform
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: resolveTint('var(--supporting)', 0.08),
                  color: 'var(--supporting)',
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
              <span style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-muted)', fontFamily: 'var(--font-headings)' }}>
                {String(currentIndex + 1).padStart(2, '0')} <span style={{ opacity: 0.4 }}>/</span> {String(productsData.length).padStart(2, '0')}
              </span>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                    style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(var(--primary-rgb), 0.1)',
                    backgroundColor: 'rgba(var(--primary-rgb), 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-main)'
                  }}
                >
                  <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(var(--primary-rgb), 0.1)',
                      backgroundColor: 'rgba(var(--primary-rgb), 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-main)'
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
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '20px',
                  padding: '44px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.25)',
                  width: '100%'
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
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(6, 182, 212, 0.12)', color: 'var(--supporting)', display: 'flex', alignItems: 'center', justifyItems: 'center', flexShrink: 0 }}>
                              <Check size={11} style={{ margin: 'auto' }} />
                            </div>
                            <span style={{ fontWeight: '500' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Value & Target Industries */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px' }}>
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
                                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                                color: '#ffffff', 
                                padding: '3px 10px', 
                                borderRadius: '4px',
                                fontWeight: '600',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                              }}
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '8px' }}>
                      <button 
                        onClick={() => selectProductAndScroll(activeProduct.name)} 
                        className="btn btn-cta btn-sm"
                        style={{ padding: '10px 22px', color: '#0F172A' }}
                      >
                        Request Product Demo
                      </button>
                    </div>
                  </div>

                  {/* Right Interactive Mockup Screen */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        width: '100%',
                        background: '#020617',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '12px',
                        boxShadow: 'var(--shadow-xl)',
                        overflow: 'hidden'
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
                    backgroundColor: isActive ? 'var(--supporting)' : 'rgba(255, 255, 255, 0.2)',
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
      <section className="section section-dark" style={{ backgroundColor: '#0F172A', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Diagnostics & Resolution</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Business Challenges Solved By Our Products</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>
              Every product in the CEA portfolio is designed to solve a specific operational, compliance or management challenge.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '24px' 
            }}
          >
            {challengeSolutionData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -8, 
                  borderColor: 'var(--supporting)', 
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                }}
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Row: Icon and Solution Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    color: 'var(--supporting)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: '800', 
                    color: 'var(--supporting)', 
                    backgroundColor: 'rgba(6, 182, 212, 0.08)', 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {item.solution}
                  </span>
                </div>

                {/* Middle Section: Challenge & Description */}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#f87171', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#f87171' }}></span>
                    Challenge
                  </span>
                  <h3 style={{ fontSize: '17.5px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0', fontFamily: 'var(--font-headings)' }}>
                    {item.challenge}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Action Link */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', marginTop: '20px' }}>
                  <button 
                    onClick={() => selectProductAndScroll(
                      item.solution === "Workflow Automation Solutions" ? "VERICEA Manufacturing" : 
                      item.solution === "Analytics Dashboards" ? "VERICEA Manufacturing" : 
                      item.solution === "Courier Cost Management" ? "Courier Cost Management System" :
                      item.solution
                    )}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--supporting)',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--supporting)'}
                  >
                    Learn more about this solution
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          SECTION: WHY OUR PRODUCTS STAND OUT
          ================================================== */}
      <section className="section section-dark" style={{ backgroundColor: '#0F172A' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Architectural Quality</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Why Our Products Stand Out</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>We build enterprise software that integrates directly, ensures compliance, and scales easily.</p>
          </div>

          <div className="capability-section">
            <div className="capability-inner">
              <div className="capability-rail-wrap">
              <motion.div ref={railRef as any} className="capability-rail"
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
                    'industry-focused-design': 'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1400&q=60',
                    'scalable-architecture': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60',
                    'real-time-visibility': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60',
                    'compliance-readiness': 'https://images.unsplash.com/photo-1554774853-bc6b5319b19b?auto=format&fit=crop&w=1400&q=60',
                    'data-driven-decisions': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60',
                    'continuous-innovation': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=60',
                    'operational-efficiency': 'https://images.unsplash.com/photo-1581091012184-7e0f3a1d3f47?auto=format&fit=crop&w=1400&q=60',
                    'long-term-business-value': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=60',
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
      <section ref={inquiryRef} className="section section-dark" id="inquiry-form" style={{ background: 'radial-gradient(circle at bottom, rgba(6, 182, 212, 0.04) 0%, transparent 40%)', backgroundColor: '#090D1A' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>Request Information</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Request A Product Demo</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>Select a product and tell us about your operational challenges.</p>
          </div>

          <div 
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: 'var(--shadow-xl)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
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
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(15, 23, 42, 0.4)',
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
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(15, 23, 42, 0.4)',
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
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(15, 23, 42, 0.4)',
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
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: '#0F172A',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    value={formData.product}
                    onChange={handleInputChange}
                  >
                    <option value="VERICEA Manufacturing">VERICEA Manufacturing</option>
                    <option value="VERICEA Compliance">VERICEA Compliance</option>
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
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(15, 23, 42, 0.4)',
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
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #020617 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.05) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

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
                whileHover={{ scale: 1.03, boxShadow: '0px 6px 12px rgba(234, 179, 8, 0.35)' }}
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
