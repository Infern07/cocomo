import FloatingCTA from './components/FloatingCTA'
import CustomCursor from './components/CustomCursor'
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
      <FloatingCTA />
      <style>{`
        .bg-gradient {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(29, 185, 84, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(192, 192, 192, 0.03) 0%, transparent 50%);
          pointer-events: none;
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
