import Link from "next/link";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  FlaskConical,
  Globe2,
  Handshake,
  PackageSearch,
  Search,
  Shirt,
  Ship,
  ShoppingBag,
  Truck,
  UsersRound,
  Wheat,
} from "lucide-react";

import "./home.css";

const services = [
  {
    number: "01",
    title: "Global Sourcing",
    description:
      "Helping buyers identify suitable Indian manufacturers and suppliers for their product requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Buyer–Supplier Connections",
    description:
      "Creating meaningful business connections between international buyers and reliable suppliers.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Product Discovery",
    description:
      "Exploring products, manufacturers, markets and opportunities aligned with business requirements.",
    icon: PackageSearch,
  },
  {
    number: "04",
    title: "Export Support",
    description:
      "Supporting businesses as they explore international trade opportunities and global market expansion.",
    icon: Ship,
  },
];

const industries = [
  {
    number: "01",
    title: "Food & Agricultural Products",
    icon: Wheat,
    featured: true,
  },
  {
    number: "02",
    title: "Industrial Goods",
    icon: Factory,
  },
  {
    number: "03",
    title: "Engineering Products",
    icon: Truck,
  },
  {
    number: "04",
    title: "Chemicals",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Textiles",
    icon: Shirt,
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about your product, quantity, specifications and target market.",
  },
  {
    number: "02",
    title: "Find Opportunities",
    description:
      "We explore suitable suppliers, products and potential business connections.",
  },
  {
    number: "03",
    title: "Connect & Evaluate",
    description:
      "Connect with relevant businesses and evaluate the right opportunity.",
  },
  {
    number: "04",
    title: "Move Forward Globally",
    description:
      "Build the right business relationship and explore your next international opportunity.",
  },
];

