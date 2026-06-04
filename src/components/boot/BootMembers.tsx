"use client";

import Image from "next/image";
import { BootTyper } from "@/components/boot/BootTyper";
import { DelayedRender } from "@/components/boot/DelayedRender";
import { BAND_MEMBERS_DATA } from "@/components/boot/bootData";

const BootMembers = () => (
  <div className="flex flex-col gap-1.5 mt-2">
    <BootTyper text="> INITIALIZING BAND MEMBERS..." speed={5} startDelay={0} />
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-1">
      {BAND_MEMBERS_DATA.map((member, cardIdx) => (
        <DelayedRender key={member.name} delay={200 + cardIdx * 600}>
          <div className="border border-[#00FF41] p-2 flex flex-col gap-1.5 bg-[#00FF41]/2">
            <BootTyper text={`> ${member.name}`} speed={5} startDelay={0} />
            <div className="flex gap-2 flex-1 items-center">
              <div className="relative w-16 h-24 shrink-0">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  unoptimized
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5 text-[10px]">
                <BootTyper text={member.moduleLabel} speed={5} startDelay={50} />
                {member.statusLines.map((line, idx) => (
                  <BootTyper
                    key={line}
                    text={line}
                    speed={5}
                    startDelay={100 + idx * 100}
                  />
                ))}
              </div>
            </div>
            <div className="border border-[#00FF41] px-1.5 py-0.5 mt-1">
              <BootTyper text="STATUS: ONLINE" speed={5} startDelay={400} />
            </div>
          </div>
        </DelayedRender>
      ))}
    </div>
  </div>
);

export { BootMembers };
