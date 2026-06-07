import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Mail, 
  Send,
  CheckCircle2,
  Tag
} from 'lucide-react';

export default function Blog() {
  const [activeTab, setActiveTab] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

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

  const categories = ['All', 'Technology', 'Manufacturing', 'Compliance', 'ERP'];

  const blogPosts = [
    {
      id: 1,
      category: 'Manufacturing',
      title: 'Maximizing Floor OEE: The Ultimate Work-In-Progress Tracking Guide',
      excerpt: 'Discover the methodology behind real-time WIP audits and see how tracking assembly routing boosts factory yield by 15%.',
      date: 'June 3, 2026',
      readTime: '6 min read',
      author: 'M.D. Manohar',
      featured: true,
      imagePlaceholderColor: '#0A2540'
    },
    {
      id: 2,
      category: 'Compliance',
      title: 'Automating ISO 9001 Compliance audits with Evidence Lockers',
      excerpt: 'Manual paperwork is a risk. Learn how digital evidence lockers secure compliance records and expedite auditor approvals.',
      date: 'May 28, 2026',
      readTime: '4 min read',
      author: 'Compliance Lead',
      featured: false,
      imagePlaceholderColor: '#00B4D8'
    },
    {
      id: 3,
      category: 'Technology',
      title: 'Choosing Between Custom Web Portals and Legacy Desktop Client ERPs',
      excerpt: 'Why modern mobile-responsive web platforms are replacing traditional, rigid terminal systems on plant floors.',
      date: 'May 15, 2026',
      readTime: '5 min read',
      author: 'IT Architect',
      featured: false,
      imagePlaceholderColor: '#38BDF8'
    },
    {
      id: 4,
      category: 'ERP',
      title: 'Reconciling Logistics Surcharges: The Courier Cost Leakage Audit',
      excerpt: 'A deep dive into how businesses are overcharged up to 12% on shipping rates due to weight discrepancies and card errors.',
      date: 'May 10, 2026',
      readTime: '4 min read',
      author: 'Logistics Team',
      featured: false,
      imagePlaceholderColor: '#F97316'
    },
    {
      id: 5,
      category: 'Manufacturing',
      title: 'Developing Supervisors: Floor Coaching for Digital Transition',
      excerpt: 'Technology only succeeds if adopted. How to handle change management when deploying automated ERP terminals.',
      date: 'April 22, 2026',
      readTime: '5 min read',
      author: 'Operations Director',
      featured: false,
      imagePlaceholderColor: '#0A2540'
    },
    {
      id: 6,
      category: 'ERP',
      title: 'Microfinance Systems: Developing Secure Ledgers for Rural Banks',
      excerpt: 'Exploring technical safeguards required to deploy offline ledger tracking interfaces for distributed loan officers.',
      date: 'April 14, 2026',
      readTime: '7 min read',
      author: 'M.D. Manohar',
      featured: false,
      imagePlaceholderColor: '#020617'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const filteredPosts = activeTab === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeTab !== 'All');

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Insights & Articles</span>
          <h1 className="inner-hero-title">Operational Excellence Blog</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            Whitepapers, guides, and engineering updates from our industrial consulting experts in Bangalore.
          </p>
        </div>
      </section>

      {/* --- FEATURED & ARTICLES LAYOUT --- */}
      <section className="section">
        <div className="container">
          
          {/* Category Tabs */}
          <div className="blog-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`blog-tab-btn ${activeTab === cat ? 'active' : ''}`}
              >
                {cat === 'All' ? 'All Articles' : `${cat} Category`}
              </button>
            ))}
          </div>

          {/* Featured Post Spotlight (Only show when 'All' tab is active) */}
          {activeTab === 'All' && featuredPost && (
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="whileInView" 
              viewport={{ once: true }}
              className="glass-card" 
              style={{ padding: '0', overflow: 'hidden', marginBottom: '48px' }}
            >
              <div className="grid-2" style={{ gap: '0' }}>
                {/* Visual placeholder */}
                <div style={{ height: '100%', minHeight: '300px', background: `linear-gradient(135deg, ${featuredPost.imagePlaceholderColor} 0%, #020617 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', color: '#fff', textAlign: 'center' }}>
                  <BookOpen size={48} style={{ color: 'var(--secondary)', marginBottom: '16px' }} />
                  <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Featured Whitepaper</span>
                </div>
                {/* Story info */}
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px', display: 'inline-block' }}>
                    {featuredPost.category}
                  </span>
                  <h2 style={{ fontSize: '26px', marginBottom: '12px', lineHeight: '1.3' }}>{featuredPost.title}</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>{featuredPost.excerpt}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} />{featuredPost.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} />{featuredPost.readTime}</span>
                    </div>
                    <span style={{ fontWeight: '600', color: 'var(--primary)' }}>By {featuredPost.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid-3">
            {regularPosts.map((post) => (
              <motion.article 
                key={post.id} 
                variants={fadeInUp} 
                initial="initial" 
                whileInView="whileInView" 
                viewport={{ once: true }}
                className="product-card"
              >
                {/* Visual placeholder box */}
                <div style={{ height: '180px', background: `linear-gradient(135deg, ${post.imagePlaceholderColor} 0%, #020617 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Tag size={32} style={{ opacity: 0.3 }} />
                </div>
                <div className="product-card-header" style={{ border: 'none', paddingBottom: '16px' }}>
                  <span className="product-tagline" style={{ fontSize: '11px' }}>{post.category}</span>
                  <h3 className="card-title" style={{ fontSize: '18px', marginTop: '6px', lineHeight: '1.4' }}>{post.title}</h3>
                </div>
                <p style={{ padding: '0 32px', color: 'var(--text-muted)', fontSize: '14px', flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                
                <div style={{ padding: '24px 32px 32px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', borderTop: '1px solid rgba(10,37,64,0.05)', marginTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{post.author}</span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER SUBSCRIPTION --- */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="glass-card" style={{ padding: '48px', border: '1px solid rgba(0, 180, 216, 0.15)', textAlign: 'center', background: 'radial-gradient(circle at center, var(--background) 0%, var(--alternate-bg) 100%)' }}>
            <div className="card-icon" style={{ margin: '0 auto 20px auto', color: 'var(--secondary)', backgroundColor: '#fff', border: '1px solid rgba(0,180,216,0.1)' }}>
              <Mail />
            </div>
            
            <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Subscribe to Operational Insights</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px auto' }}>
              Receive updates on industrial compliance protocols, ERP audit methods, and OEE performance strategies.
            </p>

            {subscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600' }}
              >
                <CheckCircle2 size={18} />
                <span>Subscription successful. Thank you!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ flexGrow: 1, maxWidth: '360px', minWidth: '240px' }}>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    style={{ height: '48px' }}
                  />
                  {error && <span style={{ color: '#ef4444', fontSize: '11px', textAlign: 'left', display: 'block', marginTop: '4px' }}>{error}</span>}
                </div>
                <button type="submit" className="btn btn-cta" style={{ height: '48px', padding: '0 28px' }}>
                  Subscribe
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
