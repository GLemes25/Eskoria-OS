"use client";

import { BootTyper } from "@/components/boot/BootTyper";
import { useEffect, useRef, useState } from "react";

type BootProgressBarProps = {
  label: string;
  totalBlocks?: number;
  startDelay?: number;
};

const BootProgressBar = ({
  label,
  totalBlocks = 35,
  startDelay = 0,
}: BootProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [labelDisplayed, setLabelDisplayed] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const labelTimeout = setTimeout(() => setLabelDisplayed(true), startDelay);
    let recursiveTimeoutId: ReturnType<typeof setTimeout>;

    const processTick = () => {
      const increment = Math.floor(Math.random() * 6) + 1;
      progressRef.current = Math.min(progressRef.current + increment, 100);
      setProgress(progressRef.current);

      if (progressRef.current < 100) {
        const isStuttering = Math.random() > 0.85;
        const nextDelay = isStuttering
          ? Math.floor(Math.random() * 75) + 40
          : Math.floor(Math.random() * 12) + 5;

        recursiveTimeoutId = setTimeout(processTick, nextDelay);
      }
    };

    const barTimeout = setTimeout(() => {
      setStarted(true);
      processTick();
    }, startDelay + 600);

    return () => {
      clearTimeout(labelTimeout);
      clearTimeout(barTimeout);
      clearTimeout(recursiveTimeoutId);
    };
  }, [startDelay]);

  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  const bar = "█".repeat(filledBlocks) + " ".repeat(emptyBlocks);

  return (
    <div className="flex flex-col gap-0.5 mt-1">
      {labelDisplayed ? (
        <BootTyper text={label} speed={5} />
      ) : (
        <span className="block min-h-3.5"></span>
      )}
      {started ? (
        <span className="block whitespace-pre min-h-3.5">
          &gt; [{bar}] {progress < 10 ? `0${progress}` : progress}%
        </span>
      ) : (
        <span className="block min-h-3.5"></span>
      )}
    </div>
  );
};

export { BootProgressBar };
