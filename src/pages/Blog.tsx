import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Quote,
  FileText
} from 'lucide-react';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  // Page level animation configuration
  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5 }
  };


  // Featured Insights data (Section 2)
  const featuredArticles = [
    {
      id: 'feat-1',
      category: 'Manufacturing Excellence',
      title: 'Improving Manufacturing Efficiency Through Production Tracking',
      tagline: 'Track. Measure. Improve.',
      inspiredBy: 'Vericea Manufacturing',
      summary: 'How manufacturers can improve operational visibility, efficiency and productivity through real-time production monitoring.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      date: 'June 9, 2026'
    },
    {
      id: 'feat-2',
      category: 'Compliance & Audits',
      title: 'Why Compliance Monitoring Should Be Continuous',
      tagline: 'Create. Maintain. Monitor.',
      inspiredBy: 'Vericea Compliance',
      summary: 'How organizations can strengthen audit readiness through structured compliance management and encrypted evidence locks.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      date: 'June 4, 2026'
    },
    {
      id: 'feat-3',
      category: 'Digital Transformation',
      title: 'Digital Transformation Beyond Software',
      tagline: 'Technology That Enables Growth.',
      inspiredBy: 'Corporate Advisory',
      summary: 'Why enterprise transformation requires both cutting-edge technology and proper operational business alignment.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      date: 'May 28, 2026'
    }
  ];
  // Latest Insights - 6 Card Blog Grid (Section 5)
  const latestInsights = [
    {
      id: 'blog-1',
      title: 'How Production Visibility Reduces Bottlenecks',
      summary: 'Learn how to identify machinery idle time, dispatch delays, and routing inefficiencies on active manufacturing floors.',
      category: 'Manufacturing Excellence',
      readTime: '5 min read',
      date: 'June 8, 2026',
      image: 'https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-2',
      title: 'Building a Compliance-First Culture',
      summary: 'How organizational alignment transforms standard audit checklists from tedious chores into core operational assets.',
      category: 'Compliance & Audits',
      readTime: '6 min read',
      date: 'June 3, 2026',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-3',
      title: 'Lessons from Global ERP Implementations',
      summary: 'Key factors that differentiate successful multi-plant software rollouts from failed legacy migrations.',
      category: 'ERP Solutions',
      readTime: '8 min read',
      date: 'May 25, 2026',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-4',
      title: 'Technology Trends in Manufacturing',
      summary: 'Exploring the actual business impact of edge devices, industrial tablets, and floor-level digital terminals.',
      category: 'Digital Transformation',
      readTime: '4 min read',
      date: 'May 18, 2026',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-5',
      title: 'Reducing Audit Preparation Time',
      summary: 'Simple structured digital workflows that keep operational compliance evidence audit-ready on a continuous basis.',
      category: 'Risk Assessment',
      readTime: '5 min read',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-6',
      title: 'Driving Accountability Through Digital Systems',
      summary: 'Using secure cloud-based ledger software and encrypted data signatures to verify operator actions and reduce errors.',
      category: 'Custom Software',
      readTime: '7 min read',
      date: 'April 29, 2026',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Customer Success Perspective (Section 6)
  const customerSuccessQuotes = [
    {
      theme: 'Operational Improvement',
      quote: "CEA's production tracking system helped us identify and resolve a major bottleneck in our packaging line, increasing output by 18% in the first month.",
      author: 'Operations Director',
      company: 'Heavy Metal Parts'
    },
    {
      theme: 'Process Visibility',
      quote: "Having real-time dashboards meant our management team could make decisions based on actual floor data rather than end-of-week spreadsheets.",
      author: 'VP of Manufacturing',
      company: 'Zen Textiles'
    },
    {
      theme: 'Compliance Readiness',
      quote: "The evidence locker and CAPA workflows reduced our ISO audit preparation time from weeks to just a few hours. Absolutely game-changing.",
      author: 'Quality Compliance Manager',
      company: 'Apex Engineering'
    },
    {
      theme: 'Business Growth',
      quote: "Custom enterprise software from CEA integrated seamlessly with our legacy systems, enabling us to scale operations without expanding administrative overhead.",
      author: 'Chief Operating Officer',
      company: 'Helix Logistics'
    }
  ];

  // Future Insights placeholders (Section 8)
  const futureInsights = [
    {
      tag: 'Research Whitepaper',
      title: 'Integrating IoT Telemetry with Cloud ERP Systems',
      status: 'In Peer Review'
    },
    {
      tag: 'Industry Framework',
      title: 'The Continuous Compliance Model for Automated Plant Floors',
      status: 'Draft Scheduled'
    },
    {
      tag: 'Technical Guide',
      title: 'Optimizing OEE Auditing: Tracking WIP in High-Mix Assembly',
      status: 'Coming Soon'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid corporate email');
      return;
    }
    setError('');
    setSubscribed(true);
  };


  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="blog-page-bg"
      style={{ color: 'var(--text-main)' }}
    >
      {/* SECTION 1: HERO SECTION */}
      <section

        className="inner-hero surface-royal"

        style={{
          position: 'relative',
          padding: '180px 0 120px 0',
          backgroundImage: `linear-gradient(rgba(31, 58, 95, 0.85), rgba(15, 28, 50, 0.92)), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--text-main)',
          borderBottom: '1px solid rgba(200, 162, 118, 0.18)'
        }}
      >
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          {/* FactSafe Logo on Risk Management / Blog page */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ 
              padding: '10px 20px', 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--supporting)', letterSpacing: '1px' }}>POWERED BY</span>
              <img src="/images/Fact_safe.png" alt="FactSafe Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="section-subtitle"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              backgroundColor: 'rgba(200, 162, 118, 0.12)',
              color: 'var(--supporting)',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              marginBottom: '20px',
              border: '1px solid rgba(200, 162, 118, 0.3)'
            }}
          >
            <Sparkles size={14} />
            <span>INSIGHTS & ADVISORY</span>
          </motion.div>
          <h1
            className="inner-hero-title"
            style={{
              fontSize: '54px',
              fontWeight: 800,
              color: 'var(--text-main)',
              maxWidth: '850px',
              margin: '0 auto 20px auto',
              lineHeight: 1.15,
              fontFamily: 'var(--font-headings)'
            }}
          >
            Insights That Drive Smarter Businesses
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '19px',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400,
              fontFamily: 'var(--font-body)'
            }}
          >
            Explore practical insights, industry trends and enterprise solutions shaping the future of manufacturing, compliance and digital transformation.
          </p>
        </div>

        {/* Subtle bottom curve separator */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '24px',
            backgroundColor: 'var(--primary-bg)',
            clipPath: 'ellipse(60% 100% at 50% 100%)'
          }}
        ></div>
      </section>

      {/* SECTION 2: FEATURED INSIGHTS */}

      <section className="section surface-matte about-section-texture" style={{ padding: '80px 0 100px 0', borderBottom: '1px solid rgba(200, 162, 118, 0.12)' }}>

        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px', textAlign: 'left', marginLeft: '0' }}>
            <span className="section-subtitle" style={{ color: 'var(--supporting)' }}>EDITOR'S PICKS</span>
            <h2 className="section-title" style={{ fontSize: '38px' }}>Featured Insights</h2>
            <p className="section-desc" style={{ maxWidth: '600px' }}>Deep-dive analyses and strategic frameworks selected by our industrial leadership team.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {featuredArticles.map((article,) => (
              <motion.article
                key={article.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="glass-card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image header with category badge */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,15,28,0) 60%, rgba(10,15,28,0.4) 100%)' }}></div>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: 'var(--primary-bg)',
                      color: 'var(--text-main)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Editorial Content */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--supporting)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {article.tagline}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>•</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {article.inspiredBy}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '21px',
                      color: 'var(--text-main)',
                      marginBottom: '14px',
                      lineHeight: 1.35,
                      fontWeight: 700,
                      fontFamily: 'var(--font-headings)'
                    }}
                  >
                    {article.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                    {article.summary}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      borderTop: '1px solid rgba(200, 162, 118, 0.18)',
                      paddingTop: '20px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={13} /> {article.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={13} /> {article.readTime}</span>
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--supporting)',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Read Full <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST INSIGHTS */}

      <section className="section surface-royal services-section-texture" style={{ padding: '100px 0', borderBottom: '1px solid rgba(200, 162, 118, 0.12)' }}>

        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '56px',
              borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
              paddingBottom: '24px'
            }}
          >
            <div>
              <span className="section-subtitle">RESOURCES AND ANALYSES</span>
              <h2 className="section-title" style={{ marginBottom: '0', fontSize: '36px' }}>
                Latest Insights
              </h2>
            </div>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500 }}>
              Showing {latestInsights.length} Articles
            </span>
          </div>

          {/* Grid layout with dynamic animation mapping */}
          <motion.div
            layout
            className="grid-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}
          >
            <AnimatePresence mode="popLayout">
              {latestInsights.map((insight) => (
                <motion.article
                  key={insight.id}
                  layout
                  className="glass-card"
                  style={{
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img
                      src={insight.image}
                      alt={insight.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Header */}
                  <div style={{ padding: '24px 24px 12px 24px' }}>
                    <span
                      style={{
                          fontSize: '11px',
                          color: 'var(--supporting)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      {insight.category}
                    </span>
                      <h3 style={{ fontSize: '18px', color: 'var(--text-main)', fontWeight: 700, lineHeight: 1.4, margin: '0' }}>
                      {insight.title}
                    </h3>
                  </div>

                  {/* Body excerpt */}
                  <div style={{ padding: '0 24px 24px 24px', flexGrow: 1 }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.6, margin: '0' }}>
                      {insight.summary}
                    </p>
                  </div>

                  {/* Footer Stats & CTA */}
                  <div
                    style={{
                      padding: '16px 24px',
                       backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderTop: '1px solid rgba(200, 162, 118, 0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px'
                    }}
                  >
                      <div style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--supporting)',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontSize: '13px'
                      }}
                    >
                      Read More <ChevronRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CUSTOMER SUCCESS PERSPECTIVE */}

      <section className="section surface-matte compliance-section-texture" style={{ padding: '100px 0', borderBottom: '1px solid rgba(200, 162, 118, 0.12)' }}>

        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">IMPACT METRICS</span>
            <h2 className="section-title">Technology That Creates Lasting Impact</h2>
            <p className="section-desc">What enterprise operations leaders say about deploying CEA Infotech frameworks.</p>
          </div>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '32px' }}>
            {customerSuccessQuotes.map((q, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                {/* Visual quote mark */}
                <div style={{ position: 'absolute', top: '32px', right: '32px', color: 'rgba(255,255,255,0.03)' }}>
                  <Quote size={54} strokeWidth={1} fill="currentColor" />
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--supporting)',
                      backgroundColor: 'rgba(200, 162, 118, 0.12)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '24px'
                    }}
                  >
                    {q.theme}
                  </span>

                  <p
                    style={{
                      fontSize: '16px',
                      color: 'var(--text-main)',
                      lineHeight: 1.7,
                      fontWeight: 500,
                      fontStyle: 'italic',
                      marginBottom: '32px',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    "{q.quote}"
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(200, 162, 118, 0.18)',
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 700 }}>{q.author}</span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{q.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: NEWSLETTER SUBSCRIPTION */}

      <section className="section surface-royal products-section-texture" style={{ padding: '80px 0', borderBottom: '1px solid rgba(200, 162, 118, 0.12)' }}>

        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="glass-card"
            style={{
              padding: '60px 48px',
              borderRadius: '20px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(200, 162, 118, 0.12)',
                color: 'var(--supporting)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}
            >
              <Mail size={24} />
            </div>

            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
              Stay Updated With Industry Insights
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '36px', maxWidth: '580px', margin: '0 auto 36px auto' }}>
              Receive updates on enterprise technology, manufacturing innovation and compliance best practices.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  color: 'var(--success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  fontSize: '16px'
                }}
              >
                <CheckCircle2 size={20} />
                <span>Subscription successful! Welcome to CEA Insights.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ flexGrow: 1, minWidth: '280px' }}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your corporate email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    style={{
                      height: '50px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-main)',
                      padding: '0 18px',
                      fontSize: '15px'
                    }}
                  />
                  {error && (
                    <span style={{ color: 'var(--danger)', fontSize: '12px', textAlign: 'left', display: 'block', marginTop: '6px', paddingLeft: '4px' }}>
                      {error}
                        </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-cta"
                  style={{
                    height: '50px',
                    padding: '0 30px',
                    borderRadius: '8px'
                  }}
                >
                  Subscribe <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: FUTURE INSIGHTS PLACEHOLDER */}

      <section className="section surface-matte about-section-texture" style={{ padding: '100px 0', borderBottom: '1px solid rgba(200, 162, 118, 0.12)' }}>

        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">FUTURE INTEGRATION</span>
            <h2 className="section-title">More Insights Coming Soon</h2>
            <p className="section-desc">This section is designed for future integration of dynamic blogs and knowledge resources.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {futureInsights.map((fi, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  border: '2px dashed rgba(200, 162, 118, 0.3)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--supporting)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <FileText size={20} />
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px'
                  }}
                >
                  {fi.tag}
                </span>

                <h3 style={{ fontSize: '16px', color: 'var(--text-main)', fontWeight: 600, marginBottom: '16px', lineHeight: 1.4, maxWidth: '240px' }}>
                  {fi.title}
                </h3>

                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '4px 12px',
                    borderRadius: '20px'
                  }}
                >
                  {fi.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CALL TO ACTION */}

      <section className="section surface-royal contact-section-texture" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>

            <div
          style={{
            padding: '100px 0',
            color: 'var(--text-main)',
            textAlign: 'center'
          }}
        >
          <div className="container">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              style={{ maxWidth: '720px', margin: '0 auto' }}
            >
              <h2
                style={{
                  fontSize: '42px',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  marginBottom: '20px',
                  letterSpacing: '-1.5px',
                  fontFamily: 'var(--font-headings)'
                }}
              >
                Ready To Transform Your Business?
              </h2>

              <p
                style={{
                  fontSize: '18px',
                  color: 'var(--text-muted)',
                  marginBottom: '38px',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-body)'
                }}
              >
                Discover how CEA Infotech can help your organization improve efficiency, strengthen compliance and accelerate growth.
              </p>

              <div className="btn-group" style={{ justifyContent: 'center' }}>
                <button
                  onClick={() => window.location.href = '/products'}
                  className="btn btn-cta"
                  style={{ minWidth: '180px' }}
                >
                  Explore Solutions <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="btn btn-dark-outline"
                  style={{ minWidth: '180px' }}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
