// import styled, { css } from 'styled-components';

// const StyledFilter = styled.div`
//   border: 1px solid ${({ theme }) => theme.colors.gray[100]};
//   background-color: ${({ theme }) => theme.colors.gray[0]};
//   box-shadow: ${({ theme }) => theme.shadows.sm};
//   border-radius: ${({ theme }) => theme.borderRadius.sm};
//   padding: 0.4rem;
//   display: flex;
//   gap: 0.4rem;
// `;

// const FilterButton = styled.button<{ $active: boolean }>`
//   background-color: ${({ theme }) => theme.colors.gray[0]};
//   border: none;

//   ${(props) =>
//     props.$active &&
//     css`
//       background-color: ${({ theme }) => theme.colors.indigo[600]};
//       color: ${({ theme }) => theme.colors.indigo[50]};
//     `}

//   border-radius: ${(props) => props.theme.borderRadius.sm};
//   font-weight: 500;
//   font-size: ${({ theme }) => theme.fontSizes.md};
//   /* To give the same height as select */
//   padding: 0.44rem 0.8rem;
//   transition: all 0.3s;

//   &:hover:not(:disabled) {
//     background-color: ${({ theme }) => theme.colors.indigo[600]};
//     color: ${({ theme }) => theme.colors.indigo[50]};
//   }
// `;
