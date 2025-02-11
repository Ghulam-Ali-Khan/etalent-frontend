import { useSnackbar } from 'notistack';
import { ApiResponseTypes } from './types/hooks';

const useShowResponse = () => {
    const { enqueueSnackbar } = useSnackbar();

    // Function to show snackbar messages
    const showResponse = (response: ApiResponseTypes, successMessage: string, errorMessage?: string) => {
        if (response?.success) {
            enqueueSnackbar(successMessage, { variant: 'success' });
        } else {
            enqueueSnackbar(response?.message || errorMessage  , { variant: 'error' });
        }
    };

    return { showResponse };
};

export default useShowResponse;
