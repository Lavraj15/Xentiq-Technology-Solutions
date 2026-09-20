import { Link } from 'react-router-dom';

const services = [
  {
    tag: '01',
    title: 'Software Development',
    text: 'Custom desktop, enterprise and API-driven applications designed around your workflows, from first prototype to production.',
    stack: 'Node.js · Java · Python · .NET',
  },
  {
    tag: '02',
    title: 'Web Development',
    text: 'Marketing sites, dashboards and web applications built responsive, fast and easy for your team to maintain.',
    stack: 'React · Next.js · Node · MongoDB',
  },
  {
    tag: '03',
    title: 'Android Development',
    text: 'Native and cross-platform Android apps for customer-facing products and internal field tools.',
    stack: 'Kotlin · Java · React Native',
  },
  {
    tag: '04',
    title: 'Cloud Solutions',
    text: 'Architecture, migration and managed infrastructure so your systems stay available as traffic grows.',
    stack: 'Docker · Kubernetes · CI/CD',
  },
  {
    tag: '05',
    title: 'AWS Consulting',
    text: 'Well-architected AWS environments — compute, storage, networking and cost optimization.',
    stack: 'EC2 · S3 · Lambda · RDS',
  },
  {
    tag: '06',
    title: 'Digital Commerce',
    text: 'Online storefronts, catalog and payment systems built to convert and simple for your team to run.',
    stack: 'Headless commerce · Payment gateways',
  },
  {
    tag: '07',
    title: 'ERP & CRM',
    text: 'Connected systems for sales, inventory, HR and support that replace spreadsheets with one source of truth.',
    stack: 'Custom ERP · CRM integrations',
  },
  {
    tag: '08',
    title: 'E‑Learning Platforms',
    text: 'Course delivery, live sessions, assessments and progress tracking for training teams and institutions.',
    stack: 'LMS · Video · Assessments',
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="dotgrid" />
        <div className="wrap">
          <div className="breadcrumb">Services</div>
          <h1>Engineering across the stack you actually need.</h1>
          <p className="lead">
            Eight service lines, one team — so your software, web, mobile and
            infrastructure work together instead of being handled by five
            different vendors.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {services.map((s) => (
            <div className="service-row" key={s.tag}>
              <div className="tag">{s.tag}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="stack">{s.stack}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Not sure which service fits?</h2>
              <p>Send us a short brief and we'll recommend the right scope and stack.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Get a recommendation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
