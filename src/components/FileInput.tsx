import styled from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    color: ${({ theme }) => theme.colors.indigo[50]};
    background-color: ${({ theme }) => theme.colors.gray[600]};
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.indigo[700]};
    }
  }
`;

export default FileInput;
