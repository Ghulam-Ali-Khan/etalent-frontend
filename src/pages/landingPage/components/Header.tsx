import React from 'react';
import { Button, Container, Stack, Toolbar } from '@mui/material'
import Logo from '@/assets/imgs/logo.png';
import StyledButton from '@/components/common/StyledButton';

const Header = () => {
  return (
    <Container>
      <Stack direction={'row'} className='flex justify-between items-center py-[20px]' >
        <img src={Logo} />

        <Stack direction={'row'} spacing={2}>
          <StyledButton variant='outlined' text='Login' />
          <StyledButton variant='contained' text='Register' />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Header
