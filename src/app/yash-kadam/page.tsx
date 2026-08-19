"use client";

import "./abhijeet-kulkarni.css";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/layout/Logo";

import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Download,
  Factory,
  FlaskConical,
  Globe2,
  Handshake,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Settings,
  Shirt,
  Truck,
} from "lucide-react";

export default function YashKadamPage() {
  const phoneNumber = "917875795155";
  const phoneDisplay = "+91 7875795155";
  const email = "yash.kadam@globalatlas.in";

  const whatsappMessage = encodeURIComponent(
    "Hello Yash, I would like to connect regarding GlobalAtlas Exim and international business opportunities."
  );

  return (
    <main className="ak-page">
      {/* Background */}
      <div className="ak-background" aria-hidden="true">
        <div className="ak-grid" />
        <div className="ak-orb ak-orb-one" />
        <div className="ak-orb ak-orb-two" />
        <div className="ak-line ak-line-one" />
        <div className="ak-line ak-line-two" />
      </div>

      <div className="ak-container">
        {/* Navigation */}
        <header className="ak-header">
        
            <Logo />
          

          <Link href="/" className="ak-website">
            <span>GlobalAtlas.in</span>
            <ArrowUpRight size={16} />
          </Link>
        </header>

        {/* HERO */}
        <section className="ak-hero">
          <div className="ak-hero-top">
            <div className="ak-availability">
              <span className="ak-pulse">
                <span />
              </span>
              Open to global opportunities
            </div>

            <span className="ak-location">
              <MapPin size={15} />
              India
            </span>
          </div>

          <div className="ak-hero-content">
            <div className="ak-identity">
              <div className="ak-avatar">
                <div className="ak-avatar-ring" />

                <div className="ak-avatar-image">
                  <Image
                    src="/images/team/yash-kadam.jpg"
                    alt="Yash Kadam"
                    fill
                    priority
                    sizes="(max-width: 768px) 140px, 180px"
                  />
                </div>

                <span className="ak-avatar-badge">
                  <Globe2 size={16} />
                </span>
              </div>

              <div className="ak-title-block">
                <p className="ak-eyebrow">
                  LEADERSHIP · STRATEGY · GLOBAL GROWTH
                </p>

                <h1>
                  Yash
                  <br />
                  <span>Kadam</span>
                </h1>
              </div>
            </div>

            <div className="ak-intro">
              <div className="ak-intro-line" />

              <p>
                Building strong partnerships and creating meaningful{" "}
                <strong>
                  opportunities for business growth across global markets.
                </strong>
              </p>

              <div className="ak-role">
                <BriefcaseBusiness size={17} />
                Co-Founder & CEO
                <span />
                GlobalAtlas Exim
              </div>
            </div>
          </div>

          {/* Main actions */}
          <div className="ak-actions">
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ak-primary-action"
            >
              <span className="ak-action-icon">
                <Send size={19} />
              </span>

              <span>
                <small>START A CONVERSATION</small>
                WhatsApp Me
              </span>

              <ArrowUpRight size={20} />
            </a>

            <div className="ak-secondary-actions">
              <a
                href={`tel:+${phoneNumber}`}
                className="ak-small-action"
                aria-label="Call Yash Kadam"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="ak-small-action"
                aria-label="Email Yash Kadam"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href="/yash-kadam.vcf"
                download
                className="ak-small-action"
                aria-label="Save Yash Kadam contact"
              >
                <Download size={18} />
                <span>Save</span>
              </a>
            </div>
          </div>

          <div className="ak-scroll-indicator">
            <span>EXPLORE</span>
            <ArrowDownRight size={17} />
          </div>
        </section>

        {/* ABOUT */}
        <section className="ak-about">
          <div className="ak-section-number">01</div>

          <div className="ak-section-content">
            <p className="ak-section-label">WHO I AM</p>

            <h2>
              Growth begins with a vision.
              <br />
              <span>It succeeds through the right connections.</span>
            </h2>

            <div className="ak-about-text">
              <p>
                As Co-Founder & CEO of <strong>GlobalAtlas Exim</strong>, I
                focus on building strong business relationships, identifying
                opportunities and helping create a foundation for sustainable
                growth.
              </p>

              <p>
                My focus is on strategy, partnerships and business development
                while helping GlobalAtlas Exim build meaningful connections
                between businesses, suppliers, buyers and international
                markets.
              </p>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section className="ak-services">
          <div className="ak-services-heading">
            <div>
              <span className="ak-section-number">02</span>
              <p className="ak-section-label">FOCUS AREAS</p>
            </div>

            <h2>
              Vision into action.
              <br />
              <span>Connections into growth.</span>
            </h2>
          </div>

          <div className="ak-service-list">
            <article className="ak-service-card">
              <div className="ak-service-index">01</div>

              <div className="ak-service-icon">
                <BriefcaseBusiness size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Business Strategy</h3>
                <p>
                  Supporting strategic direction and identifying opportunities
                  that contribute to sustainable business growth.
                </p>
              </div>

              <ArrowUpRight className="ak-service-arrow" size={21} />
            </article>

            <article className="ak-service-card">
              <div className="ak-service-index">02</div>

              <div className="ak-service-icon">
                <Handshake size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Strategic Partnerships</h3>
                <p>
                  Building meaningful relationships and long-term partnerships
                  with businesses, suppliers and stakeholders.
                </p>
              </div>

              <ArrowUpRight className="ak-service-arrow" size={21} />
            </article>

            <article className="ak-service-card">
              <div className="ak-service-index">03</div>

              <div className="ak-service-icon">
                <Globe2 size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Global Business Development</h3>
                <p>
                  Exploring international markets and creating opportunities
                  for stronger business relationships across borders.
                </p>
              </div>

              <ArrowUpRight className="ak-service-arrow" size={21} />
            </article>

            <article className="ak-service-card">
              <div className="ak-service-index">04</div>

              <div className="ak-service-icon">
                <Truck size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Trade Growth</h3>
                <p>
                  Supporting import, export and international trade
                  opportunities through stronger networks and partnerships.
                </p>
              </div>

              <ArrowUpRight className="ak-service-arrow" size={21} />
            </article>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="ak-industries">
          <div className="ak-industries-top">
            <div>
              <span className="ak-section-number">03</span>
              <p className="ak-section-label">MARKETS & PRODUCTS</p>
            </div>

            <p>
              Exploring opportunities across multiple industries, product
              categories and international markets.
            </p>
          </div>

          <div className="ak-industry-grid">
            <article className="ak-industry-card ak-industry-large">
              <span className="ak-industry-number">01</span>

              <div className="ak-industry-icon">
                <Building2 size={72} strokeWidth={1.2} />
              </div>

              <h3>
                Food & Agricultural
                <br />
                Products
              </h3>
            </article>

            <article className="ak-industry-card">
              <span className="ak-industry-number">02</span>

              <div className="ak-industry-icon">
                <Factory size={64} strokeWidth={1.2} />
              </div>

              <h3>Industrial Goods</h3>
            </article>

            <article className="ak-industry-card">
              <span className="ak-industry-number">03</span>

              <div className="ak-industry-icon">
                <Settings size={64} strokeWidth={1.2} />
              </div>

              <h3>Engineering Products</h3>
            </article>

            <article className="ak-industry-card">
              <span className="ak-industry-number">04</span>

              <div className="ak-industry-icon">
                <FlaskConical size={64} strokeWidth={1.2} />
              </div>

              <h3>Chemicals</h3>
            </article>

            <article className="ak-industry-card">
              <span className="ak-industry-number">05</span>

              <div className="ak-industry-icon">
                <Shirt size={64} strokeWidth={1.2} />
              </div>

              <h3>Textiles</h3>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="ak-contact">
          <div className="ak-contact-glow" />

          <div className="ak-contact-main">
            <div>
              <p className="ak-section-label">LET'S CONNECT</p>

              <h2>
                Let's build the next
                <br />
                <span>global opportunity together.</span>
              </h2>
            </div>

            <a href={`mailto:${email}`} className="ak-contact-button">
              <span>Contact Me</span>
              <ArrowUpRight size={21} />
            </a>
          </div>

          <div className="ak-contact-bottom">
            <a href={`tel:+${phoneNumber}`}>
              <Phone size={18} />
              {phoneDisplay}
            </a>

            <a href={`mailto:${email}`}>
              <Mail size={18} />
              {email}
            </a>

            <div>
              <MapPin size={18} />
              Based in India · Working Globally
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="ak-social">
          <div>
            <p className="ak-section-label">NETWORK</p>
            <h2>Stay connected.</h2>
          </div>

          <div className="ak-social-links">
            {/* Add Yash's LinkedIn URL here when available */}
            <a href="https://www.linkedin.com/in/yash-kadam-740992268/" aria-label="Yash Kadam LinkedIn profile">
              <span className="ak-social-icon">
                <LinkIcon size={19} />
              </span>

              <span>
                <small>PERSONAL PROFILE</small>
                Yash Kadam
              </span>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://www.linkedin.com/company/globalatlas-exim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ak-social-icon">
                <Building2 size={19} />
              </span>

              <span>
                <small>COMPANY PROFILE</small>
                GlobalAtlas Exim
              </span>

              <ArrowUpRight size={19} />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ak-footer">
          <div className="ak-brand">
            <Logo />
          </div>

          <span>© {new Date().getFullYear()} GlobalAtlas Exim</span>
        </footer>
      </div>
    </main>
  );
}