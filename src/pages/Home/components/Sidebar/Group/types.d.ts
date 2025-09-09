import type { Option } from "@/shared/constants";

export interface GroupProps {
  value: Option[];
  title?: string;
  options: Option[];
  onChange: (options: Option) => void;
}
