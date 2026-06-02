"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  startDelay?: number;
};

const TypewriterText = ({ text, speed = 15, startDelay = 0 }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayedText(text.slice(0, currentIndex));
        if (currentIndex >= text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return <p className="text-white text-sm leading-tight opacity-80">{displayedText}</p>;
};

export { TypewriterText };
