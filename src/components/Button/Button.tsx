
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    background-color: #bdbdbd;
    color: #666666;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Button({
  label,
  backgroundColor = '#2563eb',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
