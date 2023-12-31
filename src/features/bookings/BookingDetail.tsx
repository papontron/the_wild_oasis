import styled from 'styled-components';

// import BookingDataBox from './BookingDataBox';
import { Row } from '../../components/Row';
import { Heading } from '../../components/Heading';
import { Tag } from '../../components/Tag';
import ButtonGroup from '../../components/ButtonGroup';
import { Button } from '../../components/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  // const booking = {};
  const status = 'checked-in';

  const moveBack = useMoveBack();

  // const statusToTagName = {
  //   unconfirmed: 'indigo',
  //   'checked-in': 'green',
  //   'checked-out': 'silver',
  // };
  enum StatusToTagName {
    unconfirmed = 'indigo',
    'checked-in' = 'green',
    'checked-out' = 'silver',
  }
  return (
    <>
      <Row $type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #X</Heading>
          <Tag $type={StatusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {/* <BookingDataBox booking={booking} /> */}

      <ButtonGroup>
        <Button $secondary onClick={moveBack} $small>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
