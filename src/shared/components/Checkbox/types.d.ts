export interface CheckboxProps {
  value: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}
