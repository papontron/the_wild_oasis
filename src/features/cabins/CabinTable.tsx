import Spinner from '../../ui/Spinner';
import { useCabins } from '../../hooks/useCabins';
import Table from '../../ui/Table';
import CabinRow from './CabinRow';
import { CabinForm } from './types';
import Menus from '../../ui/Menus';

export default function CabinTable() {
  const { cabins, isLoading } = useCabins();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Menus>
      <Table columns={6}>
        <Table.Header>
          <div></div>
          <div>Capacity</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Rows>
          {cabins?.map((cabin) => (
            <CabinRow cabin={cabin as CabinForm} key={cabin.id} />
          ))}
        </Table.Rows>
      </Table>
    </Menus>
  );
}
