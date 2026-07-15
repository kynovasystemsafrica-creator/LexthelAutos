import { useState, useEffect, useRef } from "react";

export function useHeaderScroll() {
  const [showHeader, setShowHeader] = useState(true);
  const prevScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      if (current > prevScroll.current && current > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      prevScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return showHeader;
}
