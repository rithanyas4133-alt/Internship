import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Factory, 
  ShieldCheck, 
  AlertTriangle, 
  Truck, 
  Network, 
  Check, 
  ArrowRight, 
  Play, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Database, 
  Sparkles, 
  Clock, 
  Award,
  Layers,
  TrendingUp,
  Shirt,
  Scissors,
  Briefcase,
  Heart,
  Building2,
  Globe,
  Settings,
  Send,
  HelpCircle,
  Cog,
  ShoppingBag,
  Landmark,
  HeartHandshake,
  Building
} from 'lucide-react';

// Counter component for stats impact numbers
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  // Extract number and suffix (e.g. "35+" -> 35, "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = numericValue;
    if (start === end) return;
    
    const totalMilliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 50); // increment steps to complete in duration
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Detailed Product Data structure
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
  icon: React.ReactNode;
}

export default function Products() {
  const inquiryRef = useRef<HTMLDivElement>(null);
  
  // Selection state for products (slider index & transition direction)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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

  const scrollReveal = {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
  };

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
      id: 'courier-cost',
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
      id: 'family-tree',
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{ overflow: 'hidden', backgroundColor: 'var(--background)' }}
    >
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section 
        className="section"
        style={{ 
          padding: '160px 0 100px 0', 
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(11, 31, 58, 0.82), rgba(11, 31, 58, 0.94)), url("/images/vericea_dashboard_mockup.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(14, 116, 144, 0.15)'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 75% 30%, rgba(14, 116, 144, 0.22) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
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
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  width: 'max-content'
                }}
              >
                <Sparkles size={14} style={{ color: 'var(--cta)' }} />
                <span>Enterprise Grade Platforms</span>
              </div>
              
              <h1 style={{ fontSize: '46px', lineHeight: '1.15', letterSpacing: '-1.5px', color: '#ffffff', fontWeight: '800', margin: 0 }}>
                CEA's Flagship Products
              </h1>
              
              <p style={{ fontSize: '17.5px', color: 'rgba(241, 245, 249, 0.88)', lineHeight: '1.6', margin: 0 }}>
                Purpose-built software platforms designed to improve operational efficiency, production visibility, compliance management and business performance.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
                <motion.button 
                  onClick={() => selectProductAndScroll(activeProduct.name)} 
                  className="btn btn-cta"
                  whileHover={{ scale: 1.03, boxShadow: '0px 6px 12px rgba(245, 158, 11, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ color: '#0B1F3A', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Request Product Demo
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={scrollToEcosystem} 
                  className="btn btn-dark-outline"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ border: '2px solid rgba(255, 255, 255, 0.35)', color: '#ffffff' }}
                >
                  Explore Solutions
                </motion.button>
              </div>
            </motion.div>

            {/* Dashboard Mockup on Right */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(2, 6, 23, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: '#0B1F3A'
                }}
              >
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '10px 16px', display: 'flex', gap: '6px', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                  <span style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.4)', marginLeft: '12px', letterSpacing: '0.5px' }}>CEA Dashboard Console</span>
                </div>
                <img 
                  src="/images/vericea_dashboard_mockup.png" 
                  alt="CEA Software Suite Dashboard" 
                  style={{ width: '100%', display: 'block', height: 'auto', maxHeight: '360px', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: OUR PRODUCT ECOSYSTEM (CAROUSEL SLIDER)
          ================================================== */}
      <section id="ecosystem-section" className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Core Platforms</span>
            <h2 className="section-title">Our Product Ecosystem</h2>
            <p className="section-desc">Explore CEA's flagship enterprise software platforms designed for scalable business operations.</p>
          </div>

          {/* Slider Controls Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '1px' }}>
                Active Platform
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(14, 116, 144, 0.06)',
                  color: 'var(--secondary)',
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
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(11, 31, 58, 0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(15, 23, 42, 0.12)',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--primary)'
                  }}
                >
                  <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(11, 31, 58, 0.05)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(15, 23, 42, 0.12)',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--primary)'
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
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  borderRadius: '20px',
                  padding: '44px',
                  boxShadow: 'var(--shadow-xl)',
                  width: '100%'
                }}
              >
                <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
                  {/* Left Details */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    <div>
                      <span 
                        style={{ 
                          color: 'var(--secondary)', 
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
                      <h2 style={{ fontSize: '32px', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>
                        {activeProduct.name}
                      </h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '12px', lineHeight: '1.6' }}>
                        {activeProduct.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.5px', marginBottom: '12px' }}>
                        Key Features
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                        {activeProduct.keyFeatures.map((feat, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(14, 116, 144, 0.08)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyItems: 'center', flexShrink: 0 }}>
                              <Check size={11} style={{ margin: 'auto' }} />
                            </div>
                            <span style={{ fontWeight: '500' }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Value & Target Industries */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid rgba(15, 23, 42, 0.06)', paddingTop: '20px' }}>
                      <div>
                        <h4 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '0.5px', marginBottom: '6px' }}>
                          Business Value
                        </h4>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4', margin: 0 }}>
                          {activeProduct.businessValue}
                        </p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '0.5px', marginBottom: '6px' }}>
                          Target Industries
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                          {activeProduct.industries.map((ind, idx) => (
                            <span 
                              key={idx} 
                              style={{ 
                                fontSize: '11.5px', 
                                backgroundColor: 'var(--alternate-bg)', 
                                color: 'var(--primary)', 
                                padding: '3px 10px', 
                                borderRadius: '4px',
                                fontWeight: '600',
                                border: '1px solid rgba(15, 23, 42, 0.05)'
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
                        className="btn btn-primary btn-sm"
                        style={{ padding: '10px 22px' }}
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
                        border: '1px solid rgba(15, 23, 42, 0.1)',
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
                    backgroundColor: isActive ? 'var(--secondary)' : 'rgba(15, 23, 42, 0.15)',
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
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(15, 23, 42, 0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Diagnostics & Resolution</span>
            <h2 className="section-title">Business Challenges Solved By Our Products</h2>
            <p className="section-desc">
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
                  borderColor: 'var(--secondary)', 
                  boxShadow: 'var(--shadow-xl)',
                }}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
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
                    backgroundColor: 'rgba(14, 116, 144, 0.06)',
                    color: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: '800', 
                    color: 'var(--secondary)', 
                    backgroundColor: 'rgba(14, 116, 144, 0.06)', 
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
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
                    Challenge
                  </span>
                  <h3 style={{ fontSize: '17.5px', fontWeight: '800', color: 'var(--primary)', margin: '0 0 6px 0', fontFamily: 'var(--font-headings)' }}>
                    {item.challenge}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Action Link */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid rgba(15, 23, 42, 0.05)', paddingTop: '16px', marginTop: '20px' }}>
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
                      color: 'var(--primary)',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
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
          SECTION: SECTORS WE TRANSFORM
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Sectors We Transform</span>
            <h2 className="section-title">Designed for Complex Industrial Environments</h2>
            <p className="section-desc">Our software suites adapt to the distinct database, scale, and compliance requirements of diverse sectors.</p>
          </div>

          <div className="industry-grid">
            {[
              { title: 'Manufacturing', desc: 'Real-time plant OEE monitors, WIP audits, and material flow logs.', icon: <Factory /> },
              { title: 'Engineering', desc: 'Custom project lifecycle tracking, dependency logging, and structural blueprint updates.', icon: <Cog /> },
              { title: 'Textiles & Apparel', desc: 'Batch dye house tracking, raw material configuration, and operator efficiency logs.', icon: <Shirt /> },
              { title: 'Retail', desc: 'Stock synchronization, supplier analytics, and courier reconciliation metrics.', icon: <ShoppingBag /> },
              { title: 'Finance', desc: 'Reconciliation ledgers, audit trail history logs, and localized security configs.', icon: <Landmark /> },
              { title: 'NGO', desc: 'Grant reporting accounts, localized project logs, and compliance score monitoring.', icon: <HeartHandshake /> },
              { title: 'Logistics', desc: 'Courier rate auditing, invoice checkers, and shipping savings audits.', icon: <Truck /> },
              { title: 'Construction', desc: 'Material procurement logs, site safety checks, and heavy machine usage diaries.', icon: <Building /> }
            ].map((industry) => (
              <motion.div
                key={industry.title}
                className="industry-card"
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                style={{ backgroundColor: '#ffffff', borderColor: 'rgba(15,23,42,0.06)' }}
              >
                <div className="industry-icon-wrapper" style={{ backgroundColor: 'var(--alternate-bg)', color: 'var(--secondary)' }}>
                  {industry.icon}
                </div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-desc">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: WHY OUR PRODUCTS STAND OUT
          ================================================== */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Architectural Quality</span>
            <h2 className="section-title">Why Our Products Stand Out</h2>
            <p className="section-desc">We build enterprise software that integrates directly, ensures compliance, and scales easily.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '24px' 
            }}
          >
            {standouts.map((st, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -4, borderColor: 'var(--secondary)' }}
                style={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  borderRadius: '12px',
                  padding: '24px 20px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 116, 144, 0.08)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {st.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--primary)', margin: 0, fontFamily: 'var(--font-headings)' }}>
                    {st.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.4', margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* ==================================================
          SECTION: PRODUCT DEMONSTRATION
          ================================================== */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Visual Tour</span>
            <h2 className="section-title">See Our Solutions In Action</h2>
            <p className="section-desc">Watch how CEA Infotech products help organizations improve visibility, efficiency and compliance management.</p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div 
              style={{ 
                position: 'relative', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                aspectRatio: '16 / 9',
                backgroundColor: '#020617',
                cursor: 'pointer'
              }}
              onClick={() => setIsDemoModalOpen(true)}
            >
              {/* Overlay elements */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  background: 'linear-gradient(rgba(11,31,58,0.3), rgba(2,6,23,0.75))',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  color: '#ffffff',
                  textAlign: 'center'
                }}
              >
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--cta)',
                    color: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
                    paddingLeft: '4px',
                    marginBottom: '16px'
                  }}
                >
                  <Play size={30} fill="#ffffff" />
                </motion.button>
                <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '800', margin: '0 0 6px 0' }}>
                  Production Tracking Tool Demo
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13.5px', maxWidth: '480px', margin: 0 }}>
                  This video features a real walkthrough showing live machinery status updates, production schedules, and operator reports.
                </p>
              </div>

              <img 
                src="/images/video_placeholder_1780849979236.png" 
                alt="Product Demo Video Thumbnail" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: PRODUCT IMPACT (DYNAMIC COUNTERS)
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: '#ffffff', borderTop: '4px solid var(--accent)' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '32px',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--accent)', fontFamily: 'var(--font-headings)' }}>
                <Counter value="35+" />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginTop: '8px', letterSpacing: '0.5px' }}>
                Years Industry Expertise
              </h4>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--accent)', fontFamily: 'var(--font-headings)' }}>
                <Counter value="11+" />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginTop: '8px', letterSpacing: '0.5px' }}>
                Industry Domains
              </h4>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--accent)', fontFamily: 'var(--font-headings)' }}>
                <Counter value="15+" />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginTop: '8px', letterSpacing: '0.5px' }}>
                Countries Served
              </h4>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--accent)', fontFamily: 'var(--font-headings)' }}>
                <Counter value="250+" />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginTop: '8px', letterSpacing: '0.5px' }}>
                Enterprise & NGO Projects
              </h4>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--accent)', fontFamily: 'var(--font-headings)' }}>
                <Counter value="98%" />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginTop: '8px', letterSpacing: '0.5px' }}>
                Customer Retention
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: PRODUCT INQUIRY & FINAL CTA
          ================================================== */}
      <section ref={inquiryRef} className="section" id="inquiry-form" style={{ background: 'radial-gradient(circle at bottom, rgba(14, 116, 144, 0.05) 0%, transparent 40%)', backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle">Request Information</span>
            <h2 className="section-title">Request A Product Demo</h2>
            <p className="section-desc">Select a product and tell us about your operational challenges.</p>
          </div>

          <div 
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: 'var(--shadow-lg)'
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
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: 'var(--primary)', fontWeight: '800' }}>Inquiry Submitted Successfully</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px auto' }}>
                  Thank you for contacting us. A product consultant from our office will email you shortly with access parameters.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary btn-sm">
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--primary)' }} htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(15, 23, 42, 0.15)',
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
                    <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--primary)' }} htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(15, 23, 42, 0.15)',
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
                    <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--primary)' }} htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid rgba(15, 23, 42, 0.15)',
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
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--primary)' }} htmlFor="product">Product of Interest</label>
                  <select 
                    id="product" 
                    name="product" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(15, 23, 42, 0.15)',
                      fontSize: '14.5px',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: '#ffffff',
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
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: 'var(--primary)' }} htmlFor="message">How can we help you?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(15, 23, 42, 0.15)',
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

                <button type="submit" className="btn btn-cta" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
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
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #020617 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.07) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14, 116, 144, 0.05) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

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
            <p style={{ fontSize: '16px', color: 'rgba(241, 245, 249, 0.82)', marginBottom: '36px', lineHeight: '1.6' }}>
              Explore how CEA Infotech's products can help your organization improve efficiency, visibility and operational excellence.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button 
                onClick={() => selectProductAndScroll(activeProduct.name)} 
                className="btn btn-cta"
                whileHover={{ scale: 1.03, boxShadow: '0px 6px 12px rgba(245, 158, 11, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                style={{ color: '#0B1F3A', display: 'flex', alignItems: 'center', gap: '8px' }}
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

      {/* ==================================================
          VIDEO MODAL OVERLAY
          ================================================== */}
      <AnimatePresence>
        {isDemoModalOpen && (
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
              backgroundColor: 'rgba(2, 6, 23, 0.9)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setIsDemoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                maxWidth: '820px',
                background: '#030d1a',
                border: '1px solid rgba(14, 116, 144, 0.25)',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()} // Stop closing
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDemoModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>

              <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', margin: 0 }}>
                  VERICEA Production Tracking Tool Walkthrough
                </h3>
              </div>

              {/* Video body simulation */}
              <div style={{ position: 'relative', padding: '20px', backgroundColor: '#020617', aspectRatio: '16 / 9', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                
                {/* Simulated interface view */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '16px', height: '100%' }}>
                  {/* Left Sidebar simulator */}
                  <div style={{ borderRight: '1px solid rgba(255,255,255,0.06)', paddingRight: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ height: '24px', borderRadius: '4px', backgroundColor: 'rgba(14, 116, 144, 0.3)', width: '80%' }}></div>
                    <div style={{ height: '18px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)', width: '60%' }}></div>
                    <div style={{ height: '18px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)', width: '70%' }}></div>
                    <div style={{ height: '18px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.05)', width: '55%' }}></div>
                  </div>

                  {/* Main Dashboard Simulator */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Real-Time Machinery Yield</span>
                      <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: '700' }}>Line 3 Peak Performance</span>
                    </div>

                    {/* Progress bars */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '3px' }}>
                          <span>Stitching Unit - Line A</span>
                          <span>94% efficiency</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                          <motion.div initial={{ width: 0 }} animate={{ width: '94%' }} transition={{ duration: 1.5 }} style={{ height: '100%', backgroundColor: 'var(--secondary)' }}></motion.div>
                        </div>
                      </div>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '3px' }}>
                          <span>Cutting Unit - Line B</span>
                          <span>81% efficiency</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                          <motion.div initial={{ width: 0 }} animate={{ width: '81%' }} transition={{ duration: 1.5, delay: 0.2 }} style={{ height: '100%', backgroundColor: 'var(--accent)' }}></motion.div>
                        </div>
                      </div>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginBottom: '3px' }}>
                          <span>Finishing Unit - Line C</span>
                          <span>98% efficiency</span>
                        </div>
                        <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                          <motion.div initial={{ width: 0 }} animate={{ width: '98%' }} transition={{ duration: 1.5, delay: 0.4 }} style={{ height: '100%', backgroundColor: '#10b981' }}></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video controls simulator overlay */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Play size={14} fill="#ffffff" style={{ color: '#ffffff', cursor: 'pointer' }} />
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>0:15 / 2:45</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                    <span style={{ fontSize: '10px', color: 'var(--accent)', fontWeight: '600', border: '1px solid var(--accent)', padding: '2px 6px', borderRadius: '3px' }}>1080p HD</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'flex-end', backgroundColor: 'rgba(11,31,58,0.2)' }}>
                <button 
                  onClick={() => setIsDemoModalOpen(false)} 
                  className="btn btn-secondary btn-sm"
                >
                  Close Walkthrough
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
