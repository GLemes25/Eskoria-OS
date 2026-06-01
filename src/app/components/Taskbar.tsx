"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

type TaskbarProps = {
  time: string;
  isGlitching: boolean;
};

export const Taskbar = ({ time, isGlitching }: TaskbarProps) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("pt-BR"));
  }, []);

  return (
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
            {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};
