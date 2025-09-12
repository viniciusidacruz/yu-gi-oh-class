import { useId } from "react";

import type { CheckboxProps } from "./types";

export function Checkbox({
  value,
  onCheckedChange,
  id,
  name,
  disabled,
  className,
  "aria-label": ariaLabel,
}: CheckboxProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex items-center ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${className ?? ""}`}
    >
      <input
        id={inputId}
        name={name}
        type="checkbox"
        checked={value}
        onChange={(e) => onCheckedChange(e.target.checked)}
        disabled={disabled}
        aria-label={ariaLabel}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="relative flex items-center justify-center w-[27px] h-[27px] rounded-full border-[3px] border-primary bg-white"
      >
        {value && (
          <span className="w-[11px] h-[11px] rounded-full bg-primary" />
        )}
      </span>
    </label>
  );
}
