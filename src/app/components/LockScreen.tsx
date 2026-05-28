"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type LockScreenProps = {
  onUnlock: () => void;
};

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().length > 0) {
      onUnlock();
    }
  };

  return (
    <div
      className="relative flex flex-col justify-between p-4 md:p-8 w-screen h-dvh bg-kat-bg overflow-hidden"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
            SESSION: LOCKED
          </div>
          <div className="text-kat-accent text-[11px] tracking-[0.5px]">
            SECURITY LEVEL: MAXIMUM
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 min-h-0 py-4 z-10">
        <div className="relative w-24 h-24 md:w-32 md:h-32 opacity-50 pointer-events-none">
          <Image
            src="/logo.svg"
            alt="Eskoria"
            fill
            className="object-contain"
          />
        </div>

        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-6 bg-black/90 backdrop-blur-sm border border-kat-accent p-8 md:p-12 shadow-[0_0_30px_rgba(74,246,38,0.15)] w-full max-w-md"
        >
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-24 h-24 border border-kat-accent bg-kat-accent/5 relative overflow-hidden flex items-center justify-center">
              <svg
                className="w-10 h-10 text-kat-accent opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="text-kat-text text-xl md:text-2xl tracking-[4px] uppercase font-bold">
              SYS.ADMIN
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full mt-2">
            <label className="text-kat-accent text-xs tracking-[2px] opacity-70">
              {">"} ENCRYPTED_PASSWORD:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-kat-accent/50 text-kat-accent px-4 py-3 outline-none focus:border-kat-accent focus:shadow-[0_0_15px_rgba(74,246,38,0.2)] transition-all tracking-[8px] text-center"
              autoFocus
            />
          </div>

          <Button
            type="submit"
            disabled={!password}
            variant="outline"
            className="w-full border border-kat-accent bg-transparent hover:bg-kat-accent hover:text-foreground text-kat-accent py-4 uppercase tracking-[4px] transition-colors disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-kat-accent disabled:cursor-not-allowed mt-4"
          >
            [ ENTRAR ]
          </Button>
        </form>
      </div>

      <div className="flex flex-col items-center gap-1 w-full shrink-0 z-10">
        <div className="text-kat-accent text-[9px] md:text-[10px] tracking-[1px] opacity-70 text-center">
          SYSTEM INITIALIZED // WAITING FOR CREDENTIALS
        </div>
        <div className="text-kat-accent text-[9px] md:text-[10px] tracking-[1px] opacity-70 text-center">
          © ESKORIA CORP. - ALL RIGHTS REVERSED
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
