"use client";

type LockScreenProps = {
  onUnlock: () => void;
};

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  return (
    <div
      // CORREÇÃO 1: Removido o 'mb-30'. Adicionado 'overflow-hidden' para garantir que nada passe dessa div.
      // Ajustado o padding base para p-4 (mobile) e p-8 (desktop).
      className="relative flex flex-col justify-between p-4 md:p-8 w-screen h-dvh bg-kat-bg overflow-hidden cursor-pointer"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={onUnlock}
    >
      {/* Header (Fica ancorado no topo) */}
      <div className="flex justify-between items-start w-full shrink-0 z-10">
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

      {/* Center Content (A Mola) */}
      {/* CORREÇÃO 2: 'flex-1' e 'min-h-0' fazem essa área absorver o espaço restante sem empurrar as bordas */}
      <div className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-8 min-h-0 py-4 z-10">
        {/* Star Logo */}
        {/* CORREÇÃO 3: Usando 'h-[30dvh]' (30% da altura da tela) com limites mínimo e máximo. Assim, em celulares pequenos ele encolhe sozinho. */}
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-kat-text w-auto h-[30dvh] min-h-30 max-h-[350px]"
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
        <div className="flex flex-col items-center gap-4 shrink-0">
          {/* Ajuste fino no tamanho da fonte mobile (4xl) para evitar quebra de linha indesejada */}
          <div className="text-kat-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[6px] md:tracking-[16px] lg:tracking-[24px] ml-2 md:ml-4">
            ESKORIA
          </div>
          <div className="w-full max-w-150 h-px bg-kat-accent opacity-30" />
        </div>
      </div>

      {/* Footer (Fica ancorado na base) */}
      <div className="flex flex-col items-center gap-4 w-full shrink-0 z-10">
        <div className="flex flex-col items-center gap-1">
          <div className="text-kat-accent text-[9px] md:text-[10px] tracking-[1px] opacity-70 text-center">
            SYSTEM INITIALIZED
          </div>
          <div className="text-kat-accent text-[9px] md:text-[10px] tracking-[1px] opacity-70 text-center">
            VERSION 7.7.7 // K.A.T. OS
          </div>
          <div className="text-kat-accent text-[9px] md:text-[10px] tracking-[1px] opacity-70 text-center">
            © ESKORIA CORP. - ALL RIGHTS REVERSED
          </div>
        </div>

        {/* Action indicator */}
        <div className="flex items-center gap-2 px-4 py-3 md:px-8 md:py-4 border border-kat-accent hover:bg-kat-accent/10 transition-colors">
          <span className="text-kat-accent text-xs md:text-sm tracking-[1px] text-center">
            PRESSIONE QUALQUER TECLA PARA INICIAR
          </span>
          <div className="animate-pulse w-2 h-3.5 md:w-3 md:h-4.5 bg-kat-accent shrink-0" />
        </div>
      </div>

      {/* Corner Accents */}
      {/* Ajustado para se alinhar com o novo padding base */}
      <div className="absolute bottom-4 left-4 text-kat-accent text-xl opacity-50 pointer-events-none">
        +
      </div>
      <div className="absolute bottom-4 right-4 text-kat-accent text-xl opacity-50 pointer-events-none">
        +
      </div>
    </div>
  );
};
