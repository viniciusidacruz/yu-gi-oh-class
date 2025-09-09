import { useState } from "react";
import { useQueryState } from "nuqs";

import {
  RACE,
  ATTRIBUTE,
  CARD_TYPE,
  type Option,
  type QueryParam,
} from "@/shared/constants";

export const useFilters = () => {
  const [race, setRace] = useQueryState("race");
  const [type, setType] = useQueryState("type");
  const [attribute, setAttribute] = useQueryState("attribute");

  const [cardTypeOptions, setCardTypeOptions] = useState<Option[]>([]);

  const [typeAndAttributeOptions, setTypeAndAttributeOptions] = useState<
    Option[]
  >(() => {
    const raceOptions = race
      ? RACE.filter((option) => option.value === race)
      : [];
    const attributeOptions = attribute
      ? ATTRIBUTE.filter((option) => option.value === attribute)
      : [];
    const typeOptions = type
      ? CARD_TYPE.filter((option) => option.value === type)
      : [];

    return [...raceOptions, ...attributeOptions, ...typeOptions];
  });

  const handleTypeAndAttributeOptionsChange = (options: Option) => {
    setTypeAndAttributeOptions((prev) => {
      if (prev.some((option) => option.value === options.value)) {
        return prev.filter((option) => option.value !== options.value);
      }
      return [...prev, options];
    });
  };

  const handleCardTypeOptionsChange = (options: Option) => {
    setCardTypeOptions((prev) => {
      if (prev.some((option) => option.value === options.value)) {
        return prev.filter((option) => option.value !== options.value);
      }
      return [...prev, options];
    });
  };

  const handleClearFilters = () => {
    setCardTypeOptions([]);
    setTypeAndAttributeOptions([]);
    setRace(null);
    setType(null);
    setAttribute(null);
  };

  function toString(options: Option[]) {
    return encodeURIComponent(options.map((option) => option.value).join(","));
  }

  function optionsFilteredByType(options: Option[], type: QueryParam) {
    return options.filter((option) => option.queryParam === type);
  }

  function hasOptions(options: Option[]) {
    return options.length > 0;
  }

  const onSubmit = () => {
    const allOptions = [...typeAndAttributeOptions, ...cardTypeOptions];

    const optionsByType = optionsFilteredByType(allOptions, "type");
    const optionsByAttribute = optionsFilteredByType(allOptions, "attribute");
    const optionsByRace = optionsFilteredByType(allOptions, "race");

    const hasAttributes = hasOptions(optionsByAttribute);
    const hasTypes = hasOptions(optionsByType);
    const hasRaces = hasOptions(optionsByRace);

    if (hasTypes) {
      setType(toString(optionsByType));
    }

    if (hasAttributes) {
      setAttribute(toString(optionsByAttribute));
    }

    if (hasRaces) {
      setRace(toString(optionsByRace));
    }
  };

  return {
    onSubmit,
    cardTypeOptions,
    handleClearFilters,
    typeAndAttributeOptions,
    handleCardTypeOptionsChange,
    handleTypeAndAttributeOptionsChange,
  };
};
