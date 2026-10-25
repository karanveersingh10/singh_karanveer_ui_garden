
import styled from 'styled-components';
import type { TextProps } from './Text.types';

const StyledText = styled.p<{
  $color: string;
  $fontSize: string;
  $disabled: boolean;
}>`
  color: ${(props) => (props.$disabled ? '#888888' : props.$color)};
  font-size: ${(props) => props.$fontSize};
  line-height: 1.5;
  margin: 8px 0;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

function Text({
  children,
  color = '#333333',
  fontSize = '16px',
  disabled = false,
}: TextProps) {
  return (
    <StyledText
      $color={color}
      $fontSize={fontSize}
      $disabled={disabled}
    >
      {children}
    </StyledText>
  );
}

export default Text;
