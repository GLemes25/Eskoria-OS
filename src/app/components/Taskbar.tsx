"use client";

import { DontOpenOverlay } from "@/components/DontOpenOverlay";
import { Button } from "@/components/ui/button";
import { Battery, Bluetooth, ChevronUp, Volume2, Wifi } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type TaskbarProps = {
  time: string;
  isGlitching: boolean;
};

export const Taskbar = ({ time, isGlitching }: TaskbarProps) => {
  const [currentDate, setCurrentDate] = useState("");
  const [showDontOpen, setShowDontOpen] = useState(false);

  const triggerOverlay = () => setShowDontOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDate(new Date().toLocaleDateString("pt-BR"));
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-10 w-full shrink-0 relative z-50 flex justify-between items-center bg-kat-bg/80 backdrop-blur-md border-t border-kat-taskbar-border ${
        isGlitching
          ? "animate-[pulse_0.1s_infinite] -translate-x-1.5 shadow-[0_-2px_15px_var(--color-kat-error)]"
          : ""
      }`}
    >
      <Button
        variant="bare"
        size="auto"
        className="flex items-center gap-2 md:gap-3 h-full px-3 md:px-6 hover:bg-kat-accent/10 transition-colors cursor-pointer border-r border-kat-taskbar-border rounded-none shrink-0"
      >
        <Image
          src="/logo.svg"
          alt="Eskoria"
          width={24}
          height={24}
          className="object-contain shrink-0 md:w-7 md:h-7"
        />
        <span
          className={`font-bold tracking-widest text-[14px] md:text-[16px] ${
            isGlitching
              ? "text-kat-error animate-[pulse_0.1s_infinite] -translate-x-1.5"
              : "text-kat-text"
          }`}
        >
          {isGlitching ? "ERR_R" : "START"}
        </span>
      </Button>

      <div
        className={`hidden md:flex  gap-6 h-full px-6 flex-1 ${
          isGlitching ? "opacity-30 blur-[1px]" : ""
        }`}
      >
        <Button
          variant="bare"
          size="auto"
          onClick={triggerOverlay}
          className="cursor-pointer"
        >
          <Image
            src="/shortcuts/internet-explore.png"
            alt="Browser"
            width={28}
            height={28}
            className="object-contain"
          />
        </Button>
        <Button
          variant="bare"
          size="auto"
          onClick={triggerOverlay}
          className="cursor-pointer"
        >
          <Image
            src="/shortcuts/file-explore .png"
            alt="Files"
            width={28}
            height={28}
            className="object-contain"
          />
        </Button>
        <Button
          variant="bare"
          size="auto"
          onClick={triggerOverlay}
          className="cursor-pointer"
        >
          <Image
            src="/shortcuts/playmusic.png"
            alt="Media"
            width={28}
            height={28}
            className="object-contain"
          />
        </Button>
        <Button
          variant="bare"
          size="auto"
          onClick={triggerOverlay}
          className="cursor-pointer"
        >
          <Image
            src="/shortcuts/cmd.png"
            alt="cmd"
            width={28}
            height={28}
            className="object-contain"
          />
        </Button>
      </div>

      <div
        className={`flex items-center gap-3 md:gap-5 h-full px-3 md:px-5 md:border-l border-kat-taskbar-border shrink-0 ${
          isGlitching ? "blur-[1px] translate-x-3" : ""
        }`}
      >
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="bare"
            size="auto"
            onClick={triggerOverlay}
            className="cursor-pointer"
          >
            <ChevronUp
              className={`w-4 h-4 ${isGlitching ? "text-kat-error" : "text-kat-text"}`}
            />
          </Button>

          <Button
            variant="bare"
            size="auto"
            onClick={triggerOverlay}
            className="cursor-pointer text-sm font-bold tracking-wider"
          >
            <span className={isGlitching ? "text-kat-error" : "text-kat-text"}>
              EN
            </span>
          </Button>

          <Button
            variant="bare"
            size="auto"
            onClick={triggerOverlay}
            className="cursor-pointer"
          >
            <Bluetooth
              className={`w-4 h-4 ${isGlitching ? "text-kat-error" : "text-kat-text"}`}
            />
          </Button>

          <Button
            variant="bare"
            size="auto"
            onClick={triggerOverlay}
            className="cursor-pointer"
          >
            <Wifi
              className={`w-4.5 h-4.5 ${isGlitching ? "text-kat-error" : "text-kat-text"}`}
            />
          </Button>

          <Button
            variant="bare"
            size="auto"
            onClick={triggerOverlay}
            className="cursor-pointer"
          >
            <Volume2
              className={`w-4.5 h-4.5 ${isGlitching ? "text-kat-error" : "text-kat-text"}`}
            />
          </Button>

          <Button
            variant="bare"
            size="auto"
            onClick={triggerOverlay}
            className="cursor-pointer"
          >
            <Battery
              className={`w-4.5 h-4.5 ${isGlitching ? "text-kat-error" : "text-kat-text"}`}
            />
          </Button>
        </div>

        <div className="text-center shrink-0">
          <p
            className={`font-bold tracking-wider text-[12px] md:text-[16px] leading-tight ${
              isGlitching
                ? "text-kat-error animate-[pulse_0.1s_infinite] -translate-x-1.5"
                : "text-kat-text"
            }`}
          >
            {isGlitching ? "XX:XX" : time || "23:59"}
          </p>
          <p
            className={`text-[10px] md:text-sm leading-tight opacity-70 ${
              isGlitching ? "text-kat-error" : "text-kat-text"
            }`}
          >
            {currentDate}
          </p>
        </div>
      </div>

      <DontOpenOverlay
        isVisible={showDontOpen}
        onDismiss={() => setShowDontOpen(false)}
      />
    </div>
  );
};
