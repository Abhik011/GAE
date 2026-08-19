"use client";

import "./abhijeet-kulkarni.css";
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Download,
  Globe2,
  Handshake,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Truck,
  UserRound,
  Factory,
  Settings,
  FlaskConical,
  Shirt,
} from "lucide-react";

export default function AbhijeetKulkarniPage() {
  const phoneNumber = "919022464841";
  const email = "abhijeet@globalatlas.in";

  const whatsappMessage = encodeURIComponent(
    "Hello Abhijeet, I would like to connect regarding international trade."
  );

  return (
    <main className="ak-page">
      {/* Background */}
      <div className="ak-background">
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

                {/* Replace later with Image */}
                <div className="ak-avatar-image">
                  <Image
                    src="/images/team/abhijeetkulkarni.jpeg"
                    alt="Abhijeet Kulkarni"
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
                <p className="ak-eyebrow">IMPORT · EXPORT · SOURCING</p>

                <h1>
                  Abhijeet
                  <br />
                  <span>Kulkarni</span>
                </h1>
              </div>
            </div>

            <div className="ak-intro">
              <div className="ak-intro-line" />

              <p>
                Building meaningful business connections between{" "}
                <strong>buyers, suppliers and global markets.</strong>
              </p>

              <div className="ak-role">
                <BriefcaseBusiness size={17} />
                Founder & Director
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
              <a href={`tel:+${phoneNumber}`} className="ak-small-action">
                <Phone size={18} />
                <span>Call</span>
              </a>

              <a href={`mailto:${email}`} className="ak-small-action">
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href="/abhijeet-kulkarni.vcf"
                download
                className="ak-small-action"
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

        {/* INTRO */}
        <section className="ak-about">
          <div className="ak-section-number">01</div>

          <div className="ak-section-content">
            <p className="ak-section-label">WHO I AM</p>

            <h2>
              Trade is not just about products.
              <br />
              <span>It's about the right connections.</span>
            </h2>

            <div className="ak-about-text">
              <p>
                I work as an import–export broker, helping businesses identify
                suitable suppliers, potential buyers, and international trade
                opportunities.
              </p>

              <p>
                Through <strong>GlobalAtlas Exim</strong>, my focus is on
                creating reliable buyer–supplier connections and helping
                businesses explore opportunities beyond their domestic markets.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="ak-services">
          <div className="ak-services-heading">
            <div>
              <span className="ak-section-number">02</span>
              <p className="ak-section-label">WHAT I DO</p>
            </div>

            <h2>
              From opportunity
              <br />
              <span>to connection.</span>
            </h2>
          </div>

          <div className="ak-service-list">
            <article className="ak-service-card">
              <div className="ak-service-index">01</div>

              <div className="ak-service-icon">
                <Globe2 size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Global Sourcing</h3>
                <p>
                  Helping businesses identify suitable suppliers and sourcing
                  opportunities across markets.
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
                <h3>Trade Connections</h3>
                <p>
                  Facilitating meaningful connections between international
                  buyers and reliable suppliers.
                </p>
              </div>

              <ArrowUpRight className="ak-service-arrow" size={21} />
            </article>

            <article className="ak-service-card">
              <div className="ak-service-index">03</div>

              <div className="ak-service-icon">
                <Truck size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Import & Export Opportunities</h3>
                <p>
                  Supporting businesses in exploring suitable international
                  markets and trade possibilities.
                </p>
              </div>

              <ArrowUpRight className="ak-service-arrow" size={21} />
            </article>

            <article className="ak-service-card">
              <div className="ak-service-index">04</div>

              <div className="ak-service-icon">
                <BriefcaseBusiness size={25} />
              </div>

              <div className="ak-service-info">
                <h3>Market Research</h3>
                <p>
                  Researching products, markets and potential opportunities for
                  international business growth.
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
              Exploring opportunities across multiple industries and product
              categories.
            </p>
          </div>

          <div className="ak-industry-grid">
            <div className="ak-industry-card ak-industry-large">
              <span className="ak-industry-number">01</span>

              <div className="ak-industry-icon">
                <Building2 size={72} strokeWidth={1.2} />
              </div>

              <h3>
                Food & Agricultural
                <br />
                Products
              </h3>
            </div>

            <div className="ak-industry-card">
              <span className="ak-industry-number">02</span>

              <div className="ak-industry-icon">
                <Factory size={64} strokeWidth={1.2} />
              </div>

              <h3>Industrial Goods</h3>
            </div>

            <div className="ak-industry-card">
              <span className="ak-industry-number">03</span>

              <div className="ak-industry-icon">
                <Settings size={64} strokeWidth={1.2} />
              </div>

              <h3>Engineering Products</h3>
            </div>

            <div className="ak-industry-card">
              <span className="ak-industry-number">04</span>

              <div className="ak-industry-icon">
                <FlaskConical size={64} strokeWidth={1.2} />
              </div>

              <h3>Chemicals</h3>
            </div>

            <div className="ak-industry-card">
              <span className="ak-industry-number">05</span>

              <div className="ak-industry-icon">
                <Shirt size={64} strokeWidth={1.2} />
              </div>

              <h3>Textiles</h3>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="ak-contact">
          <div className="ak-contact-glow" />

          <div className="ak-contact-main">
            <div>
              <p className="ak-section-label">LET'S CONNECT</p>

              <h2>
                Your next global
                <br />
                <span>connection starts here.</span>
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
              +91 90224 64841
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
            <a
              href="https://www.linkedin.com/in/abhijeet-kulkarni-2a0892321/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ak-social-icon">
                <LinkIcon size={19} />
              </span>

              <span>
                <small>PERSONAL PROFILE</small>
                Abhijeet Kulkarni
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




          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}