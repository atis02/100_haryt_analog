import { Box, Button, CardContent, CardMedia, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addProduct, decreaseProduct } from '../Redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function CategoryProducts() {
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem("storedItem") || "[]"))
    const [filter, setFilter] = useState(data.products);
    const [active, setActive] = useState('1');

    const state1 = useSelector((state) => state.handleCart);

    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(addProduct(product));
    }
    const handleDec = (item) => {
        dispatch(decreaseProduct(item));
    }
    // const localItem = JSON.parse(localStorage.getItem('storedItem'))
    // console.log(localItem.map((item => item.products.map((item2 => item2)))));
    console.log(data);
    const filterProducts = (sc_id) => {
        const updatedList = data.products.filter((x) => x.subCategoryScId === sc_id);
        setFilter(updatedList);
        console.log(filter)
        setActive(sc_id)
    }
    const handleFilter = () => {
        setFilter(data.products)
        setActive('1')
    }
    return (
        < Box
            p={isMobile ? "0 15px" : "0 60px"}
            backgroundColor='#f2f5f7'
            pb='50px'
        >
            <Typography color='#000' fontSize="24px" p='25px 0 20px 0' fontWeight='600' sx={{ display: 'flex', alignItems: 'center' }} >{
                i18n.language === 'tm' ? data.k_name_tm :
                    i18n.language === 'en' ? data.k_name_en :
                        data.k_name_ru

            }</Typography>
            <Stack direction='row' gap='14px' mb='20px' alignItems='center' justifyContent='flex-start' flexWrap='wrap' minHeight='150px' >
                <Button onClick={handleFilter} sx={{ ...active === '1' ? { backgroundColor: 'red', color: '#fff' } : { backgroundColor: '#fff', color: '#000' }, textTransform: 'capitalize', fontWeight: '600', borderRadius: '100px', border: '1px solid gray' }}>
                    All
                </Button>
                {data.sub_categories.map((item) => (
                    <Button key={item.sc_id} id={item.sc_id} onClick={() => filterProducts(item.sc_id)} sx={{ ...active === item.sc_id ? { backgroundColor: 'red', color: '#fff' } : { backgroundColor: '#fff', color: '#000' }, textTransform: 'capitalize', fontWeight: '600', borderRadius: '100px', border: '1px solid gray' }}>

                        {
                            i18n.language === 'tm' ? item.sc_name_tm :
                                i18n.language === 'en' ? item.sc_name_en :
                                    item.sc_name_ru
                        }
                    </Button>
                ))}
            </Stack>
            <Stack direction='row' flexWrap='wrap' alignItems='center' borderRadius='10px' sx={{ gap: { lg: '15px', xs: '0' } }}>
                {filter.length === 0 ? (<Typography textAlign='center' pt='80px' fontWeight='600' width='100%' height='200px' fontSize={20}>Product not found with this category</Typography>) :
                    filter.map((elem) => (

                        < Box sx={{ width: { lg: '230px', xs: '145px' }, m: { xs: '0 0 3px 3px' }, backgroundColor: '#fff', height: { lg: '350px', xs: '310px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }} key={elem.p_id}>
                            <Stack direction='row' pt='10px' position='absolute' alignItems='start'>
                                <Stack pr={{ ...i18n.language === 'ru' ? { lg: '100px', xs: '20px' } : { lg: '130px', xs: '40px' } }}>
                                    <Typography backgroundColor='#00b252' mb='5px' p='0 4px' color='#fff' borderRadius='8px'>{elem.new === '1' ? i18n.language === 'en' ? 'New' : i18n.language === 'tm' ? 'Täze' : 'Новинки' : ''}</Typography>
                                    <Typography backgroundColor='red' fontSize={{ lg: '24px', xs: '14px' }} p='0 4px' color='#fff' borderRadius='8px'>{elem.sale === '1' ? `${Math.floor(100 - ((elem.p_price_3 * 100) / elem.p_price_1))}%` : ''}</Typography>
                                </Stack>
                                <IconButton sx={{ minWidth: '0', p: '0' }}
                                >
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="heart" width="32px" height="32px" fill="#f0f0f0" aria-hidden="true"><path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
                                </IconButton>
                            </Stack>
                            <Stack pt='25px'>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`https://api.100haryt.com.tm/img/products/${elem.p_img}`}
                                    alt="green iguana"
                                    style={{ lg: { width: '180px', height: '180px' }, xs: { width: '150px', height: '150px' } }}
                                />
                            </Stack>
                            <Stack >
                                <Stack backgroundColor='#00b252' minWidth='40px' direction='row' alignItems='center' zIndex='3' m={{ lg: '5px 0 0 150px', xs: '-25px 0 0 80px' }} borderRadius='100%' justifyContent='center' minHeight='40px' sx={{ ...state1.find((x) => x.p_id === elem.p_id) ? { display: 'none' } : '', '&:hover': { borderRadius: '14px', minHeight: '27px', m: { lg: '13px 0 5px 80px', xs: '0' } }, '&:hover .AddCartBtn': { display: { lg: 'block', xs: 'none' } }, '&:hover .shopIcon': { display: { lg: 'none', xs: 'block' } } }}>

                                    <img style={{ width: '22px', height: '22px' }} className='shopIcon' src="https://100haryt.com.tm/static/media/cartwhite.e448e337.svg" alt="" />
                                    <Button onClick={() => handleAdd(elem)} className='AddCartBtn' sx={{ display: 'none', fontWeight: '600', width: '120px', height: '30px', color: '#fff', p: '3px' }}>{t('addToCart')}</Button>
                                </Stack>
                                {state1.find((x) => x.p_id === elem.p_id) ? (
                                    <Stack direction='row' width='85px' alignItems='center' backgroundColor='#00B252' borderRadius='15px' color='#fff'>
                                        <Button onClick={() => handleDec(elem)} sx={{ minWidth: '23px', height: '23px', color: '#fff' }}><img src='https://100haryt.com.tm/static/media/minus.f1b62512.svg' alt='' /></Button>
                                        {state1.map((product) => product.p_id === elem.p_id ? (
                                            <Typography key={elem.p_id} width='30px' textAlign='center'>
                                                {product.quantity}
                                            </Typography>
                                        ) : '')}
                                        <Button onClick={() => handleAdd(elem)} sx={{ minWidth: '23px', height: '23px', color: '#fff' }}><img src='https://100haryt.com.tm/static/media/plus.6c209c98.svg' alt='' /></Button>
                                    </Stack>
                                ) : ''}
                            </Stack>
                            <CardContent sx={{ p: '0 15px 0 15px ' }}>
                                <Typography gutterBottom fontSize='16px' width={{ lg: '200px', xs: '126px' }} component="div" minHeight={{ lg: '48px', xs: '26px' }} className='webkit'  >
                                    {i18n.language === 'tm' ? elem.p_name_tm :
                                        i18n.language === 'en' ? elem.p_name_en :
                                            elem.p_name_ru
                                    }
                                </Typography>
                                <Typography fontSize={{ lg: '24px', xs: '20px' }} width={{ lg: '173px', xs: '126px' }} height='26px' fontWeight='600' color="#000" sx={{ ...elem.sale === '0' ? { mb: "24px" } : '', height: '30px' }} >
                                    {elem.p_price_3 === null ? elem.p_price_1 : elem.p_price_3}{t(' manat')}
                                </Typography>
                                <Typography sx={{ textDecoration: 'line-through', color: 'red' }}>
                                    {elem.sale === '1' ? elem.p_price_1 + t(' manat') : ''}
                                </Typography>
                            </CardContent>
                        </Box>
                    ))
                }

            </Stack >
        </Box >
    )
}
