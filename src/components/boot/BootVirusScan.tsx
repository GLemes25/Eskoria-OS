"use client";

import Image from "next/image";
import { BootTyper } from "@/components/boot/BootTyper";
import { DelayedRender } from "@/components/boot/DelayedRender";

const BootVirusScan = () => (
  <div className="grid grid-cols-2 gap-6 text-red-500 mt-2">
    <div className="flex flex-col gap-0.5">
      <BootTyper text="> SYSTEM SCAN..." speed={15} startDelay={0} />
      <BootTyper
        text="> [!] WARNING: UNAUTHORIZED PROGRAM DETECTED........ VIRUS_X.CORP"
        speed={10}
        startDelay={500}
      />
      <BootTyper
        text="> [!] WARNING: SYSTEM FILE CORRUPTED................ ESKORIA.DLL"
        speed={10}
        startDelay={900}
      />
      <BootTyper
        text="> [!] ERROR: SECURITY BREACH........................ PORT 666"
        speed={10}
        startDelay={1300}
      />
      <BootTyper
        text="> [!] ERROR: FIREWALL FAILURE....................... CRITICAL"
        speed={10}
        startDelay={1700}
      />
      <BootTyper
        text="> [!] ALERT: BAND SYSTEM UNDER ATTACK............... !!!"
        speed={10}
        startDelay={2100}
      />
    </div>
    <DelayedRender delay={2500}>
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
            <BootTyper text="VIRUS NAME: ROCKKILLER.EXE" speed={15} startDelay={400} />
            <BootTyper text="TYPE: SYSTEM DESTROYER" speed={15} startDelay={700} />
            <BootTyper text="ORIGIN: UNKNOWN" speed={15} startDelay={1000} />
            <BootTyper text="DAMAGE: HIGH" speed={15} startDelay={1300} />
            <span className="block min-h-3.5"></span>
            <BootTyper text="> DELETING VIRUS.............. FAILED" speed={15} startDelay={2000} />
            <BootTyper text="> QUARANTINE.................. FAILED" speed={15} startDelay={2500} />
            <BootTyper text="> SYSTEM OVERRIDE............. INITIATED" speed={15} startDelay={3000} />
          </div>
        </div>
      </div>
    </DelayedRender>
  </div>
);

export { BootVirusScan };
