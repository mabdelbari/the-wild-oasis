import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ password, fullName, avatar }) =>
      updateCurrentUser({ password, fullName, avatar }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      toast.success("User has been successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}