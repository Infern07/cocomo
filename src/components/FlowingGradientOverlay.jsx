export default function FlowingGradientOverlay() {
  return (
    <div className="overlay" aria-hidden>
      <div className="red-glow glow-1" />
      <div className="red-glow glow-2" />
      <style>{`
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .red-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.12;
          animation: drift 25s ease-in-out infinite;
        }
        .glow-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%);
          top: -30%;
          left: -20%;
        }
        .glow-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, transparent 70%);
          bottom: -20%;
          right: -15%;
          animation-delay: -12s;
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
      `}</style>
    </div>
  )
}
