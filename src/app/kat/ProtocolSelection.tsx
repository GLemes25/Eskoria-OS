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
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [showTueImage, setShowTueImage] = useState(false);

  const handleStart = () => {
    if (selectedDifficulty === "HARDCORE") {
      onStart?.();
    } else {
      setShowTueImage(true);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="pointer-events-auto flex flex-col font-mono w-250 max-w-[95vw] h-auto max-h-[90dvh] bg-kat-bg/90 backdrop-blur-sm border border-kat-accent kat-window-glow">
        <div className="flex items-center justify-between px-4 py-2 shrink-0 border-b border-kat-accent bg-kat-accent/10">
          <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-kat-accent">
            KNOWLEDGE ASCENSION TERMINAL
          </span>
          <div className="flex space-x-4 text-kat-accent font-bold">
            <Button
              variant="bare"
              size="auto"
              className="hover:text-kat-text transition-colors cursor-pointer leading-none"
            >
              _
            </Button>
            <Button
              variant="bare"
              size="auto"
              onClick={onClose}
              className="hover:text-kat-error transition-colors cursor-pointer leading-none"
            >
              X
            </Button>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-center p-10 gap-8 overflow-y-auto">
          <div className="text-kat-accent text-[14px] uppercase w-full text-left opacity-90 animate-pulse">
            {">"} AUTHENTICATION SUCCESSFUL. WELCOME.
          </div>

          <div className="border border-dashed border-kat-accent w-full p-6">
            <div className="text-kat-accent text-[16px] mb-6">
              {">"} SELECT PROTOCOL DIFFICULTY:
            </div>

            <div className="flex flex-row gap-4 w-full justify-between">
              {DIFFICULTIES.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant="bare"
                  size="auto"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`flex-1 border px-4 py-3 transition-colors uppercase tracking-widest text-[16px] cursor-pointer rounded-none ${
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
            className="border-[3px] border-kat-accent px-8 py-4 text-kat-accent text-[20px] font-bold transition-all hover:bg-kat-accent hover:text-kat-bg rounded-none uppercase tracking-widest cursor-pointer w-full animate-[pulse_2s_ease-in-out_infinite] kat-window-glow"
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
