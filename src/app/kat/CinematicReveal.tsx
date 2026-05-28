"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type CinematicRevealProps = {
  onReboot?: () => void;
};

const REVEAL_IMAGE_URL =
  "https://images.unsplash.com/photo-1501962679900-bea61483313b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JpdHR5JTIwY2luZW1hdGljJTIwcm9jayUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3Nzk5NzQ3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const CinematicReveal = ({ onReboot }: CinematicRevealProps) => {
  return (
    <div className="absolute inset-0 z-200 bg-kat-bg overflow-hidden flex items-center justify-center font-mono">
      <div className="absolute inset-0">
        <Image
          src={REVEAL_IMAGE_URL}
          alt="Rock Band Performance Reveal"
          fill
          className="object-cover object-center"
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
