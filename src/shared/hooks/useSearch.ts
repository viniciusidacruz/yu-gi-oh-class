import { useQueryState } from "nuqs";
import { useState, type ChangeEvent, type FormEvent } from "react";

export const useSearch = () => {
  const [search, setSearch] = useQueryState("name");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOffset] = useQueryState("offset");
  const [value, setValue] = useState(search ?? "");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(encodeURIComponent(value));
    setOffset("0");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, search, handleSearch, handleChange };
};
