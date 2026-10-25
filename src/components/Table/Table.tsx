import styled from 'styled-components';
import type { TableProps } from './Table.types';

const StyledTable = styled.table<{ $disabled: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#ffffff'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    th,
    td {
      padding: 8px;
    }
  }
`;

function Table({ children, disabled = false }: TableProps) {
  return <StyledTable $disabled={disabled}>{children}</StyledTable>;
}

export default Table;