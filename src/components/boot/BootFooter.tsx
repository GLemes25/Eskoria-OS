"use client";

import { BootTyper } from "@/components/boot/BootTyper";
import { BootProgressBar } from "@/components/boot/BootProgressBar";
import { DelayedRender } from "@/components/boot/DelayedRender";

const BootFooter = () => (
  <div className="flex flex-col gap-1 mt-4">
    <BootProgressBar
      label="> ATTEMPTING SYSTEM RECOVERY..."
      targetProgress={42}
      speed={15}
      startDelay={0}
    />
    <BootTyper
      text="> RELOADING ESKORIA CORE PROTOCOL..."
      speed={15}
      startDelay={1500}
    />
    <DelayedRender delay={2500}>
      <p className="text-center animate-[pulse_1.5s_ease-in-out_infinite] mt-2 font-bold tracking-widest">
        &gt;&gt;&gt; ESKORIA IS NOT JUST A BAND. IT&apos;S A RESISTANCE &lt;&lt;&lt;
      </p>
    </DelayedRender>
    <DelayedRender delay={3500}>
      <div className="flex justify-between mt-2 border-b border-red-500 pb-2">
        <span className="text-red-500 font-bold drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]">
          &gt; SYSTEM STATUS: CRITICAL
        </span>
        <span className="animate-[pulse_1s_ease-in-out_infinite]">
          &gt; PRESS ANY KEY TO CONTINUE...
        </span>
      </div>
    </DelayedRender>
  </div>
);

export { BootFooter };
