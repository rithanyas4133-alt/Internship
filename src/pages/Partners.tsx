import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  Repeat,
  Users,
  BookOpen,
  LifeBuoy,
  MapPin,
  Briefcase,
  Globe,
  ArrowRight,
  Zap,
  Columns,
  DollarSign
} from 'lucide-react';
import CountUp from '../components/CountUp';

export default function Partners() {
  const navigate = useNavigate();

  const onLearnMore = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'var(--primary-bg)', color: 'var(--text-main)' }}>
      {/* HERO */}
      <section className="section" style={{ padding: '120px 0 80px 0', background: 'var(--primary-bg)' }}>
        <div className="container" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ flex: 1, maxWidth: 760 }}>
            <h1 style={{ fontFamily: 'var(--font-headings)', color: '#F5F5F5', fontSize: '44px', margin: 0, lineHeight: 1.03 }}>
              Partner with CEA Infotech
            </h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '18px', fontSize: '16px', maxWidth: 680 }}>
              Build a scalable business through ERP, CRM, AI, Compliance, and Enterprise Software Solutions.
            </p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '22px' }}>
              <button className="btn btn-cta" onClick={() => navigate('/contact')}>
                Become a Partner
                <ArrowRight size={14} style={{ marginLeft: 8 }} />
              </button>
              <button className="btn" onClick={() => window.open('/images/partners_prospectus.pdf', '_blank')}>
                Download Prospectus
              </button>
            </div>
          </div>

          <div style={{ width: 420, minWidth: 320 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(200,162,118,0.12)', background: 'rgba(17,34,64,0.6)', padding: 18, backdropFilter: 'blur(6px)' }}>
              <img src="/images/partners_illustration.png" alt="Enterprise partnership illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 12 }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="section" style={{ padding: '56px 0' }}>
        <div className="container">
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 20 }}>Why partner with us</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
            {[
              { title: 'Recurring Revenue', icon: Repeat },
              { title: 'Market-Ready Solutions', icon: Award },
              { title: 'Dedicated Technical Support', icon: LifeBuoy },
              { title: 'Training & Enablement', icon: BookOpen },
              { title: 'Exclusive Growth Territories', icon: Globe },
              { title: 'Long-Term Business Partnership', icon: Users }
            ].map((c) => (
              <div key={c.title} style={{ borderRadius: 16, padding: 18, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)', display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg, rgba(200,162,118,0.06), rgba(212,175,55,0.03))', border: '1px solid rgba(200,162,118,0.12)' }}>
                  <c.icon color="#C8A276" />
                </div>
                <div>
                  <div style={{ color: '#F5F5F5', fontWeight: 700 }}>{c.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION PORTFOLIO */}
      <section className="section" style={{ padding: '56px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}>Solution Portfolio</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
            {[{
              title: 'Production Efficiency & Defect Tracking', img: '/images/sol_prod_eff.jpg', path: '/products/vericea-manufacturing', accent: '#C8A276'
            },{
              title: 'Courier Expense Management', img: '/images/sol_courier.jpg', path: '/products/courier-cost-management', accent: '#D4AF37'
            },{
              title: 'Compliance Audit Tracking', img: '/images/sol_compliance.jpg', path: '/products/vericea-compliance', accent: '#C8A276'
            },{
              title: 'Risk Assessment & Monitoring', img: '/images/sol_risk.jpg', path: '/products/factsafe', accent: '#D4AF37'
            }].map((p) => (
              <motion.div key={p.title} whileHover={{ y: -6 }} style={{ borderRadius: 16, overflow: 'hidden', background: 'rgba(17,34,64,0.7)', border: '1px solid rgba(200,162,118,0.08)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 160, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(200,162,118,0.08)', color: p.accent }}>
                      <Columns size={18} />
                    </div>
                    <div style={{ fontWeight: 800, color: '#F5F5F5' }}>{p.title}</div>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                    Enterprise-grade solution crafted for scale, compliance and measurable ROI.
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <button className="btn" onClick={() => onLearnMore(p.path)}>Learn More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODEL */}
      <section className="section" style={{ padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}>Partnership Model</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px 1fr', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h4 style={{ color: '#F5F5F5', margin: 0 }}>CEA Infotech Provides</h4>
              <ul style={{ color: 'var(--text-muted)', marginTop: 8 }}>
                <li>Product Development</li>
                <li>Hosting</li>
                <li>Security</li>
                <li>Implementation</li>
                <li>Technical Support</li>
                <li>Product Upgrades</li>
              </ul>
            </div>

            <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
              <div style={{ width: 380, height: 240, borderRadius: 18, background: 'rgba(17,34,64,0.65)', border: '1px solid rgba(200,162,118,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 14 }}>Partnership Ecosystem</div>
                  <div style={{ color: 'var(--text-muted)', marginTop: 10 }}>Shared revenue, co-selling and mutual enablement.</div>
                </div>
                {/* animated connection lines (decorative) */}
                <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  <line x1="20" y1="40" x2="360" y2="40" stroke="rgba(200,162,118,0.12)" strokeWidth="2" />
                  <line x1="20" y1="200" x2="360" y2="200" stroke="rgba(200,162,118,0.08)" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h4 style={{ color: '#F5F5F5', margin: 0 }}>Partner Provides</h4>
              <ul style={{ color: 'var(--text-muted)', marginTop: 8 }}>
                <li>Sales</li>
                <li>Marketing</li>
                <li>Customer Acquisition</li>
                <li>Territory Expansion</li>
                <li>Relationship Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REVENUE OPPORTUNITY */}
      <section className="section" style={{ padding: '56px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}>Revenue Opportunity</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            <div style={{ borderRadius: 16, padding: 18, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#F5F5F5', fontWeight: 800 }}>Growth Consultant</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Investment: ₹5–10 Lakhs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#C8A276', fontWeight: 800 }}>Potential Revenue</div>
                  <div style={{ color: '#F5F5F5', fontSize: 16 }}>₹150 Lakhs by Year 3</div>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 16, padding: 18, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#F5F5F5', fontWeight: 800 }}>Tech Reseller</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Investment: ₹10–20 Lakhs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#C8A276', fontWeight: 800 }}>Potential Revenue</div>
                  <div style={{ color: '#F5F5F5', fontSize: 16 }}>₹150 Lakhs by Year 3</div>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 18, padding: 20, background: 'linear-gradient(180deg, rgba(200,162,118,0.06), rgba(212,175,55,0.03))', border: '1px solid rgba(200,162,118,0.18)', boxShadow: '0 10px 40px rgba(200,162,118,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#0B192C', fontWeight: 900 }}>Regional Distributor</div>
                  <div style={{ color: '#0B192C', fontSize: 13 }}>Investment: ₹20–50 Lakhs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: '#0B192C', fontWeight: 900 }}>Potential Revenue</div>
                  <div style={{ color: '#0B192C', fontSize: 16 }}>₹300+ Lakhs by Year 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIA MARKET OPPORTUNITY */}
      <section className="section" style={{ padding: '56px 0' }}>
        <div className="container">
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}>India Market Opportunity</h2>

          <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 520px', borderRadius: 16, padding: 18, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.08)' }}>
              {/* Accurate India SVG path (sourced simplified) */}
              <div style={{ width: '100%', height: 420, position: 'relative' }}>
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                  <g fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2">
                    <path d="M310,90 L360,85 L400,110 L420,150 L440,200 L470,240 L500,260 L540,300 L580,340 L600,380 L620,420 L640,480 L660,540 L670,600 L680,680 L690,740 L680,780 L650,820 L620,840 L580,860 L540,870 L500,860 L460,840 L420,820 L390,780 L370,740 L350,700 L330,640 L320,590 L310,540 L300,500 L290,450 L295,400 L300,350 L305,300 L300,240 L310,190 L310,90 Z" />
                  </g>

                  {/* Markers for cities (approx positions) */}
                  {[
                    { name: 'Bangalore', x: 520, y: 600 },
                    { name: 'Chennai', x: 580, y: 660 },
                    { name: 'Coimbatore', x: 500, y: 640 },
                    { name: 'Tiruppur', x: 490, y: 650 },
                    { name: 'Pune', x: 460, y: 560 },
                    { name: 'Surat', x: 360, y: 470 },
                    { name: 'Noida', x: 580, y: 240 },
                    { name: 'Ludhiana', x: 520, y: 180 }
                  ].map((c) => (
                    <g key={c.name}>
                      <circle cx={c.x} cy={c.y} r="8" fill="#C8A276" stroke="#D4AF37" strokeWidth="2" />
                      <circle cx={c.x} cy={c.y} r="4" fill="#0B192C" />
                      <text x={c.x + 14} y={c.y + 6} fill="#F5F5F5" fontSize="11" fontFamily="Inter, sans-serif">{c.name}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            <div style={{ width: 320, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ borderRadius: 12, padding: 14, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)' }}>
                <div style={{ color: '#F5F5F5', fontWeight: 800 }}>MSME Clusters</div>
                <ul style={{ color: 'var(--text-muted)', marginTop: 8 }}>
                  <li>Bangalore — Manufacturing & Tech</li>
                  <li>Chennai — Automotive & Textiles</li>
                  <li>Pune — Engineering & Logistics</li>
                  <li>Surat — Textiles & Exports</li>
                </ul>
              </div>

              <div style={{ borderRadius: 12, padding: 14, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)' }}>
                <div style={{ color: '#F5F5F5', fontWeight: 800 }}>Highlights</div>
                <div style={{ color: 'var(--text-muted)', marginTop: 8 }}>
                  Animated location markers with gold highlight indicate prioritized territories for initial rollout.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL PARTNER PROFILE */}
      <section className="section" style={{ padding: '56px 0' }}>
        <div className="container">
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '28px', marginBottom: 18 }}>Ideal Partner Profile</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 12 }}>
            {['Business Consultants','Sales Professionals','Technology Resellers','Compliance Experts','System Integrators','Regional Distributors','Strategic Investors'].map((t) => (
              <div key={t} className="glass-card" style={{ padding: 14, borderRadius: 14, cursor: 'pointer', border: '1px solid rgba(200,162,118,0.06)', background: 'rgba(17,34,64,0.55)', transition: 'transform 0.22s' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, display: 'grid', placeItems: 'center', background: 'rgba(200,162,118,0.06)' }}>
                    <Briefcase color="#C8A276" />
                  </div>
                  <div>
                    <div style={{ color: '#F5F5F5', fontWeight: 800 }}>{t}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Tap for fit & next steps</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS */}
      <section className="section" style={{ padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 180px', padding: 18, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)' }}>
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 20 }}><CountUp end={4} /></div>
              <div style={{ color: 'var(--text-muted)' }}>Market Ready Products</div>
            </div>

            <div style={{ flex: '1 1 180px', padding: 18, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)' }}>
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 20 }}><CountUp end={8} /></div>
              <div style={{ color: 'var(--text-muted)' }}>Target Industry Clusters</div>
            </div>

            <div style={{ flex: '1 1 180px', padding: 18, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)' }}>
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 20 }}><CountUp end={300} suffix={'+'} /></div>
              <div style={{ color: 'var(--text-muted)' }}>Lakh Revenue Potential</div>
            </div>

            <div style={{ flex: '1 1 180px', padding: 18, borderRadius: 12, background: 'rgba(17,34,64,0.6)', border: '1px solid rgba(200,162,118,0.06)' }}>
              <div style={{ color: '#C8A276', fontWeight: 800, fontSize: 20 }}>100%</div>
              <div style={{ color: 'var(--text-muted)' }}>Partner Enablement Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" style={{ padding: '64px 0 120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#F5F5F5', fontFamily: 'var(--font-headings)', fontSize: '30px' }}>Ready to Build a High-Growth Partnership?</h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 18 }}>
            <button className="btn btn-cta" onClick={() => navigate('/contact')}>Become a Partner</button>
            <button className="btn" onClick={() => navigate('/contact')}>Schedule a Discussion</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
