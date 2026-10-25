import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const Container = styled.label<{ $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  font-family: Arial, sans-serif;
`;

const Input = styled.input`
  accent-color: #2563eb;
`;

function RadioButton({
  name,
  label,
  value,
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) {
  return (
    <Container $disabled={disabled}>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />
      {label}
    </Container>
  );
}

export default RadioButton;