export interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  disabled?: boolean;
  onClick?: () => void;
}