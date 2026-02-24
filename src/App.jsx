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
        </div>

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
          background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(29, 185, 84, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(192, 192, 192, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        .bg-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
          animation: orb-float 12s ease-in-out infinite;
        }
        .bg-orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(29, 185, 84, 0.15);
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }
        .bg-orb-2 {
          width: 200px;
          height: 200px;
          background: rgba(29, 185, 84, 0.1);
          top: 60%;
          right: 10%;
          animation-delay: -4s;
        }
        .bg-orb-3 {
          width: 250px;
          height: 250px;
          background: rgba(192, 192, 192, 0.06);
          bottom: 15%;
          left: 20%;
          animation-delay: -8s;
        }
        @keyframes orb-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.95); }
        }
        .bg-mesh {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(29, 185, 84, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29, 185, 84, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
          pointer-events: none;
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
          width: 3px;
          height: 3px;
          background: rgba(29, 185, 84, 0.35);
          border-radius: 50%;
          animation: particle-float 10s ease-in-out infinite;
        }
        .bg-particles .particle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .bg-particles .particle:nth-child(2) { top: 60%; right: 15%; left: auto; animation-delay: -2.5s; }
        .bg-particles .particle:nth-child(3) { bottom: 25%; left: 25%; top: auto; animation-delay: -5s; }
        .bg-particles .particle:nth-child(4) { top: 40%; right: 8%; left: auto; animation-delay: -7s; }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(30px, -40px) scale(1.2); opacity: 0.7; }
          50% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.5; }
          75% { transform: translate(15px, 30px) scale(1.1); opacity: 0.6; }
        }
        .bg-mesh {
          animation: mesh-pulse 15s ease-in-out infinite;
        }
        @keyframes mesh-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.65; }
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
        }
        .snap-main {
          position: relative;
          z-index: 10;
          flex: 1;
        }
      `}</style>
    </>
  )
}
