import { useSlider } from "@/shared/hooks";
import { SLIDER_IMAGES } from "@/shared/constants";
import { cn } from "@/shared/utils";

export const Slider = () => {
  const { currentSlide, gotToSlide } = useSlider({
    images: SLIDER_IMAGES,
  });

  return (
    <div>
      <img src={SLIDER_IMAGES[currentSlide]} alt="slider" />

      <div className="flex items-center gap-2 justify-center mt-[14px]">
        {SLIDER_IMAGES.map((image, index) => {
          const isActive = index === currentSlide;

          return (
            <button
              key={image}
              className={cn(
                "w-3 h-3 rounded-full cursor-pointer",
                isActive ? "bg-primary" : "bg-[#D9D9D9]"
              )}
              onClick={() => gotToSlide(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
