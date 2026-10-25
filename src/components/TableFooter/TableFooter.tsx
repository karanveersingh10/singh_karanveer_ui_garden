import styled from 'styled-components';
import type { TableFooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot<{ $disabled: boolean }>`
  background-color: ${(props) =>
    props.$disabled ? '#e5e7eb' : '#f3f4f6'};
  color: ${(props) => (props.$disabled ? '#888888' : '#222222')};
  font-weight: bold;

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

function TableFooter({
  children,
  disabled = false,
}: TableFooterProps) {
  return (
    <StyledFooter $disabled={disabled}>
      <tr>{children}</tr>
    </StyledFooter>
  );
}

export default TableFooter;