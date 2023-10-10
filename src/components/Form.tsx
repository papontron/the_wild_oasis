import styled, { css } from 'styled-components';

const Form = styled.form<{ $modal?: boolean }>`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: ${(props) => props.theme.colors.gray[0]};
  border: 1px solid ${(props) => props.theme.colors.gray[100]};
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden;
  font-size: 1.4rem;

  ${({ $modal }) =>
    $modal &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray[900]};
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80rem;
      z-index: 1000;
    `}
`;

export default Form;
