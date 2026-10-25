import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const Hero = styled.section<{
  $src: string;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  color: white;

  background-image: linear-gradient(
      rgba(0, 0, 0, ${(props) => (props.$disabled ? 0.75 : 0.45)}),
      rgba(0, 0, 0, ${(props) => (props.$disabled ? 0.75 : 0.45)})
    ),
    url('${(props) => props.$src}');

  background-position: center;
  background-size: cover;
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};

  @media (max-width: 600px) {
    min-height: 220px;
    padding: 20px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Heading = styled.h1`
  margin: 0 0 12px;
  font-size: 36px;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

function HeroImage({
  src,
  title,
  subtitle,
  disabled = false,
}: HeroImageProps) {
  return (
    <Hero
      $src={src}
      $disabled={disabled}
      aria-label={title}
    >
      <Content>
        <Heading>{title}</Heading>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </Hero>
  );
}

export default HeroImage;