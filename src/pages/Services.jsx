import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Home,
  Building2,
  Trash2,
  Warehouse,
  Truck,
  Recycle,
  Star, 
  Clock, 
  Shield, 
  ThumbsUp
} from "lucide-react";
import "./services.css";

const services = [
  {
    title: "Residential Junk Removal",
    desc: "From old furniture to appliances, we handle all household junk.",
    icon: <Home size={24}/>
  },
  {
    title: "Commercial Junk Removal",
    desc: "Office buildings, warehouses, and retail stores rely on ARC.",
    icon: <Building2 size={24}/>
  },
  {
    title: "Residential Cleanouts",
    desc: "Moving or renovating? We clear garages, attics and basements.",
    icon: <Trash2 size={24}/>
  },
  {
    title: "Estate Clearance",
    desc: "Respectful estate cleanout services for families.",
    icon: <Recycle size={24}/>
  },
  {
    title: "Office Cleanouts",
    desc: "Professional office cleanouts for businesses relocating.",
    icon: <Warehouse size={24}/>
  },
  {
    title: "Construction Debris",
    desc: "Contractors rely on ARC to remove debris quickly.",
    icon: <Truck size={24}/>
  }
];

export default function Services() {
  return (
    <div>

      {/* HERO */}
      <section className="service-banner">
        <div className="overlay"></div>

        <div className="container service-banner-inner">

          <motion.div
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6}}
            className="service-banner-top"
          >
            San Diego's Premier Choice
          </motion.div>

          <motion.h1
            className="title-font"
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.2}}
          >
            Junk Removal <span>Services</span>
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.4}}
          >
            Fast • Reliable • Licensed & Insured
          </motion.p>

          <motion.div
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.6}}
            className="banner-buttons"
          >
            <a href="tel:+16195551234" className="btn">
              <Phone size={18}/> Call For A Free Quote
            </a>

            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </motion.div>

        </div>
      </section>


      {/* SERVICES GRID */}

      <section className="services-section section" id="services">

        <div className="container">

          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6}}
            className="services-row"
          >
            <span className="section-subheading">What We Do</span>

            <h2 className="title-font">
              San Diego's Trusted, Eco-Friendly <span>Junk Removal Team</span>
            </h2>

            <p>
              We recycle and donate up to 80% of what we collect — keeping San Diego clean and green.
            </p>
          </motion.div>


          <div className="services-item-col">

            {services.map((service, index) => (

              <motion.div
                key={index}
                className="services-item-box"
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:index*0.1}}
              >

                <div className="services-image-box">
  {service.icon}
</div>

                <h3 className="title-font">{service.title}</h3>

                <p>{service.desc}</p>

                <a className="services-link" href="#">
                  Read More <ArrowRight size={16}/>
                </a>

              </motion.div>

            ))}

          </div>

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