export default function HomePage() {
  return (
    <main className="ga-home">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="ga-home-background" aria-hidden="true">
        <div className="ga-home-grid" />
        <div className="ga-home-orb ga-home-orb-one" />
        <div className="ga-home-orb ga-home-orb-two" />
        <div className="ga-home-line ga-home-line-one" />
        <div className="ga-home-line ga-home-line-two" />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="ga-hero">
        <div className="ga-container">
          {/* Top Meta */}
          <div className="ga-hero-top">
            <div className="ga-availability">
              <span className="ga-pulse">
                <span />
              </span>
              Connecting India with global opportunities
            </div>

            <div className="ga-hero-location">
              <Globe2 size={15} />
              India · Global Markets
            </div>
          </div>

          {/* Main Hero */}
          <div className="ga-hero-main">
            {/* Content */}
            <div className="ga-hero-copy">
              <div className="ga-hero-label">
                <span>01</span>
                <div />
                <p>IMPORT · EXPORT · SOURCING</p>
              </div>
              <br />
              <h1 className="ga-hero-title">
            
                  Built Here.
              
 <br/>
 
                <span className="ga-title-outline">
                  Bound Everywhere.
                </span>
              </h1>

              <p className="ga-hero-description">
                We help businesses discover products, build meaningful connections
                with suppliers and buyers, and explore opportunities across
                <strong> international markets.</strong>
              </p>

              <div className="ga-hero-buttons">
                <Link
                  href="/request-quote"
                  className="ga-primary-button"
                >
                  <span className="ga-primary-button-icon">
                    <ArrowUpRight size={18} />
                  </span>

                  <span className="ga-button-copy">
                    <small>START YOUR JOURNEY</small>
                    Request a Quote
                  </span>

                  <ArrowRight
                    size={19}
                    className="ga-button-arrow"
                  />
                </Link>

                <Link
                  href="/services"
                  className="ga-secondary-button"
                >
                  Explore Services
                  <ArrowDownRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="ga-hero-visual">
              <div className="ga-world">
                <div className="ga-world-ring ga-world-ring-one" />
                <div className="ga-world-ring ga-world-ring-two" />
                <div className="ga-world-ring ga-world-ring-three" />

                <div className="ga-world-orbit ga-world-orbit-one" />
                <div className="ga-world-orbit ga-world-orbit-two" />

                <div className="ga-world-core">
                  <Globe2
                    size={88}
                    strokeWidth={1}
                  />
                </div>

                <div className="ga-world-point ga-world-point-one">
                  INDIA
                </div>

                <div className="ga-world-point ga-world-point-two">
                  GLOBAL
                </div>

                <div className="ga-world-point ga-world-point-three">
                  TRADE
                </div>

                <span className="ga-world-dot ga-world-dot-one" />
                <span className="ga-world-dot ga-world-dot-two" />
                <span className="ga-world-dot ga-world-dot-three" />
              </div>

              <div className="ga-visual-card ga-visual-card-one">
                <UsersRound size={17} />

                <span>
                  <small>CONNECTING</small>
                  Buyers & Suppliers
                </span>
              </div>

              <div className="ga-visual-card ga-visual-card-two">
                <Ship size={17} />

                <span>
                  <small>EXPLORING</small>
                  Global Markets
                </span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="ga-hero-bottom">
            <div className="ga-hero-tags">
              <span>
                <Check size={14} />
                Global Sourcing
              </span>

              <span>
                <Check size={14} />
                Trade Connections
              </span>

              <span>
                <Check size={14} />
                Market Opportunities
              </span>
            </div>

            <p className="ga-scroll-indicator">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDownRight size={16} />
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="ga-intro ga-section">
        <div className="ga-container">
          <div className="ga-intro-layout">
            <div className="ga-section-meta">
              <span className="ga-section-number">01</span>
              <p className="ga-section-label">WHO WE ARE</p>
            </div>

            <div className="ga-intro-content">
              <h2>
                Global trade starts with
                <br />
                <span>the right connection.</span>
              </h2>

              <div className="ga-intro-text">
                <p>
                  GlobalAtlas Exim is focused on connecting businesses with
                  suitable suppliers, buyers, products and international
                  opportunities.
                </p>

                <p>
                  We believe international trade is not simply about moving
                  products from one country to another. It begins with finding
                  the <strong>right people, products and opportunities.</strong>
                </p>
              </div>

              <Link href="/about" className="ga-text-link">
                Discover GlobalAtlas
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="ga-services ga-section">
        <div className="ga-container">
          <div className="ga-section-heading">
            <div>
              <span className="ga-section-number">02</span>
              <p className="ga-section-label">WHAT WE DO</p>
            </div>

            <h2>
              From requirement
              <br />
              <span>to opportunity.</span>
            </h2>

            <p>
              We help simplify the journey of discovering suitable products,
              suppliers and international business connections.
            </p>
          </div>

          <div className="ga-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="ga-service-card"
                  key={service.number}
                >
                  <span className="ga-service-number">
                    {service.number}
                  </span>

                  <div className="ga-service-icon">
                    <Icon size={29} strokeWidth={1.6} />
                  </div>

                  <div className="ga-service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <Link
                    href="/services"
                    aria-label={`Learn more about ${service.title}`}
                    className="ga-service-arrow"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="ga-industries ga-section">
        <div className="ga-container">
          <div className="ga-industries-top">
            <div>
              <span className="ga-section-number">03</span>
              <p className="ga-section-label">
                MARKETS & PRODUCTS
              </p>
            </div>

            <div>
              <h2>
                Opportunities across
                <br />
                <span>multiple industries.</span>
              </h2>

              <p>
                Exploring suitable products and business opportunities across
                different sectors and global markets.
              </p>
            </div>
          </div>

          <div className="ga-industry-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className={`ga-industry-card ${industry.featured
                      ? "ga-industry-card-featured"
                      : ""
                    }`}
                  key={industry.number}
                >
                  <span className="ga-industry-number">
                    {industry.number}
                  </span>

                  <div className="ga-industry-icon">
                    <Icon
                      size={industry.featured ? 68 : 58}
                      strokeWidth={1.15}
                    />
                  </div>

                  <h3>{industry.title}</h3>

                  <ArrowUpRight
                    className="ga-industry-arrow"
                    size={20}
                  />
                </article>
              );
            })}
          </div>

          <div className="ga-industries-action">
            <Link
              href="/products"
              className="ga-outline-button"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="ga-process ga-section">
        <div className="ga-container">
          <div className="ga-process-heading">
            <div>
              <span className="ga-section-number">04</span>
              <p className="ga-section-label">HOW IT WORKS</p>
            </div>

            <h2>
              A clearer path to
              <br />
              <span>global opportunities.</span>
            </h2>
          </div>

          <div className="ga-process-grid">
            {process.map((item) => (
              <article
                className="ga-process-card"
                key={item.number}
              >
                <span>{item.number}</span>

                <div className="ga-process-line" />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="ga-cta ga-section">
        <div className="ga-container">
          <div className="ga-cta-card">
            <div className="ga-cta-glow" />

            <div className="ga-cta-content">
              <div>
                <p className="ga-section-label">
                  LET&apos;S WORK TOGETHER
                </p>

                <h2>
                  Your next global
                  <br />
                  <span>connection starts here.</span>
                </h2>

                <p>
                  Looking for suppliers, buyers, products or new international
                  opportunities? Start the conversation with GlobalAtlas Exim.
                </p>
              </div>

              <Link
                href="/request-quote"
                className="ga-cta-button"
              >
                Request a Quote
                <ArrowUpRight size={21} />
              </Link>
            </div>

            <div className="ga-cta-bottom">
              <span>INDIA</span>
              <div />
              <span>GLOBAL MARKETS</span>
              <div />
              <span>BEYOND EVERY BORDER</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}