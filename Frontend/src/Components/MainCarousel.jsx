import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
export default function MainCarousel() {

  const [banner, setBanner] = useState([]);
  const { i18n } = useTranslation()
  useEffect(() => {
    const getBanner = async () => {
      // setLoading(true);
      await axios.get('https://api.100haryt.com.tm/api/banner_list')
        .then((res) => {
          setBanner(res.data)
          console.log(res.data)
        })
      // setLoading(false);

    };

    getBanner()
  }, [])

  const d = 'https://api.100haryt.com.tm/img/banners/'
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', pt: '20px' }}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ borderRadius: '15px' }}
        >

          {banner.map((elem) => (
            <SwiperSlide key={elem.b_id}>

              <img src={i18n.language === 'ru' ? d + elem.b_img_ru : d + elem.b_img_tm} style={{ width: '100%' }} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack sx={{ display: { lg: 'block', md: 'block', xs: 'none' } }}>

          <NavLink to='https://100haryt.com.tm/links' target='_blank'>
            <img src="https://api.100haryt.com.tm/img/banners/734750.ysw.webp" style={{ height: '331px', borderRadius: '10px' }} alt="" />
          </NavLink>
        </ Stack>
      </Box>
    </>
  )
}
