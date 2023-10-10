import { Heading } from '../components/Heading';
import { Row } from '../components/Row';
import CabinTable from '../features/cabins/CabinTable';
import { Button } from '../components/Button';
import { useState } from 'react';
import CabinFormComponent from '../features/cabins/CabinFormComponent';
import Modal from '../ui/Modal';

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div id="cabinpage">
      <Row $type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row $type="vertical">
        <CabinTable />
        <Modal>
          <Modal.OpenModalButton windowName="CabinForm">
            <Button $small onClick={() => setShowForm(!showForm)}>
              {' '}
              Add new cabin
            </Button>
          </Modal.OpenModalButton>
          <Modal.Window name="CabinForm">
            <CabinFormComponent
              type="Insert"
              onCloseModal={() => setShowForm(false)}
            />
          </Modal.Window>
        </Modal>
      </Row>
    </div>
  );
}

export default Cabins;
