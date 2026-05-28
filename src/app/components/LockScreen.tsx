"use client";

type LockScreenProps = {
  onUnlock: () => void;
};

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  return (
    <div
      className="relative flex flex-col justify-between p-12 w-480 h-270 bg-kat-bg cursor-pointer"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={onUnlock}
    >
      {/* Header */}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-1">
          <div className="text-kat-accent text-[11px] tracking-[0.5px]">
            K.A.T. OS v7.7.7
          </div>
          <div className="text-kat-accent text-[11px] tracking-[0.5px]">
            BOOT SEQUENCE [ OK ]
          </div>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <div className="text-kat-accent text-[11px] tracking-[0.5px]">
            SESSION: GUEST
          </div>
          <div className="text-kat-accent text-[11px] tracking-[0.5px]">
            SECURITY LEVEL: UNKNOWN
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Star Logo */}
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-kat-text"
        >
          <g opacity="0.9">
            <path
              d="M200 20 L220 140 L340 140 L240 220 L280 340 L200 260 L120 340 L160 220 L60 140 L180 140 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle
              cx="200"
              cy="200"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="200"
              y1="20"
              x2="200"
              y2="80"
              stroke="var(--color-kat-bg)"
              strokeWidth="3"
              opacity="0.3"
            />
            <line
              x1="280"
              y1="340"
              x2="260"
              y2="300"
              stroke="var(--color-kat-bg)"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="120"
              y1="340"
              x2="140"
              y2="300"
              stroke="var(--color-kat-bg)"
              strokeWidth="2"
              opacity="0.3"
            />
          </g>
        </svg>

        {/* Title */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-kat-text text-[96px] font-bold tracking-[24px]">
            ESKORIA
          </div>
          <div className="w-150 h-px bg-kat-accent opacity-30" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-1">
          <div className="text-kat-accent text-[10px] tracking-[1px] opacity-70">
            SYSTEM INITIALIZED
          </div>
          <div className="text-kat-accent text-[10px] tracking-[1px] opacity-70">
            VERSION 7.7.7 // K.A.T. OS
          </div>
          <div className="text-kat-accent text-[10px] tracking-[1px] opacity-70">
            © ESKORIA CORP. - ALL RIGHTS REVERSED
          </div>
        </div>

        {/* Action indicator */}
        <div className="flex items-center gap-2 px-8 py-4 cursor-pointer hover:bg-kat-accent/10 transition-colors border border-kat-accent">
          <span className="text-kat-accent text-sm tracking-[1px]">
            PRESSIONE QUALQUER TECLA PARA INICIAR
          </span>
          <div className="animate-pulse w-3 h-4.5 bg-kat-accent" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute bottom-6 left-6 text-kat-accent text-xl opacity-50">
        +
      </div>
      <div className="absolute bottom-6 right-6 text-kat-accent text-xl opacity-50">
        +
      </div>
    </div>
  );
};
