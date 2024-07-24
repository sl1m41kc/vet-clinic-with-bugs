import { useState, useEffect, useLayoutEffect } from "react";

const useScroll = () => {
  const [isScrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll()

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { isScrolled };
};

export default useScroll;
