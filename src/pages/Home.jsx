import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone, CheckCircle, Star, MessageCircle, Calendar,
  Truck, Recycle, ChevronRight, Award, Clock, Shield, ThumbsUp,
  Monitor, Home as HomeIcon, Building2, HardHat, Sofa, Warehouse
} from 'lucide-react';

/* ─────────────── Animation Variants ─────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─────────────── Data ─────────────── */
const debrisItems = [
  { icon: <Sofa size={18} />, text: 'Furniture & Appliances' },
  { icon: <Monitor size={18} />, text: 'Computers, Electronics & E-Waste' },
  { icon: <HomeIcon size={18} />, text: 'Garage, Attic & Basement Cleanouts' },
  { icon: <Warehouse size={18} />, text: 'Warehouse Pallets, Employee & Office Stuff' },
  { icon: <HardHat size={18} />, text: 'Patio, Balcony, Porch & Landscape Debris' },
  { icon: <Building2 size={18} />, text: 'Restaurant & Commercial Equipment' },
  { icon: <Recycle size={18} />, text: 'Property Management / Tenant Cleanouts' },
];

const steps = [
  { icon: <MessageCircle size={36} />, step: 'Step 1', title: 'Text or Call For A Quote', desc: 'Reach out by phone or text and tell us what you need removed. We\'ll give you an upfront, no-obligation quote.' },
  { icon: <Calendar size={36} />, step: 'Step 2', title: 'Schedule A Pickup', desc: 'Pick a date and time that works for you. We offer same-day and next-day service for your convenience.' },
  { icon: <Truck size={36} />, step: 'Step 3', title: 'We Do The Heavy Lifting', desc: 'Our uniformed crew arrives on time, loads everything up, and leaves your space spotless.' },
  { icon: <Recycle size={36} />, step: 'Step 4', title: 'Responsible Disposal', desc: 'We sort, donate, and recycle as much as possible to keep your items out of the landfill.' },
];

const testimonials = [
  { name: 'Sarah M., La Jolla', stars: 5, text: 'ARC Junk Removal was absolutely fantastic! They were on time, professional, and cleared out our garage in under 2 hours. Highly recommend to anyone in San Diego!' },
  { name: 'Robert K., Chula Vista', stars: 5, text: 'Best junk removal service in San Diego. Fair pricing, friendly team, and they even swept up after themselves. Will definitely use again!' },
  { name: 'Maria L., Spring Valley', stars: 5, text: 'Used ARC for an estate cleanout and they were incredible. So respectful and thorough. Everything was done in one day. Can\'t thank them enough.' },
];

