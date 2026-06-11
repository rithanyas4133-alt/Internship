import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Target,
  Lightbulb,
  MapPin,
  Calendar,
  CheckCircle,
  Settings,
  Layers,
  Users,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Award,
  Globe,
  Briefcase,
  Building2,
  HardHat,
  Wrench,
  Shirt,
  Home,
  ShoppingCart,
  DollarSign,
  Heart,
  ClipboardCheck,
  Handshake,
  Rocket,
  Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const coreStrengths = [
    { name: 'Enterprise Resource Planning', icon: <Settings size={22} /> },
    { name: 'Production Tracking', icon: <TrendingUp size={22} /> },
    { name: 'Compliance Tracking', icon: <ShieldCheck size={22} /> },
    { name: 'HRMS & Payroll', icon: <Users size={22} /> },
    { name: 'Retail Solutions', icon: <ShoppingCart size={22} /> },
    { name: 'Financial Accounting', icon: <DollarSign size={22} /> },
    { name: 'Property Management', icon: <Building2 size={22} /> },
    { name: 'NGO Solutions', icon: <Heart size={22} /> },
    { name: 'Custom Enterprise Applications', icon: <Cpu size={22} /> }
  ];

  const domains = [
    { name: 'Manufacturing', icon: <HardHat size={20} />, color: 'di-blue' },
    { name: 'Construction', icon: <Building2 size={20} />, color: 'di-teal' },
    { name: 'Engineering', icon: <Wrench size={20} />, color: 'di-amber' },
    { name: 'Apparel', icon: <Shirt size={20} />, color: 'di-blue' },
    { name: 'Home Textiles', icon: <Home size={20} />, color: 'di-teal' },
    { name: 'Retail', icon: <ShoppingCart size={20} />, color: 'di-amber' },
    { name: 'Finance', icon: <DollarSign size={20} />, color: 'di-blue' },
    { name: 'NGO Operations', icon: <Heart size={20} />, color: 'di-teal' },
    { name: 'Compliance Management', icon: <ClipboardCheck size={20} />, color: 'di-amber' }
  ];

  const countries = [
    'India', 'Singapore', 'Indonesia', 'Bangladesh', 'Nigeria',
    'UAE', 'Nepal', 'Kenya', 'Iran', 'USA'
  ];

  const timeline = [
    { year: '2015', title: 'CEA Infotech Founded' },
    { year: '2016–2020', title: 'Product & Service Expansion' },
    { year: '2021–2024', title: 'Growth Across Industries & Global Markets' },
    { year: 'Present', title: 'Enterprise Solutions & Product Innovation' }
  ];

  const whyChoose = [
    { title: '35+ Years Leadership', desc: 'Decades of industry expertise driving strategic technology decisions.', icon: <Award size={24} />, color: 'wi-amber' },
    { title: '11+ Industry Domains', desc: 'Deep domain knowledge across manufacturing, finance, retail and more.', icon: <Layers size={24} />, color: 'wi-blue' },
    { title: 'Global Delivery', desc: 'Proven track record of successful project delivery across 10+ countries.', icon: <Globe size={24} />, color: 'wi-teal' },
    { title: 'Custom Enterprise Solutions', desc: 'Tailored software architectures built for specific business requirements.', icon: <Briefcase size={24} />, color: 'wi-amber' },
    { title: 'Long-Term Relationships', desc: 'Trusted partnerships built on reliability, transparency and results.', icon: <Handshake size={24} />, color: 'wi-blue' },
    { title: 'Product Innovation', desc: 'Continuous R&D delivering scalable products for modern enterprises.', icon: <Rocket size={24} />, color: 'wi-teal' }
  ];

  const founderHighlights = [
    '35+ Years IT Experience',
    'ERP Specialist',
    'CRM & SCM Expertise',
    'Financial Systems',
    'Global Project Delivery'
  ];

  return (
    <div>
      {/* ===== SECTION 1: HERO BANNER ===== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Professional corporate office environment"
            loading="eager"
          />
        </div>
        <div className="about-hero-overlay" />
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="section-subtitle"
              style={{ color: 'var(--cta)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              About CEA Infotech
            </motion.span>
            <h1>Empowering Businesses Through Technology Excellence</h1>
            <p>
              Over a decade of delivering enterprise software solutions, manufacturing systems and business transformation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: WHO WE ARE ===== */}
      <section className="about-who-section">
        <div className="container">
          <div className="about-who-grid">
            <motion.div
              className="about-who-image"
              {...fadeInUp}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                alt="Professional team collaboration in modern office"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="about-who-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-subtitle">Who We Are</span>
              <h2>CEA Infotech Private Limited</h2>
              <p>
                Established in June 2015 and headquartered in Bangalore, India, CEA Infotech is a technology-driven enterprise delivering solutions that transform business operations.
              </p>
              <p>
                We specialize in enterprise software solutions, consulting services, manufacturing systems, compliance management and custom application development.
              </p>
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

      {/* ===== SECTION 3: VISION ===== */}
      <section className="about-vision-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Our Vision</span>
            <h2 className="section-title">What Drives Us Forward</h2>
            <p className="section-desc">Our foundation is anchored on customer success, business excellence and continuous innovation.</p>
          </motion.div>

          <motion.div
            className="grid-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-amber">
                <HeartHandshake size={28} />
              </div>
              <h3>Customer Success</h3>
              <p>Building long-term customer relationships through trusted solutions and services.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-blue">
                <Target size={28} />
              </div>
              <h3>Business Excellence</h3>
              <p>Helping organizations overcome challenges and improve operational efficiency.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="vision-card">
              <div className="vision-icon icon-teal">
                <Lightbulb size={28} />
              </div>
              <h3>Continuous Innovation</h3>
              <p>Delivering scalable software products and digital transformation solutions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3.5: CORE VALUES ===== */}
      <section className="about-values-section" style={{ padding: '100px 0', backgroundColor: 'var(--secondary-bg)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle" style={{ color: 'var(--accent)' }}>Our Pillars</span>
            <h2 className="section-title">Core Values</h2>
            <p className="section-desc">The principles that govern our projects, decisions and operations.</p>
          </motion.div>

          <motion.div
            className="grid-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}
          >
            {[
              { title: 'Quality', desc: 'Delivering robust, high-performance enterprise systems.', icon: <CheckCircle size={24} style={{ color: 'var(--supporting)' }} /> },
              { title: 'Integrity', desc: 'Transparent, honest, and ethical partnership at all levels.', icon: <ShieldCheck size={24} style={{ color: 'var(--accent)' }} /> },
              { title: 'Innovation', desc: 'Continuous research driving advanced technological tools.', icon: <Lightbulb size={24} style={{ color: 'var(--supporting)' }} /> },
              { title: 'Accountability', desc: 'Taking complete ownership of our promises and milestones.', icon: <Target size={24} style={{ color: 'var(--accent)' }} /> },
              { title: 'Reliability', desc: 'Serving as a dependable, long-term technical partner.', icon: <Award size={24} style={{ color: 'var(--supporting)' }} /> }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card"
                whileHover={{ y: -6, borderColor: 'var(--accent)' }}
                style={{ padding: '28px 20px', textAlign: 'center', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-md)' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>{value.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--secondary)', lineHeight: '1.5', margin: 0 }}>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 4: FOUNDER & LEADERSHIP ===== */}
      <section className="about-founder-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Leadership</span>
            <h2 className="section-title">Founder & Director</h2>
          </motion.div>

          <motion.div
            className="founder-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="founder-grid">
              <div className="founder-photo-area">
                <div className="founder-avatar">
                  <span className="founder-avatar-initials">MD</span>
                </div>
                <div className="founder-name-area">
                  <h3>M.D. Manohar</h3>
                  <p>Founder & Director</p>
                </div>
              </div>

              <div className="founder-details">
                <span className="section-subtitle">Executive Profile</span>
                <h2>35+ Years of IT Industry Leadership</h2>

                <div className="founder-highlights">
                  {founderHighlights.map((h) => (
                    <span key={h} className="founder-badge">
                      <CheckCircle size={14} />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="founder-global">
                  <h4>Projects Delivered Across</h4>
                  <div className="founder-countries">
                    {countries.map((c) => (
                      <span key={c} className="founder-country-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 5: CORE STRENGTHS ===== */}
      <section className="about-strengths-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Capabilities</span>
            <h2 className="section-title">Core Strengths</h2>
            <p className="section-desc">Comprehensive enterprise solutions spanning operations, finance and workforce management.</p>
          </motion.div>

          <motion.div
            className="strengths-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {coreStrengths.map((s, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="strength-card"
              >
                <div className="strength-icon">{s.icon}</div>
                <h3>{s.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 6: DOMAIN EXPERTISE ===== */}
      <section className="about-domain-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Industries</span>
            <h2 className="section-title">Domain Expertise</h2>
            <p className="section-desc">Deep knowledge across diverse industry verticals delivering tailored solutions.</p>
          </motion.div>

          <motion.div
            className="domain-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {domains.map((d, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="domain-card"
              >
                <div className={`domain-icon ${d.color}`}>{d.icon}</div>
                <h3>{d.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 7: GLOBAL EXPERIENCE ===== */}
      <section className="about-global-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Global Reach</span>
            <h2 className="section-title">Trusted Across Multiple Countries</h2>
            <p className="section-desc">Delivering enterprise solutions and technology consulting across continents.</p>
          </motion.div>

          <motion.div
            className="global-map-container"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="global-countries-grid">
              {countries.map((country) => (
                <motion.div
                  key={country}
                  variants={staggerItem}
                  className="global-country-card"
                >
                  <div className="global-country-icon">
                    <MapPin size={20} />
                  </div>
                  <h4>{country}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 8: COMPANY JOURNEY ===== */}
      <section className="about-journey-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Milestones</span>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-desc">A decade of growth, innovation and global impact.</p>
          </motion.div>

          <div className="h-timeline">
            <div className="h-timeline-line" />
            <motion.div
              className="h-timeline-items"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="h-timeline-item"
                >
                  <div className="h-timeline-card">
                    <div className="h-timeline-year">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="h-timeline-dot" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: WHY CHOOSE US ===== */}
      <section className="about-why-section">
        <div className="container">
          <motion.div className="section-title-wrapper" {...fadeInUp}>
            <span className="section-subtitle">Our Advantage</span>
            <h2 className="section-title">Why Choose CEA Infotech</h2>
            <p className="section-desc">The differentiators that make us a trusted technology partner.</p>
          </motion.div>

          <motion.div
            className="why-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {whyChoose.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="why-card">
                <div className={`why-icon ${item.color}`}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 10: CTA ===== */}
      <section className="about-cta-section">
        <div className="container">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Let's Build Smarter Business Solutions Together</h2>
            <p>Partner with CEA Infotech to transform operations through innovative technology solutions.</p>
            <button
              className="btn-cta-about"
              onClick={() => navigate('/contact')}
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
