import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#050505', 
      borderTop: '1px solid rgba(196, 171, 91, 0.2)',
      paddingTop: '80px',
      paddingBottom: '30px'
    }}>
      <div className="container">
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px',
          marginBottom: '60px'
        }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ padding: '6px', border: '2px solid var(--color-primary)', borderRadius: '4px' }}>
                <span className="title-font" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '2px' }}>
                  ARC
                </span>
              </div>
              <span className="title-font" style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '1px' }}>JUNK REMOVAL</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px', fontSize: '0.95rem' }}>
              Premium junk removal and cleanout services. We handle the heavy lifting, so you don't have to. Fast, professional, and eco-friendly.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}><Instagram size={20} /></a>
              <a href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--color-primary)'} onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="title-font" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', letterSpacing: '1px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>About Us</Link></li>
              <li><Link to="/service-area" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Service Area</Link></li>
              <li><Link to="/faq" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>FAQ</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h4 className="title-font" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', letterSpacing: '1px' }}>Our Services</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/services/residential" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Residential Junk Removal</Link></li>
              <li><Link to="/services/commercial" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Commercial Junk Removal</Link></li>
              <li><Link to="/services/estate-clearance" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Estate Clearance</Link></li>
              <li><Link to="/services/construction-debris" style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Construction Debris</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="title-font" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px', letterSpacing: '1px' }}>Contact Us</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>123 Clean Street, Suite 100<br/>Cityville, State 12345</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <Phone size={18} color="var(--color-primary)" />
                <a href="tel:+1234567890">(555) 123-4567</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                <Mail size={18} color="var(--color-primary)" />
                <a href="mailto:info@arcjunkremoval.com">info@arcjunkremoval.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          paddingTop: '25px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} ARC Junk Removal. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
