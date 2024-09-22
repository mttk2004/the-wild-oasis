import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

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

  // PAGINATION
  const page = +searchParams.get("page") || 1;

  // QUERY
  const { data, error, isLoading } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings(filter, sort, page),
  });

  const bookings = data?.data || [];
  const count = data?.count || 0;

  // PREFETCHING
  const numPages = Math.ceil(count / PAGE_SIZE);

  if (page < numPages) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getBookings(filter, sort, page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getBookings(filter, sort, page - 1),
    });
  }

  return { bookings, count, error, isLoading };
}
