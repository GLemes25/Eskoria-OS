"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type TueOverlayProps = {
  isVisible: boolean;
  onDismiss: () => void;
};

const TueOverlay = ({ isVisible, onDismiss }: TueOverlayProps) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onDismiss, 2000);
    return () => clearTimeout(timer);
  }, [isVisible, onDismiss]);

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 bg-black pointer-events-none flex items-center justify-center">
      <Image
        alt="TUE"
        className="object-cover object-center"
        fill
        priority
        src="/tue.png"
        unoptimized
      />
    </div>,
    document.body,
  );
};

export { TueOverlay };
