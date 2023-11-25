import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as DeleteCabinApi } from "../../services/apiCabins";

export function useDeleCabin() {
  const queryClient = useQueryClient();

  //to delete cabin
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: DeleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      //reload after delete
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
