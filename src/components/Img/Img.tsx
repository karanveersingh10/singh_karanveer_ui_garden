import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const StyledImage = styled.img<{
  $width: string;
  $disabled: boolean;
}>`
  display: block;
  width: ${(props) => props.$width};
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  opacity: ${(props) => (props.$disabled ? 0.45 : 1)};
  filter: ${(props) => (props.$disabled ? 'grayscale(100%)' : 'none')};
  transition: opacity 0.2s ease;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function Img({
  src,
  alt,
  width = '300px',
  disabled = false,
}: ImgProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      $width={width}
      $disabled={disabled}
    />
  );
}

export default Img;