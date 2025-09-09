import type { Option } from "../constants";

export function orderOptions(options: Option[]) {
  return options.sort((a, b) => a.label.localeCompare(b.label));
}
