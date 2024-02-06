import { NavLink, useLocation } from "react-router-dom";
import { Box, Stack, MenuItem, Menu, Button, Typography, Divider, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useTranslation } from "react-i18next";

export default function SidebarNav() {
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);

      await axios.get('http://localhost:3001/api/categories')
        .then((res) => {
          setCategory(res.data)
          setFilter(res.data)
          console.log(res.data)
        })
      // await axios.get('http://localhost:3001/api/sub_categories')
      //   .then((res) => {
      //     setSubcategory(res.data)
      //     console.log(res.data)
      //   })
      setLoading(false);
    }
    getCategories();
  }, [])



  return (
    <>
      <Stack sx={{ display: { lg: 'block', md: 'block', xs: 'none' } }}>

        <Button sx={{ ml: '10px', '& .catIcon': { fill: '#F00A0A' }, fontWeight: '600', color: '#000', textTransform: 'capitalize', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '15px', ...open ? { '&:hover': { backgroundColor: '#000' }, backgroundColor: 'black', '& .catIcon': { fill: '#fff' }, color: 'white' } : '' }} onClick={() => setOpen(!open)} onClose={() => setOpen(false)}>

          <svg width="26" height="20" className='catIcon' viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="1.5" />
            <rect y="5" width="18" height="1.5" />
            <rect y="10" width="18" height="1.5" />
          </svg>
          {t('categories')}
        </Button>
      </Stack >
      <Box
        zIndex='500'
        m="390px 60px 0 0px"
        height="300px"
        borderRadius='12px'
        position='absolute'
        alignItems='center'
        justifyContent='flex-start'
        spacing={2}
        backgroundColor='#fff'
        // minWidth='100%'
        boxShadow='0 17px 20px #ededed'
        sx={{ display: { lg: 'flex', md: 'block', xs: 'none' }, flexWrap: 'wrap' }}
      >

        {

          open ?
            (category.map((elem) => {
              return (
                <>
                  <Stack width='180px' direction='column' alignItems='start' pr='15px' position='relative' key={elem.k_id} className='test'>
                    <NavLink to={elem.k_name_en} onClick={() => {
                      localStorage.setItem('storedItem', JSON.stringify(elem))
                      setOpen0(!open)
                    }} className='catalogs' style={{ textTransform: 'capitalize', display: 'flex', alignItems: 'center', textDecoration: 'none' }} >

                      <img src={elem.k_icon} style={{ pl: '10px', width: '24px', height: '24px' }} alt="" />

                      <Typography height='40px' width='190px' color='#000' fontSize='16px' pl='10px' sx={{ display: 'flex', alignItems: 'center' }} fontWeight='600'>{
                        i18n.language === 'tm' ? elem.k_name_tm :
                          i18n.language === 'en' ? elem.k_name_en :
                            elem.k_name_ru

                      }</Typography>
                    </NavLink >

                    <Stack width='180px' direction='column' alignItems='start' justifyContent='flex-start' className='test2' >

                      {
                        elem.sub_categories.map((item) => (
                          <NavLink to={`${elem.k_name_en}/${item.sc_name_en}`} onClick={() => setOpen(!open)} style={{ display: 'flex', boxShadow: 'none', alignItems: 'start', textDecoration: 'none', textTransform: 'capitalize' }} key={item.sc_id} >
                            <Typography textAlign='start' className='sub-catalogs'>
                              {
                                i18n.language === 'tm' ? item.sc_name_tm :
                                  i18n.language === 'en' ? item.sc_name_en :
                                    item.sc_name_ru
                              }
                            </Typography>
                          </NavLink>
                        ))
                      }
                    </Stack>
                  </Stack>
                </>

              )
            }))
            : ''
        }

      </Box >
    </>
  );
}
