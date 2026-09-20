import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: 16 }}>
              <img src={logo} alt="Xentiq logo" />
              Xentiq Technology Solutions
            </div>
            <p style={{ color: '#8fa0bd', maxWidth: 280, fontSize: '0.9rem' }}>
              Ideas today, a brighter tomorrow — custom software, web, mobile
              and cloud engineering for growing businesses.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Industries</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Software Development</Link></li>
              <li><Link to="/services">Web &amp; Android Apps</Link></li>
              <li><Link to="/services">Cloud &amp; AWS</Link></li>
              <li><Link to="/services">ERP &amp; CRM</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>Sector 63, Noida, U.P. 201309</li>
              <li><a href="tel:+919718018312">+91 97180 18312</a></li>
              <li><a href="mailto:xentiqtechnology@gmail.com">xentiqtechnology@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Xentiq Technology Solutions. All rights reserved.</span>
          <span>Noida, Uttar Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
