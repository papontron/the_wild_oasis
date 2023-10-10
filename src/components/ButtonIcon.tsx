import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: ${({ theme }) => theme.colors.indigo[600]};
  }
`;

export default ButtonIcon;
