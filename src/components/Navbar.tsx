import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courier Optimization', path: '/services' },
    { name: 'Production Tracking', path: '/products' },
    { name: 'Risk Management', path: '/blog' },
    { name: 'Compliance Hub', path: '/compliance' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo Section */}
        <NavLink to="/" className="logo-container" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img
            src="/images/logo-planet.png"
            alt="CEA Infotech"
            className="logo-img-planet"
            style={{
              height: '38px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              flexShrink: 0,
              transition: 'height 0.3s ease'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ display: 'block', fontSize: '17px', fontWeight: '800', color: '#F5F5F5', fontFamily: 'var(--font-headings)', letterSpacing: '0.2px' }}>CEA Infotech</span>
            <span style={{ display: 'block', fontSize: '9px', color: 'var(--supporting)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>Private Limited</span>
          </div>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button and Hamburger */}
        <div className="nav-actions">
          <button 
            onClick={() => navigate('/contact')} 
            className="btn btn-cta btn-sm"
          >
            Book a Demo
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Hamburger Trigger */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Backdrop Overlay */}
        {isOpen && (
          <div className="mobile-nav-overlay" onClick={closeMenu} />
        )}

        {/* Mobile Navigation Drawer */}
        <ul className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          {/* Planet logo branding at top of mobile drawer */}
          <li style={{ marginBottom: '8px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <NavLink to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img
                src="/images/logo-planet.png"
                alt="CEA Infotech"
                style={{
                  height: '36px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'screen',
                  flexShrink: 0,
                }}
              />
              <div>
                <span style={{ display: 'block', fontSize: '15px', fontWeight: '800', color: 'var(--text-main)', fontFamily: 'var(--font-headings)', lineHeight: 1 }}>CEA INFOTECH</span>
                <span style={{ display: 'block', fontSize: '9px', color: 'var(--supporting)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>Operational Excellence</span>
              </div>
            </NavLink>
          </li>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li style={{ marginTop: '16px' }}>
            <button 
              onClick={() => {
                closeMenu();
                navigate('/contact');
              }} 
              className="btn btn-cta w-full"
              style={{ width: '100%' }}
            >
              Book a Demo
              <ArrowRight size={16} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
