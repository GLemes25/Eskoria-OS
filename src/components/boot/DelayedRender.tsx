"use client";

import { useEffect, useState } from "react";

type DelayedRenderProps = {
  children: React.ReactNode;
  delay: number;
};

const DelayedRender = ({ children, delay }: DelayedRenderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible ? <>{children}</> : <div className="invisible"></div>;
};

export { DelayedRender };
