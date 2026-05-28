"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ProtocolSelectionProps = {
  onClose?: () => void;
  onStart?: () => void;
};

const ProtocolSelection = ({ onClose, onStart }: ProtocolSelectionProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="pointer-events-auto flex flex-col font-mono w-187.5 h-137.5 bg-kat-bg/90 backdrop-blur-sm border border-kat-accent shadow-[0_4px_30px_var(--kat-accent-glow-sm)]">
        {/* Window Header */}
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

        {/* Window Body */}
        <div className="flex flex-col flex-1 items-center justify-center p-8 gap-8">
          <div className="text-kat-accent text-[14px] uppercase w-full text-left opacity-90 animate-pulse">
            {">"} AUTHENTICATION SUCCESSFUL. WELCOME.
          </div>

          <Button
            variant="bare"
            size="auto"
            onClick={onStart}
            className="border-[3px] border-kat-accent px-8 py-4 text-kat-accent text-[20px] font-bold transition-all hover:bg-kat-accent hover:text-kat-bg rounded-none uppercase tracking-widest cursor-pointer w-full max-w-md animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_var(--kat-accent-glow)]"
          >
            [ INICIAR PROTOCOLO DE ASCENSÃO ]
          </Button>

          <div className="border border-dashed border-kat-accent w-full p-6">
            <div className="text-kat-accent text-[16px] mb-6">
              {">"} SELECT PROTOCOL DIFFICULTY:
            </div>

            <div className="flex flex-row gap-4 w-full justify-between">
              <Button
                variant="bare"
                size="auto"
                onClick={() => setSelectedDifficulty("CASUAL")}
                className={`flex-1 border border-kat-accent px-4 py-3 transition-colors uppercase tracking-widest text-[16px] cursor-pointer rounded-none ${
                  selectedDifficulty === "CASUAL"
                    ? "bg-kat-accent/20 text-kat-text"
                    : "text-kat-accent hover:bg-kat-accent/10"
                }`}
              >
                [ CASUAL ]
              </Button>

              <Button
                variant="bare"
                size="auto"
                onClick={() => setSelectedDifficulty("NORMAL")}
                className={`flex-1 border border-kat-accent px-4 py-3 transition-colors uppercase tracking-widest text-[16px] cursor-pointer rounded-none ${
                  selectedDifficulty === "NORMAL"
                    ? "bg-kat-accent/20 text-kat-text"
                    : "text-kat-accent hover:bg-kat-accent/10"
                }`}
              >
                [ NORMAL ]
              </Button>

              <Button
                variant="bare"
                size="auto"
                onClick={() => setSelectedDifficulty("HARDCORE")}
                className={`flex-1 border border-kat-error px-4 py-3 bg-kat-error text-kat-text font-bold uppercase tracking-widest text-[16px] cursor-pointer rounded-none hover:bg-kat-error-hover transition-colors shadow-[0_0_10px_var(--kat-error-glow)] ${
                  selectedDifficulty === "HARDCORE"
                    ? "ring-2 ring-kat-text ring-offset-2 ring-offset-kat-bg"
                    : ""
                }`}
              >
                [ HARDCORE ]
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolSelection;
