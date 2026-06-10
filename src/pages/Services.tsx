import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  Briefcase,
  Monitor,
  Layers,
  Factory,
  ShieldCheck,
  Truck,
  Headset,
  Code,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Smartphone,
  AlertTriangle
} from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };

  const scrollReveal = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const buttonHover = {
    whileHover: { scale: 1.03, boxShadow: '0px 6px 12px rgba(245, 158, 11, 0.3)' },
    whileTap: { scale: 0.98 }
  };

  const secondaryButtonHover = {
    whileHover: { scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' },
    whileTap: { scale: 0.98 }
  };

  const partnerCards = [
    {
      title: "Project Management & Consulting",
      summary: "Aligning business objectives with practical technology strategies.",
      icon: <Briefcase size={22} />,
      accent: "var(--secondary)",
      works: "We begin by understanding business goals, operational challenges and project requirements. Our consultants work closely with stakeholders to define project scope, identify risks and establish a structured execution plan.",
      delivers: [
        "Business Process Assessment",
        "Requirement Analysis",
        "Technology Roadmap",
        "Project Planning",
        "Risk Management Strategy"
      ],
      outcome: "Improved planning, reduced project risks and successful execution."
    },
    {
      title: "Application Development",
      summary: "Building applications that streamline and automate business operations.",
      icon: <Monitor size={22} />,
      accent: "var(--accent)",
      works: "We analyze existing workflows and identify opportunities to improve efficiency through customized software solutions.",
      delivers: [
        "Enterprise Applications",
        "Business Portals",
        "Workflow Automation",
        "Dashboard Solutions",
        "System Integrations"
      ],
      outcome: "Improved productivity and operational visibility."
    },
    {
      title: "Product Development",
      summary: "Transforming ideas into scalable and reliable software products.",
      icon: <Layers size={22} />,
      accent: "var(--cta)",
      works: "We convert concepts into software products through architecture planning, development, testing and deployment.",
      delivers: [
        "Product Architecture",
        "UI/UX Design",
        "Software Development",
        "Quality Assurance",
        "Product Enhancement"
      ],
      outcome: "Future-ready software products designed for growth."
    },
    {
      title: "Mobility Solutions",
      summary: "Empowering teams through mobile-first business applications.",
      icon: <Smartphone size={22} />,
      accent: "#ec4899",
      works: "We build mobile solutions that enable employees and stakeholders to access information and manage workflows from anywhere.",
      delivers: [
        "Mobile Applications",
        "Workflow Tracking",
        "Mobile Dashboards",
        "Field Data Collection",
        "Real-Time Reporting"
      ],
      outcome: "Faster decision-making and improved collaboration."
    },
    {
      title: "Application Support & Maintenance",
      summary: "Ensuring systems remain reliable, secure and optimized.",
      icon: <Headset size={22} />,
      accent: "#10b981",
      works: "After deployment, we continue to support and enhance applications to ensure long-term performance and reliability.",
      delivers: [
        "Performance Monitoring",
        "Issue Resolution",
        "Security Updates",
        "Feature Enhancements",
        "Technical Support"
      ],
      outcome: "Stable systems and reduced downtime."
    }
  ];


  const processTimeline = [
    { step: "01", name: "Discover", desc: "Understanding business objectives and studying manual workflows on the ground." },
    { step: "02", name: "Analyze", desc: "Identifying bottlenecks, scope gaps, compliance requirements, and integration opportunities." },
    { step: "03", name: "Design", desc: "Engineering scalable system database schemas and designing high-fidelity UX prototypes." },
    { step: "04", name: "Develop", desc: "Writing secure, containerized, and fast backend APIs and front-end React apps." },
    { step: "05", name: "Deploy", desc: "Setting up production instances, migrating records, and conducting supervisor training." },
    { step: "06", name: "Support", desc: "Providing SLA help-desk support, monitoring performance logs, and adding new features." }
  ];

  const solutionMatching = [
    { need: "Production Efficiency", product: "VERICEA Manufacturing", desc: "Improve production tracking and operational efficiency.", accent: "var(--secondary)", icon: <Factory size={20} /> },
    { need: "Compliance Management", product: "VERICEA Compliance", desc: "Track compliance activities and improve audit readiness.", accent: "var(--accent)", icon: <ShieldCheck size={20} /> },
    { need: "Risk Assessment", product: "FactSafe", desc: "Identify, assess and monitor business risks.", accent: "#ef4444", icon: <AlertTriangle size={20} /> },
    { need: "Logistics Cost Optimization", product: "Courier Cost Management", desc: "Control and reduce logistics-related expenses.", accent: "#3b82f6", icon: <Truck size={20} /> },
    { need: "Custom Business Operations", product: "Custom Application Development", desc: "Tailored software solutions designed around business requirements.", accent: "var(--cta)", icon: <Code size={20} /> }
  ];

  const outcomes = [
    { title: "Increased Productivity", desc: "Streamline worker tasks and speed up data logging." },
    { title: "Operational Efficiency", desc: "Minimize resource waste, scrap logs, and process lag." },
    { title: "Compliance Readiness", desc: "Always-ready audit trails and automated evidence checks." },
    { title: "Improved Visibility", desc: "Real-time updates on production metrics, OEE, and costs." },
    { title: "Reduced Manual Effort", desc: "Automate paperwork and eliminate redundant data entries." },
    { title: "Cost Optimization", desc: "Lower operational overheads, courier bills, and downtime." },
    { title: "Better Decision-Making", desc: "Actionable analytical data in clean visual executive dashboards." },
    { title: "Scalable Growth", desc: "System architectures designed to support modular expansion." }
  ];



  const handleScrollToSolutions = () => {
    const section = document.getElementById('solutions-matching');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      style={{ overflow: 'hidden', backgroundColor: 'var(--background)' }}
    >
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section 
        className="section"
        style={{ 
          padding: '160px 0 120px 0', 
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(11, 31, 58, 0.75), rgba(11, 31, 58, 0.85)), url("/images/industrial_control_room_1780849774868.png")',
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
              <span>Tailored Technical Deliveries</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: '48px', lineHeight: '1.15', margin: '0 0 24px 0', letterSpacing: '-1.5px', color: '#ffffff', fontWeight: '800' }}
            >
              Enterprise Software Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: '18px', color: 'rgba(241, 245, 249, 0.85)', marginBottom: '40px', lineHeight: '1.6' }}
            >
              Delivering technology solutions that improve operational efficiency, strengthen compliance and support business growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
            >
              <motion.button 
                onClick={() => navigate('/contact')} 
                className="btn btn-cta"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Discuss Your Requirements
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                onClick={handleScrollToSolutions} 
                className="btn btn-dark-outline"
                whileHover={secondaryButtonHover.whileHover}
                whileTap={secondaryButtonHover.whileTap}
                style={{ border: '2px solid rgba(255, 255, 255, 0.35)', color: '#ffffff' }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: HOW WE PARTNER WITH OUR CLIENTS
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Our Engagement Model</span>
            <h2 className="section-title">How We Partner With Our Clients</h2>
            <p className="section-desc">
              Every organization has unique challenges. Explore how CEA Infotech collaborates with businesses to design, develop and support technology solutions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {partnerCards.map((card, index) => {
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    borderRadius: '12px',
                    padding: '24px 32px',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    borderLeft: `5px solid ${card.accent}`,
                    transition: 'box-shadow 0.2s, border-color 0.2s'
                  }}
                  whileHover={{ 
                    boxShadow: 'var(--shadow-md)',
                    borderColor: card.accent
                  }}
                >
                  {/* Card Header (Collapsed State content) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: `${card.accent}12`,
                        color: card.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {card.icon}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>
                          {card.title}
                        </h3>
                        {!isExpanded && (
                          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                            {card.summary}
                          </p>
                        )}
                      </div>
                    </div>

                    <div style={{ color: 'var(--text-muted)' }}>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {/* Expanded Content Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ borderTop: '1px solid rgba(15, 23, 42, 0.08)', paddingTop: '20px', marginTop: '4px' }}
                        onClick={(e) => e.stopPropagation()} // Prevent collapse on details click
                      >
                        <div className="grid-2" style={{ gap: '32px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                              <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: card.accent, marginBottom: '6px' }}>
                                How CEA Works
                              </h4>
                              <p style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>
                                {card.works}
                              </p>
                            </div>

                            <div style={{ 
                              padding: '16px', 
                              backgroundColor: 'var(--alternate-bg)', 
                              borderRadius: '8px',
                              borderLeft: `3px solid var(--accent)` 
                            }}>
                              <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--primary)', marginBottom: '4px' }}>
                                Business Outcome
                              </h4>
                              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', fontWeight: '600', margin: 0, lineHeight: '1.4' }}>
                                {card.outcome}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: card.accent, marginBottom: '12px' }}>
                              What We Deliver
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                              {card.delivers.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--text-main)', fontWeight: '600' }}>
                                  <CheckCircle size={15} style={{ color: card.accent, flexShrink: 0 }} />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: OUR SOLUTION DELIVERY FRAMEWORK
          ================================================== */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '64px' }}>
            <span className="section-subtitle">Workflow & Rigor</span>
            <h2 className="section-title">How We Deliver Results</h2>
            <p className="section-desc">Our end-to-end delivery framework ensures predictable schedules and high-uptime solutions.</p>
          </div>

          {/* Animated Horizontal Process Roadmap */}
          <div style={{ position: 'relative', overflowX: 'auto', paddingBottom: '20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              minWidth: '980px', 
              position: 'relative',
              padding: '0 40px'
            }}>
              {/* Connecting Line */}
              <div style={{
                position: 'absolute',
                top: '24px',
                left: '80px',
                right: '80px',
                height: '3px',
                backgroundColor: 'rgba(14, 116, 144, 0.1)',
                zIndex: 1
              }}></div>

              {processTimeline.map((step, index) => (
                <motion.div
                  key={index}
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '140px',
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                  }}
                >
                  {/* Step Number Dot */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      border: '4px solid #ffffff',
                      boxShadow: 'var(--shadow-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      fontSize: '14px',
                      fontWeight: '800',
                      marginBottom: '16px',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    {step.step}
                  </motion.div>

                  <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--primary)', margin: '0 0 6px 0' }}>
                    {step.name}
                  </h3>
                  <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: MATCHING BUSINESS NEEDS TO SOLUTIONS
          ================================================== */}
      <section id="solutions-matching" className="section" style={{ backgroundColor: 'var(--alternate-bg)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Product Alignments</span>
            <h2 className="section-title">The Right Solution For Every Business Need</h2>
            <p className="section-desc">Aligning specific operational demands to our proprietary tools or customized engineering tracks.</p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {solutionMatching.map((sol, index) => (
              <motion.div
                key={index}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-xl)', borderColor: sol.accent }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: sol.accent }}></div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    backgroundColor: `${sol.accent}12`,
                    color: sol.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {sol.icon}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: sol.accent, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    {sol.need}
                  </span>
                </div>

                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary)', margin: '0 0 6px 0', fontFamily: 'var(--font-headings)' }}>
                    {sol.product}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {sol.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', borderTop: '1px solid rgba(15, 23, 42, 0.05)', paddingTop: '16px', marginTop: '8px' }}>
                  <button 
                    onClick={() => navigate('/products')} 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--secondary)',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    View Product Details
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION: BUSINESS OUTCOMES
          ================================================== */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">Target Metrics</span>
            <h2 className="section-title">Value Delivered To Our Customers</h2>
            <p className="section-desc">Concrete outcomes and performance updates organizations achieve with CEA systems.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '20px' 
          }}>
            {outcomes.map((out, index) => (
              <motion.div
                key={index}
                variants={scrollReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={scrollReveal.viewport}
                whileHover={{ y: -4, borderColor: 'var(--secondary)' }}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(14, 116, 144, 0.06)',
                  color: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CheckCircle size={15} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--primary)', margin: 0 }}>
                    {out.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.4', margin: 0 }}>
                    {out.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ==================================================
          CTA SECTION
          ================================================== */}
      <section className="section section-dark" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div 
            variants={scrollReveal} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={scrollReveal.viewport}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: '38px', marginBottom: '20px', letterSpacing: '-1px', color: '#ffffff', fontWeight: '800' }}>
              Ready To Solve Your Business Challenges?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(241, 245, 249, 0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
              Partner with CEA Infotech to build scalable, secure and efficient technology solutions that drive measurable business outcomes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button 
                onClick={() => navigate('/contact')} 
                className="btn btn-cta"
                whileHover={buttonHover.whileHover}
                whileTap={buttonHover.whileTap}
                style={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Schedule A Consultation
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                onClick={() => navigate('/products')} 
                className="btn btn-dark-outline"
                whileHover={{ scale: 1.03, borderColor: '#ffffff', backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                style={{ border: '2px solid rgba(255,255,255,0.25)', color: '#ffffff' }}
              >
                Explore Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
