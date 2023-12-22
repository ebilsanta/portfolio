"use client";

import { useEffect, useState } from "react";

interface SideProps {
  children: React.ReactNode;
  orientation: string;
  heightToAppear: number;
}

export default function Side({
  children,
  orientation,
  heightToAppear,
}: SideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToAppear) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div
        className={`hidden sm:inline fixed bottom-4 ${
          orientation === "left"
            ? "left-0 rotate-270 -translate-x-36"
            : "right-6"
        }`}
      >
        {children}
      </div>
    )
  );
}
