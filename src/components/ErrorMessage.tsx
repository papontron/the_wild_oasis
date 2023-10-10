import styled from 'styled-components';

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({
    theme: {
      colors: { red },
    },
  }) => red[700]};
`;
