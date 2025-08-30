import { useState, useEffect } from "react";

export const useSlider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gotToSlide = (index: number) => {
    setCurrentSlide(index % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return { currentSlide, gotToSlide };
};
