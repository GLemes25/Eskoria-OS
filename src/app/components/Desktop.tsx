"use client";

import { GlobalGlitchOverlay } from "@/app/components/GlobalGlitchOverlay";
import { Shortcut } from "@/app/components/Shortcut";
import { Taskbar } from "@/app/components/Taskbar";
import CinematicReveal from "@/app/kat/CinematicReveal";
import LoginForm from "@/app/kat/LoginForm";
import ProtocolSelection from "@/app/kat/ProtocolSelection";
import SystemFailureWindow from "@/app/kat/SystemFailureWindow";
import { DontOpenOverlay } from "@/components/DontOpenOverlay";
import shortcutsData from "@/data/shortcuts.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AlertManager } from "./AlertManager";

const BG_URL = "/wallpaper.png";
const MESH_URL = "/effectwallpaper.jpg";

export const Desktop = () => {
  const [activeShortcut, setActiveShortcut] = useState<string | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [showDontOpen, setShowDontOpen] = useState(false);
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
      className="relative overflow-hidden bg-black text-kat-accent flex flex-col w-screen h-dvh select-none"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {isGlitching && !isRevealing && <GlobalGlitchOverlay />}
      {!isRevealing && <AlertManager />}

      <div
        className={`relative flex-1 w-full overflow-hidden ${isGlitching ? "animate-[pulse_0.2s_infinite]" : ""}`}
        onClick={() => setActiveShortcut(null)}
      >
        <div className="absolute inset-0">
          <Image
            src={BG_URL}
            alt="Rock Band"
            fill
            priority
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
          className={`relative z-10 w-full h-full pt-8 pl-8 ${isGlitching ? "opacity-50 blur-[1px]" : ""}`}
        >
          <div className="flex flex-col flex-wrap content-start gap-x-1 gap-y-2 p-2 h-[calc(100vh-3rem)] w-full">
            {shortcutsData.map((shortcut) => (
              <Shortcut
                key={shortcut.id}
                id={shortcut.id}
                name={shortcut.name}
                icon={shortcut.icon}
                isActive={activeShortcut === shortcut.id}
                onClick={(e) => {
                  if (e && e.stopPropagation) e.stopPropagation();
                  setActiveShortcut(shortcut.id);

                  if (shortcut.id === "eskoria-so") {
                    setTerminalOpen(true);
                  } else {
                    setShowDontOpen(true);
                  }
                }}
              />
            ))}
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

      <DontOpenOverlay
        isVisible={showDontOpen}
        onDismiss={() => setShowDontOpen(false)}
      />

      <Taskbar time={time} isGlitching={isGlitching} />
    </div>
  );
};
