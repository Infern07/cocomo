import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Integrations from './components/Integrations'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="bg-gradient" aria-hidden />
      <div className="bg-orb bg-orb-1" aria-hidden />
      <div className="bg-orb bg-orb-2" aria-hidden />
      <div className="bg-orb bg-orb-3" aria-hidden />
      <div className="bg-mesh" aria-hidden />
      <div className="bg-particles" aria-hidden>
          <span className="particle" />
          <span className="particle" />
          <span className="particle" />
          <span className="particle" />
          <span className="particle" />
          <span className="particle" />
          <span className="particle" />
        </div>
      <div className="bg-aurora" aria-hidden />
      <div className="bg-noise" aria-hidden />

      <Navbar />

      <div className="app-wrap">
        <main className="snap-main" style={{ position: 'relative', zIndex: 10 }}>
          <Hero />
          <Stats />
          <Features />
          <Integrations />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
      <style>{`
        .bg-gradient {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(29, 185, 84, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(192, 192, 192, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 60%, rgba(29, 185, 84, 0.03) 0%, transparent 50%);
          pointer-events: none;
          animation: gradient-drift 20s ease-in-out infinite;
        }
        @keyframes gradient-drift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          animation: orb-float 14s ease-in-out infinite;
        }
        .bg-orb-1 {
          width: 320px;
          height: 320px;
          background: rgba(29, 185, 84, 0.18);
          top: 10%;
          left: 5%;
          animation: orb-float 14s ease-in-out infinite, orb-breathe 8s ease-in-out infinite;
          animation-delay: 0s, 0s;
        }
        .bg-orb-2 {
          width: 220px;
          height: 220px;
          background: rgba(29, 185, 84, 0.12);
          top: 55%;
          right: 8%;
          animation: orb-float 14s ease-in-out infinite, orb-breathe 8s ease-in-out infinite;
          animation-delay: -4s, -2s;
        }
        .bg-orb-3 {
          width: 280px;
          height: 280px;
          background: rgba(192, 192, 192, 0.08);
          bottom: 10%;
          left: 15%;
          animation: orb-float 14s ease-in-out infinite, orb-breathe 8s ease-in-out infinite;
          animation-delay: -8s, -4s;
        }
        @keyframes orb-float {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(30px, -40px) scale(1.08) rotate(2deg); }
          50% { transform: translate(-25px, 25px) scale(0.95) rotate(-1deg); }
          75% { transform: translate(15px, 35px) scale(1.05) rotate(1deg); }
        }
        @keyframes orb-breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.65; }
        }
        .bg-mesh {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(29, 185, 84, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29, 185, 84, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          animation: mesh-pulse 15s ease-in-out infinite, mesh-drift 25s linear infinite;
        }
        @keyframes mesh-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        @keyframes mesh-drift {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        .bg-particles {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .bg-particles .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(29, 185, 84, 0.15);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(29, 185, 84, 0.4);
          animation: particle-float 12s ease-in-out infinite;
        }
        .bg-particles .particle:nth-child(1) { top: 12%; left: 8%; animation-delay: 0s; }
        .bg-particles .particle:nth-child(2) { top: 60%; right: 12%; left: auto; animation-delay: -2s; }
        .bg-particles .particle:nth-child(3) { bottom: 25%; left: 22%; top: auto; animation-delay: -4s; }
        .bg-particles .particle:nth-child(4) { top: 38%; right: 6%; left: auto; animation-delay: -6s; }
        .bg-particles .particle:nth-child(5) { top: 75%; left: 45%; animation-delay: -1s; }
        .bg-particles .particle:nth-child(6) { top: 8%; right: 35%; left: auto; animation-delay: -3s; }
        .bg-particles .particle:nth-child(7) { bottom: 40%; right: 25%; left: auto; top: auto; animation-delay: -5s; }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          20% { transform: translate(25px, -35px) scale(1.3); opacity: 0.7; }
          40% { transform: translate(-40px, 15px) scale(0.8); opacity: 0.4; }
          60% { transform: translate(15px, 45px) scale(1.2); opacity: 0.8; }
          80% { transform: translate(-20px, -25px) scale(1); opacity: 0.5; }
        }
        .bg-aurora {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: linear-gradient(180deg, transparent 0%, rgba(29, 185, 84, 0.04) 35%, rgba(29, 185, 84, 0.06) 50%, transparent 70%);
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          animation: aurora-wave 8s ease-in-out infinite;
        }
        @keyframes aurora-wave {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .bg-noise {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          animation: noise-fade 4s ease-in-out infinite;
        }
        @keyframes noise-fade {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.04; }
        }
        @media (max-width: 768px) {
          .bg-orb { filter: blur(60px); }
          .bg-orb-1 { width: 180px; height: 180px; }
          .bg-orb-2 { width: 120px; height: 120px; }
          .bg-orb-3 { width: 150px; height: 150px; }
        }
        .app-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          max-width: 100%;
        }
        .snap-main {
          position: relative;
          z-index: 10;
          flex: 1;
          min-width: 0;
          overflow-x: hidden;
        }
      `}</style>
    </>
  )
}
