import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Building
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero contact-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="inner-hero-title">Start Your Modernization Journey</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            Reach out to our Bangalore office to request a demo or schedule a technical advisory consultation.
          </p>
        </div>
      </section>

      {/* --- CONTACT DETAIL & FORM SECTION --- */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            
            {/* Column 1: Contact details cards + Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '40px', height: '40px', marginBottom: '16px', color: 'var(--secondary)' }}><Phone size={20} /></div>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Call Us</h4>
                  <a href="tel:+919980138172" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>+91 9980138172</a>
                </div>

                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '40px', height: '40px', marginBottom: '16px', color: 'var(--secondary)' }}><Mail size={20} /></div>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Email Us</h4>
                  <a href="mailto:manohar.md@ceainfotech.com" style={{ fontSize: '14px', color: 'var(--text-muted)', wordBreak: 'break-all' }}>manohar.md@ceainfotech.com</a>
                </div>

                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gridColumn: 'span 2' }}>
                  <div className="card-icon" style={{ width: '40px', height: '40px', marginBottom: '16px', color: 'var(--secondary)' }}><MapPin size={20} /></div>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Office Address</h4>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    B-205 Century Marvel Apartments, Kempapura, Hebbal, Bangalore - 560024, India
                  </span>
                </div>

                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '40px', height: '40px', marginBottom: '16px', color: 'var(--secondary)' }}><Clock size={20} /></div>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Business Hours</h4>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Mon - Fri: 9:00 AM - 6:00 PM (IST)</span>
                </div>

                <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '40px', height: '40px', marginBottom: '16px', color: 'var(--secondary)' }}><Building size={20} /></div>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Corporate Registry</h4>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Established June 2015</span>
                </div>
              </div>

              {/* Real Map visualizer */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)', height: '320px' }}>
                <iframe
                  title="Bangalore Office Location Map"
                  src="https://maps.google.com/maps?q=Century%20Marvel%20Apartments,%20Kempapura,%20Hebbal,%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div className="contact-form-card">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(var(--success-rgb), 0.1)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--primary)' }}>Message Sent Successfully</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>
                    Thank you. We have received your inquiry. A representative from our Bangalore headquarters will respond within one business day.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--primary)' }}>Send Us a Message</h3>

                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
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
                        placeholder="john@company.com"
                      />
                      {errors.email && <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="form-control"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                    </div>
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
                      placeholder="Organization name"
                    />
                    {errors.company && <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message details</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-control"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please details what operational systems, ERP platforms, or compliance monitoring challenges you would like to resolve..."
                    ></textarea>
                    {errors.message && <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-cta w-full" style={{ width: '100%', marginTop: '8px' }}>
                    Submit Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
