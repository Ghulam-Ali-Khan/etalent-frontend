import { Container, Stack } from '@mui/material'
import Logo from '@/assets/imgs/logo.png';
import StyledButton from '@/components/common/StyledButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container maxWidth={'xl'}>
      <Stack direction={'row'} className='flex justify-between items-center py-[20px]' >
        <img src={Logo} />

        <Stack direction={'row'} spacing={2}>
          <Link to={'auth/login'}>
          <StyledButton variant='outlined' text='Login' />
          </Link>
          <Link to={'auth/register'}>
          <StyledButton variant='contained' text='Register' />
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Header
