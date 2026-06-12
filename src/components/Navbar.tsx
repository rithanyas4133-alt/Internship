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
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Compliance Hub', path: '/compliance' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo Section */}
        <NavLink to="/" className="logo-container" onClick={closeMenu}>
          <img src="/images/logo2.png" alt="CEA Infotech" className="logo-image" />
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
