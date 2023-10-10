import styled, { css } from 'styled-components';
import { theme } from '../config/styles/theme';

export const Heading = styled.h1<{ as?: 'h2' | 'h3' | 'h1'; $color?: string }>`
  color: ${({ $color }) => $color || theme.colors.gray[800]};
  ${({ as }) =>
    as === 'h3'
      ? css`
          font-weight: 400;
          font-size: ${(props) => props.theme.fontSizes.md};
          line-height: 1.2;
        `
      : as === 'h2'
      ? css`
          font-weight: 500;
          font-size: ${(props) => props.theme.fontSizes.lg};
          line-height: 1.4;
        `
      : css`
          font-weight: 600;
          font-size: ${(props) => props.theme.fontSizes.xl};
          line-height: 1.6;
        `};
`;

Heading.defaultProps = {
  as: 'h1',
};
