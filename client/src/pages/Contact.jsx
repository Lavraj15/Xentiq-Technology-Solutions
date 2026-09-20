import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", text: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", text: "" });

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          state: "ok",
          text: "Thanks — your message has been sent. We'll reply within one business day.",
        });
        setForm(initialForm);
      } else {
        setStatus({
          state: "err",
          text: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        state: "err",
        text: "Could not reach the server. Please check your connection and try again.",
      });
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="dotgrid" />
        <div className="wrap">
          <div className="breadcrumb">Contact</div>
          <h1>Let's talk about what you're building.</h1>
          <p className="lead">
            Send us a few details about your project and our team will get back
            to you directly — no sales queue.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <div className="contact-info-card">
                <h3>Contact details</h3>
                <div className="contact-info-row">
                  <div className="ico">📍</div>
                  <div>
                    <div className="lbl">Office</div>
                    <div className="val">
                      Sector 63, Noida, Uttar Pradesh 201309
                    </div>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="ico">📞</div>
                  <div>
                    <div className="lbl">Phone</div>
                    <div className="val">
                      <a href="tel:+919718018312">+91 97180 18312</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="ico">✉️</div>
                  <div>
                    <div className="lbl">Email</div>
                    <div className="val">
                      <a href="mailto:xentiqtechnology@gmail.com">
                        xentiqtechnology@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-row">
                  <div className="ico">🕐</div>
                  <div>
                    <div className="lbl">Hours</div>
                    <div className="val">Mon – Sat, 10:00 AM – 7:00 PM IST</div>
                  </div>
                </div>
              </div>

              <div className="map-embed">
                <iframe
                  title="Xentiq Technology Solutions location - Sector 63 Noida"
                  src="https://www.google.com/maps?q=Sector+63,+Noida,+Uttar+Pradesh+201309&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="form-card">
              <h3>Send us a message</h3>
              <p style={{ marginBottom: 26 }}>
                Fill in the form and we'll email you back at the address you
                provide.
              </p>

              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="service">Service needed</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={onChange}
                    >
                      <option value="">Select a service</option>
                      <option>Software Development</option>
                      <option>Web Development</option>
                      <option>Android Development</option>
                      <option>Cloud / AWS</option>
                      <option>Digital Commerce</option>
                      <option>ERP / CRM</option>
                      <option>E-Learning</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us a bit about your project, timeline and budget"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status.state === "loading"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {status.state === "loading" ? "Sending…" : "Send message"}
                </button>

                {status.state === "ok" && (
                  <div className="form-msg ok">{status.text}</div>
                )}
                {status.state === "err" && (
                  <div className="form-msg err">{status.text}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
