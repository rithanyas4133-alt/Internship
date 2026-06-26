import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Solutions submenu items (display name → route) ───────────────────────────
const solutionsItems = [
  { name: 'Production Tracking',   path: '/products'    },
  { name: 'Courier Optimization',  path: '/services'    },
  { name: 'Risk Assessment',       path: '/blog'        },
  { name: 'Audit Hub',             path: '/compliance'  },
];

export default function Navbar() {
  const [isOpen,                setIsOpen]                = useState(false);
  const [isScrolled,            setIsScrolled]            = useState(false);
  const [isDropdownOpen,        setIsDropdownOpen]        = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  // Ref to the navbar <header> element — used to calculate the bar's top offset
  const navbarRef = useRef<HTMLElement>(null);

  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu  = () => { setIsOpen(false); setIsMobileSolutionsOpen(false); };

  // ── Scroll detection ───────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Lock body scroll when the mobile drawer is open ────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // ── Hover delay for the desktop dropdown ─────────────────────────────────
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimerRef.current = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  // Clean up timer on unmount
  useEffect(() => () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  }, []);

  // ── Compute the pixel top of the mega-bar (bottom edge of navbar) ─────────
  // We keep this simple: navbar top (14px or 10px) + navbar height (78px or 68px)
  // adding 10px breathing room. This matches the CSS exactly.
  const megaBarTop = isScrolled
    ? 10 + 52 + 6   // scrolled: top:10 + height:52 + gap:6  = 68px
    : 14 + 60 + 6;  // default:  top:14 + height:60 + gap:6  = 80px

  return (
    <>
      {/* ── NAVBAR BAR ─────────────────────────────────────────────────────── */}
      <header ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">

          {/* Logo */}
          <NavLink to="/" className="logo-container" onClick={closeMenu}>
            <img src="/images/logo.png" alt="CEA Infotech Logo" className="logo-image logo-left" />
            <span className="brand-text">CEA Infotech</span>
          </NavLink>

          {/* Right side wrapper */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>

            {/* ── Desktop nav links ──────────────────────────────────────── */}
            <nav className="desktop-nav" style={{ marginRight: '16px' }}>
              <ul className="nav-links" style={{ gap: '36px', display: 'flex', alignItems: 'center', margin: 0, flex: 'none' }}>

                {/* Home */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    style={{ position: 'relative', display: 'inline-block' }}
                  >
                    Home
                  </NavLink>
                </li>

                {/* Solutions — trigger for the horizontal mega-bar */}
                <li
                  style={{ position: 'relative' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`nav-link solutions-trigger${isDropdownOpen ? ' solutions-trigger--open' : ''}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', padding: '10px 0', userSelect: 'none' }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setIsDropdownOpen(v => !v)}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Solutions
                    <motion.span
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <ChevronDown size={13} style={{ opacity: 0.65 }} />
                    </motion.span>
                  </div>
                </li>

                {/* Partners */}
                <li>
                  <NavLink to="/partners" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Partners
                  </NavLink>
                </li>

                {/* About Us */}
                <li>
                  <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    About Us
                  </NavLink>
                </li>

                {/* Contact */}
                <li>
                  <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Contact
                  </NavLink>
                </li>

              </ul>
            </nav>

            {/* CTA */}
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

            {/* Hamburger (mobile) */}
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── SOLUTIONS HORIZONTAL MEGA-BAR ─────────────────────────────────────
          Rendered as a portal-like fixed element OUTSIDE the navbar so it can
          span the full viewport width and be perfectly center-aligned regardless
          of where "Solutions" sits in the nav.
      ─────────────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            key="solutions-megabar"
            initial={{ opacity: 0, y: -10, scaleY: 0.88 }}
            animate={{ opacity: 1, y: 0,   scaleY: 1     }}
            exit  ={{ opacity: 0, y: -8,   scaleY: 0.92  }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position:      'fixed',
              top:           `${megaBarTop}px`,
              left:          '50%',
              transform:     'translateX(-50%)',
              transformOrigin: 'top center',
              zIndex:        999,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="menu"
            aria-label="Solutions submenu"
            className="solutions-megabar"
          >
            {/* Decorative top accent line */}
            <div className="solutions-megabar__accent" aria-hidden="true" />

            {/* Items row */}
            <nav className="solutions-megabar__items">
              {solutionsItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    `solutions-megabar__item${isActive ? ' solutions-megabar__item--active' : ''}`
                  }
                >
                  {item.name}
                  {/* Hover underline */}
                  <span className="solutions-megabar__underline" aria-hidden="true" />
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE BACKDROP ───────────────────────────────────────────────── */}
      {isOpen && <div className="mobile-nav-overlay" onClick={closeMenu} />}

      {/* ── MOBILE DRAWER ─────────────────────────────────────────────────── */}
      <ul className={`mobile-nav ${isOpen ? 'open' : ''}`}>

        {/* Branding header */}
        <li style={{ marginBottom: '8px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <NavLink to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', justifyContent: 'center' }}>
            <img src="/images/logo.png" alt="CEA Infotech Logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
            <span style={{ fontWeight: 600, fontSize: '18px', letterSpacing: '0.25px' }}>CEA Infotech</span>
          </NavLink>
        </li>

        {/* Home */}
        <li>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        {/* Solutions — vertical accordion on mobile */}
        <li style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            onClick={() => setIsMobileSolutionsOpen(v => !v)}
            className="nav-link"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', width: '100%', padding: '12px 0' }}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setIsMobileSolutionsOpen(v => !v)}
          >
            Solutions
            <motion.span
              animate={{ rotate: isMobileSolutionsOpen ? 180 : 0 }}
              transition={{ duration: 0.22 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </div>

          <AnimatePresence>
            {isMobileSolutionsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit  ={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  paddingLeft: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderLeft: '2px solid rgba(56, 189, 248, 0.25)',
                  marginLeft: '4px',
                }}>
                  {solutionsItems.map(item => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      style={{ fontSize: '14.5px', padding: '9px 0', opacity: 0.88, display: 'block' }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        {/* Partners */}
        <li>
          <NavLink to="/partners" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Partners
          </NavLink>
        </li>

        {/* About Us */}
        <li>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            About Us
          </NavLink>
        </li>

        {/* Contact */}
        <li>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>

        {/* Mobile CTA */}
        <li style={{ marginTop: '24px' }}>
          <button
            onClick={() => { closeMenu(); navigate('/contact'); }}
            className="btn btn-cta w-full"
            style={{ width: '100%', color: '#000000', fontWeight: 'bold' }}
          >
            Book a Demo
            <ArrowRight size={16} />
          </button>
        </li>
      </ul>
    </>
  );
}
