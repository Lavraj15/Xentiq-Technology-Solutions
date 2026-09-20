import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Custom Software",
    text: "Tailored corporate and consumer applications built around how your business actually works.",
  },
  {
    num: "02",
    title: "Web & Android Apps",
    text: "Fast, responsive websites and native Android apps designed for real-world usage and scale.",
  },
  {
    num: "03",
    title: "Cloud & AWS",
    text: "Migration, architecture and managed cloud infrastructure that grows with your traffic.",
  },
  {
    num: "04",
    title: "ERP & CRM",
    text: "Connected systems for sales, operations and support that replace spreadsheets and guesswork.",
  },
  {
    num: "05",
    title: "Digital Commerce",
    text: "Storefronts, payments and catalog systems built to convert and easy for your team to run.",
  },
  {
    num: "06",
    title: "E‑Learning Platforms",
    text: "Course delivery, assessments and progress tracking for training teams and institutions.",
  },
];

const industries = [
  "Fintech",
  "Healthcare IT",
  "EdTech",
  "Retail",
  "Logistics",
  "Manufacturing",
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">Software development company · Noida</div>
            <h1>
              We turn business problems into software people actually use.
            </h1>
            <p className="lead">
              Xentiq Technology Solutions designs and builds custom software,
              web and mobile products, cloud infrastructure and ERP/CRM systems
              for growing companies.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link to="/services" className="btn btn-ghost">
                See our services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <b>50+</b>
                <span>Projects delivered</span>
              </div>
              <div className="stat">
                <b>11-50</b>
                <span>Engineers &amp; consultants</span>
              </div>
              <div className="stat">
                <b>6</b>
                <span>Core service lines</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-x" />
            <div className="hero-card c1">
              <b>Web &amp; Android</b>
              <span>Infrastructure that scales with demand</span>
            </div>
            <div className="hero-card c2">
              <b>ERP / CRM</b>
              <span>One system for sales &amp; operations</span>
            </div>
            <div className="hero-card c3">
              <b>Cloud &amp; AWS</b>
              <span>Products built for daily use</span>
            </div>
          </div>
        </div>

        <div className="marquee-strip">
          <div className="wrap">
            <span>SOFTWARE DEVELOPMENT</span>
            <span>WEB &amp; ANDROID</span>
            <span>CLOUD &amp; AWS</span>
            <span>DIGITAL COMMERCE</span>
            <span>ERP / CRM</span>
            <span>E-LEARNING</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What we do</div>
            <h2>Six service lines, one accountable team</h2>
            <p>
              From a first prototype to a system your whole company depends on —
              we stay involved end to end.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <div className="card" key={s.num}>
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="split-panel">
            <div>
              <div className="eyebrow">Why Xentiq</div>
              <h2>Built by engineers who ship, not just plan</h2>
              <div className="value-block">
                <div className="value-icon">1</div>
                <div>
                  <h4>Direct access to your engineers</h4>
                  <p>
                    No account-manager layer between you and the people writing
                    your code.
                  </p>
                </div>
              </div>
              <div className="value-block">
                <div className="value-icon">2</div>
                <div>
                  <h4>Fixed scope, visible progress</h4>
                  <p>
                    Weekly demos and a shared roadmap, so there are no surprises
                    at delivery.
                  </p>
                </div>
              </div>
              <div className="value-block">
                <div className="value-icon">3</div>
                <div>
                  <h4>Support after launch</h4>
                  <p>
                    We stay on for monitoring, fixes and the next phase of the
                    product.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="case-card alt">
                <div className="tag">Industries we serve</div>
                <h3>Solutions shaped for your sector</h3>
                <p style={{ marginTop: 14 }}>
                  {industries.map((i) => (
                    <span
                      className="badge"
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        color: "#fff",
                      }}
                    >
                      {i}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Have a project in mind?</h2>
              <p>
                Tell us what you're building — we'll reply with next steps
                within one business day.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
