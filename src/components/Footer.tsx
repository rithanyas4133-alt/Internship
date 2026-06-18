import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Upper Footer section */}
      <div className="section" style={{ padding: '80px 0 60px 0' }}>
        <div className="container">
          <div className="grid-4">
            {/* Column 1: Brand Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <Link to="/" onClick={handleScrollToTop} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {/* Planet logo only (replace previous text-logo and tagline) */}
                  <img
                    src="/images/logo.png"
                    alt="Planet Logo"
                    style={{
                      height: '40px',
                      width: 'auto',
                      objectFit: 'contain',
                      mixBlendMode: 'screen',
                      display: 'block',
                    }}
                  />
                  <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', letterSpacing: '0.4px' }}>CEA Infotech</span>
                </Link>
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                Delivering premium enterprise SaaS, custom ERP, production tracking, and compliance management solutions since June 2015.
              </p>
              {/* Social links - replaced with inline SVGs to avoid missing exports */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <a href="#" className="social-icon" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{ color: 'var(--text-main)', fontSize: '16px', fontWeight: '600', marginBottom: '24px', letterSpacing: '0.5px' }}>SOLUTIONS</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <li>
                  <Link to="/products" onClick={handleScrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Vericea® Manufacturing <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={handleScrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Vericea® Compliance <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={handleScrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    FactSafe Risk Platform <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={handleScrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Courier Cost Optimizer <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={handleScrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Family Tree Platform <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 style={{ color: 'var(--text-main)', fontSize: '16px', fontWeight: '600', marginBottom: '24px', letterSpacing: '0.5px' }}>COMPANY</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
                <li><Link to="/services" onClick={handleScrollToTop}>Courier Optimization</Link></li>
                <li><Link to="/blog" onClick={handleScrollToTop}>Risk Management</Link></li>
                <li><Link to="/compliance" onClick={handleScrollToTop}>Compliance Hub</Link></li>
                <li><Link to="/contact" onClick={handleScrollToTop}>Contact</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 style={{ color: 'var(--text-main)', fontSize: '16px', fontWeight: '600', marginBottom: '24px', letterSpacing: '0.5px' }}>CONTACT DETAILS</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPin size={18} style={{ color: 'var(--supporting)', flexShrink: 0, marginTop: '3px' }} />
                  <span>
                    B-205 Century Marvel Apartments,<br />
                    Kempapura, Hebbal,<br />
                    Bangalore - 560024, India
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Phone size={18} style={{ color: 'var(--supporting)', flexShrink: 0 }} />
                  <a href="tel:+919980138172" style={{ color: 'inherit' }}>+91 9980138172</a>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Mail size={18} style={{ color: 'var(--supporting)', flexShrink: 0 }} />
                  <a href="mailto:manohar.md@ceainfotech.com" style={{ color: 'inherit', wordBreak: 'break-all' }}>manohar.md@ceainfotech.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px 0', fontSize: '13px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src="/images/logo.png"
                alt="CEA Infotech"
                style={{
                  height: '22px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'screen',
                  opacity: 0.95,
                }}
              />
              <span style={{ color: '#FFFFFF', fontWeight: 600, marginRight: '8px' }}>CEA Infotech</span>
              <small style={{ color: 'var(--text-muted)' }}>&copy; {currentYear} All rights reserved.</small>
            </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
