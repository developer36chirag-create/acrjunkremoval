import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Residential Junk Removal", path: "/services/residential" },
    { name: "Commercial Junk Removal", path: "/services/commercial" },
    { name: "Residential Cleanouts", path: "/services/residential-cleanouts" },
    { name: "Estate Clearance", path: "/services/estate-clearance" },
    { name: "Office Cleanouts", path: "/services/office-cleanouts" },
    { name: "Construction Debris", path: "/services/construction-debris" }
  ];

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.4s ease',
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(196, 171, 91, 0.2)' : '1px solid transparent',
    padding: isScrolled ? '15px 0' : '25px 0'
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ padding: '8px', border: '2px solid var(--color-primary)', borderRadius: '4px' }}>
            <span className="title-font" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '2px' }}>
              ARC
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="title-font" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '1px', lineHeight: 1 }}>JUNK REMOVAL</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', letterSpacing: '2px', textTransform: 'uppercase' }}>Professional Service</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }} className="desktop-nav">
          <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Home</Link>
          
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: isDropdownOpen ? 'var(--color-primary)' : 'inherit', transition: 'color 0.3s' }}>
              Services <ChevronDown size={14} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
            </div>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    paddingTop: '20px',
                    minWidth: '260px'
                  }}
                >
                  <div style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid rgba(196, 171, 91, 0.3)',
                    borderRadius: '6px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    overflow: 'hidden'
                  }}>
                    <ul style={{ padding: '10px 0' }}>
                      {services.map((service, idx) => (
                        <li key={idx}>
                          <Link 
                            to={service.path} 
                            style={{ 
                              display: 'block', 
                              padding: '12px 25px', 
                              fontSize: '0.9rem',
                              color: 'var(--color-text)',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                              e.currentTarget.style.color = 'var(--color-primary)';
                              e.currentTarget.style.paddingLeft = '30px';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'var(--color-text)';
                              e.currentTarget.style.paddingLeft = '25px';
                            }}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/service-area" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Service Area</Link>
          <Link to="/faq" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>FAQ</Link>
          <Link to="/contact" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Us</Link>
          
          <a href="tel:+1234567890" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Phone size={16} /> (555) 123-4567
          </a>
        </nav>

        {/* Mobile Menu Toggle - Hidden via CSS usually, but simple inline implementation here */}
        <div 
          className="mobile-toggle"
          style={{ cursor: 'pointer', zIndex: 1001 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
        </div>
      </div>

      {/* Simple style inject for responsive nav since we are writing single file components */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (min-width: 993px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '400px',
              backgroundColor: 'var(--color-surface)',
              borderLeft: '1px solid var(--color-primary)',
              zIndex: 1000,
              padding: '100px 30px 40px',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', fontSize: '1.2rem' }}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                <span style={{ color: 'var(--color-primary)', marginBottom: '15px', display: 'block' }}>Services</span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingLeft: '15px', fontSize: '1rem', color: 'var(--color-text-muted)' }}>
                  {services.map((s, i) => (
                    <li key={i}><Link to={s.path} onClick={() => setIsMobileMenuOpen(false)}>{s.name}</Link></li>
                  ))}
                </ul>
              </div>

              <Link to="/service-area" onClick={() => setIsMobileMenuOpen(false)}>Service Area</Link>
              <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              
              <a href="tel:+1234567890" className="btn" style={{ textAlign: 'center', marginTop: '20px' }} onClick={() => setIsMobileMenuOpen(false)}>
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
};

export default Header;
