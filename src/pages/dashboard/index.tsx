import Header from '@/components/layout/Header'
import { Typography } from '@mui/material'
import React from 'react'

const DashboardPage = () => {
  return (
    <>
      <Header/>

      <Typography variant='h4' mt={6}>
        Welcome to dashboard
      </Typography>
    </>
  )
}

export default DashboardPage
