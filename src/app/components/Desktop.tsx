"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LoginForm from "@/app/kat/LoginForm";
import ProtocolSelection from "@/app/kat/ProtocolSelection";
import SystemFailureWindow from "@/app/kat/SystemFailureWindow";
import CinematicReveal from "@/app/kat/CinematicReveal";
import { GlobalGlitchOverlay } from "@/app/components/GlobalGlitchOverlay";

const BG_URL =
  "https://images.unsplash.com/photo-1629278357549-b413116d211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBjaW5lbWF0aWMlMjByb2NrJTIwYmFuZHxlbnwxfHx8fDE3Nzk5NzI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const MESH_URL =
  "https://images.unsplash.com/photo-1634368998864-8984df61cdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JydXB0ZWQlMjBkaWdpdGFsJTIwbWVzaCUyMGdsb3dpbmclMjBwaXhlbHMlMjBnbGl0Y2h8ZW58MXx8fHwxNzc5OTcyNzc2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export const Desktop = () => {
  const [iconActive, setIconActive] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (isGlitching) {
      const timer = setTimeout(() => {
        setIsRevealing(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isGlitching]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-kat-bg text-kat-accent flex flex-col w-screen h-dvh"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {isGlitching && !isRevealing && <GlobalGlitchOverlay />}

      <div
        className={`relative flex-1 w-full overflow-hidden ${isGlitching ? "animate-[pulse_0.2s_infinite]" : ""}`}
      >
        <div className="absolute inset-0">
          <Image
            src={BG_URL}
            alt="Rock Band"
            fill
            className={`object-cover object-center ${isGlitching ? "-translate-x-0.5 filter-[sepia(0.3)_hue-rotate(-30deg)]" : ""}`}
          />
        </div>

        {isGlitching && (
          <>
            <div className="absolute inset-0">
              <Image
                src={BG_URL}
                alt=""
                fill
                className="object-cover object-center mix-blend-screen translate-x-2 filter-[sepia()_saturate(3)_hue-rotate(-50deg)] opacity-70 animate-[pulse_0.1s_infinite]"
              />
            </div>
            <div className="absolute inset-0">
              <Image
                src={BG_URL}
                alt=""
                fill
                className="object-cover object-center mix-blend-screen -translate-x-2 filter-[sepia()_saturate(3)_hue-rotate(180deg)] opacity-70 animate-[pulse_0.15s_infinite]"
              />
            </div>
          </>
        )}

        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={MESH_URL}
            alt="Corrupted Digital Mesh"
            fill
            className={`object-cover object-center mix-blend-overlay opacity-60 ${isGlitching ? "translate-x-1.25" : ""}`}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-50 z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
            `,
            backgroundSize: "100% 4px, 3px 100%",
          }}
        />

        <div
          className={`relative z-10 w-full h-full flex pt-10 pl-10 gap-8 ${isGlitching ? "opacity-50 blur-[1px]" : ""}`}
        >
          <div
            className="flex flex-col items-center gap-2 w-32 cursor-pointer group"
            onClick={() => setIconActive(!iconActive)}
            onDoubleClick={() => setTerminalOpen(true)}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center transition-colors ${
                iconActive
                  ? "bg-kat-accent/20 border border-kat-accent"
                  : "group-hover:bg-kat-text/10"
              }`}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.svg"
                  alt="Eskoria"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div
              className={`text-center text-[14px] leading-tight uppercase ${
                iconActive
                  ? "bg-kat-accent text-kat-bg font-bold"
                  : "text-kat-accent drop-shadow-[0_0_2px_var(--color-kat-bg)]"
              }`}
              style={{
                textShadow: iconActive
                  ? "none"
                  : `1px 1px 0 var(--color-kat-bg), -1px -1px 0 var(--color-kat-bg), 1px -1px 0 var(--color-kat-bg), -1px 1px 0 var(--color-kat-bg)`,
              }}
            >
              K.A.T.
              <br />
              CONNECTION.EXE
            </div>
          </div>
        </div>

        {terminalOpen && !isLoggedIn && !isGlitching && (
          <LoginForm
            onSuccess={() => setIsLoggedIn(true)}
            onClose={() => setTerminalOpen(false)}
          />
        )}

        {terminalOpen && isLoggedIn && !isGlitching && (
          <ProtocolSelection
            onClose={() => setTerminalOpen(false)}
            onStart={() => setIsGlitching(true)}
          />
        )}

        {isGlitching && !isRevealing && <SystemFailureWindow />}
      </div>

      {isRevealing && (
        <CinematicReveal
          onReboot={() => {
            setIsRevealing(false);
            setIsGlitching(false);
            setTerminalOpen(false);
            setIsLoggedIn(false);
          }}
        />
      )}

      <div
        className={`h-12 w-full bg-kat-bg border-t border-kat-accent flex items-center justify-between px-4 z-50 shrink-0 relative ${
          isGlitching
            ? "animate-[pulse_0.1s_infinite] -translate-x-1.25 shadow-[0_-2px_0_var(--color-kat-error),0_2px_0_var(--color-kat-glitch-blue)]"
            : ""
        }`}
      >
        <Button
          variant="bare"
          size="auto"
          className="flex items-center gap-2 h-full px-4 hover:bg-kat-accent/20 transition-colors cursor-pointer group rounded-none"
        >
          <Image
            src="/logo.svg"
            alt="Eskoria"
            width={24}
            height={24}
            className="shrink-0 object-contain"
          />
          <span
            className={`font-bold tracking-widest text-[16px] group-hover:text-kat-accent ${
              isGlitching ? "text-kat-error" : "text-kat-text"
            }`}
          >
            {isGlitching ? "ERR_R" : "ESKORIA"}
          </span>
        </Button>

        <div
          className={`flex items-center gap-6 h-full px-2 ${isGlitching ? "blur-[1px] translate-x-2.5" : ""}`}
        >
          <div className="flex items-center gap-3 opacity-80">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isGlitching ? "text-kat-error" : "text-kat-accent"}
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isGlitching ? "text-kat-error" : "text-kat-accent"}
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <div
            className={`font-bold text-[16px] tracking-wider ${
              isGlitching ? "text-kat-error" : "text-kat-accent"
            }`}
          >
            {isGlitching ? "XX:XX" : time || "23:59"}
          </div>
        </div>
      </div>
    </div>
  );
};
