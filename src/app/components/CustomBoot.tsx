"use client";

import { useEffect, useRef, useState } from "react";
import { BootHeader } from "@/components/boot/BootHeader";
import { BootMembers } from "@/components/boot/BootMembers";
import { BootVirusScan } from "@/components/boot/BootVirusScan";
import { BootFooter } from "@/components/boot/BootFooter";

type CustomBootProps = {
  onComplete: () => void;
};

const CustomBoot = ({ onComplete }: CustomBootProps) => {
  const [bootStep, setBootStep] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t2 = setTimeout(() => setBootStep(2), 1500);
    const t3 = setTimeout(() => setBootStep(3), 2500);
    const t4 = setTimeout(() => setBootStep(4), 5500);
    const t5 = setTimeout(() => setBootStep(5), 8000);
    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      bottomRef.current?.scrollIntoView({ behavior: "auto" });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bootStep !== 5) return;
    const finishTimer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(finishTimer);
  }, [bootStep, onComplete]);

  return (
    <div className="w-full h-full flex flex-col p-4 sm:p-8 bg-black font-mono overflow-x-hidden overflow-y-auto text-[#00FF41] text-[9px] sm:text-[11px] leading-[1.2] tracking-tight gap-4 select-none touch-none pointer-events-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <BootHeader bootStep={bootStep} />
      {bootStep >= 3 && <BootMembers />}
      {bootStep >= 4 && <BootVirusScan />}
      {bootStep >= 5 && <BootFooter />}
      <div ref={bottomRef} className="h-1 shrink-0" />
    </div>
  );
};

export { CustomBoot };
