import type { GroupProps } from "./types";

export const Group = ({ title, options, onChange, value }: GroupProps) => {
  return (
    <div>
      <h4 className="text-xl font-bold text-secondary pt-[19px] mb-[15px]">
        {title}
      </h4>

      <ul className="flex-1 overflow-y-auto pr-2 max-h-[calc(100vh-400px)] mb-[30px]">
        {options.map((option) => {
          const isChecked = value.some((v) => v.value === option.value);
          return (
            <li key={option.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                checked={isChecked}
                onChange={() => onChange(option)}
              />

              <label
                htmlFor={option.value}
                className="cursor-pointer text-tertiary capitalize"
              >
                {option.label}
              </label>
            </li>
          );
        })}
      </ul>

      <div className="w-full bg-secondary h-[1px]" />
    </div>
  );
};
