import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../config/react-query/queryClient';
import { updateSetting } from '../services/apiSettings';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../utils/unknownError';
export function useEditSettings() {
  const { isLoading, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => queryClient.invalidateQueries(['settings']),
    onError: (err) => toast.error(getErrorMessage(err)),
  });
  return { isLoading, mutate };
}
