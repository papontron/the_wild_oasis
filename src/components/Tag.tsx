import styled, { css } from 'styled-components';

export const Tag = styled.span<{
  $type: 'gray' | 'red' | 'indigo' | 'green' | 'yellow' | 'silver' | 'blue';
}>`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  ${(props) => {
    const type = props.$type;
    return css`
      color: ${props.theme.colors[type][700]};
      color: ${props.theme.colors[type][100]};
    `;
  }}
`;
