"use client";

import Image from "next/image";
import { BootTyper } from "@/components/boot/BootTyper";
import { DelayedRender } from "@/components/boot/DelayedRender";

const BootVirusScan = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-red-500 mt-2">
    <div className="flex flex-col gap-0.5">
      <BootTyper text="> SYSTEM SCAN..." speed={15} startDelay={0} />
      <BootTyper
        text="> [!] WARNING: UNAUTHORIZED PROGRAM DETECTED........ VIRUS_X.CORP"
        speed={10}
        startDelay={250}
      />
      <BootTyper
        text="> [!] WARNING: SYSTEM FILE CORRUPTED................ ESKORIA.DLL"
        speed={10}
        startDelay={500}
      />
      <BootTyper
        text="> [!] ERROR: SECURITY BREACH........................ PORT 666"
        speed={10}
        startDelay={750}
      />
      <BootTyper
        text="> [!] ERROR: FIREWALL FAILURE....................... CRITICAL"
        speed={10}
        startDelay={1000}
      />
      <BootTyper
        text="> [!] ALERT: BAND SYSTEM UNDER ATTACK............... !!!"
        speed={10}
        startDelay={1250}
      />
    </div>
    <DelayedRender delay={1200}>
      <div className="border border-red-500 p-3 flex flex-col gap-1.5 bg-red-500/2">
        <BootTyper text="> VIRUS ANALYSIS" speed={15} startDelay={0} />
        <div className="flex gap-4 items-center">
          <div className="relative w-20 h-24 shrink-0">
            <Image
              src="/boot/redskull.svg"
              alt="REDSKULL"
              fill
              unoptimized
              sizes="80px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <BootTyper text="VIRUS NAME: ROCKKILLER.EXE" speed={15} startDelay={200} />
            <BootTyper text="TYPE: SYSTEM DESTROYER" speed={15} startDelay={400} />
            <BootTyper text="ORIGIN: UNKNOWN" speed={15} startDelay={600} />
            <BootTyper text="DAMAGE: HIGH" speed={15} startDelay={800} />
            <span className="block min-h-3.5"></span>
            <BootTyper text="> DELETING VIRUS.............. FAILED" speed={15} startDelay={1100} />
            <BootTyper text="> QUARANTINE.................. FAILED" speed={15} startDelay={1350} />
            <BootTyper text="> SYSTEM OVERRIDE............. INITIATED" speed={15} startDelay={1600} />
          </div>
        </div>
      </div>
    </DelayedRender>
  </div>
);

export { BootVirusScan };
