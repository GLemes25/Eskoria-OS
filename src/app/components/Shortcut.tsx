"use client";

import Image from "next/image";
import { type MouseEvent } from "react";

type ShortcutProps = {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

export const Shortcut = ({
  id,
  name,
  icon,
  isActive,
  onClick,
}: ShortcutProps) => {
  return (
    <div
      data-shortcut-id={id}
      className="flex flex-col items-center justify-start w-19 h-22 cursor-pointer pt-1"
      onClick={onClick}
    >
      <div
        className={`relative w-11 h-11 flex items-center justify-center p-0.5 filter drop-shadow-md mb-1 ${
          isActive ? "bg-kat-accent/40" : ""
        }`}
      >
        <Image alt={name} className="object-contain" fill src={icon} />
        <div className="absolute -bottom-1 -left-1 bg-white border border-black flex items-center justify-center w-3.5 h-3.5">
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="square"
          >
            <path d="M5 19L19 5M19 5v10M19 5H9" />
          </svg>
        </div>
      </div>

      <div
        className={`text-center text-[11px] leading-[1.1] px-0.5 w-full wrap-break-word line-clamp-2 ${
          isActive ? "bg-kat-accent text-kat-bg font-medium" : "text-white"
        }`}
        style={
          isActive
            ? undefined
            : {
                textShadow:
                  "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
              }
        }
      >
        {name}
      </div>
    </div>
  );
};
