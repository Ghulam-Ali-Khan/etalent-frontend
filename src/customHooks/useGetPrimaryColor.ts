import { useTheme } from '@mui/material'

const useGetPrimaryColor = () => {
    const {palette:{primary:{main}}} = useTheme();

  return main;
}

export default useGetPrimaryColor
