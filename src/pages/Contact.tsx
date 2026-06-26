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
      className="contact-page-bg"
      style={{ color: 'var(--text-main)' }}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero contact-hero surface-royal" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.18)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="inner-hero-title">Start Your Modernization Journey</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            Reach out to our Bangalore office to request a demo or schedule a technical advisory consultation.
          </p>
        </div>
      </section>

      {/* --- CONTACT DETAIL & FORM SECTION --- */}
      <section className="section surface-matte contact-section-texture">
        <div className="container">

          {/*
            ┌─────────────────────────────────────────────────────────────┐
            │  Two-column CSS Grid — 1fr 1fr, gap 40px, align-items:start │
            │  Both columns start at the same vertical baseline (row 1).  │
            └─────────────────────────────────────────────────────────────┘
          */}
          <div className="contact-layout-grid">

            {/* ── LEFT COLUMN: info cards + map ── */}
            <div className="contact-left-col">

              {/* 2×2 card grid — fixed columns, consistent gap */}
              <div className="contact-info-grid">

                {/* Card 1 – Call Us */}
                <div className="glass-card contact-info-card">
                  <div className="card-icon contact-card-icon">
                    <Phone size={18} />
                  </div>
                  <h4 className="contact-card-title">Call Us</h4>
                  <a href="tel:+919980138172" className="contact-card-value">
                    +91 9980138172
                  </a>
                </div>

                {/* Card 2 – Email Us */}
                <div className="glass-card contact-info-card">
                  <div className="card-icon contact-card-icon">
                    <Mail size={18} />
                  </div>
                  <h4 className="contact-card-title">Email Us</h4>
                  <a
                    href="mailto:manohar.md@ceainfotech.com"
                    className="contact-card-value"
                    style={{ wordBreak: 'break-all' }}
                  >
                    manohar.md@ceainfotech.com
                  </a>
                </div>

                {/* Card 3 – Business Hours */}
                <div className="glass-card contact-info-card">
                  <div className="card-icon contact-card-icon">
                    <Clock size={18} />
                  </div>
                  <h4 className="contact-card-title">Business Hours</h4>
                  <span className="contact-card-value">
                    Mon – Fri&nbsp;&nbsp;9:00 AM – 6:00 PM (IST)
                  </span>
                </div>

                {/* Card 4 – Corporate Registry */}
                <div className="glass-card contact-info-card">
                  <div className="card-icon contact-card-icon">
                    <Building size={18} />
                  </div>
                  <h4 className="contact-card-title">Corporate Registry</h4>
                  <span className="contact-card-value">
                    Established June&nbsp;2015
                  </span>
                </div>

                {/* Card 5 – Office Address (full-width span) */}
                <div className="glass-card contact-info-card contact-info-card--wide">
                  <div className="card-icon contact-card-icon">
                    <MapPin size={18} />
                  </div>
                  <h4 className="contact-card-title">Office Address</h4>
                  <span className="contact-card-value" style={{ lineHeight: '1.6' }}>
                    B-205 Century Marvel Apartments, Kempapura,<br />
                    Hebbal, Bangalore – 560024, India
                  </span>
                </div>
              </div>

              {/* Embedded Map — same width as card grid above */}
              <div className="contact-map-wrapper">
                <iframe
                  title="Bangalore Office Location Map"
                  src="https://maps.google.com/maps?q=Century%20Marvel%20Apartments,%20Kempapura,%20Hebbal,%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* ── RIGHT COLUMN: Contact Form ── */}
            <div className="contact-right-col">
              <div className="contact-form-card contact-form-card--full">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      height: '100%',
                      padding: '40px 0'
                    }}
                  >
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(16, 185, 129, 0.12)',
                        border: '1.5px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--success)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px auto'
                      }}
                    >
                      <Check size={32} />
                    </div>
                    <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Message Sent Successfully</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '380px', marginBottom: '28px' }}>
                      Thank you. We have received your inquiry. A representative from our Bangalore
                      headquarters will respond within one business day.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                    {/* Form header */}
                    <div style={{ marginBottom: '28px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          color: 'var(--accent)',
                          marginBottom: '8px'
                        }}
                      >
                        Reach Out
                      </span>
                      <h3 style={{ fontSize: '22px', margin: 0 }}>Send Us a Message</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '6px' }}>
                        All fields are required. We respond within 1 business day.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                      />
                      {errors.name && (
                        <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email + Phone side-by-side */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phone && (
                          <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">Company Name</label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        className="form-control"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Organization name"
                      />
                      {errors.company && (
                        <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                          {errors.company}
                        </span>
                      )}
                    </div>

                    {/* Message — flex-grow fills remaining height */}
                    <div className="form-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <label className="form-label" htmlFor="contact-message">Message Details</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-control"
                        style={{ flex: 1, resize: 'none', minHeight: '120px' }}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe what operational systems, ERP platforms, or compliance monitoring challenges you would like to resolve..."
                      />
                      {errors.message && (
                        <span style={{ color: 'var(--danger)', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-cta"
                      style={{ width: '100%', marginTop: '8px', justifyContent: 'center' }}
                    >
                      Submit Message
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
