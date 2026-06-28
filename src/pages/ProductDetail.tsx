import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  AlertTriangle, 
  Truck, 
  Network, 
  Factory, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Layers,
  Send,
  ArrowLeft
} from 'lucide-react';

interface ProductData {
  id: string;
  name: string;
  tagline: string;
  valueProp: string;
  image: string;
  icon: React.ReactNode;
  themeColor: string;
  challenges: string[];
  solutionOverview: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  dashboardImage: string;
  dashboardTitle: string;
  benefits: {
    stat: string;
    label: string;
    desc: string;
  }[];
  industries: string[];
  logo?: string;
}

const productsMap: Record<string, ProductData> = {
  'vericea-manufacturing': {
    id: 'vericea-manufacturing',
    name: 'Vericea Manufacturing',
    tagline: 'Real-Time Production & Defect Tracking',
    valueProp: 'Digitize manufacturing operations, monitor production in real time, and reduce defects with actionable insights across every process stage.',
    image: '/images/manufacturing_floor_1780850784796.png',
    icon: <Factory size={24} />,
    themeColor: 'var(--supporting)',
    challenges: [
      'Paper-based production registers that delay data availability and limit real-time decision-making.',
      'Lack of centralized visibility into order status, work-in-progress, and floor stock across production stages.',
      'Communication gaps between management, production, HR, and sales planning teams.',
      'Inability to quickly identify defects, rework, and rejections at the process level.'
    ],
    solutionOverview: 'VERICEA helps manufacturing organizations track production, defects, rework, and order progress through a centralized digital platform. It replaces manual registers with real-time visibility across the production floor, enabling faster corrective actions and better coordination between management, production, HR, and sales planning teams.',
    capabilities: [
      {
        title: 'Real-Time Production Data Capture',
        description: 'Capture production data at configurable intervals with process-wise and sub-process-wise monitoring across multiple stages.'
      },
      {
        title: 'Defect, Rework & Rejection Analysis',
        description: 'Track defects, rework, and rejections at the process level with work-in-progress and floor stock visibility.'
      },
      {
        title: 'Graphical Dashboards & Reports',
        description: 'Access graphical dashboards, decision-support reports, and mobile and web-based reporting with flexible workflows for different manufacturing domains.'
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Data Capture', description: 'Real-time production data is captured at configurable intervals from the shop floor.' },
      { step: '02', title: 'Order Tracking', description: 'Track order status across multiple stages with process-wise and sub-process-wise monitoring.' },
      { step: '03', title: 'Quality Analysis', description: 'Defects, rework, and rejections are analyzed with work-in-progress and floor stock visibility.' },
      { step: '04', title: 'Reporting & Insights', description: 'Graphical dashboards and decision-support reports are delivered via mobile and web-based interfaces.' }
    ],
    dashboardImage: '/images/vericea_dashboard_mockup.png',
    dashboardTitle: 'VERICEA Production Tracking Console',
    benefits: [
      { stat: '100%', label: 'Paper-Free Production Tracking', desc: 'Eliminates paper-based production registers with centralized, real-time data access across all teams.' },
      { stat: '40%', label: 'Faster Corrective Actions', desc: 'Improves accountability, reduces communication delays, and enables faster corrective actions across production.' },
      { stat: '360°', label: 'Cross-Team Visibility', desc: 'Supports management, production, HR, and sales planning with unified operational data and schedule tracking.' }
    ],
    industries: ['Textiles & Apparel', 'Automotive Assembly', 'Precision Engineering', 'General Manufacturing'],
    logo: '/images/Vericea.png'
  },
  'vericea-compliance': {
    id: 'vericea-compliance',
    name: 'Vericea Compliance',
    tagline: 'Audit Readiness & Compliance Governance Platform',
    valueProp: 'A compliance management platform that helps organizations track activities, manage evidence and maintain audit readiness.',
    image: '/images/quality_audit_1780850801169.png',
    icon: <ShieldCheck size={24} />,
    themeColor: 'var(--accent)',
    challenges: [
      'Chaotic tracking of national and international export audit guidelines.',
      'Fragmented evidence files stored across different folders and emails.',
      'Missed compliance deadlines leading to penalties and supplier suspensions.',
      'Inconsistent auditing formats between internal teams and external auditors.'
    ],
    solutionOverview: 'Vericea Compliance provides a structured digital locker and scheduling calendar. It breaks down standards into daily, weekly, and monthly action items, prompting floor managers to upload verifiable evidence. When third-party auditors arrive, all logs are index-ready and fully traceable.',
    capabilities: [
      {
        title: 'Audit Scheduling',
        description: 'Automate internal audits, safety inspections, and external reviews with recurring calendars.'
      },
      {
        title: 'Evidence Tracking',
        description: 'Securely lock PDFs, photos, and compliance forms in designated, tamper-proof folders.'
      },
      {
        title: 'Compliance Analytics',
        description: 'Monitor compliance score indicators by branch or department, calling out early warning areas.'
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Standards Intake', description: 'Define corporate compliance frameworks and international checklists.' },
      { step: '02', title: 'Task Allocation', description: 'Assign checklist points to specific safety officers and floor supervisors.' },
      { step: '03', title: 'Evidence Collection', description: 'Upload inspection sign-offs, photographs, and records directly.' },
      { step: '04', title: 'Audit Verification', description: 'Generate audit exports and read-only logins for certification teams.' }
    ],
    dashboardImage: '/images/product_tab_compliance_1780851018319.png',
    dashboardTitle: 'Vericea Compliance Audit Hub',
    benefits: [
      { stat: '100%', label: 'Audit Success', desc: 'Passing rate achieved by enterprise customers during external reviews.' },
      { stat: '0%', label: 'Late Penalties', desc: 'Complete elimination of late filings and certificate expiration lapses.' },
      { stat: '12x', label: 'Faster Retrieval', desc: 'Retrieve historical records instantly during surprise investigations.' }
    ],
    industries: ['Factories', 'Export Houses', 'Pharmaceuticals', 'Logistics Operations'],
    logo: '/images/Vericea.png'
  },
  'factsafe': {
    id: 'factsafe',
    name: 'FactSafe',
    tagline: 'Proactive Risk Assessment & Compliance',
    valueProp: 'Identify, analyze, prioritize, and monitor organizational risks through a centralized, data-driven platform.',
    image: '/images/safety_inspection_1780850817856.png',
    icon: <AlertTriangle size={24} />,
    themeColor: 'var(--supporting)',
    challenges: [
      'Reactive risk tracking that identifies threats only after incidents have already occurred.',
      'Lack of structured risk scoring and prioritization across the organization.',
      'Fragmented visibility into supplier-level and unit-level risk exposure.',
      'Manual compliance processes that increase audit preparation time and effort.'
    ],
    solutionOverview: 'FactSafe transforms risk management from reactive tracking to proactive decision-making by providing real-time visibility, structured assessments, and compliance-ready monitoring. It centralizes the risk register, enables scoring and prioritization, and delivers consolidated dashboards across multi-level organizational structures.',
    capabilities: [
      {
        title: 'Centralized Risk Register',
        description: 'Maintain a single, structured register of all organizational risks with scoring, prioritization, and real-time monitoring dashboards.'
      },
      {
        title: 'Audit & Compliance Readiness',
        description: 'Multi-level organizational assessments with built-in audit trails, compliance tracking, and scalable multi-country support.'
      },
      {
        title: 'Supplier & Unit-Level Tracking',
        description: 'Track risks at the supplier and business unit level with consolidated management dashboards for enhanced visibility across teams.'
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Risk Identification', description: 'Log and categorize risks across departments, suppliers, and operational units in a centralized register.' },
      { step: '02', title: 'Scoring & Prioritization', description: 'Apply risk scoring frameworks to assess likelihood and impact, enabling structured prioritization.' },
      { step: '03', title: 'Monitoring & Dashboards', description: 'Track risk status in real time through consolidated dashboards with multi-level organizational views.' },
      { step: '04', title: 'Audit & Compliance', description: 'Maintain audit-ready records and compliance documentation across scalable, multi-country structures.' }
    ],
    dashboardImage: '/images/industrial_control_room_1780849774868.png',
    dashboardTitle: 'FactSafe Risk Assessment Dashboard',
    benefits: [
      { stat: '70%', label: 'Early Risk Detection', desc: 'Proactive identification of risks before they escalate, reducing compliance effort and improving operational resilience.' },
      { stat: '100%', label: 'Better Accountability', desc: 'Complete visibility across teams and suppliers with structured assessments for faster, more confident decisions.' },
      { stat: '360°', label: 'Organization-Wide Visibility', desc: 'Enhanced visibility for corporates, management, risk and compliance teams, operations, quality, and HR evaluation teams.' }
    ],
    industries: ['Corporates & Brands', 'Risk & Compliance Teams', 'Operations & Quality', 'HR & Performance Evaluation'],
    logo: '/images/Fact_safe.png'
  },
  'courier-cost-management': {
    id: 'courier-cost-management',
    name: 'Courier Cost Management System',
    tagline: 'Smart Courier Cost Optimization',
    valueProp: 'Automate courier selection, control shipping costs, and gain complete visibility into courier operations across departments and destinations.',
    image: '/images/logistics_terminal_1780850837146.png',
    icon: <Truck size={24} />,
    themeColor: 'var(--accent)',
    challenges: [
      'No automated mechanism to recommend the best-rate courier partner for each shipment.',
      'Hidden invoicing differences between booked and billed amounts going undetected.',
      'Lack of department-wise, customer-wise, and destination-wise analytics for courier spending.',
      'Manual reconciliation of courier invoices consuming significant operational bandwidth.'
    ],
    solutionOverview: 'Designed for enterprise organizations handling high courier volumes, this solution helps select the best-rate courier partner, monitor expenses, and identify billing discrepancies. It provides department-wise and customer-wise analytics, destination-wise and courier-partner-wise analysis, with multi-country and multi-currency support.',
    capabilities: [
      {
        title: 'Best-Rate Courier Recommendations',
        description: 'Automated recommendations for the best-rate courier partner with approval workflows for non-recommended selections.'
      },
      {
        title: 'Invoice vs. Booking Verification',
        description: 'Compare invoice amounts against booking amounts to identify hidden differences and reduce manual reconciliation effort.'
      },
      {
        title: 'Multi-Dimensional Analytics',
        description: 'Department-wise, customer-wise, destination-wise, and courier-partner-wise analysis with detailed comparison and utilization reports.'
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Courier Selection', description: 'System recommends the best-rate courier partner based on destination, weight, and service requirements.' },
      { step: '02', title: 'Booking & Approval', description: 'Approval workflows manage non-recommended selections and capture booking details for reconciliation.' },
      { step: '03', title: 'Invoice Verification', description: 'Booked amounts are matched against invoiced amounts to detect billing discrepancies automatically.' },
      { step: '04', title: 'Analytics & Reporting', description: 'Department-wise, customer-wise, and destination-wise reports provide actionable insights for vendor decisions.' }
    ],
    dashboardImage: '/images/logistics_terminal_1780850837146.png', // Fallback to professional image
    dashboardTitle: 'Courier Cost Optimization Portal',
    benefits: [
      { stat: '60%', label: 'Reduced Booking Time', desc: 'Significantly reduces courier booking time with automated best-rate recommendations and streamlined approval workflows.' },
      { stat: '100%', label: 'Invoice Transparency', desc: 'Identifies hidden invoicing differences and improves negotiation leverage with courier partners.' },
      { stat: '360°', label: 'Courier Spend Visibility', desc: 'Clear visibility into courier spending across departments, customers, and destinations for long-term vendor decisions.' }
    ],
    industries: ['E-Commerce & Retail', 'Apparel Export Houses', 'Logistics & Distribution', 'Manufacturing & Supply Chain'],
    logo: '/images/Courier Cost Optimizer.png'
  },
  'family-tree-platform': {
    id: 'family-tree-platform',
    name: 'Family Tree Platform',
    tagline: 'Relationship Mapping & Structured Data Intelligence',
    valueProp: 'A multilingual platform designed for relationship management and family tree visualization.',
    image: '/images/family_archives_1780850863160.png',
    icon: <Network size={24} />,
    themeColor: 'var(--supporting)',
    challenges: [
      'Unstructured demographic archives with broken generation links.',
      'Poor rendering speed when handling large, complex graph networks.',
      'Language barriers in managing records across regional branches.',
      'Inadequate data privacy controls for sensitive relationship profiles.'
    ],
    solutionOverview: 'The Family Tree Platform is built on a highly optimized graph structure database. It allows research teams and demographic organizations to catalog individuals, trace lineage patterns, and view clean relational structures in multiple regional languages with rigorous privacy checks.',
    capabilities: [
      {
        title: 'Relationship Visualization',
        description: 'Render complex family nodes and generational grids smoothly inside web interfaces.'
      },
      {
        title: 'Hierarchical Mapping',
        description: 'Create multi-tiered linkage diagrams mapping parent-child relationships.'
      },
      {
        title: 'Data Intelligence',
        description: 'Export demographic insights, lineage indexes, and generation gap markers.'
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Profile Setup', description: 'Log demographic details, historical parameters, and documents.' },
      { step: '02', title: 'Link Mapping', description: 'Establish relational links (parentage, marriage, branches) between profiles.' },
      { step: '03', title: 'Graph Engine Render', description: 'Database computes network links and outputs high-performance charts.' },
      { step: '04', title: 'Privacy Configuration', description: 'Set read/write permissions and branch visibility keys.' }
    ],
    dashboardImage: '/images/family_archives_1780850863160.png',
    dashboardTitle: 'Dynamic Relational Database Network',
    benefits: [
      { stat: '100k+', label: 'Nodes Handled', desc: 'Platform supports large relation graphs without system lag.' },
      { stat: '100%', label: 'Multilingual', desc: 'Allows users to toggle view terms and profile data in 6 languages.' },
      { stat: 'AES', label: 'Encrypted Locker', desc: 'Strong security standards guarding personal data privacy.' }
    ],
    industries: ['Demographic Research', 'Community Governance', 'NGOs', 'Genealogical Archiving']
  }
};

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);

  // Retrieve current product details or fallback
  const product = productId ? productsMap[productId] : null;

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="section section-dark" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--background)', color: 'var(--text-main)' }}>
        <AlertTriangle size={48} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
        <h2>Product Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The product path you requested does not exist.</p>
        <button onClick={() => navigate('/products')} className="btn btn-primary">
          Back to Products Page
        </button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    }
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  /* resolveTint removed (unused) */


  // Get the other 4 platforms for cross-navigation
  const otherPlatforms = Object.values(productsMap).filter(p => p.id !== product.id).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ backgroundColor: 'var(--background)', color: 'var(--text-main)', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* ── TOP NAVIGATION BAR ── */}
      <div className="container" style={{ paddingTop: '100px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Back to Products */}
          <button 
            onClick={handleBackToProducts}
            style={{
              background: 'rgba(var(--primary-rgb), 0.03)',
              color: 'var(--text-muted)',
              fontSize: '13.5px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '8px',
              border: '1px solid rgba(var(--primary-rgb), 0.07)',
              transition: 'all 0.25s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(var(--primary-rgb), 0.07)';
              e.currentTarget.style.color = 'var(--text-main)';
              e.currentTarget.style.borderColor = 'rgba(var(--primary-rgb),0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(var(--primary-rgb), 0.03)';
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(var(--primary-rgb), 0.07)';
            }}
          >
            <ArrowLeft size={15} />
            All Products
          </button>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
            <span>Home</span>
            <ChevronRight size={12} />
            <span>Products</span>
            <ChevronRight size={12} />
            <span style={{ color: 'var(--accent)', fontWeight: '600' }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* --- SECTION 1: HERO BANNER --- */}
      <section 
        className="section"
        style={{ 
          padding: '40px 0 100px 0', 
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0A0F1C'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 30%, rgba(200, 162, 118, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '6px 14px', 
                  background: 'rgba(255, 255, 255, 0.04)', 
                  borderRadius: '20px', 
                  fontSize: '12.5px', 
                  color: product.themeColor, 
                  fontWeight: '700',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  width: 'fit-content'
                }}
              >
                <Sparkles size={14} />
                <span>Proprietary Software</span>
              </div>
              {product.logo && (
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <img 
                    src={product.logo} 
                    alt={`${product.name} Logo`} 
                    style={{ 
                      height: product.id.includes('courier') ? '80px' : '48px', 
                      width: 'auto', 
                      objectFit: 'contain' 
                    }} 
                  />
                </div>
              )}
              <h1 style={{ fontSize: '48px', lineHeight: '1.15', fontWeight: '800', color: '#ffffff', letterSpacing: '-1.5px', margin: 0, fontFamily: 'var(--font-headings)' }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '18px', color: '#E5E7EB', lineHeight: '1.5', fontWeight: '600' }}>
                {product.tagline}
              </p>
              <p style={{ fontSize: '15px', color: '#9CA3AF', lineHeight: '1.6' }}>
                {product.valueProp}
              </p>
              
              <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
                <button 
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                  className="btn btn-cta"
                  style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Request Platform Demo
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(10, 15, 28, 0.2), rgba(10, 15, 28, 0.5))', zIndex: 1 }}></div>
              <img 
                src={product.image} 
                alt={`${product.name} Cover`} 
                style={{ width: '100%', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BUSINESS CHALLENGES --- */}
      <section className="section" style={{ backgroundColor: '#111827', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '60px' }}>
            <motion.div
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
            >
              <span style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>
                Operational Barriers
              </span>
              <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-headings)', margin: '0 0 20px 0' }}>
                Business Challenges Addressed
              </h2>
              <p style={{ fontSize: '15px', color: '#9CA3AF', lineHeight: '1.6' }}>
                Industrial and commercial organizations often face major operational inefficiencies due to outdated manual logs, spreadsheets, and lack of real-time visibility. {product.name} directly addresses these operational hurdles.
              </p>
            </motion.div>

            <motion.div
              variants={{
                initial: {},
                whileInView: { transition: { staggerChildren: 0.1 } }
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {product.challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                  }}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '18px 20px',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }}>
                    <AlertTriangle size={18} />
                  </div>
                  <span style={{ fontSize: '14.5px', color: '#E5E7EB', lineHeight: '1.5' }}>{challenge}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SOLUTION OVERVIEW --- */}
      <section className="section" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={scrollReveal.viewport}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}
          >
            <span style={{ color: product.themeColor, fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              System Architecture
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-headings)', margin: 0 }}>
              How the Platform Works
            </h2>
            <p style={{ fontSize: '16px', color: '#E5E7EB', lineHeight: '1.7', maxWidth: '780px', margin: 0 }}>
              {product.solutionOverview}
            </p>
            <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--accent)', marginTop: '10px' }}></div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: KEY CAPABILITIES --- */}
      <section className="section" style={{ backgroundColor: '#111827', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>System Features</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Key Platform Capabilities</h2>
            <p className="section-desc" style={{ color: '#9CA3AF' }}>Built with features tailored to automate checks, report status, and secure transaction history.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {product.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className="glass-card"
                whileHover={{ y: -6, borderColor: 'rgba(200, 162, 118, 0.3)' }}
                style={{
                  backgroundColor: '#0A0F1C',
                  border: '1px solid rgba(200, 162, 118, 0.12)',
                  padding: '32px 24px',
                  borderRadius: '16px'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(200, 162, 118, 0.08)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {idx === 0 ? <Cpu size={22} /> : idx === 1 ? <Layers size={22} /> : <TrendingUp size={22} />}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>{cap.title}</h3>
                <p style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: '1.6', margin: 0 }}>{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: PROCESS WORKFLOW --- */}
      <section className="section" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: product.themeColor }}>Implementation Roadmap</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Operational Process Workflow</h2>
            <p className="section-desc" style={{ color: '#9CA3AF' }}>How the system integrates with daily operations and transfers data logs to dashboard monitors.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', position: 'relative' }}>
            {product.workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                style={{
                  backgroundColor: '#111827',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  right: '-10px', 
                  fontSize: '64px', 
                  fontWeight: '900', 
                  color: 'rgba(255,255,255,0.02)',
                  lineHeight: 1
                }}>
                  {step.step}
                </span>

                <div style={{ 
                  fontSize: '13px', 
                  fontWeight: '800', 
                  color: 'var(--accent)', 
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>Step {step.step}</span>
                  {idx < product.workflowSteps.length - 1 && <ChevronRight size={14} className="workflow-arrow" style={{ opacity: 0.5 }} />}
                </div>

                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: 0 }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5', margin: 0, marginTop: '8px' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: DASHBOARDS & ANALYTICS --- */}
      <section className="section" style={{ backgroundColor: '#111827', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>System Visuals</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Dashboards & Live Analytics</h2>
            <p className="section-desc" style={{ color: '#9CA3AF' }}>Simulated representation of the production interface showing widgets, filters, and transaction tables.</p>
          </div>

          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={scrollReveal.viewport}
            style={{
              backgroundColor: '#0A0F1C',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden',
              maxWidth: '840px',
              margin: '0 auto'
            }}
          >
            {/* Browser Header */}
            <div style={{
              height: '36px',
              background: '#111827',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              gap: '6px'
            }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></span>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginLeft: '12px', fontWeight: '500' }}>{product.id}.cea-infotech.com/console</span>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img 
                src={product.dashboardImage} 
                alt={product.dashboardTitle} 
                style={{ width: '100%', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 7: BUSINESS BENEFITS --- */}
      <section className="section" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: product.themeColor }}>System ROI</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Demonstrated Business Benefits</h2>
            <p className="section-desc" style={{ color: '#9CA3AF' }}>Operational scorecards showing average improvement ratios across deployed enterprise installations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {product.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                style={{
                  backgroundColor: '#111827',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  padding: '36px 28px',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '44px', fontWeight: '900', color: 'var(--accent)', fontFamily: 'var(--font-headings)', marginBottom: '8px' }}>
                  {benefit.stat}
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: 0 }}>
                  {benefit.label}
                </h4>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5', margin: 0, marginTop: '8px' }}>
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: INDUSTRIES SERVED --- */}
      <section className="section" style={{ backgroundColor: '#111827', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Target Verticals</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Industries Served</h2>
            <p className="section-desc" style={{ color: '#9CA3AF' }}>Customized configuration templates are available for these primary sectors.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '640px', margin: '0 auto' }}>
            {product.industries.map((ind, idx) => (
              <span 
                key={idx}
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#ffffff',
                  backgroundColor: '#0A0F1C',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- CROSS-PRODUCT NAVIGATION ── */}
      <section style={{ backgroundColor: '#0A0F1C', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container">
          <div style={{ marginBottom: '28px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#C8A276', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Explore More Platforms</span>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#FFFFFF', margin: '6px 0 0 0', fontFamily: 'var(--font-headings)' }}>Other CEA Platforms</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {otherPlatforms.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -4, borderColor: 'rgba(200,162,118,0.35)', boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}
                onClick={() => navigate(`/products/${p.id}`)}
                style={{
                  backgroundColor: '#111827',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  backgroundColor: 'rgba(200,162,118,0.08)',
                  marginBottom: '4px',
                  overflow: 'hidden'
                }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>{p.name}</h4>
                <p style={{ fontSize: '11.5px', color: '#6B7280', margin: 0, lineHeight: 1.4 }}>{p.tagline}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C8A276', fontSize: '11px', fontWeight: '700', marginTop: '4px' }}>
                  Explore <ArrowRight size={11} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 9: CALL TO ACTION (INQUIRY FORM) --- */}
      <section ref={formRef} className="section" style={{ backgroundColor: '#0A0F1C', background: 'radial-gradient(circle at bottom, rgba(200, 162, 118, 0.04) 0%, transparent 50%)' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-title-wrapper" style={{ marginBottom: '32px' }}>
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Partner With Us</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Schedule a Platform Demo</h2>
            <p className="section-desc" style={{ color: '#9CA3AF' }}>Discuss deployment sizing, timeline setups, or request read-only access to our demo databases.</p>
          </div>

          <div 
            style={{
              backgroundColor: 'rgba(17, 34, 64, 0.85)',
              border: '1px solid rgba(200, 162, 118, 0.18)',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: 'var(--shadow-xl)'
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
                <h3 style={{ fontSize: '22px', marginBottom: '8px', color: '#ffffff', fontWeight: '800' }}>Inquiry Filed Successfully</h3>
                <p style={{ color: '#9CA3AF', fontSize: '14.5px', marginBottom: '24px', maxWidth: '440px', margin: '0 auto 24px auto' }}>
                  Thank you. Your demo request for **{product.name}** has been registered. An engineer will coordinate database parameters with you.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary btn-sm" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff' }}>
                  Submit Another Request
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
                      backgroundColor: 'rgba(10, 15, 28, 0.4)',
                      color: '#ffffff',
                      fontSize: '14.5px',
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
                        backgroundColor: 'rgba(10, 15, 28, 0.4)',
                        color: '#ffffff',
                        fontSize: '14.5px',
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
                        backgroundColor: 'rgba(10, 15, 28, 0.4)',
                        color: '#ffffff',
                        fontSize: '14.5px',
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

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label" style={{ fontSize: '13px', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#ffffff' }} htmlFor="message">Deployment Sizing Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(10, 15, 28, 0.4)',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical'
                    }}
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`Tell us about your requirements for ${product.name}...`}
                  ></textarea>
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-cta" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#0F172A' }}>
                  Submit Demo Request
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
