"use client";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Power, Wifi } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

dayjs.locale("pt-br");

type LockScreenProps = {
  onUnlock: () => void;
};

export const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [password, setPassword] = useState("");
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().length > 0) {
      onUnlock();
    }
  };

  return (
    <div
      className="relative flex flex-col w-screen h-dvh bg-black overflow-hidden select-none"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity pointer-events-none"
        >
          <source
            src="https://res.cloudinary.com/dk7zfhbrj/video/upload/f_auto,q_auto/v1780000153/transitionlogoeskoria_zaoupz.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      </div>

      <div className="relative z-10 flex flex-col justify-end p-8 md:p-12 h-1/3">
        <div className="text-kat-text text-7xl md:text-9xl font-light tracking-tighter">
          {currentTime.format("HH:mm")}
        </div>
        <div className="text-kat-accent text-xl md:text-3xl font-medium tracking-wide mt-2 capitalize">
          {currentTime.format("dddd, D [de] MMMM")}
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center -mt-20">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-6 w-full max-w-sm"
        >
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-kat-accent bg-black shadow-[0_0_30px_rgba(74,246,38,0.2)]">
              <Image
                src="/user.jpg"
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-kat-text text-2xl tracking-[2px] uppercase font-bold">
              <Image src="/nameuser.svg" alt="Logo" width={128} height={128} />
            </div>
          </div>

          <div className="flex w-full max-w-70 relative mt-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="SENHA"
              autoComplete="off"
              autoFocus
              className="w-full bg-black/80 backdrop-blur-sm border border-kat-accent/50 text-kat-accent px-4 py-2 outline-none focus:border-kat-accent focus:shadow-[0_0_15px_rgba(74,246,38,0.3)] transition-all tracking-[4px] placeholder:text-kat-accent/30 placeholder:tracking-[2px]"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 border-l border-kat-accent/50 text-kat-accent hover:bg-kat-accent hover:text-black transition-colors"
            >
              ➔
            </button>
          </div>
        </form>
      </div>

      <div className="relative z-10 flex justify-between items-end p-8 shrink-0">
        <div className="flex flex-col gap-1">
          <div className="text-kat-accent text-[10px] tracking-[1px] opacity-70">
            K.A.T. OS v7.7.7
          </div>
        </div>

        <div className="flex items-center gap-6 text-kat-accent">
          <button className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
            <Wifi size={24} strokeWidth={1.5} />
          </button>
          <button className="hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] transition-all">
            <Power size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
