"use client";

import { useEffect, useState } from "react";

export function useScrollShadow(offset = 12) {
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsElevated(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return isElevated;
}
