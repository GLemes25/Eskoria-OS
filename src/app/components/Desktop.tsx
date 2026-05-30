"use client";

import { GlobalGlitchOverlay } from "@/app/components/GlobalGlitchOverlay";
import CinematicReveal from "@/app/kat/CinematicReveal";
import LoginForm from "@/app/kat/LoginForm";
import ProtocolSelection from "@/app/kat/ProtocolSelection";
import SystemFailureWindow from "@/app/kat/SystemFailureWindow";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

const BG_URL = "/wallpaper.jpg";
const MESH_URL = "/effectwallpaper.jpg";

export const Desktop = () => {
  const [iconActive, setIconActive] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
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
      className="relative overflow-hidden bg-black text-kat-accent flex flex-col w-screen h-dvh select-none"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {isGlitching && !isRevealing && <GlobalGlitchOverlay />}

      <div
        className={`relative flex-1 w-full overflow-hidden ${isGlitching ? "animate-[pulse_0.2s_infinite]" : ""}`}
        onClick={() => setIconActive(false)}
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
          className={`relative z-10 w-full h-full flex pt-8 pl-8 gap-8 ${isGlitching ? "opacity-50 blur-[1px]" : ""}`}
        >
          <div
            className="flex flex-col items-center gap-1 w-24 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIconActive(true);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              setTerminalOpen(true);
            }}
          >
            <div
              className={`relative w-14 h-14 flex items-center justify-center p-1 ${
                iconActive ? "bg-kat-accent/30" : ""
              } filter drop-shadow-md`}
            >
              <Image
                src="/logo.svg"
                alt="Terminal Shortcut"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 bg-white border border-black flex items-center justify-center w-4 h-4">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="square"
                >
                  <path d="M5 19L19 5M19 5v10M19 5H9" />
                </svg>
              </div>
            </div>

            <div
              className={`text-center text-[12px] leading-tight px-1 ${
                iconActive
                  ? "bg-kat-accent text-black"
                  : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]"
              }`}
            >
              K.A.T.
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
        className={`h-10 w-full shrink-0 relative z-50 flex items-center bg-kat-bg/80 backdrop-blur-md border-t border-kat-taskbar-border ${
          isGlitching
            ? "animate-[pulse_0.1s_infinite] -translate-x-1.5 shadow-[0_-2px_15px_var(--color-kat-error)]"
            : ""
        }`}
      >
        <Button
          variant="bare"
          size="auto"
          className="flex items-center gap-3 h-full px-6 hover:bg-kat-accent/10 transition-colors cursor-pointer border-r border-kat-taskbar-border rounded-none shrink-0"
        >
          <Image
            src="/logo.svg"
            alt="Eskoria"
            width={28}
            height={28}
            className="object-contain shrink-0"
          />
          <span
            className={`font-bold tracking-widest text-[16px] ${
              isGlitching
                ? "text-kat-error animate-[pulse_0.1s_infinite] -translate-x-1.5"
                : "text-kat-text"
            }`}
          >
            {isGlitching ? "ERR_R" : "START"}
          </span>
        </Button>

        <div
          className={`flex items-center gap-6.75 h-full px-6 flex-1 ${
            isGlitching ? "opacity-30 blur-[1px]" : ""
          }`}
        >
          <Image
            src="https://www.figma.com/api/mcp/asset/8bde5407-54a9-4286-b74c-d4b5513716fc"
            alt="Browser"
            width={28}
            height={28}
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/d67c307a-17e8-4a8a-b3f0-f52ea4d77c80"
            alt="Files"
            width={28}
            height={28}
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/06d3edc9-1ade-44d8-b954-5d64333547a7"
            alt="Media"
            width={28}
            height={28}
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/c2893006-01fc-4dc1-93ab-629acac14b24"
            alt="App"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        <div
          className={`flex items-center gap-5.75 h-full px-5 border-l border-kat-taskbar-border shrink-0 ${
            isGlitching ? "blur-[1px] translate-x-3" : ""
          }`}
        >
          <span
            className={`text-lg tracking-wider ${
              isGlitching ? "text-kat-error" : "text-kat-text"
            }`}
          >
            EN
          </span>
          <Image
            src="https://www.figma.com/api/mcp/asset/68d0c76c-fefe-4972-bee4-36e913e1fefb"
            alt=""
            width={14}
            height={9}
            unoptimized
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/001ca0b0-7724-4281-bb01-9db4053dcb65"
            alt="WiFi"
            width={18}
            height={18}
            unoptimized
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/1106bada-030e-4945-bfa9-773eb125a754"
            alt=""
            width={14}
            height={13}
            unoptimized
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/71e24a7e-1a63-4dce-a844-832108f23fdc"
            alt=""
            width={10}
            height={14}
            unoptimized
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/aa34de6c-ac50-4d4b-9e05-1ff3690e1a60"
            alt=""
            width={11}
            height={15}
            unoptimized
            className="object-contain"
          />
          <Image
            src="https://www.figma.com/api/mcp/asset/d723f452-003c-4d2e-af1e-7d4f26f9ca7e"
            alt=""
            width={13}
            height={11}
            unoptimized
            className="object-contain"
          />
          <div className="text-center shrink-0">
            <p
              className={`font-bold tracking-wider leading-tight ${
                isGlitching
                  ? "text-kat-error animate-[pulse_0.1s_infinite] -translate-x-1.5"
                  : "text-kat-text"
              }`}
            >
              {isGlitching ? "XX:XX" : time || "23:59"}
            </p>
            <p
              className={`text-sm leading-tight opacity-70 ${
                isGlitching ? "text-kat-error" : "text-kat-text"
              }`}
            >
              {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
