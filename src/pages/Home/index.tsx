import { Sidebar } from "@/shared/components";
import { useGetCards } from "@/shared/hooks";

export const Home = () => {
  const { data = [], isLoading } = useGetCards();

  return (
    <div className="flex flex-col-reverse lg:flex-row container mx-auto px-8 mt-12 gap-[114px]">
      <Sidebar isLoading={isLoading} data={data} />

      <div className="flex-1">
        <h1>Home</h1>
      </div>
    </div>
  );
};
