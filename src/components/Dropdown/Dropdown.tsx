
import styled from 'styled-components';
import type { DropdownProps } from './Dropdown.types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 320px;
  font-family: Arial, sans-serif;
`;

const LabelText = styled.label<{ $disabled: boolean }>`
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};
  font-size: 14px;
`;

const StyledSelect = styled.select<{ $disabled: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #9ca3af;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

function Dropdown({
  label,
  options,
  value,
  disabled = false,
  onChange,
}: DropdownProps) {
  return (
    <Container>
      <LabelText $disabled={disabled}>{label}</LabelText>

      <StyledSelect
        aria-label={label}
        value={value ?? ''}
        disabled={disabled}
        $disabled={disabled}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          onChange?.(event.target.value)
        }
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
}

export default Dropdown;
