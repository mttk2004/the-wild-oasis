import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", status: filterValue };

  // SORT
  const sortValue = searchParams.get("sort") || "startDate-desc";
  const [field, order] = sortValue.split("-");
  const sort = { field, order };

  const { data, error, isLoading } = useQuery({
    queryKey: ["bookings", filter, sort],
    queryFn: () => getBookings(filter, sort),
  });

  const bookings = data?.data || [];
  const count = data?.count || 0;

  return { bookings, count, error, isLoading };
}
