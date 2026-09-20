import { Link } from 'react-router-dom';

const timeline = [
  { year: 'Foundation', text: 'Xentiq Technology Solutions was founded in Noida with a small team focused on custom software delivery.' },
  { year: 'Growth', text: 'Expanded into web, Android, cloud and ERP/CRM engineering as client needs broadened.' },
  { year: 'Today', text: 'A team of 11-50 engineers and consultants delivering across fintech, healthcare, retail and education.' },
];

const team = [
  { initials: 'MP', role: 'Engineering & Delivery' },
  { initials: 'CD', role: 'Cloud & DevOps' },
  { initials: 'UX', role: 'Product & Design' },
  { initials: 'QA', role: 'Quality & Testing' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="dotgrid" />
        <div className="wrap">
          <div className="breadcrumb">About Xentiq</div>
          <h1>Ideas today, a brighter tomorrow.</h1>
          <p className="lead">
            We are an IT services and technology consulting company focused on
            delivering innovative, reliable and scalable digital solutions —
            based in Noida, Uttar Pradesh.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split-panel">
            <div>
              <div className="eyebrow">Overview</div>
              <h2>We help organizations turn ideas into impactful technology</h2>
              <p>
                Xentiq Technology Solutions is an IT services and technology
                consulting company. We help businesses transform their ideas
                into working software through software development, web and
                application development, cloud solutions, AI-driven tools and
                IT consulting.
              </p>
              <p>
                Our goal is to simplify technology, solve real business
                challenges, and help companies grow in the digital era. We
                believe in long-term partnerships built on quality, innovation
                and a customer-first approach.
              </p>
              <Link to="/contact" className="btn btn-primary">Work with us</Link>
            </div>
            <div className="timeline">
              {timeline.map((t) => (
                <div className="item" key={t.year}>
                  <h4>{t.year}</h4>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How we work</div>
            <h2>A simple, transparent process</h2>
          </div>
          <div className="grid-4">
            {[
              { idx: '1', t: 'Discover', d: 'Understand your goals, users and constraints before writing a line of code.' },
              { idx: '2', t: 'Design', d: 'Map the architecture and interface so everyone agrees before we build.' },
              { idx: '3', t: 'Build', d: 'Ship in short, visible sprints with regular demos.' },
              { idx: '4', t: 'Support', d: 'Monitor, fix and improve the product after go-live.' },
            ].map((s) => (
              <div className="process-step" key={s.idx}>
                <div className="idx">{s.idx}</div>
                <div>
                  <h4 style={{ marginBottom: 6 }}>{s.t}</h4>
                  <p style={{ fontSize: '0.92rem' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Our team</div>
            <h2>Small, senior and hands-on</h2>
            <p>A focused group of engineers, designers and consultants — not a large bench you never meet.</p>
          </div>
          <div className="grid-4">
            {team.map((m) => (
              <div className="team-card" key={m.initials}>
                <div className="team-avatar">{m.initials}</div>
                <h4 style={{ marginBottom: 2 }}>{m.role}</h4>
                <p style={{ fontSize: '0.88rem' }}>Xentiq Technology Solutions</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
