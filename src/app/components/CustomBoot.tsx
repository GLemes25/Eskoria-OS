"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CustomBootProps = {
  onComplete: () => void;
};

type BootTyperProps = {
  text: string;
  speed?: number;
  startDelay?: number;
};

const BootTyper = ({ text, speed = 25, startDelay = 0 }: BootTyperProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(intervalId);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return <span className="block">{displayed}</span>;
};

type BandMemberData = {
  name: string;
  imagePath: string;
  moduleLabel: string;
  statusLines: string[];
};

const BAND_MEMBERS_DATA: BandMemberData[] = [
  {
    name: "PROFETA",
    imagePath: "/boot/profeta.svg",
    moduleLabel: "> VOCAL MODULE",
    statusLines: [
      "> THROAT SYS...... OK",
      "> LYRICS DB....... OK",
      "> STAGE PRESENCE.. 100%",
      "> CHAOS FACTOR.... HIGH",
    ],
  },
  {
    name: "DIAVOLI",
    imagePath: "/boot/daivoli.svg",
    moduleLabel: "> GUITAR MODULE",
    statusLines: [
      "> RIFF ENGINE..... OK",
      "> DISTORTION...... OK",
      "> FINGER SPEED.... 100%",
      "> DESTRUCTION..... MAX",
    ],
  },
  {
    name: "EXECUTOR",
    imagePath: "/boot/executor.svg",
    moduleLabel: "> BASS MODULE",
    statusLines: [
      "> LOW END SYS..... OK",
      "> FREQUENCY....... OK",
      "> GROOVE.......... 100%",
      "> DARK ENERGY..... HIGH",
    ],
  },
  {
    name: "NULL",
    imagePath: "/boot/null.svg",
    moduleLabel: "> DRUM MODULE",
    statusLines: [
      "> PERCUSSION SYS.. OK",
      "> DOUBLE KICK..... OK",
      "> SPEED........... 100%",
      "> IMPACT.......... MAX",
    ],
  },
];

