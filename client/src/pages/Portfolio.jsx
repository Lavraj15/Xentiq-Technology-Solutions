import { Link } from 'react-router-dom';

const industries = [
  { icon: 'Fi', title: 'Fintech', text: 'Payment flows, dashboards and compliance-ready reporting tools.' },
  { icon: 'He', title: 'Healthcare IT', text: 'Patient records, scheduling and secure data-handling systems.' },
  { icon: 'Ed', title: 'EdTech', text: 'Course platforms, assessments and student progress tracking.' },
  { icon: 'Re', title: 'Retail', text: 'Storefronts, inventory and point-of-sale integrations.' },
  { icon: 'Lo', title: 'Logistics', text: 'Fleet tracking, route planning and warehouse management.' },
  { icon: 'Mf', title: 'Manufacturing', text: 'Production tracking, quality checks and ERP integration.' },
];

const cases = [
  { tag: 'Fintech', title: 'Loan servicing dashboard', text: 'A unified view for lenders to track disbursements, repayments and risk flags in real time.' },
  { tag: 'EdTech', title: 'Cohort learning platform', text: 'Course delivery, live sessions and automated assessment for a growing training institute.' },
  { tag: 'Retail', title: 'Multi-store commerce backend', text: 'A single inventory and order system connecting online storefront with in-store POS.' },
];

export default function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="dotgrid" />
        <div className="wrap">
          <div className="breadcrumb">Industries &amp; Work</div>
          <h1>Solutions shaped for how each industry actually operates.</h1>
          <p className="lead">
            We bring the same engineering discipline to every sector, but the
            right solution always starts with your industry's specific
            constraints.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Industries we serve</div>
            <h2>Domain-aware engineering, not generic templates</h2>
          </div>
          <div className="grid-3">
            {industries.map((i) => (
              <div className="industry-card" key={i.title}>
                <div className="icon">{i.icon}</div>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Selected work</div>
            <h2>A few of the problems we've solved</h2>
          </div>
          <div className="grid-3">
            {cases.map((c, i) => (
              <div className={`case-card ${i === 1 ? 'alt' : ''}`} key={c.title}>
                <div className="tag">{c.tag}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>See how we'd approach your project</h2>
              <p>Share a few details and we'll walk you through a similar case study on a call.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Book a call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
