"use client";

import { useEffect, useState } from "react";
import { Desktop } from "@/app/components/Desktop";
import { LockScreen } from "@/app/components/LockScreen";

const Home = () => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const handleKeyDown = () => {
      if (isLocked) {
        setIsLocked(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLocked]);

  return (
    <>
      {isLocked ? (
        <LockScreen onUnlock={() => setIsLocked(false)} />
      ) : (
        <Desktop />
      )}
    </>
  );
};

export default Home;
