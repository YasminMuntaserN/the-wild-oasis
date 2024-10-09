import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // Destructure the mutation object returned by useMutation.
  // isLoading is renamed to isDeleting to indicate that a delete operation is in progress
  // mutate is the function used to trigger the mutation (delete operation)
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn is the function responsible for performing the mutation (in this case, deleting a cabin)
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteCabin };
}
