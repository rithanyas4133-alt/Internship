import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Send, 
  CheckCircle2,
  Factory,
  ShieldCheck,
  AlertTriangle,
  Truck
} from 'lucide-react';

export default function Products() {
  const inquiryRef = useRef<HTMLDivElement>(null);
  
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

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

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
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  const scrollToInquiry = (productName: string) => {
    setFormData(prev => ({ ...prev, product: productName }));
    inquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Our Suite</span>
          <h1 className="inner-hero-title">Innovative Products Built For Operational Excellence</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            Explore our modular tracking, compliance, risk mitigation, and logistics software solutions.
          </p>
        </div>
      </section>

      {/* --- PRODUCT 1: VERICEA Manufacturing --- */}
      <section className="section">
        <div className="container">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid-2"
          >
            <div>
              <span className="product-tagline">Track. Measure. Improve.</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
                <Factory size={28} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <h2 style={{ fontSize: '32px', margin: 0 }}>VERICEA Manufacturing</h2>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>
                A premium floor-execution and tracking tool designed for live operations. Monitor work-in-progress (WIP), identify idle machine stages, and measure Overall Equipment Effectiveness (OEE) in real-time.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {['Production Tracking & Floor Routing', 'Efficiency Monitoring & Idle-time logs', 'WIP Tracking across assembly lines', 'Performance Analytics & Productivity reports'].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollToInquiry('VERICEA Manufacturing')} className="btn btn-primary">
                Inquire About VERICEA Manufacturing
              </button>
            </div>

            {/* Visual Panel: WIP Dashboard mockup */}
            <div style={{ backgroundColor: '#030d1a', border: '1px solid rgba(0, 180, 216, 0.15)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.8)' }}>VERICEA Mfg: Live Line Status</span>
                <span style={{ fontSize: '10px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></span> Active
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Line 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
                    <span>Assembly Line A - Yield</span>
                    <span>94%</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '94%', height: '100%', backgroundColor: 'var(--secondary)' }}></div>
                  </div>
                </div>
                {/* Line 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
                    <span>Packaging Line B - Yield</span>
                    <span>81%</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '81%', height: '100%', backgroundColor: 'var(--accent)' }}></div>
                  </div>
                </div>
                {/* Line 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
                    <span>Finishing Line C - Yield</span>
                    <span>99%</span>
                  </div>
                  <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '99%', height: '100%', backgroundColor: '#10b981' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRODUCT 2: VERICEA Compliance --- */}
      <section className="section section-alt">
        <div className="container">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid-2" 
            style={{ gridAutoFlow: 'dense' }}
          >
            {/* Visual Panel on Left (so it alternates) */}
            <div style={{ backgroundColor: '#030d1a', border: '1px solid rgba(0, 180, 216, 0.15)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.8)' }}>VERICEA Compliance: Audit Score</span>
                <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: '700' }}>ISO 9001</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', border: '8px solid rgba(255,255,255,0.05)', borderTopColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px', fontWeight: '700' }}>
                  98.2%
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  <p style={{ color: '#fff', fontWeight: '600', marginBottom: '4px' }}>Audit Ready State</p>
                  <p>All safety and quality certificates signed. Evidences locked.</p>
                </div>
              </div>
            </div>

            <div>
              <span className="product-tagline">Create. Maintain. Monitor.</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
                <ShieldCheck size={28} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <h2 style={{ fontSize: '32px', margin: 0 }}>VERICEA Compliance</h2>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>
                An enterprise audit and evidence locker platform. Create compliance plans, schedule standard inspections, log inspector feedback, and keep checklists ready for official ISO or environmental validation audits.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {['Audit Checklist Orchestration', 'Real-Time Compliance Monitoring Dashboard', 'Evidence Locker & Attachment log', 'Analytics and CAPA feedback logs'].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollToInquiry('VERICEA Compliance')} className="btn btn-primary">
                Inquire About VERICEA Compliance
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRODUCT 3: FactSafe --- */}
      <section className="section">
        <div className="container">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid-2"
          >
            <div>
              <span className="product-tagline">Identify. Assess. Mitigate.</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
                <AlertTriangle size={28} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <h2 style={{ fontSize: '32px', margin: 0 }}>FactSafe</h2>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>
                A high-fidelity risk mapping platform built to identify structural, environmental, and workflow vulnerabilities before they halt production. Classify hazard severity and establish automated escalation routes.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {['Interactive Risk Assessment Matrices', 'Hazard and vulnerability classification', 'Emergency notification protocols', 'Mitigation tracking logs'].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollToInquiry('FactSafe')} className="btn btn-primary">
                Inquire About FactSafe
              </button>
            </div>

            {/* Visual Panel: Threat Score Matrix mockup */}
            <div style={{ backgroundColor: '#030d1a', border: '1px solid rgba(0, 180, 216, 0.15)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.8)' }}>FactSafe: Incident Map</span>
                <span style={{ fontSize: '10px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span> 1 Alert Open
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                <div style={{ padding: '8px 12px', backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '6px', flexGrow: 1 }}>
                  <p style={{ color: '#ef4444', fontWeight: '700' }}>Critical: Boiler Overheat</p>
                  <p style={{ fontSize: '10px', marginTop: '2px' }}>Line 2 Temp Triggered Alert. Escalated to Operator.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRODUCT 4: Courier Cost Management --- */}
      <section className="section section-alt">
        <div className="container">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid-2" 
            style={{ gridAutoFlow: 'dense' }}
          >
            {/* Visual Panel on Left */}
            <div style={{ backgroundColor: '#030d1a', border: '1px solid rgba(0, 180, 216, 0.15)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(255,255,255,0.8)' }}>Logistics Audit Savings</span>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700' }}>14.8% Saved</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Total Invoices Audited</span>
                  <span style={{ color: '#fff', fontWeight: '600' }}>4,280</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Billing Overcharges Flagged</span>
                  <span style={{ color: 'var(--cta)', fontWeight: '600' }}>$12,450</span>
                </div>
              </div>
            </div>

            <div>
              <span className="product-tagline">Optimize Logistics Costs Efficiently</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
                <Truck size={28} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <h2 style={{ fontSize: '32px', margin: 0 }}>Courier Cost Management</h2>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>
                A financial control module designed to audit shipping and logistics bills automatically. Validate courier rate-cards, identify erroneous weight surcharges, and reconcile invoices to avoid billing overcharges.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {['Automatic Rate Card Verification', 'Weight Discrepancy Flagging', 'Reconciliation Reports', 'Detailed Savings Analytics'].map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollToInquiry('Courier Cost Management')} className="btn btn-primary">
                Inquire About Courier Cost Management
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRODUCT INQUIRY FORM SECTION --- */}
      <section ref={inquiryRef} className="section" id="inquiry-form" style={{ background: 'radial-gradient(circle at bottom, rgba(0, 180, 216, 0.05) 0%, transparent 40%)' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <span className="section-subtitle">Request Information</span>
            <h2 className="section-title">Product Inquiry</h2>
            <p className="section-desc">Select a product and tell us about your operational challenges.</p>
          </div>

          <div className="contact-form-card">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '24px 0' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(16,185,129,0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Inquiry Submitted Successfully</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>
                  Thank you for contacting us. A product consultant from our Bangalore office will email you shortly.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary btn-sm">
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                    />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      className="form-control"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                    />
                    {errors.company && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="product">Product of Interest</label>
                  <select 
                    id="product" 
                    name="product" 
                    className="form-control"
                    value={formData.product}
                    onChange={handleInputChange}
                  >
                    <option value="VERICEA Manufacturing">VERICEA Manufacturing</option>
                    <option value="VERICEA Compliance">VERICEA Compliance</option>
                    <option value="FactSafe">FactSafe (Risk Platform)</option>
                    <option value="Courier Cost Management">Courier Cost Management</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">How can we help you?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your production lines, sizing requirements, or compliance issues..."
                  ></textarea>
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-cta w-full" style={{ width: '100%', marginTop: '12px' }}>
                  Send Inquiry
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
