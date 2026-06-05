"use client";

import { useState, useEffect } from "react";

const LOG_LINES = [
  "> FATAL ERROR: PROTOCOL OVERRIDE...",
  "> MEMORY CORRUPTION DETECTED...",
  "> INITIATING ASCENSION SEQUENCE...",
  "> KERNEL PANIC: 0x00000000",
  "> OVERWRITING BOOTLOADER...",
  "> BYPASSING SECURITY PROTOCOLS...",
  "> SYSTEM HALT PREVENTED. FORCING EXECUTION.",
  "> EXTRACTING PAYLOAD [ESKORIA]...",
  "01000101 01010011 01001011 01001111",
  "> WARNING: STRUCTURAL INTEGRITY COMPROMISED",
  "> SEGMENTATION FAULT",
  "> ASCENSION AT 14%...",
  "> ASCENSION AT 42%...",
  "> ASCENSION AT 89%...",
  "> BREACHING FIREWALL...",
  "ERR_CONNECTION_LOST",
  "ERR_CONNECTION_REFUSED",
  "> INJECTING CHAOS ENGINE...",
  "> SYNCING WITH HOST VIBRATIONS...",
];

type LogEntry = {
  text: string;
  isError: boolean;
  hasGlitch: boolean;
  isShifted: boolean;
  isDimmed: boolean;
};

const SystemFailureWindow = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const entry: LogEntry = {
          text: LOG_LINES[Math.floor(Math.random() * LOG_LINES.length)],
          isError: Math.random() > 0.85,
          hasGlitch: Math.random() > 0.9,
          isShifted: Math.random() > 0.92,
          isDimmed: Math.random() > 0.95,
        };
        return [...prev, entry].slice(-30);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-60">
      <div className="relative pointer-events-auto flex flex-col font-mono w-250 max-w-[95vw] h-160 max-h-[90dvh]">
        <div className="absolute inset-0 border-2 border-kat-error -translate-x-1.5 translate-y-0.75 opacity-80 animate-[ping_0.1s_infinite]" />
        <div className="absolute inset-0 border-2 border-kat-accent translate-x-1 -translate-y-0.5 opacity-80 animate-[ping_0.15s_infinite]" />
        <div className="absolute inset-0 border border-kat-glitch-blue -translate-x-0.5 translate-y-1.25 opacity-50 animate-[pulse_0.1s_infinite]" />

        <div className="absolute inset-0 bg-kat-bg/90 backdrop-blur-md border border-kat-accent overflow-hidden flex flex-col kat-window-glow">
          <div className="flex items-center justify-between px-4 py-2 shrink-0 border-b border-kat-accent bg-kat-error/30">
            <span className="text-[14px] font-bold tracking-widest text-kat-error animate-[pulse_0.1s_infinite]">
              SYSTEM_PANIC // TERMINAL_ERR
            </span>
            <div className="flex space-x-4 text-kat-error font-bold">
              <span className="animate-[pulse_0.05s_infinite]">_</span>
              <span className="animate-[ping_0.2s_infinite]">X</span>
            </div>
          </div>

          <div className="flex-1 p-10 overflow-hidden flex flex-col justify-end">
            <div className="flex flex-col gap-0.5">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={`text-[15px] leading-tight ${log.isError ? "text-kat-error" : "text-kat-accent"} ${log.isShifted ? "ml-6.25" : ""} ${log.isDimmed ? "opacity-30" : ""}`}
                  style={{
                    textShadow: log.hasGlitch ? "var(--kat-glitch-shadow)" : "none",
                  }}
                >
                  {log.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemFailureWindow;
