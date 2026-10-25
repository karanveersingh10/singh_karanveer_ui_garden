export interface RadioButtonProps {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}