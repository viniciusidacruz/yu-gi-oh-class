import { useQueryState } from "nuqs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type FormEvent } from "react";

import { ROUTES } from "../constants";

export const useSearch = () => {
  const [search, setSearch] = useQueryState("name");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOffset] = useQueryState("offset");
  const [value, setValue] = useState(search ?? "");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isCheckout = pathname === ROUTES.CHECKOUT;

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearch(encodeURIComponent(value));
    setOffset("0");

    if (isCheckout) {
      navigate(`${ROUTES.HOME}?name=${encodeURIComponent(value)}`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, search, handleSearch, handleChange };
};
