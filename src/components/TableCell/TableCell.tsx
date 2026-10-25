import styled from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<{ $disabled: boolean }>`
  padding: 12px;
  border: 1px solid #d1d5db;
  text-align: left;
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

function TableCell({ children, disabled = false }: TableCellProps) {
  return <StyledCell $disabled={disabled}>{children}</StyledCell>;
}

export default TableCell;