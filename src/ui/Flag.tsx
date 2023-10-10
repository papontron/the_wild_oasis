import styled from 'styled-components';

export const Flag = styled.img`
  max-width: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.tiny};
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;
