import styled from 'styled-components';
import type { TableHeaderProps } from './TableHeader.types';

const StyledHeader = styled.thead<{ $disabled: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#2563eb'};
  color: ${(props) => (props.$disabled ? '#888888' : '#ffffff')};

  th {
    padding: 12px;
    border: 1px solid #d1d5db;
    text-align: left;
  }

  @media (max-width: 600px) {
    th {
      padding: 8px;
    }
  }
`;

function TableHeader({
  children,
  disabled = false,
}: TableHeaderProps) {
  return (
    <StyledHeader $disabled={disabled}>
      <tr>{children}</tr>
    </StyledHeader>
  );
}

export default TableHeader;