import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { CabinForm } from './types';
import { useDeleteCabin } from '../../hooks/useDeleteCabin';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { HiSquare2Stack } from 'react-icons/hi2';
import { useInsertOrEditCabin } from '../../hooks/useInsertOrEditCabin';
import Modal from '../../ui/Modal';
import CabinFormComponent from './CabinFormComponent';
import ConfirmationWindow from '../../ui/ConfirmationWindow';
import Menus from '../../ui/Menus';

const Field = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  display: block;
  width: 5rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
`;

export const Cabin = styled(Field)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray[600]};
  font-family: 'Sono';
`;

export const Price = styled(Field)`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled(Field)`
  font-family: 'Sono';
  font-weight: 500;
  color: ${(props) => props.theme.colors.green[700]};
`;

export default function CabinRow({ cabin }: { cabin: CabinForm }) {
  // eslint-disable-next-line
  const [showForm, setShowForm] = useState<boolean>(false);

  const { isLoading, mutate } = useDeleteCabin();
  const { isLoading: isDuplicating, mutate: duplicate } =
    useInsertOrEditCabin('Copy');
  if (!cabin) {
    return null;
  }
  return (
    <>
      <Field>
        <Img src={cabin.imageUrl} />
      </Field>

      <Cabin>{cabin.name}</Cabin>
      <Field>Fits up tp {cabin.maxCapacity}</Field>
      <Price>{formatCurrency(cabin.regularPrice)}</Price>
      <Discount>{formatCurrency(cabin.discount)}</Discount>
      <Field>
        <Menus.Menu>
          <Menus.Toggle id={cabin.id as number} />
          <Menus.List id={cabin.id as number}>
            <Menus.Item>
              <Modal>
                <Modal.OpenModalButton windowName="ConfirmationWindow">
                  <Button disabled={isLoading} $danger $small>
                    <HiTrash /> Delete
                  </Button>
                </Modal.OpenModalButton>
                <Modal.Window name="ConfirmationWindow">
                  <ConfirmationWindow
                    resourceName={cabin.name}
                    actionButton={
                      <Button
                        $danger
                        $small
                        onClick={() => mutate(cabin.id as number)}
                        disabled={isLoading}>
                        Delete
                      </Button>
                    }
                    disabled={isLoading}
                  />
                </Modal.Window>
              </Modal>
            </Menus.Item>
            <Menus.Item>
              <Modal>
                <Modal.OpenModalButton windowName="cabin">
                  <Button $primary $small onClick={() => setShowForm(true)}>
                    <HiPencil /> Edit
                  </Button>
                </Modal.OpenModalButton>
                <Modal.Window name="cabin">
                  <CabinFormComponent data={cabin} type="Edit" />
                </Modal.Window>
              </Modal>
            </Menus.Item>
            <Menus.Item>
              <Button
                disabled={isDuplicating}
                $primary
                $small
                onClick={() => {
                  duplicate({
                    ...cabin,
                    name: `copy of ${cabin.name}`,
                    type: 'Copy',
                  });
                }}>
                <HiSquare2Stack /> Duplicate
              </Button>
            </Menus.Item>
          </Menus.List>
        </Menus.Menu>
      </Field>
    </>
  );
}
