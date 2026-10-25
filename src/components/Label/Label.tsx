
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  $color: string;
  $disabled: boolean;
}>`
  display: inline-block;
  color: ${(props) => props.$disabled ? '#888888' : props.$color};
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin: 6px 0;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

function Label({
  text,
  color = '#222222',
  disabled = false,
}: LabelProps) {
  return (
    <StyledLabel $color={color} $disabled={disabled}>
      {text}
    </StyledLabel>
  );
}

export default Label;
