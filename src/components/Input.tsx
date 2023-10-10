import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${(props) =>
    props &&
    css`
      border: 1px solid ${props.theme.colors.gray[400]};
      background-color: ${props.theme.colors.gray[0]};
      border-radius: ${props.theme.borderRadius.sm};
      box-shadow: ${props.theme.shadows.sm};
    `}
  padding: 0.8rem 1.2rem;
`;
