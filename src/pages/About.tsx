import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight,
  Award,
  Globe,
  Building,
  Users,
  Briefcase,
  Lightbulb,
  Monitor,
  Layers,
  Factory,
  ShieldCheck,
  Truck,
  Cog,
  Shirt,
  ShoppingBag,
  Landmark,
  HeartHandshake,
  Rocket,
  Headset,
  Cpu,
  Wallet,
  TrendingUp,
  Calendar,
  Code,
  FileText,
  Sparkles
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

export default function About() {
  const navigate = useNavigate();

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  const buttonHover = {
    whileHover: { scale: 1.03, boxShadow: '0px 6px 12px rgba(245, 158, 11, 0.3)' },
    whileTap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      style={{ overflow: 'hidden', backgroundColor: 'var(--background)' }}
    >
      {/* ==================================================
          SECTION 1 - HERO
          ================================================== */}
      <section 
        className="section"
        style={{ 
          padding: '160px 0 120px 0', 
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(11, 31, 58, 0.75), rgba(11, 31, 58, 0.85)), url("/images/business_consultation_1780850767888.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 80% 20%, rgba(14, 116, 144, 0.15) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                marginBottom: '24px',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--cta)' }} />
              <span>About CEA Infotech Private Limited</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: '48px', lineHeight: '1.15', margin: '0 0 24px 0', letterSpacing: '-1.5px', color: '#ffffff', fontWeight: '800' }}
            >
              Empowering Businesses Through Technology & Innovation
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: '18px', color: 'rgba(241, 245, 249, 0.85)', marginBottom: '0px', lineHeight: '1.6' }}
            >
              Since 2015, CEA Infotech has been delivering technology solutions, consulting services and enterprise software products that help organizations improve efficiency, strengthen compliance and achieve operational excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 - WHO WE ARE
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <motion.div 
              variants={scrollReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={scrollReveal.viewport}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <span className="section-subtitle">Core Identity</span>
              <h2 className="section-title" style={{ margin: 0 }}>Who We Are</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-main)', lineHeight: '1.7', margin: 0 }}>
                CEA Infotech Private Limited was established in June 2015 and is based in Bangalore, India.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                We provide consulting services, enterprise software solutions, product development and application delivery services across multiple industries.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                Our focus is on helping organizations overcome business challenges through innovative technology solutions and long-term partnerships.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { title: 'Technology Solutions', icon: <Monitor size={22} />, desc: 'Modern software tools built for speed and reliability.' },
                { title: 'Business Consulting', icon: <Lightbulb size={22} />, desc: 'Expert advisory to optimize processes and systems.' },
                { title: 'Enterprise Applications', icon: <Layers size={22} />, desc: 'Robust multi-layered systems for large-scale operations.' },
                { title: 'Long-Term Relationships', icon: <HeartHandshake size={22} />, desc: 'Commitment to support, evolve, and grow together.' }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={scrollReveal.viewport}
                  whileHover={{ y: -6, borderColor: 'var(--secondary)', boxShadow: 'var(--shadow-md)' }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    borderRadius: 'var(--border-radius-md)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ color: 'var(--secondary)', display: 'inline-flex' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary)', margin: 0 }}>{card.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3 - OUR VISION
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Core Philosophy</span>
            <h2 className="section-title">Our Vision</h2>
            <p className="section-desc">Guiding principles driving the value we bring to our clients globally.</p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {[
              {
                title: "Customer Success",
                desc: "Provide solutions and services that increase customer satisfaction and build long-term relationships.",
                icon: <Award size={24} />,
                accentColor: "var(--accent)"
              },
              {
                title: "Business Growth",
                desc: "Support organizations in overcoming challenges and improving business operations.",
                icon: <TrendingUp size={24} />,
                accentColor: "var(--secondary)"
              },
              {
                title: "Technology Innovation",
                desc: "Develop and deliver software products and services across multiple industry domains.",
                icon: <Rocket size={24} />,
                accentColor: "var(--cta)"
              }
            ].map((vision, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: vision.accentColor }}></div>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  backgroundColor: `${vision.accentColor}10`, 
                  color: vision.accentColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px'
                }}>
                  {vision.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)', margin: 0 }}>{vision.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{vision.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 - LEADERSHIP
          ================================================== */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '48px', border: '1px solid rgba(14, 116, 144, 0.1)', overflow: 'hidden', background: '#ffffff', boxShadow: 'var(--shadow-lg)' }}>
            <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
              
              {/* Left Column: Details */}
              <motion.div 
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <span className="section-subtitle">Leadership Spotlight</span>
                <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>M. D. Manohar</h2>
                <h3 style={{ fontSize: '18px', color: 'var(--secondary)', fontWeight: '600', margin: 0 }}>
                  Founder & Managing Director • 35+ Years of IT Industry Experience
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  Specialized in ERP, CRM, SCM, Financial Solutions, Manufacturing Systems and Custom Software Development.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  Successfully delivered projects for customers across India, Singapore, Indonesia, Bangladesh, Latvia, Nigeria, UAE, Nepal, Oman, Kenya, Iran and the USA.
                </p>

                {/* Specialties Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {['ERP Systems', 'CRM Configuration', 'SCM Operations', 'Financial Software', 'Manufacturing IT', 'Custom Development'].map((spec) => (
                    <span 
                      key={spec} 
                      style={{ 
                        fontSize: '12px', 
                        fontWeight: '700', 
                        color: 'var(--primary)', 
                        padding: '6px 14px', 
                        backgroundColor: 'var(--alternate-bg)', 
                        borderRadius: '4px', 
                        border: '1px solid rgba(14, 116, 144, 0.1)' 
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Global Footprint */}
                <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '16px', marginTop: '12px' }}>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '4px' }}>Global Project Deployment:</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                    India, Singapore, Indonesia, Bangladesh, Latvia, Nigeria, UAE, Nepal, Oman, Kenya, Iran and USA.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Profile Image */}
              <motion.div 
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '360px',
                  borderRadius: 'var(--border-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid rgba(15, 23, 42, 0.08)'
                }}>
                  <motion.img 
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    src="/images/about_us_md_cards_1780850959717.png" 
                    alt="M. D. Manohar - Managing Director" 
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(11, 31, 58, 0.9))',
                    padding: '24px',
                    color: '#ffffff'
                  }}>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '700' }}>M. D. Manohar</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>35+ Years IT Leadership</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5 - CORE EXPERTISE
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Functional Capabilities</span>
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-desc">Key systems and custom architectures designed under our leadership.</p>
          </div>

          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { name: 'Enterprise Resource Planning', icon: <Cog /> },
              { name: 'Production Tracking Solutions', icon: <TrendingUp /> },
              { name: 'Compliance Tracking Systems', icon: <ShieldCheck /> },
              { name: 'Retail Solutions', icon: <ShoppingBag /> },
              { name: 'Micro Finance Solutions', icon: <Wallet /> },
              { name: 'Property Management Systems', icon: <Building /> },
              { name: 'HRMS & Payroll', icon: <Users /> },
              { name: 'Custom Software Development', icon: <Code /> },
              { name: 'Project Management', icon: <Briefcase /> },
              { name: 'Consulting Services', icon: <FileText /> }
            ].map((strength, idx) => (
              <motion.div 
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className="glass-card" 
                whileHover={{ y: -5, borderColor: 'var(--secondary)' }}
                style={{ 
                  padding: '24px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  background: '#ffffff',
                  borderColor: 'rgba(15, 23, 42, 0.06)',
                  gap: '12px',
                  borderRadius: 'var(--border-radius-md)'
                }}
              >
                <div style={{ color: 'var(--secondary)' }}>{strength.icon}</div>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', margin: 0, lineHeight: '1.4' }}>{strength.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 - BUSINESS PROPOSITION
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">How We Deliver Value</span>
            <h2 className="section-title">Value Proposition</h2>
            <p className="section-desc">Our approach to delivery ensures high quality, robust compliance, and scalable operations.</p>
          </div>

          <div className="grid-4" style={{ gap: '24px' }}>
            {[
              { title: 'Project Management', desc: 'Detailed execution roadmaps, milestone tracking, and risk analysis for delivery assurance.', icon: <Briefcase size={22} /> },
              { title: 'Consulting Services', desc: 'Process evaluations, system audits, and advisory configurations targeting operational challenges.', icon: <Headset size={22} /> },
              { title: 'Application Delivery Services', desc: 'Modern web, mobile, and offline-first shop floor database systems built for uptime.', icon: <Cpu size={22} /> },
              { title: 'Product Development', desc: 'Engineering modular and customizable SaaS software packages like the VERICEA suite.', icon: <Rocket size={22} /> }
            ].map((prop, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-xl)', borderColor: 'rgba(14, 116, 144, 0.2)' }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '8px', 
                  backgroundColor: 'rgba(14, 116, 144, 0.05)', 
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {prop.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', margin: 0 }}>{prop.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7 - INDUSTRY EXPERTISE
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Sectors We Transform</span>
            <h2 className="section-title">Industry Expertise</h2>
            <p className="section-desc">Configurable technology frameworks adapted to distinct domain requirements.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {[
              { name: 'Manufacturing', icon: <Factory size={18} /> },
              { name: 'Engineering', icon: <Cog size={18} /> },
              { name: 'Apparel & Textiles', icon: <Shirt size={18} /> },
              { name: 'Home Textiles', icon: <Layers size={18} /> },
              { name: 'Retail', icon: <ShoppingBag size={18} /> },
              { name: 'Finance', icon: <Landmark size={18} /> },
              { name: 'NGO Operations', icon: <Users size={18} /> },
              { name: 'Construction', icon: <Building size={18} /> },
              { name: 'Logistics', icon: <Truck size={18} /> },
              { name: 'Property Management', icon: <Building size={18} /> },
              { name: 'Compliance & Audits', icon: <ShieldCheck size={18} /> }
            ].map((ind, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                whileHover={{ scale: 1.03, borderColor: 'var(--secondary)' }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ color: 'var(--secondary)', display: 'inline-flex' }}>{ind.icon}</div>
                <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--primary)' }}>{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================================================
          SECTION 9 - OUR JOURNEY
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Chronology</span>
            <h2 className="section-title">Growing With Purpose</h2>
            <p className="section-desc">Milestones detailing our evolution from inception to multi-domain delivery.</p>
          </div>

          <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { year: "2015", title: "CEA Infotech Founded", desc: "Established Bangalore headquarters, focused on setting up basic enterprise engineering principles." },
              { year: "2016+", title: "Enterprise Solutions & Consulting", desc: "Began deploying tailored systems and databases across local industrial clusters." },
              { year: "2018+", title: "Manufacturing Technology Solutions", desc: "Integrated shop-floor data collectors and yield tracking frameworks." },
              { year: "2020+", title: "Compliance Management Platforms", desc: "Transitioned to building proprietary compliance audit tools." },
              { year: "Today", title: "Serving Multiple Industries & Global Clients", desc: "Running digital transformation setups across 11+ industry sectors." }
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
                style={{ marginBottom: '32px' }}
              >
                <div className="timeline-dot" style={{ backgroundColor: 'var(--accent)' }}></div>
                <div className="timeline-card" style={{ padding: '24px', background: '#ffffff', borderRadius: 'var(--border-radius-md)' }}>
                  <div className="timeline-year" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', fontWeight: '700' }}>
                    <Calendar size={14} />
                    <span>{milestone.year}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary)', marginTop: '8px', marginBottom: '8px' }}>{milestone.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 10 - WHY CEA INFOTECH
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">Key Strengths</span>
            <h2 className="section-title">Why Organizations Choose Us</h2>
            <p className="section-desc">Measurable enterprise credibility built through successful delivery metrics.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '24px' 
          }}>
            {[
              { value: <CountUp end={35} suffix="+" duration={1.2} />, label: "Years Experience", sub: "Founder IT leadership", icon: <Award size={22} /> },
              { value: <CountUp end={11} suffix="+" duration={1.0} />, label: "Industry Domains", sub: "Custom configured sectors", icon: <Building size={22} /> },
              { value: "Global", label: "Project Delivery", sub: "Deployments in 12 countries", icon: <Globe size={22} /> },
              { value: "Enterprise", label: "Software Systems", sub: "Scale and uptime optimized", icon: <Cpu size={22} /> },
              { value: "Long-Term", label: "Relationships", sub: "Built on operational trust", icon: <HeartHandshake size={22} /> }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid rgba(15, 23, 42, 0.06)', 
                  borderRadius: 'var(--border-radius-lg)', 
                  padding: '32px 24px', 
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: idx % 2 === 0 ? 'var(--secondary)' : 'var(--accent)' }}></div>
                <div style={{ color: 'var(--secondary)', marginBottom: '4px' }}>{stat.icon}</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-headings)' }}>{stat.value}</div>
                <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--secondary)' }}>{stat.label}</div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 11 - CALL TO ACTION
          ================================================== */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #020617 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14, 116, 144, 0.06) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div 
            variants={scrollReveal} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={scrollReveal.viewport}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '38px', marginBottom: '20px', letterSpacing: '-1px', color: '#ffffff', fontWeight: '800' }}>
              Let's Build Smarter Business Solutions Together
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(241, 245, 249, 0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
              Partner with CEA Infotech to improve productivity, compliance and operational excellence.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button 
                onClick={() => navigate('/products')} 
                className="btn btn-cta"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                style={{ color: '#0B1F3A', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Explore Products
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/contact')} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03, borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                style={{ border: '2px solid rgba(255,255,255,0.25)', color: '#ffffff' }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
