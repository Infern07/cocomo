import logoImg from '../assets/Logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={logoImg} alt="Cocomo" className="footer-logo-img" />
          COCOMO Media
        </div>
        <div className="footer-links">
          <a href="mailto:cocomo.digital@gmail.com">cocomo.digital@gmail.com</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
      <style>{`
        .site-footer {
          margin-top: auto;
          flex-shrink: 0;
          padding: 2rem 2.5rem;
          border-top: 1px solid var(--border-subtle);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
        }
        .footer-inner {
          max-width: var(--section-max-width);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.125rem;
          letter-spacing: 0.1em;
          color: var(--accent);
        }
        .footer-logo-img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        .footer-links a {
          font-family: var(--font-body);
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9375rem;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .site-footer { padding: 1.5rem 1.5rem; }
          .footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
        }
        @media (max-width: 480px) {
          .site-footer { padding: 1.25rem 1rem; }
          .footer-links { flex-direction: column; gap: 0.75rem; }
        }
      `}</style>
    </footer>
  )
}
