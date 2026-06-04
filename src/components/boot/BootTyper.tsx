"use client";

import { useEffect, useState } from "react";

type BootTyperProps = {
  text: string;
  speed?: number;
  startDelay?: number;
};

const BootTyper = ({ text, speed = 8, startDelay = 0 }: BootTyperProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      setStarted(true);
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

  if (!started) return <span className="block min-h-3.5"></span>;
  return <span className="block min-h-3.5">{displayed}</span>;
};

export { BootTyper };
