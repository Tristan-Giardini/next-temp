"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
  children: ReactNode;
  delegate?: string;
  options?: Record<string, unknown>;
}

const Fancybox: React.FC<FancyboxProps> = ({
  children,
  delegate = "[data-fancybox]",
  options = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    NativeFancybox.bind(delegate, options);

    return () => {
      NativeFancybox.unbind(delegate);
      NativeFancybox.close();
    };
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
};

export default Fancybox;
