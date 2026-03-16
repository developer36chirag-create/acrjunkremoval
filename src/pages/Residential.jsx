import React from "react";
import { motion } from "framer-motion";
import { Phone, 
  CircleCheck, 
  Clock, 
  Leaf, 
  DollarSign, 
  Users,
  Star, 
  Shield, 
  ThumbsUp,
  MessageCircle,
  Calendar,
  Truck,
  Recycle
} from "lucide-react";
import "./Residential.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const whyItems = [
  {
    icon: <Clock size={24} />,
    title: "Fast, On-Time Pickups",
    desc: "Most residential pickups are completed within 24 hours — often the same day."
  },
  {
    icon: <Leaf size={24} />,
    title: "Eco-Responsible Disposal",
    desc: "We recycle and donate up to 50% of the items we collect."
  },
  {
    icon: <DollarSign size={24} />,
    title: "Transparent Pricing",
    desc: "You'll always know the price before we arrive."
  },
  {
    icon: <Users size={24} />,
    title: "Friendly Local Team",
    desc: "We're not a national chain — we're your neighbors."
  }
];

const items = [
  "Old Furniture (Couches, Dressers, Mattresses)",
  "Appliances (Refrigerators, Washers, Dryers)",
  "Electronics & TVs",
  "Yard Waste, Branches, And Fencing",
  "Construction Debris",
  "Garage Junk & Storage Cleanouts"
];

const steps = [
  { icon: <MessageCircle size={36} />, step: 'Step 1', title: 'Text or Call For A Quote', desc: 'Reach out by phone or text and tell us what you need removed. We\'ll give you an upfront, no-obligation quote.' },
  { icon: <Calendar size={36} />, step: 'Step 2', title: 'Schedule A Pickup', desc: 'Pick a date and time that works for you. We offer same-day and next-day service for your convenience.' },
  { icon: <Truck size={36} />, step: 'Step 3', title: 'We Do The Heavy Lifting', desc: 'Our uniformed crew arrives on time, loads everything up, and leaves your space spotless.' },
  { icon: <Recycle size={36} />, step: 'Step 4', title: 'Responsible Disposal', desc: 'We sort, donate, and recycle as much as possible to keep your items out of the landfill.' },
];

export default function Residential() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="service-single-banner">

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 55%, rgba(0,0,0,0.66) 100%)",
            zIndex: 1
          }}
        />

        <div className="container">
          <div className="service-single-inner">

            <motion.div
              className="banner-top"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Residential Services
            </motion.div>

            <motion.h1
              className="title-font"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Fast, Friendly & Eco-Friendly
              <span> Residential Junk Removal</span> in San Diego
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Clear the clutter, reclaim your home, and relax — ARC Junk
              Removal handles everything from pickup to responsible disposal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "20px"
              }}
            >
              <a
                href="tel:+16195551234"
                className="btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 36px",
                  fontSize: "1rem"
                }}
              >
                <Phone size={18} /> Call Now: 619-739-3389
              </a>
            </motion.div>

          </div>
        </div>
      </section>


      {/* SERVICE INFO */}
      <section className="section service-info-section">
        <div className="container">
          <div className="service-info-inner">

            {/* Left Col */}
            <motion.div
              className="service-col"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subheading">
                Full-Service Removal
              </span>

              <h2 className="title-font">
                We Make It Easy To Say Goodbye To Junk
              </h2>

              <p>
                From single item pickups to full property cleanouts,
                our team takes care of all the heavy lifting.
              </p>

              <p className="service-info-box">
                💬 Text us a few photos for an instant quote — most estimates in
                5–10 minutes!
              </p>
            </motion.div>

            {/* Right Col */}
            <motion.div
              className="service-col"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="title-font">
                List Of Common Items We Haul Away:
              </h3>

              <ul>
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="service-list"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <CircleCheck size={20} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>


      {/* WHY US */}
      <section className="section why-us-section">
        <div className="container">
          <div className="why-us-inner">

            <motion.div
              className="why-us-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="title-font">
                Why San Diego Homeowners
                Trust ARC Junk Removal
              </h2>

              <p>
                We've built our reputation on reliability,
                transparency, and respect for your home.
              </p>
            </motion.div>

            <div className="why-us-item-box">
              {whyItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="why-us-item"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="why-us-image-box">
                    {item.icon}
                  </div>

                  <h3 className="title-font">{item.title}</h3>

                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>

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

            {/* TESTIMONIALS */}
<section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
  <div className="container">

    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <span
        style={{
          color: "var(--color-primary)",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "0.8rem",
          fontWeight: 700,
          display: "block",
          marginBottom: "12px"
        }}
      >
        Real Reviews
      </span>

      <h2
        className="title-font"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        What San Diego Homeowners Say
      </h2>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px"
      }}
    >

      {[
        {
          name: "Sarah M., La Jolla",
          text: "ARC Junk Removal was fantastic! They cleared our garage in under 2 hours."
        },
        {
          name: "Robert K., Chula Vista",
          text: "Best junk removal service in San Diego. Friendly team and fair pricing."
        },
        {
          name: "Maria L., Spring Valley",
          text: "Used ARC for an estate cleanout and they were incredible."
        }
      ].map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: "#0d0d0d",
            border: "1px solid rgba(196,171,91,0.12)",
            borderRadius: "12px",
            padding: "36px 30px"
          }}
        >

          <div style={{ display: "flex", gap: "4px", marginBottom: "18px" }}>
            {Array.from({ length: 5 }).map((_, si) => (
              <Star
                key={si}
                size={18}
                fill="var(--color-primary)"
                color="var(--color-primary)"
              />
            ))}
          </div>

          <p style={{ color: "#ccc", lineHeight: 1.7, marginBottom: "24px" }}>
            "{t.text}"
          </p>

          <strong>{t.name}</strong>

        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* TRUST BAR */}
<section style={{ position: "relative", overflow: "hidden" }}>

  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url(/hero-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "brightness(0.25)"
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(196,171,91,0.12)"
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 1, padding: "70px 24px" }}>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "32px"
      }}
    >
      {[
        { icon: <Clock size={28} />, text: "Available 7 Days A Week" },
        { icon: <Shield size={28} />, text: "Licensed & Insured" },
        { icon: <ThumbsUp size={28} />, text: "100% Satisfaction Guaranteed" }
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ color: "var(--color-primary)" }}>{item.icon}</span>
          <span className="title-font" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA SECTION */}
<section className="section" style={{ backgroundColor: "#07070a", textAlign: "center" }}>
  <div className="container">

    <span
      style={{
        color: "var(--color-primary)",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "0.8rem",
        fontWeight: 700,
        display: "block",
        marginBottom: "12px"
      }}
    >
      Get Started Today
    </span>

    <h2
      className="title-font"
      style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: "20px" }}
    >
     Available 7 days a week • Licensed & Insured • 100% Satisfaction Guaranteed
    </h2>

    <p
      style={{
        color: "var(--color-text-muted)",
        fontSize: "1.1rem",
        maxWidth: "560px",
        margin: "0 auto 40px",
        lineHeight: 1.7
      }}
    >
      Contact us today for a free estimate.
    </p>

    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      <a
        href="tel:+16195551234"
        className="btn"
        style={{ display: "flex", alignItems: "center", gap: "10px", padding: "16px 44px" }}
      >
        <Phone size={18} /> Call Now: (619) 555-1234
      </a>

      <a
        href="mailto:info@arcjunkremoval.com"
        className="btn btn-outline"
        style={{ padding: "16px 44px" }}
      >
        Email Us
      </a>
    </div>

  </div>
</section>

    </div>
  );
}