import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Name: A-Z" },
          { value: "name-desc", label: "Name: Z-A" },
          { value: "price-asc", label: "Price: Low to High" },
          { value: "price-desc", label: "Price: High to Low" },
          { value: "maxCapacity-asc", label: "Capacity: Low to High" },
          { value: "maxCapacity-desc", label: "Capacity: High to Low" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
