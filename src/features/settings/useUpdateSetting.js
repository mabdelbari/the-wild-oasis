import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      queryClient.invalidateQueries("settings");
      toast.success("Setting has been successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