const CustomBoot = ({ onComplete }: CustomBootProps) => {
  const [bootStep, setBootStep] = useState(1);

  useEffect(() => {
    const t2 = setTimeout(() => setBootStep(2), 1500);
    const t3 = setTimeout(() => setBootStep(3), 3000);
    const t4 = setTimeout(() => setBootStep(4), 5500);
    const t5 = setTimeout(() => setBootStep(5), 7500);
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
    <div className="w-full h-full flex flex-col p-8 bg-black font-mono overflow-hidden text-[#00FF41] leading-tight text-xs gap-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="block">ESKORIA OPERATING SYSTEM v1.9.9.6</span>
          <span className="block">
            (C) 199X-2024 ESKORIA CORP. ALL RIGHTS RESERVED.
          </span>
          <span className="block">&nbsp;</span>
          <BootTyper
            text="BOOT SEQUENCE INITIATED..."
            speed={20}
            startDelay={0}
          />
          <BootTyper
            text="[ OK ] SYSTEM MEMORY CHECK........... 64MB OK"
            speed={12}
            startDelay={500}
          />
          <BootTyper
            text="[ OK ] HARD DRIVE DETECTED........... ESKORIA_CORE"
            speed={12}
            startDelay={1000}
          />
          <BootTyper
            text="[ OK ] AUDIO INTERFACE............... ONLINE"
            speed={12}
            startDelay={1500}
          />
          <BootTyper
            text="[ OK ] VIDEO SYSTEM.................. 640x480 CRT"
            speed={12}
            startDelay={2000}
          />
          <BootTyper
            text="[ OK ] POWER SUPPLY.................. STABLE"
            speed={12}
            startDelay={2500}
          />
          <BootTyper
            text="[ OK ] NETWORK PROTOCOL.............. UNDERGROUND"
            speed={12}
            startDelay={3000}
          />
          <span className="block">&nbsp;</span>
          <BootTyper
            text="> LOADING ESKORIA CORE MODULES..."
            speed={20}
            startDelay={3500}
          />
          <span className="block mt-0.5">
            &gt; [██████████████████████████████████ ] 78%
          </span>
        </div>

        {bootStep >= 2 && (
          <div className="flex flex-col gap-2">
            <div className="relative w-full h-36 shrink-0 mb-4">
              <Image
                src="/boot/eskoria.svg"
                alt="ESKORIA"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="border border-[#00FF41] p-2 flex gap-2 mt-auto">
              <div className="flex flex-col gap-0.5 flex-1">
                <BootTyper text="> WELCOME TO THE SYSTEM." speed={35} />
                <BootTyper text="> TRUST NO ONE." speed={35} startDelay={700} />
                <BootTyper
                  text="> ROCK IS OUR PROTOCOL."
                  speed={35}
                  startDelay={1300}
                />
              </div>
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src="/boot/greenskull.svg"
                  alt="GREENSKULL"
                  fill
                  unoptimized
                  sizes="80px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {bootStep >= 3 && (
        <div className="flex flex-col gap-1">
          <span className="block">&gt; INITIALIZING BAND MEMBERS...</span>
          <div className="grid grid-cols-4 gap-4">
            {BAND_MEMBERS_DATA.map((member) => (
              <div
                key={member.name}
                className="border border-[#00FF41] p-1.5 flex flex-col gap-1"
              >
                <span className="block">&gt; {member.name}</span>
                <div className="flex gap-1.5 flex-1">
                  <div className="relative w-14 h-20 shrink-0">
                    <Image
                      src={member.imagePath}
                      alt={member.name}
                      fill
                      unoptimized
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 text-xs">
                    <BootTyper text={member.moduleLabel} speed={25} />
                    {member.statusLines.map((line, idx) => (
                      <BootTyper
                        key={line}
                        text={line}
                        speed={25}
                        startDelay={500 + idx * 400}
                      />
                    ))}
                  </div>
                </div>
                <div className="border border-[#00FF41] px-1.5 py-0.5 text-xs">
                  STATUS: ONLINE
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {bootStep >= 4 && (
        <div className="grid grid-cols-2 gap-4 text-red-500">
          <div className="flex flex-col gap-0.5">
            <BootTyper text="> SYSTEM SCAN..." speed={20} />
            <BootTyper
              text="> [!] WARNING: UNAUTHORIZED PROGRAM DETECTED........ VIRUS_X.CORP"
              speed={12}
              startDelay={400}
            />
            <BootTyper
              text="> [!] WARNING: SYSTEM FILE CORRUPTED................ ESKORIA.DLL"
              speed={12}
              startDelay={900}
            />
            <BootTyper
              text="> [!] ERROR: SECURITY BREACH........................ PORT 666"
              speed={12}
              startDelay={1400}
            />
            <BootTyper
              text="> [!] ERROR: FIREWALL FAILURE....................... CRITICAL"
              speed={12}
              startDelay={1900}
            />
            <BootTyper
              text="> [!] ALERT: BAND SYSTEM UNDER ATTACK............... !!!"
              speed={12}
              startDelay={2400}
            />
          </div>
          <div className="border border-red-500 p-2 flex flex-col gap-1">
            <span className="block">&gt; VIRUS ANALYSIS</span>
            <div className="flex gap-2">
              <div className="relative w-16 h-20 shrink-0">
                <Image
                  src="/boot/redskull.svg"
                  alt="REDSKULL"
                  fill
                  unoptimized
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-0.5 text-xs">
                <span className="block">VIRUS NAME: ROCKKILLER.EXE</span>
                <span className="block">TYPE: SYSTEM DESTROYER</span>
                <span className="block">ORIGIN: UNKNOWN</span>
                <span className="block">DAMAGE: HIGH</span>
                <BootTyper
                  text="> DELETING VIRUS.............. FAILED"
                  speed={20}
                  startDelay={900}
                />
                <BootTyper
                  text="> QUARANTINE.................. FAILED"
                  speed={20}
                  startDelay={1600}
                />
                <BootTyper
                  text="> SYSTEM OVERRIDE............. INITIATED"
                  speed={20}
                  startDelay={2300}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {bootStep >= 5 && (
        <div className="flex flex-col gap-1 mt-auto">
          <BootTyper
            text="> ATTEMPTING SYSTEM RECOVERY... [████████████████████ ] 42%"
            speed={20}
          />
          <BootTyper
            text="> RELOADING ESKORIA CORE PROTOCOL..."
            speed={20}
            startDelay={600}
          />
          <p className="text-center animate-pulse mt-1">
            &gt;&gt;&gt; ESKORIA IS NOT JUST A BAND. IT&apos;S A RESISTANCE
            &lt;&lt;&lt;
          </p>
          <div className="flex justify-between mt-1 border-b-2 border-red-500 pb-1">
            <span>&gt; SYSTEM STATUS: CRITICAL</span>
          </div>
        </div>
      )}
    </div>
  );
};

export { CustomBoot };
