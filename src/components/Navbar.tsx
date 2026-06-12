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
    { name: 'Production Tracking', path: '/products' },
    { name: 'Courier Optimization', path: '/services' },
    { name: 'Risk Management', path: '/blog' },
    { name: 'Compliance Hub', path: '/compliance' },
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo Section */}
        <NavLink to="/" className="logo-container" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Company Logo" className="logo-image logo-left" />
          <span className="brand-text">CEA Infotech</span>
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
          {/* Logo branding at top of mobile drawer */}
          <li style={{ marginBottom: '8px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <NavLink to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', justifyContent: 'center' }}>
                <img src="/images/logo.png" alt="Company Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
                <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '18px', letterSpacing: '0.25px' }}>CEA Infotech</span>
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
