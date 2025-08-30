import { sortByName } from "@/shared/utils";

import type { GroupProps } from "./types";
import { GroupSkeleton } from "./GroupSkeleton";

export const Group = ({ title, options, isLoading }: GroupProps) => {
  const sortedOptions = sortByName(options);

  if (isLoading) return <GroupSkeleton />;

  return (
    <div>
      <h4 className="text-xl font-bold text-secondary mb-[15px]">{title}</h4>

      <ul className="flex-1 overflow-y-auto pr-2 max-h-[calc(100vh-400px)] mb-[30px]">
        {sortedOptions.map((option) => {
          const optionToLower = option.toLowerCase();

          return (
            <li key={option} className="flex items-center gap-2">
              <input type="checkbox" id={option} name={option} />

              <label
                htmlFor={option}
                className="cursor-pointer text-tertiary capitalize"
              >
                {optionToLower}
              </label>
            </li>
          );
        })}
      </ul>

      <div className="w-full bg-secondary h-[1px]" />
    </div>
  );
};
