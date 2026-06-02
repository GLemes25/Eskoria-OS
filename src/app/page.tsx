"use client";

import { BlackScreen } from "@/app/components/BlackScreen";
import { CustomBoot } from "@/app/components/CustomBoot";
import { Desktop } from "@/app/components/Desktop";
import { LockScreen } from "@/app/components/LockScreen";
import { useEffect, useState } from "react";

const phaseDurations: Record<number, number> = {
  0: 1500,
  1: 1000,
  2: 3000,
  3: 3000,
};

const Home = () => {
  const [bootPhase, setBootPhase] = useState(0);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (bootPhase >= 4) return;

    const timer = setTimeout(() => {
      setBootPhase((prev) => prev + 1);
    }, phaseDurations[bootPhase]);

    return () => clearTimeout(timer);
  }, [bootPhase]);

  if (bootPhase === 4 && !isLocked) {
    return <Desktop />;
  }

  if (bootPhase === 4 && isLocked) {
    return <LockScreen onUnlock={() => setIsLocked(false)} />;
  }

  if (bootPhase === 1 || bootPhase === 3) {
    return <BlackScreen />;
  }

  return (
    <div
      className="h-dvh w-screen bg-black overflow-hidden select-none flex flex-col"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {bootPhase === 0 && (
        <div className="p-6">
          <p className="text-white text-sm leading-tight opacity-80">
            Inicializando K.A.T. Kernel...
          </p>
          <p className="text-white text-sm leading-tight opacity-80">
            Carregando módulos base...
          </p>
        </div>
      )}
      {bootPhase === 2 && <CustomBoot />}
    </div>
  );
};

export default Home;
