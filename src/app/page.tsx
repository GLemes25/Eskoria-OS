"use client";

import { Desktop } from "@/app/components/Desktop";
import { LockScreen } from "@/app/components/LockScreen";
import { useState } from "react";

const Home = () => {
  const [isLocked, setIsLocked] = useState(true);

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
