"use client";

import { Button } from "@/components/ui/button";

type CinematicRevealProps = {
  onReboot?: () => void;
};

const REVEAL_VIDEO_URL =
  "https://res.cloudinary.com/dk7zfhbrj/video/upload/v1780687469/down_guitar_l11fwo.mp4";

const CinematicReveal = ({ onReboot }: CinematicRevealProps) => {
  return (
    <div className="absolute inset-0 z-200 bg-kat-bg overflow-hidden flex items-center justify-center font-mono">
      <div className="absolute inset-0">
        <video
          src={REVEAL_VIDEO_URL}
          autoPlay
          playsInline
          onEnded={onReboot}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-kat-bg/60 pointer-events-none" />

      <Button
        variant="bare"
        size="auto"
        onClick={onReboot}
        className="absolute bottom-6 right-8 text-kat-subtle text-[14px] hover:text-kat-text transition-colors cursor-pointer tracking-widest z-10 leading-none rounded-none"
      >
        [ REBOOT_SYSTEM ]
      </Button>
    </div>
  );
};

export default CinematicReveal;
