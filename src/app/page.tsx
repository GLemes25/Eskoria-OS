"use client";

import { BlackScreen } from "@/app/components/BlackScreen";
import { CustomBoot } from "@/app/components/CustomBoot";
import { Desktop } from "@/app/components/Desktop";
import { LockScreen } from "@/app/components/LockScreen";
import { TypewriterText } from "@/app/components/TypewriterText";
import { useEffect, useState } from "react";

const phaseDurations: Record<number, number> = {
  0: 750,
  1: 500,
  3: 1000,
};

const Home = () => {
  const [bootPhase, setBootPhase] = useState(0);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (bootPhase === 2 || bootPhase >= 4) return;

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
        <div className="p-6 flex flex-col gap-1">
          <TypewriterText text="Initializing K.A.T. Kernel..." speed={10} startDelay={0} />
          <TypewriterText text="Loading base modules..." speed={10} startDelay={400} />
        </div>
      )}
      {bootPhase === 2 && <CustomBoot onComplete={() => setBootPhase(3)} />}
    </div>
  );
};

export default Home;
