import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import MainCarousel from '../Components/mainCarousel'
import { useTranslation } from 'react-i18next'
import NewProducts from './NewProducts';

export default function Home() {

    const { t } = useTranslation();
    return (
        <Box sx={{ p: { lg: '0 60px 0 60px', xs: '0 10px' }, backgroundColor: '#f2f5f7', minHeight: '100vh' }}>
            <MainCarousel />
            <NewProducts />
        </Box>
    )
}
