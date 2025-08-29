import { useQueryState } from "nuqs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type FormEvent } from "react";

import { ROUTES } from "@/shared/constants";

export const useSearch = () => {
  const [search] = useQueryState("search");
  const [value, setValue] = useState(search ?? "");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(location.search);
    params.set("search", value);

    navigate(`${ROUTES.SEARCH}?${params.toString()}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, search, handleSearch, handleChange };
};
