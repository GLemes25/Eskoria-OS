"use client";

import { BootProgressBar } from "@/components/boot/BootProgressBar";
import { BootTyper } from "@/components/boot/BootTyper";
import { DelayedRender } from "@/components/boot/DelayedRender";
import Image from "next/image";

type BootHeaderProps = {
  bootStep: number;
};

const BootHeader = ({ bootStep }: BootHeaderProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="flex flex-col gap-0.5">
      <span className="block">ESKORIA OPERATING SYSTEM v1.9.9.6</span>
      <span className="block text-opacity-80">
        (C) 199X-2024 ESKORIA CORP. ALL RIGHTS RESERVED.
      </span>
      <span className="block min-h-3.5"></span>
      <BootTyper
        text="BOOT SEQUENCE INITIATED..."
        speed={15}
        startDelay={100}
      />
      <BootTyper
        text="[ OK ] CPU ARCHITECTURE............. x86_64"
        speed={8}
        startDelay={400}
      />
      <BootTyper
        text="[ OK ] SYSTEM MEMORY CHECK........... 64MB OK"
        speed={8}
        startDelay={700}
      />
      <BootTyper
        text="[ OK ] HARD DRIVE DETECTED........... ESKORIA_CORE"
        speed={8}
        startDelay={1000}
      />
      <BootTyper
        text="[ OK ] KERNEL SECURITY............... OVERRIDDEN"
        speed={8}
        startDelay={1300}
      />
      <BootTyper
        text="[ OK ] AUDIO INTERFACE............... ONLINE"
        speed={8}
        startDelay={1600}
      />
      <BootTyper
        text="[ OK ] VIDEO SYSTEM.................. 640x480 CRT"
        speed={8}
        startDelay={1900}
      />
      <BootTyper
        text="[ OK ] POWER SUPPLY.................. STABLE"
        speed={8}
        startDelay={2200}
      />
      <BootTyper
        text="[ OK ] NETWORK PROTOCOL.............. UNDERGROUND"
        speed={8}
        startDelay={2500}
      />
      <BootProgressBar
        label="> LOADING ESKORIA CORE MODULES..."
        startDelay={2800}
      />
    </div>

    {bootStep >= 2 && (
      <div className="flex flex-col gap-2 justify-end">
        <DelayedRender delay={200}>
          <div className="relative w-full h-20 lg:h-32 shrink-0 mb-2">
            <Image
              src="/boot/eskoria.svg"
              alt="ESKORIA"
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>
        </DelayedRender>
        <DelayedRender delay={1000}>
          <div className="flex gap-4 mt-auto items-end">
            <div className="border border-[#00FF41] p-3 flex flex-col gap-1 w-full lg:w-60">
              <BootTyper
                text="> WELCOME TO THE SYSTEM."
                speed={20}
                startDelay={0}
              />
              <BootTyper text="> TRUST NO ONE." speed={20} startDelay={500} />
              <BootTyper
                text="> ROCK IS OUR PROTOCOL."
                speed={20}
                startDelay={1000}
              />
            </div>
            <div className="relative w-16 h-16 lg:w-24 lg:h-24 shrink-0 -mb-1">
              <Image
                src="/boot/greenskull.svg"
                alt="GREENSKULL"
                fill
                unoptimized
                sizes="96px"
                className="object-contain"
              />
            </div>
          </div>
        </DelayedRender>
      </div>
    )}
  </div>
);

export { BootHeader };
