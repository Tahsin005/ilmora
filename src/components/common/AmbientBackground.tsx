import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] mix-blend-screen">

      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/20 rounded-full blur-[150px] animate-blob"
      />


      <div
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[140px] animate-blob"
        style={{ background: 'hsl(var(--accent-2) / 0.18)', animationDelay: '2s' }}
      />


      <div
        className="absolute bottom-[-20%] left-[20%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[160px] animate-blob"
        style={{ background: 'hsl(var(--accent-3) / 0.15)', animationDelay: '4s' }}
      />


      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
