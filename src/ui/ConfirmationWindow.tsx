import styled from 'styled-components';
import { Heading } from '../components/Heading';
import { Button } from '../components/Button';
import { ReactElement } from 'react';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
interface Props {
  resourceName: string;
  disabled: boolean;
  onCloseModal?: () => void;
  actionButton: ReactElement;
}
function ConfirmationWindow({
  resourceName,
  actionButton,
  disabled,
  onCloseModal,
}: Props) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button $secondary $small disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        {actionButton}
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmationWindow;
