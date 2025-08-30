import { useGetCards } from "@/shared/hooks";

import { Slider } from "./components/Slider";
import { Sidebar } from "./components/Sidebar";

export const Home = () => {
  const { data = [], isLoading } = useGetCards();

  return (
    <div className="flex flex-col-reverse lg:flex-row container mx-auto px-8 mt-12 gap-[114px]">
      <Sidebar isLoading={isLoading} data={data} />

      <div className="flex-1">
        <Slider />
      </div>
    </div>
  );
};
