import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Xentiq Technology Solutions logo" />
          Xentiq
        </NavLink>

        <nav>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <NavLink to="/contact" className="btn btn-primary">Get a quote</NavLink>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
