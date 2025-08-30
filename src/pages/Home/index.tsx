import { useGetCards } from "@/shared/hooks";

import { Slider } from "./components/Slider";
import { Sidebar } from "./components/Sidebar";
import { Filters } from "./components/Filters";
import { ListCards } from "./components/ListCards";
import { HomeSkeleton } from "./components/HomeSkeleton";

export const Home = () => {
  const { data, isLoading, isEmpty, isSuccess } = useGetCards();

  return (
    <div className="flex flex-col-reverse lg:flex-row container mx-auto px-8 mt-12 gap-[114px]">
      <Sidebar />

      <div className="flex-1">
        <Slider />

        {isLoading && <HomeSkeleton />}

        {isEmpty && (
          <p className="text-tertiary mt-8">Nenhum resultado encontrado</p>
        )}

        {isSuccess && <Filters data={data} />}

        {isSuccess && <ListCards cards={data?.data ?? []} />}
      </div>
    </div>
  );
};
