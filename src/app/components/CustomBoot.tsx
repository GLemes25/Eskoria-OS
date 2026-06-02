"use client";

import { useEffect, useState } from "react";
import { BootHeader } from "@/components/boot/BootHeader";
import { BootMembers } from "@/components/boot/BootMembers";
import { BootVirusScan } from "@/components/boot/BootVirusScan";
import { BootFooter } from "@/components/boot/BootFooter";

type CustomBootProps = {
  onComplete: () => void;
};

const CustomBoot = ({ onComplete }: CustomBootProps) => {
  const [bootStep, setBootStep] = useState(1);

  useEffect(() => {
    const t2 = setTimeout(() => setBootStep(2), 3500);
    const t3 = setTimeout(() => setBootStep(3), 5500);
    const t4 = setTimeout(() => setBootStep(4), 13500);
    const t5 = setTimeout(() => setBootStep(5), 20000);
    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  useEffect(() => {
    if (bootStep < 5) return;
    const handleKeyDown = () => onComplete();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bootStep, onComplete]);

  return (
    <div className="w-full h-full flex flex-col p-8 bg-black font-mono overflow-hidden text-[#00FF41] text-[11px] leading-[1.2] tracking-tight gap-4 select-none">
      <BootHeader bootStep={bootStep} />
      {bootStep >= 3 && <BootMembers />}
      {bootStep >= 4 && <BootVirusScan />}
      {bootStep >= 5 && <BootFooter />}
    </div>
  );
};

export { CustomBoot };
