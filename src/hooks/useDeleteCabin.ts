import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { queryClient } from '../config/react-query/queryClient';
import { getErrorMessage } from '../utils/unknownError';
import { deleteCabin } from '../services/apiCabins';

export function useDeleteCabin() {
  const { isLoading, mutate } = useMutation({
    mutationFn: (id: number) => deleteCabin(id),
    onSuccess: () => {
      toast.success('cabin deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      // alertError({ message: getErrorMessage(error) });
      toast.error(getErrorMessage(error));
    },
  });
  return { isLoading, mutate };
}
