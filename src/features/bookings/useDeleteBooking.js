import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteBooking as deteleBookingAPI } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (id) => deteleBookingAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("Booking has been successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeletingBooking };
}