/* ═══════════════ HOME PAGE ═══════════════ */
export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>

      {/* ══════════════ HERO ══════════════ */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Parallax Background Image */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: heroY,
            scale: 1.1,
          }}
        />
        {/* Dark overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.88) 55%, rgba(0,0,0,0.3) 100%)',
          zIndex: 1,
        }} />
        {/* Gold stripe at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'var(--color-primary)', zIndex: 2 }} />

        <motion.div
          className="container"
          style={{ position: 'relative', zIndex: 3, paddingTop: '140px', paddingBottom: '120px', opacity: heroOpacity }}
        >
          <div style={{ maxWidth: '720px' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1px solid var(--color-primary)',
                borderRadius: '100px',
                padding: '6px 18px',
                marginBottom: '24px',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--color-primary)',
              }}>
                <Award size={14} /> San Diego's #1 Rated Junk Removal
              </div>
              <h1
                className="title-font"
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  fontWeight: 800,
                }}
              >
                Professional Commercial<br />
                Junk Removal For{' '}
                <span style={{
                  color: 'var(--color-primary)',
                  borderBottom: '4px solid var(--color-primary)',
                  paddingBottom: '2px',
                }}>
                  San Diego
                </span>{' '}
                Businesses
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '580px',
              }}>
                Keep Your Workspace Clean And Your Business Running Smoothly. ARC Junk Removal
                handles everything from office furniture and electronics to commercial equipment, and more.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
                <a href="tel:+16195551234" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 36px', fontSize: '1rem' }}>
                  <Phone size={18} /> Call For A Free Quote
                </a>
                <a href="#services" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                  Our Services
                </a>
              </div>

              {/* Trust Badges */}
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {[
                  { icon: <Shield size={20} />, label: 'Licensed & Insured' },
                  { icon: <Clock size={20} />, label: 'Same-Day Service' },
                  { icon: <ThumbsUp size={20} />, label: '100% Satisfaction' },
                ].map((badge, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-primary)' }}>{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 4 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div style={{
            width: '28px', height: '46px',
            border: '2px solid rgba(196,171,91,0.5)',
            borderRadius: '14px',
            display: 'flex', justifyContent: 'center', paddingTop: '8px',
          }}>
            <motion.div
              style={{ width: '3px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '2px' }}
              animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ══════════════ TRUSTED BY ══════════════ */}
      <section className="section" style={{ backgroundColor: '#07070a' }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <motion.span variants={fadeUp}
              style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              Why San Diego Trusts Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="title-font" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px' }}>
              Trusted By San Diego Businesses<br />
              <span style={{ color: 'var(--color-primary)' }}>Big &amp; Small</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Whether you're managing a small 10-person team, a restaurant facility, ARC Junk Removal
              helps San Diego businesses avoid clutter and keep things moving.
              Quickly, Reliably, At a Price You Can Afford.
            </motion.p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', backgroundColor: 'rgba(196,171,91,0.15)', borderRadius: '12px', overflow: 'hidden' }}
          >
            {[
              { value: '5,000+', label: 'Jobs Completed' },
              { value: '10+ Yrs', label: 'In Business' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '7 Days', label: 'A Week Available' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{
                  textAlign: 'center', padding: '40px 20px',
                  backgroundColor: '#0d0d0d',
                }}
              >
                <div className="title-font" style={{ fontSize: '2.8rem', color: 'var(--color-primary)', fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ color: 'var(--color-text-muted)', marginTop: '10px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SERVICES WE HANDLE ══════════════ */}
      <section id="services" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>

            {/* Left: Image Card */}
            <motion.div
              style={{ flex: '1 1 380px' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '80px', height: '80px', borderTop: '3px solid var(--color-primary)', borderLeft: '3px solid var(--color-primary)' }} />
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '80px', height: '80px', borderBottom: '3px solid var(--color-primary)', borderRight: '3px solid var(--color-primary)' }} />
                <img
                  src="/hero-bg.png"
                  alt="Junk Removal Service"
                  style={{ width: '100%', borderRadius: '6px', display: 'block', filter: 'brightness(0.8)' }}
                />
                <div style={{
                  position: 'absolute', bottom: '20px', left: '20px', right: '20px',
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(196,171,91,0.4)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  backdropFilter: 'blur(8px)',
                  display: 'flex', alignItems: 'center', gap: '14px'
                }}>
                  <Award size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Fully Licensed & Insured</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '2px' }}>San Diego, CA — Serving All Areas</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: List */}
            <motion.div
              style={{ flex: '1 1 420px' }}
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.span variants={fadeUp}
                style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
                What We Remove
              </motion.span>
              <motion.h2 variants={fadeUp} className="title-font" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '16px' }}>
                We Handle All Types Of<br />Commercial Junk And Debris
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--color-text-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
                No job is too big or too small. From single-item pickups to full cleanouts, our team handles it all with speed and professionalism.
              </motion.p>

              <motion.ul variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {debrisItems.map((item, i) => (
                  <motion.li key={i} variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
                  >
                    <span style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      backgroundColor: 'rgba(196,171,91,0.12)',
                      color: 'var(--color-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{item.icon}</span>
                    <span style={{ fontSize: '1rem', color: '#ddd' }}>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} style={{ marginTop: '36px' }}>
                <a href="#quote" className="btn">Get A Free Quote <ChevronRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle' }} /></a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="section" style={{ backgroundColor: '#07070a', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(196,171,91,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            style={{ textAlign: 'center', marginBottom: '70px' }}
          >
            <motion.span variants={fadeUp} style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '12px' }}>Simple Process</motion.span>
            <motion.h2 variants={fadeUp} className="title-font" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>How It Works</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(196,171,91,0.12)',
                  borderRadius: '12px',
                  padding: '40px 30px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(196,171,91,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(196,171,91,0.12)'}
              >
                {/* Step number watermark */}
                <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '5rem', fontWeight: 900, color: 'rgba(196,171,91,0.05)', lineHeight: 1, fontFamily: 'var(--font-sans)' }}>{i + 1}</div>
                <div style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>{step.icon}</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>{step.step}</div>
                <h3 className="title-font" style={{ fontSize: '1.35rem', marginBottom: '14px' }}>{step.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.65, fontSize: '0.95rem' }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <motion.span variants={fadeUp} style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '12px' }}>Real Reviews</motion.span>
            <motion.h2 variants={fadeUp} className="title-font" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              What San Diego Homeowners Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(196,171,91,0.12)',
                  borderRadius: '12px',
                  padding: '36px 30px',
                  position: 'relative',
                }}
              >
                {/* Quote mark */}
                <div style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '5rem', lineHeight: 1, color: 'rgba(196,171,91,0.08)', fontFamily: 'Georgia, serif', fontWeight: 900 }}>"</div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={18} fill="var(--color-primary)" color="var(--color-primary)" />
                  ))}
                </div>
                <p style={{ color: '#ccc', lineHeight: 1.7, fontSize: '0.97rem', marginBottom: '24px' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(196,171,91,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 700, fontSize: '1rem' }}>
                    {t.name.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{t.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ TRUST BAR ══════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background image with dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          filter: 'brightness(0.25)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(196,171,91,0.12)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '70px 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '32px', textAlign: 'center' }}
          >
            {[
              { icon: <Clock size={28} />, text: 'Available 7 Days A Week' },
              { icon: <Shield size={28} />, text: 'Licensed & Insured' },
              { icon: <ThumbsUp size={28} />, text: '100% Satisfaction Guaranteed' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ color: 'var(--color-primary)' }}>{item.icon}</span>
                <span className="title-font" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.5px' }}>{item.text}</span>
                {i < 2 && <span style={{ color: 'rgba(196,171,91,0.4)', fontSize: '1.5rem', marginLeft: '16px' }}>•</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CTA SECTION ══════════════ */}
      <section id="quote" className="section" style={{ backgroundColor: '#07070a', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '12px' }}>
              Get Started Today
            </span>
            <h2 className="title-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px' }}>
              Ready to Reclaim Your Space?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>
              Contact us today for a free, no-obligation estimate. Fast response, upfront pricing, zero hidden fees.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+16195551234" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 44px', fontSize: '1rem' }}>
                <Phone size={18} /> Call Now: (619) 555-1234
              </a>
              <a href="mailto:info@arcjunkremoval.com" className="btn btn-outline" style={{ padding: '16px 44px', fontSize: '1rem' }}>
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
