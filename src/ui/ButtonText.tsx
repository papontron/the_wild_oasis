import styled from 'styled-components';

const ButtonText = styled.button`
  color: ${({ theme }) => theme.colors.indigo[600]};
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.indigo[700]};
  }
`;

export default ButtonText;
