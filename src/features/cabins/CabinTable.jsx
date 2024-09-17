import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import useCabin from "./useCabin.js";
import Table from "../../ui/Table.jsx";
import Empty from "../../ui/Empty.jsx";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabins, isLoading } = useCabin();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="bookings" />;

  // FILTER
  const discount = searchParams.get("discount") || "all";
  let filteredCabins = cabins;

  if (discount === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }

  if (discount === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  // SORT
  const sort = searchParams.get("sort") || "name-asc";
  const [field, order] = sort.split("-");
  const modifier = order === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Table $columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <span></span>
        <span>Cabin</span>
        <span>Capacity</span>
        <span>Price</span>
        <span>Discount</span>
        <span></span>
      </Table.Header>

      <Table.Body
        data={sortedCabins}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
  );
}

export default CabinTable;
