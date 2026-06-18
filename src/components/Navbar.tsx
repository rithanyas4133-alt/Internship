import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileSolutionsOpen(false);
  };

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

  const solutionsItems = [
    { name: 'Production Tracking', path: '/products' },
    { name: 'Courier Optimization', path: '/services' },
    { name: 'Risk Management', path: '/blog' },
    { name: 'Compliance Hub', path: '/compliance' }
  ];

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo Section */}
        <NavLink to="/" className="logo-container" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Company Logo" className="logo-image logo-left" />
          <span className="brand-text">CEA Infotech</span>
        </NavLink>

        {/* Right Navigation Wrapper */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ marginRight: '16px' }}>
            <ul className="nav-links" style={{ gap: '36px', display: 'flex', alignItems: 'center', margin: 0, flex: 'none' }}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={{ position: 'relative', display: 'inline-block' }}
              >
                Home
              </NavLink>
            </li>

            {/* Solutions Dropdown */}
            <li 
              style={{ position: 'relative' }} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="nav-link" 
                style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '8px 0' }}
              >
                Solutions
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} style={{ opacity: 0.7 }} />
                </motion.div>
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '240px',
                      background: 'rgba(11, 25, 44, 0.95)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(200, 162, 118, 0.2)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 15px rgba(200, 162, 118, 0.05) inset',
                      borderRadius: '12px',
                      padding: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      zIndex: 50
                    }}
                  >
                    {solutionsItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ textDecoration: 'none' }}
                      >
                        {({ isActive }) => (
                          <motion.div
                            whileHover={{ x: 4, backgroundColor: 'rgba(200, 162, 118, 0.08)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                              display: 'block',
                              padding: '10px 16px',
                              borderRadius: '8px',
                              background: isActive ? 'rgba(200, 162, 118, 0.12)' : 'transparent',
                              color: isActive ? 'var(--supporting)' : '#e2e8f0',
                              fontSize: '14px',
                              fontWeight: isActive ? 600 : 500,
                              borderLeft: isActive ? '3px solid var(--supporting)' : '3px solid transparent'
                            }}
                          >
                            {item.name}
                          </motion.div>
                        )}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <NavLink 
                to="/partners" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA Button and Hamburger */}
        <div className="nav-actions">
          <button 
            onClick={() => navigate('/contact')} 
            className="btn btn-cta btn-sm"
            style={{ color: '#000000', fontWeight: 'bold' }}
          >
            Book a Demo
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Hamburger Trigger */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>

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
          
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          {/* Mobile Solutions Accordion */}
          <li style={{ display: 'flex', flexDirection: 'column' }}>
            <div 
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              className="nav-link"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', width: '100%', padding: '12px 0' }}
            >
              Solutions
              <motion.div animate={{ rotate: isMobileSolutionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} />
              </motion.div>
            </div>
            <AnimatePresence>
              {isMobileSolutionsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  {solutionsItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      style={{ fontSize: '14px', opacity: 0.85, padding: '8px 0' }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink 
              to="/partners" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>

          <li style={{ marginTop: '24px' }}>
            <button 
              onClick={() => {
                closeMenu();
                navigate('/contact');
              }} 
              className="btn btn-cta w-full"
              style={{ width: '100%', color: '#000000', fontWeight: 'bold' }}
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
