import styled, { css, DefaultTheme } from 'styled-components';

const sizes = (theme: DefaultTheme) => {
  return {
    small: css`
      font-size: ${theme.fontSizes.sm};
      padding: 0.2rem 0.5rem;
      text-transform: uppercase;
      font-weight: 400;
    `,
    medium: css`
      font-size: ${theme.fontSizes.md};
      padding: 0.9 1.3rem;
      font-weight: 500;
    `,
    large: css`
      font-size: ${theme.fontSizes.lg};
      padding: 1.1rem 1.7;
      font-weight: 500;
    `,
  };
};

const variations = (theme: DefaultTheme) => {
  return {
    primary: css`
      color: ${theme.colors.indigo[50]};
      background-color: ${theme.colors.indigo[600]};

      &:hover {
        background-color: ${theme.colors.indigo[700]};
      }
    `,
    secondary: css`
      color: ${theme.colors.gray[600]};
      background: ${theme.colors.gray[0]};
      border: 1px solid ${theme.colors.gray[300]};

      &:hover {
        background-color: ${theme.colors.gray[300]};
      }
    `,
    danger: css`
      color: ${theme.colors.red[100]};
      background-color: ${theme.colors.red[700]};

      &:hover {
        background-color: ${theme.colors.red[800]};
      }
    `,
  };
};
interface Props {
  $primary?: boolean;
  $secondary?: boolean;
  $medium?: boolean;
  $large?: boolean;
  $small?: boolean;
  $danger?: boolean;
}

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Lato', sans-serif;
  border: none;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.gray[500]};
  border: 1px solid ${(props) => props.theme.colors.gray[500]};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.gray[600]};
  }
  ${(props) =>
    props &&
    css`
      border-radius: ${props.theme.borderRadius.sm};
      box-shadow: ${props.theme.shadows.sm};
    `}
  ${(props) => {
    if (props.$large) {
      return sizes(props.theme)['large'];
    }
    if (props.$small) {
      return sizes(props.theme)['small'];
    }
    if (props.$medium) {
      return sizes(props.theme)['medium'];
    }
  }}
  ${(props) => {
    if (props.$primary) {
      return variations(props.theme)['primary'];
    }
    if (props.$secondary) {
      return variations(props.theme)['secondary'];
    }
    if (props.$danger) {
      return variations(props.theme)['danger'];
    }
  }}
`;
// Button.defaultProps = {
//   $primary: true,
//   $small: true,
// };
