"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type DontOpenOverlayProps = {
  isVisible: boolean;
  onDismiss: () => void;
};

const DontOpenOverlay = ({ isVisible, onDismiss }: DontOpenOverlayProps) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onDismiss, 2000);
    return () => clearTimeout(timer);
  }, [isVisible, onDismiss]);

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 bg-black pointer-events-none flex items-center justify-center">
      <Image
        alt="DO NOT OPEN"
        className="object-cover object-center"
        fill
        priority
        src="/dontopen.png"
        unoptimized
      />
    </div>,
    document.body
  );
};

export { DontOpenOverlay };
