"use client";

import { TueOverlay } from "@/components/TueOverlay";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type ProtocolSelectionProps = {
  onClose?: () => void;
  onStart?: () => void;
};

const DIFFICULTIES = ["CASUAL", "NORMAL", "HARDCORE"] as const;
type Difficulty = (typeof DIFFICULTIES)[number];

const ProtocolSelection = ({ onClose, onStart }: ProtocolSelectionProps) => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);
  const [showTueImage, setShowTueImage] = useState(false);

  const handleStart = () => {
    if (selectedDifficulty === "HARDCORE") {
      onStart?.();
    } else {
      setShowTueImage(true);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 p-2 sm:p-4">
      <div className="pointer-events-auto flex flex-col font-mono w-full md:w-250 max-w-full md:max-w-[95vw] h-auto max-h-[95dvh] md:max-h-[90dvh] bg-kat-bg/90 backdrop-blur-sm border border-kat-accent kat-window-glow overflow-hidden rounded-sm">
        <div className="flex items-center justify-between px-3 md:px-4 py-1.5 md:py-2 shrink-0 border-b border-kat-accent bg-kat-accent/10 gap-2">
          <span className="text-[11px] xs:text-[12px] md:text-[14px] font-bold tracking-widest text-kat-accent truncate">
            KNOWLEDGE ASCENSION TERMINAL v1.0
          </span>
          <div className="flex space-x-2 md:space-x-4 text-kat-accent font-bold shrink-0">
            <Button
              variant="bare"
              size="auto"
              className="hover:text-kat-text transition-colors cursor-pointer leading-none text-[14px] md:text-base"
            >
              _
            </Button>
            <Button
              variant="bare"
              size="auto"
              onClick={onClose}
              className="hover:text-kat-error transition-colors cursor-pointer leading-none text-[14px] md:text-base"
            >
              X
            </Button>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-center p-5 md:p-10 gap-6 md:gap-8 overflow-y-auto">
          <div className="text-kat-accent text-[12px] md:text-[14px] uppercase w-full text-left opacity-90 animate-pulse wrap-break-word">
            {">"} AUTHENTICATION SUCCESSFUL. WELCOME, OPERATOR.
          </div>

          <div className="border border-dashed border-kat-accent w-full p-4 md:p-6 bg-kat-accent/5">
            <div className="text-kat-accent text-[14px] md:text-[16px] mb-4 md:mb-6">
              {">"} SELECT PROTOCOL DIFFICULTY:
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full justify-between">
              {DIFFICULTIES.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant="bare"
                  size="auto"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`flex-1 border px-3 md:px-4 py-2.5 md:py-3 transition-colors uppercase tracking-widest text-[14px] xs:text-[15px] md:text-[16px] cursor-pointer rounded-none text-center justify-center ${
                    selectedDifficulty === difficulty
                      ? "bg-kat-error border-kat-error text-kat-text font-bold shadow-[0_0_10px_var(--kat-error-glow)]"
                      : "border-kat-accent text-kat-accent hover:bg-kat-accent/10"
                  }`}
                >
                  [ {difficulty} ]
                </Button>
              ))}
            </div>
          </div>

          <Button
            variant="bare"
            size="auto"
            onClick={handleStart}
            className="border-2px md:border-[3px] border-kat-accent px-5 md:px-8 py-3 md:py-4 text-kat-accent text-[16px] xs:text-[18px] md:text-[20px] font-bold transition-all hover:bg-kat-accent hover:text-kat-bg rounded-none uppercase tracking-widest cursor-pointer w-full animate-[pulse_2s_ease-in-out_infinite] kat-window-glow wrap-break-word text-center justify-center"
          >
            [ INICIAR PROTOCOLO DE ASCENSÃO ]
          </Button>
        </div>
      </div>

      <TueOverlay
        isVisible={showTueImage}
        onDismiss={() => setShowTueImage(false)}
      />
    </div>
  );
};

export default ProtocolSelection;
