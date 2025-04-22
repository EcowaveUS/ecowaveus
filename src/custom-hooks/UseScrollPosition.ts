import { useEffect, useState } from "react";

const useScrollPosition = (threshold: number = 180): boolean => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastThreshold(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para comprobar el estado inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
};

export default useScrollPosition;
