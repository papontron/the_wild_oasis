import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div<{ $columns: number }>`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(max-content, auto));
  gap: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
  background-color: ${(props) => props.theme.colors.indigo[200]};
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledHeader = styled.div`
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[0]};
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  text-align: center;
`;

interface Props {
  children: ReactNode;
  columns: number;
}

export default function Table({ children, columns }: Props) {
  return (
    <StyledTable role="table" $columns={columns}>
      {children}
    </StyledTable>
  );
}
function Header({ children }: { children: ReactNode }) {
  // i want the header to have a different style from the body
  const childrenArray = React.Children.toArray(children);
  return (
    <>
      {childrenArray.map((child, index) => (
        <StyledHeader key={index}>{child}</StyledHeader>
      ))}
    </>
  );
}
interface RowsProps {
  children: ReactNode;
}
function Rows({ children }: RowsProps) {
  return <>{children}</>;
}

Table.Header = Header;
Table.Rows = Rows;
