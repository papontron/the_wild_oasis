import { useMutation } from '@tanstack/react-query';
import { insertOrEditCabin } from '../services/apiCabins';
import { CabinForm } from '../features/cabins/types';
import toast from 'react-hot-toast';
import { queryClient } from '../config/react-query/queryClient';
import { getErrorMessage } from '../utils/unknownError';

export function useInsertOrEditCabin(
  type: 'Edit' | 'Insert' | 'Copy',
  onCloseModal?: () => void,
  reset?: () => void
) {
  const { isLoading, mutate } = useMutation({
    //eslint-disable-next-line
    mutationFn: (data: CabinForm) => insertOrEditCabin(data), // mutation fn only acepts one argument(could be an object)
    onSuccess: () => {
      toast.success(
        type === 'Edit'
          ? 'cabin updated'
          : type === 'Insert'
          ? 'cabin inserted successfuly'
          : 'cabin duplicated'
      );
      //invalidamos "cabins" para q react-query haga el refetch
      queryClient.invalidateQueries(['cabins']);
      onCloseModal?.();
      reset && reset();
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
  return { isLoading, mutate };
}
