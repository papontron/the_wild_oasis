import styled, { css } from 'styled-components';

export const Row = styled.div<{ $type?: 'horizontal' | 'vertical' }>`
  display: flex;
  gap: 1.6rem;
  ${({ $type }) =>
    $type === 'vertical'
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
          align-items: center;
        `}
`;
Row.defaultProps = {
  $type: 'horizontal',
};
