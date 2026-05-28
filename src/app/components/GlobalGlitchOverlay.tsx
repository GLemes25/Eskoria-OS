const GlobalGlitchOverlay = () => {
  return (
    <div className="absolute inset-0 z-[100] pointer-events-none overflow-hidden mix-blend-exclusion">
      {/* Static Lines */}
      <div className="absolute w-full h-0.5 bg-kat-text top-[15%] opacity-70 animate-[pulse_0.05s_infinite]" />
      <div className="absolute w-full h-2 bg-kat-glitch-mid top-[45%] opacity-30 animate-[ping_0.2s_infinite]" />
      <div className="absolute w-full h-px bg-kat-text top-[70%] opacity-90 animate-[pulse_0.1s_infinite]" />
      <div className="absolute w-full h-3.75 bg-kat-glitch-light top-[85%] opacity-20 animate-pulse" />
      <div className="absolute w-1/2 h-0.75 bg-kat-text top-[30%] left-[25%] opacity-80 animate-[ping_0.15s_infinite]" />

      {/* Inverted / Distorted Blocks */}
      <div className="absolute w-75 h-15 top-[25%] left-[10%] backdrop-invert flex items-center justify-center border border-kat-text">
        <span className="text-kat-bg font-bold font-mono text-xl animate-[pulse_0.1s_infinite]">
          FATAL EXCEPTION
        </span>
      </div>
      <div className="absolute w-100 h-25 top-[60%] right-[15%] backdrop-invert flex items-center justify-center">
        <span className="text-kat-bg font-bold font-mono text-2xl rotate-180">
          0xDEADBEEF
        </span>
      </div>
      <div className="absolute w-37.5 h-10 top-[10%] right-[30%] backdrop-invert" />
      <div className="absolute w-50 h-50 top-[40%] left-[5%] backdrop-invert mix-blend-difference opacity-80" />
      <div className="absolute w-20 h-200 top-[10%] right-[5%] backdrop-invert mix-blend-exclusion opacity-60" />

      {/* Heavy Glitch Tearing */}
      <div className="absolute w-full h-12.5 top-[35%] backdrop-invert opacity-50 translate-x-5 animate-[pulse_0.1s_infinite]" />
      <div className="absolute w-full h-7.5 top-[75%] bg-kat-error mix-blend-overlay opacity-40 -translate-x-7.5 animate-[ping_0.3s_infinite]" />
    </div>
  );
};

export { GlobalGlitchOverlay };
