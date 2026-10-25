import styled from 'styled-components';
import type { CardProps } from './Card.types';

const StyledCard = styled.article<{ $disabled: boolean }>`
  width: 100%;
  max-width: 340px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 12px;
  font-size: 22px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  margin: 0 0 16px;
`;

const CardButton = styled.button`
  padding: 10px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

function Card({
  title,
  description,
  buttonText = 'Learn More',
  disabled = false,
  onClick,
}: CardProps) {
  return (
    <StyledCard $disabled={disabled}>
      <Title>{title}</Title>
      <Description>{description}</Description>

      {buttonText && (
        <CardButton disabled={disabled} onClick={onClick}>
          {buttonText}
        </CardButton>
      )}
    </StyledCard>
  );
}

export default Card;