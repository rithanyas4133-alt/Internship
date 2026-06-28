import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  BookOpen,
  Mail,
  Send,
  CheckCircle2,

  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  TrendingUp,
  BarChart3,
  FileText,
  Database,
  Cpu,
  AlertTriangle,
  Code,
  Factory,
  ChevronRight,
  Quote,
  ArrowUpRight
} from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Categories with their colors and icons (Section 3)
  const categoriesList = [
    { name: 'All', icon: BookOpen, color: '#64748B', desc: 'Browse all articles' },
    { name: 'Manufacturing Excellence', icon: Factory, color: '#2563EB', desc: 'OEE, WIP and shop floor tracking' },
    { name: 'Compliance & Audits', icon: ShieldCheck, color: '#14B8A6', desc: 'ISO, OSHA and quality audit trails' },
    { name: 'ERP Solutions', icon: Database, color: '#3B82F6', desc: 'Enterprise resources, materials and ledger tracking' },
    { name: 'Digital Transformation', icon: Cpu, color: '#8B5CF6', desc: 'Cloud migrations and system integration' },
    { name: 'Risk Assessment', icon: AlertTriangle, color: '#EF4444', desc: 'FactSafe checks and hazard mitigation' },
    { name: 'Custom Software', icon: Code, color: '#EC4899', desc: 'Custom enterprise applications' },
    { name: 'Business Strategy', icon: TrendingUp, color: '#F59E0B', desc: 'Consulting audits and growth strategies' }
  ];

  // Featured Insights data (Section 2)
  const featuredArticles = [
    {
      id: 'feat-1',
      category: 'Enterprise Risk',
      title: 'Building a Proactive Risk Management Framework',
      tagline: 'Identify. Assess. Mitigate.',
      inspiredBy: 'FactSafe Risk Assessment',
      summary: 'Learn how organizations proactively identify operational, financial and compliance risks before they impact business performance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      date: 'June 9, 2026'
    },
    {
      id: 'feat-2',
      category: 'Compliance',
      title: 'Continuous Compliance Through Digital Monitoring',
      tagline: 'Monitor. Verify. Improve',
      inspiredBy: 'FactSafe Compliance',
      summary: 'Strengthen compliance by automating evidence collection, tracking corrective actions and maintaining complete audit readiness.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      date: 'June 4, 2026'
    },
    {
      id: 'feat-3',
      category: 'Supplier Risk',
      title: 'Managing Supplier Risk with Data-Driven Decisions',
      tagline: 'Measure. Monitor. Improve.',
      inspiredBy: 'FactSafe Supplier Risk',
      summary: 'Improve supplier performance using structured assessments, automated scoring and centralized monitoring dashboards.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      date: 'May 28, 2026'
    }
  ];

  // Knowledge Highlights (Section 4)
  const knowledgeHighlights = [
    {
      title: 'Centralized Risk Register',
      description: 'Maintain a single repository to identify, classify and monitor organizational risks across departments and business units.',
      icon: Factory,
      color: '#2563EB'
    },
    {
      title: 'Supplier Risk Assessment',
      description: 'Evaluate supplier performance using configurable risk parameters, compliance scores and continuous monitoring.',
      icon: ShieldCheck,
      color: '#14B8A6'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Track regulatory requirements, evidence collection and audit readiness through automated workflows.',
      icon: BarChart3,
      color: '#F59E0B'
    },
    {
      title: 'Risk Analytics',
      description: 'Interactive dashboards provide real-time visibility into risk trends, priorities and mitigation progress.',
      icon: Layers,
      color: '#8B5CF6'
    },
    {
      title: 'Corrective Actions',
      description: 'Assign, monitor and verify corrective and preventive actions to ensure timely risk resolution.',
      icon: AlertTriangle,
      color: '#EF4444'
    },
    {
      title: 'Enterprise Governance',
      description: 'Support strategic decision-making with standardized risk assessments and organization-wide governance.',
      icon: TrendingUp,
      color: '#10B981'
    }
  ];

  // Latest Insights - 6 Card Blog Grid (Section 5)
  const latestInsights = [
    {
      id: 'blog-1',
      title: 'Why Every Enterprise Needs a Risk Register',
      summary: 'A centralized risk register improves visibility, accountability and informed decision-making across the organization.',
      category: 'Enterprise Risk',
      readTime: '5 min read',
      date: 'June 8, 2026',
      image: 'https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-2',
      title: 'Improving Supplier Performance Through Risk Assessment',
      summary: 'Identify high-risk suppliers and strengthen procurement decisions using structured assessments.',
      category: 'Supplier Risk',
      readTime: '6 min read',
      date: 'June 3, 2026',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-3',
      title: 'Preparing for Compliance Audits with Confidence',
      summary: 'Digital evidence management helps organizations stay audit-ready throughout the year.',
      category: 'Compliance',
      readTime: '8 min read',
      date: 'May 25, 2026',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-4',
      title: 'Using Risk Dashboards for Better Decisions',
      summary: 'Transform operational data into meaningful insights using interactive risk analytics dashboards.',
      category: 'Risk Analytics',
      readTime: '4 min read',
      date: 'May 18, 2026',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-5',
      title: 'Managing Corrective Actions Efficiently',
      summary: 'Track mitigation plans, assign responsibilities and monitor progress from a centralized platform.',
      category: 'Corrective Actions',
      readTime: '5 min read',
      date: 'May 10, 2026',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-6',
      title: 'Building a Culture of Risk Awareness',
      summary: 'Create an organization-wide approach to identifying, assessing and managing business risks.',
      category: 'Enterprise Risk',
      readTime: '7 min read',
      date: 'April 29, 2026',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Customer Success Perspective (Section 6)
  const customerSuccessQuotes = [
    {
      theme: 'Enterprise Risk Management',
      quote: "FactSafe enabled us to identify critical operational risks early and implement mitigation strategies before they impacted business performance.",
      author: 'Chief Risk Officer',
      company: 'Leading Manufacturing Enterprise'
    },
    {
      theme: 'Supplier Governance',
      quote: "Our supplier evaluation process became faster, more transparent and completely data-driven after implementing FactSafe.",
      author: 'Procurement Head',
      company: 'Global Supply Chain Company'
    },
    {
      theme: 'Compliance Excellence',
      quote: "Managing compliance activities, evidence and corrective actions from one platform significantly improved our audit readiness.",
      author: 'Compliance Manager',
      company: 'Industrial Manufacturing Group'
    },
    {
      theme: 'Operational Visibility',
      quote: "Interactive dashboards provided management with real-time visibility into organizational risks, enabling faster and more confident decisions.",
      author: 'Operations Director',
      company: 'Enterprise Solutions Organization'
    }
  ];

  // Future Insights placeholders (Section 8)
  const futureInsights = [
    {
      tag: 'Enterprise Guide',
      title: 'Building a Risk-Aware Organization',
      status: 'Coming Soon'
    },
    {
      tag: 'Whitepaper',
      title: 'Modern Supplier Risk Assessment Framework',
      status: 'In Development'
    },
    {
      tag: 'Best Practices',
      title: 'Digital Compliance Management for Enterprises',
      status: 'Publishing Soon'
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

  // Filter latest insights based on selectedCategory
  const filteredInsights = selectedCategory === 'All'
    ? latestInsights
    : latestInsights.filter(post => post.category === selectedCategory);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      style={{ backgroundColor: '#F8FAFC' }}
    >
      {/* SECTION 1: HERO SECTION */}
      <section
        className="inner-hero"
        style={{
          position: 'relative',
          padding: '180px 0 120px 0',
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.94)), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#F8FAFC',
          borderBottom: 'none'
        }}
      >
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
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
              backgroundColor: 'rgba(20, 184, 166, 0.15)',
              color: '#14B8A6',
              borderRadius: '30px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              marginBottom: '20px',
              border: '1px solid rgba(20, 184, 166, 0.25)'
            }}
          >
            <Sparkles size={14} />
            <span>FACTSAFE RISK ASSESSMENT</span>
          </motion.div>
          <h1
            className="inner-hero-title"
            style={{
              fontSize: '54px',
              fontWeight: 800,
              color: '#FFFFFF',
              maxWidth: '850px',
              margin: '0 auto 20px auto',
              lineHeight: 1.15,
              fontFamily: 'var(--font-headings)'
            }}
          >
            Enterprise Risk Intelligence for Better Decision Making
          </h1>
          <p
            style={{
              color: '#cbd5e1',
              fontSize: '19px',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400,
              fontFamily: 'var(--font-body)'
            }}
          >
            Explore expert insights on enterprise risk management, supplier assessments, compliance monitoring and governance to build resilient organizations.
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
            backgroundColor: '#F8FAFC',
            clipPath: 'ellipse(60% 100% at 50% 100%)'
          }}
        ></div>
      </section>

      {/* SECTION 2: FEATURED INSIGHTS */}
      <section className="section" style={{ padding: '80px 0 100px 0' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px', textAlign: 'left', marginLeft: '0' }}>
            <span className="section-subtitle" style={{ color: '#2563EB' }}>FEATURED INSIGHTS</span>
            <h2 className="section-title" style={{ fontSize: '38px', color: '#0F172A' }}>Risk Assessment Insights</h2>
            <p className="section-desc" style={{ maxWidth: '600px' }}>Discover expert perspectives, best practices and practical strategies for managing enterprise risks effectively.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {featuredArticles.map((article,) => (
              <motion.article
                key={article.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.08)'
                }}
              >
                {/* Image header with category badge */}
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0) 60%, rgba(15,23,42,0.4) 100%)' }}></div>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
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
                    <span style={{ fontSize: '11px', color: '#14B8A6', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {article.tagline}
                    </span>
                    <span style={{ color: '#94a3b8', fontSize: '12px' }}>•</span>
                    <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                      {article.inspiredBy}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '21px',
                      color: '#0F172A',
                      marginBottom: '14px',
                      lineHeight: 1.35,
                      fontWeight: 700,
                      fontFamily: 'var(--font-headings)'
                    }}
                  >
                    {article.title}
                  </h3>

                  <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                    {article.summary}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      color: '#94a3b8',
                      borderTop: '1px solid #f1f5f9',
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
                        color: '#2563EB',
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

      {/* SECTION 3: INDUSTRY CATEGORIES */}
      <section className="section section-alt" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '48px' }}>
            <span className="section-subtitle">KNOWLEDGE HUB</span>
            <h2 className="section-title">Risk Management Categories</h2>
            <p className="section-desc">Explore specialized topics covering enterprise risk management, supplier governance, compliance and digital risk intelligence.</p>
          </div>

          {/* Large Interactive Category Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}
          >
            {categoriesList.map((cat,) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.name;

              return (
                <motion.div
                  key={cat.name}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedCategory(cat.name)}
                  style={{
                    backgroundColor: isActive ? '#0F172A' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#1E293B',
                    border: isActive ? '1px solid #0F172A' : '1px solid rgba(15, 23, 42, 0.05)',
                    padding: '24px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: isActive
                      ? '0 12px 24px -10px rgba(15, 23, 42, 0.3)'
                      : '0 4px 12px -2px rgba(15, 23, 42, 0.03)',
                    transition: 'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(37, 99, 235, 0.05)',
                      color: isActive ? '#14B8A6' : cat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isActive ? '#FFFFFF' : '#0F172A',
                      marginBottom: '6px'
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: isActive ? '#94a3b8' : '#64748B',
                      lineHeight: 1.4
                    }}
                  >
                    {cat.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Reset Filter Button if active */}
          {selectedCategory !== 'All' && (
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <button
                onClick={() => setSelectedCategory('All')}
                className="btn btn-secondary btn-sm"
                style={{
                  borderRadius: '30px',
                  padding: '8px 20px',
                  backgroundColor: '#FFFFFF',
                  color: '#2563EB',
                  borderColor: '#2563EB'
                }}
              >
                Reset Filter (Show All Articles)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: KNOWLEDGE HIGHLIGHTS */}
      <section className="section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">KEY CAPABILITIES</span>
            <h2 className="section-title">FactSafe Highlights</h2>
            <p className="section-desc"> Core capabilities that empower organizations to identify, assess and manage risks efficiently.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {knowledgeHighlights.map((hl, idx) => {
              const IconComp = hl.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="glass-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(15, 23, 42, 0.05)',
                    borderLeft: `4px solid ${hl.color}`,
                    borderRadius: '12px',
                    padding: '28px',
                    boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(15, 23, 42, 0.03)',
                        color: hl.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComp size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', color: '#0F172A', fontWeight: 700, marginBottom: '8px' }}>
                        {hl.title}
                      </h3>
                      <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.55 }}>
                        {hl.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST INSIGHTS */}
      <section className="section section-alt" style={{ padding: '100px 0' }}>
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
              <span className="section-subtitle">LATEST ARTICLES</span>
              <h2 className="section-title" style={{ marginBottom: '0', fontSize: '36px' }}>
                Latest Risk Assessment Articles {selectedCategory !== 'All' && `: ${selectedCategory}`}
              </h2>
            </div>
            <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 500 }}>
              Showing {filteredInsights.length} Risk Resources
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
              {filteredInsights.map((insight) => (
                <motion.article
                  key={insight.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="product-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)'
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
                        color: '#2563EB',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      {insight.category}
                    </span>
                    <h3 style={{ fontSize: '18px', color: '#0F172A', fontWeight: 700, lineHeight: 1.4, margin: '0' }}>
                      {insight.title}
                    </h3>
                  </div>

                  {/* Body excerpt */}
                  <div style={{ padding: '0 24px 24px 24px', flexGrow: 1 }}>
                    <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.6, margin: '0' }}>
                      {insight.summary}
                    </p>
                  </div>

                  {/* Footer Stats & CTA */}
                  <div
                    style={{
                      padding: '16px 24px',
                      backgroundColor: '#F8FAFC',
                      borderTop: '1px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '12px', color: '#94a3b8' }}>
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#0F172A',
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
      <section className="section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">CUSTOMER SUCCESS</span>
            <h2 className="section-title">Trusted by Organizations for Smarter Risk Management</h2>
            <p className="section-desc">See how organizations have improved governance, compliance and operational resilience using FactSafe.</p>
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
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '40px',
                  border: '1px solid rgba(15, 23, 42, 0.05)',
                  boxShadow: '0 8px 30px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                {/* Visual quote mark */}
                <div style={{ position: 'absolute', top: '32px', right: '32px', color: '#f1f5f9' }}>
                  <Quote size={54} strokeWidth={1} fill="currentColor" />
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#14B8A6',
                      backgroundColor: 'rgba(20, 184, 166, 0.06)',
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
                      color: '#1E293B',
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
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <span style={{ fontSize: '15px', color: '#0F172A', fontWeight: 700 }}>{q.author}</span>
                  <span style={{ fontSize: '13px', color: '#64748B' }}>{q.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: NEWSLETTER SUBSCRIPTION */}
      <section className="section section-alt" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="glass-card"
            style={{
              padding: '60px 48px',
              border: '1px solid rgba(37, 99, 235, 0.1)',
              borderRadius: '20px',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 20px 40px -20px rgba(15, 23, 42, 0.1)'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}
            >
              <Mail size={24} />
            </div>

            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
              Stay Updated on Risk & Compliance
            </h2>

            <p style={{ color: '#64748B', fontSize: '16px', marginBottom: '36px', maxWidth: '580px', margin: '0 auto 36px auto' }}>
              Receive the latest insights on enterprise risk management, compliance, supplier governance and industry best practices.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  fontSize: '16px'
                }}
              >
                <CheckCircle2 size={20} />
                <span>Subscription successful! Welcome to FactSafe Insights.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ flexGrow: 1, minWidth: '280px' }}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    style={{
                      height: '50px',
                      borderRadius: '8px',
                      border: '1.5px solid rgba(15, 23, 42, 0.12)',
                      padding: '0 18px',
                      fontSize: '15px'
                    }}
                  />
                  {error && (
                    <span style={{ color: '#EF4444', fontSize: '12px', textAlign: 'left', display: 'block', marginTop: '6px', paddingLeft: '4px' }}>
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
                    borderRadius: '8px',
                    backgroundColor: '#F59E0B',
                    color: '#FFFFFF'
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
      <section className="section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle">UPCOMING RESOURCES</span>
            <h2 className="section-title">More Risk Management Resources Coming Soon</h2>
            <p className="section-desc">Explore upcoming whitepapers, implementation guides and best practices focused on enterprise risk and compliance.</p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {futureInsights.map((fi, idx) => (
              <div
                key={idx}
                style={{
                  border: '2px dashed rgba(15, 23, 42, 0.08)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(248, 250, 252, 0.4)',
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
                    backgroundColor: 'rgba(205, 166, 103, 0.03)',
                    color: '#94a3b8',
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
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px'
                  }}
                >
                  {fi.tag}
                </span>

                <h3 style={{ fontSize: '16px', color: '#64748B', fontWeight: 600, marginBottom: '16px', lineHeight: 1.4, maxWidth: '240px' }}>
                  {fi.title}
                </h3>

                <span
                  style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    fontWeight: 500,
                    backgroundColor: '#F1F5F9',
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
      <section className="section" style={{ padding: '0', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            padding: '100px 0',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #2563EB 100%)',
            color: '#FFFFFF',
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
                  color: '#FFFFFF',
                  marginBottom: '20px',
                  letterSpacing: '-1.5px',
                  fontFamily: 'var(--font-headings)'
                }}
              >
                Ready to Strengthen Your Risk Management?
              </h2>

              <p
                style={{
                  fontSize: '18px',
                  color: '#cbd5e1',
                  marginBottom: '38px',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-body)'
                }}
              >
                Discover how FactSafe helps organizations proactively identify risks, streamline compliance and make informed business decisions.
              </p>

              <div className="btn-group" style={{ justifyContent: 'center' }}>
                <button
                  onClick={() => window.location.href = '/products'}
                  className="btn btn-cta"
                  style={{ backgroundColor: '#F59E0B', color: '#FFFFFF', minWidth: '180px' }}
                >
                  Explore FactSafe <ArrowRight size={15} />
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
