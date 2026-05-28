"use client";

import Image from "next/image";

type LockScreenProps = {
  onUnlock: () => void;
};

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  return (
    <div
      className="relative flex flex-col justify-between p-4 md:p-8 w-screen h-dvh bg-kat-bg overflow-hidden cursor-pointer"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={onUnlock}
    >
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

      <div className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-8 min-h-0 py-4 z-10">
        <div className="relative w-full h-[30dvh] min-h-30 max-h-87.5">
          <Image
            src="/logo.svg"
            alt="Eskoria"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="text-kat-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[6px] md:tracking-[16px] lg:tracking-[24px] ml-2 md:ml-4">
            ESKORIA
          </div>
          <div className="w-full max-w-150 h-px bg-kat-accent opacity-30" />
        </div>
      </div>

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

        <div className="flex items-center gap-2 px-4 py-3 md:px-8 md:py-4 border border-kat-accent hover:bg-kat-accent/10 transition-colors">
          <span className="text-kat-accent text-xs md:text-sm tracking-[1px] text-center">
            PRESSIONE QUALQUER TECLA PARA INICIAR
          </span>
          <div className="animate-pulse w-2 h-3.5 md:w-3 md:h-4.5 bg-kat-accent shrink-0" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-kat-accent text-xl opacity-50 pointer-events-none">
        +
      </div>
      <div className="absolute bottom-4 right-4 text-kat-accent text-xl opacity-50 pointer-events-none">
        +
      </div>
    </div>
  );
};
