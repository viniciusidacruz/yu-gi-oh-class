import { Search } from "lucide-react";

import { useSearch } from "@/shared/hooks";

export const FieldSearch = () => {
  const { handleSearch, handleChange, value } = useSearch();

  return (
    <form
      onSubmit={handleSearch}
      className="lg:w-[494px] border border-primary h-[50px] rounded-[5px] bg-[#F5F5F5] flex items-center justify-between pr-[15px]"
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Pesquisar"
        className="outline-none px-[15px] bg-transparent border-none h-full"
      />

      <button type="submit">
        <Search className="text-primary" />
      </button>
    </form>
  );
};
