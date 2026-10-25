import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<{ $disabled: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};

  &:nth-child(even) {
    background-color: ${(props) =>
      props.$disabled ? '#e5e7eb' : '#f3f4f6'};
  }

  td {
    padding: 12px;
    border: 1px solid #d1d5db;
    text-align: left;
  }

  @media (max-width: 600px) {
    td {
      padding: 8px;
    }
  }
`;

function TableRow({ children, disabled = false }: TableRowProps) {
  return <StyledRow $disabled={disabled}>{children}</StyledRow>;
}

export default TableRow;