import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CategorySidebar from './CategorySidebar'
import { addProduct, allDelete, decreaseProduct, delProduct } from "../Redux/action/action";
import axios from "axios";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuOpen2, setMobileMenuOpen2] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleMobileMenu2 = () => {
    setMobileMenuOpen2(!mobileMenuOpen2);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));




  //shopping-cart is started

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleDel = (item) => {
    dispatch(delProduct(item));
  }
  const handleAdd = (item) => {
    dispatch(addProduct(item));
  }
  const handleDec = (item) => {
    dispatch(decreaseProduct(item));
  }
  const handleAllDelete = () => {
    dispatch(allDelete())
  }
  const initialVal = 0;
  const totalPrice = state.reduce((accumulate, current) => accumulate + (current.sale === '1' ? current.p_price_3 : current.p_price_1) * current.quantity, initialVal);
  const cartProducts = (product) => {
    const checkSale = product.sale === '1' ? product.p_price_3 : product.p_price_1
    const PriceItem = checkSale * product.quantity;

    return (
      <>
        <Box m='15px' >
          <Stack key={product.p_id} direction='row' alignItems='center' justifyContent='space-between'>
            <img src={`https://api.100haryt.com.tm/img/products/${product.p_img}`} style={{ width: '75px', height: '75px' }} alt="" />
            <Stack direction='column' m='0'>

              <Typography gutterBottom fontSize='14px' component="div" width='85px'>
                {/* {i18n.language === 'tm' ? product.p_name_tm.substring(0, 15) + '...' :
                  i18n.language === 'en' ? product.p_name_en.substring(0, 15) + '...' : product.p_name_ru.substring(0, 15) + '...'
                } */}
                {i18n.language === 'tm' ? product.p_name_tm.substring(0, 20) + '...' :
                  i18n.language === 'en' ? product.p_name_en.substring(0, 20) + '...' : product.p_name_ru.substring(0, 20) + '...'
                }
              </Typography>
              <Typography fontWeight='600' fontSize='18px'>{PriceItem + t('manat')}</Typography>
            </Stack>
            <Stack direction='row' width='85px' alignItems='center' backgroundColor='#00B252' borderRadius='15px' color='#fff'>
              <Button onClick={() => handleDec(product)} sx={{ minWidth: '23px', height: '23px', color: '#fff' }}><img src='https://100haryt.com.tm/static/media/minus.f1b62512.svg' alt='' /></Button>
              <Typography width='30px' textAlign='center'>{product.quantity}</Typography>
              <Button onClick={() => handleAdd(product)} sx={{ minWidth: '23px', height: '23px', color: '#fff' }}><img src='https://100haryt.com.tm/static/media/plus.6c209c98.svg' alt='' /></Button>
            </Stack>
            <Stack backgroundColor='#f2f5f7' borderRadius='8px'>

              <IconButton onClick={() => handleDel(product)}   >
                <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width='23px' height='23px' fill="#000" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
              </IconButton>
            </Stack>
          </Stack>
          <Divider sx={{ mt: '10px' }} />
        </Box>
      </>
    )
  }
  //mobile navbar is started
  const MobileNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
      const getCategory = async () => {
        await axios.get('http://localhost:3001/api/categories')
          .then((res) => {
            setCategory(res.data)
          })
      }
      getCategory();
    }, [])
    return (
      <>
        <Box sx={{ display: { lg: 'none', xs: 'block' }, boxShadow: "0 -1px 2px #ededed", height: '35px', width: '95%', p: '6px 15px', backgroundColor: '#fff', position: 'fixed', bottom: '0', }}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <IconButton
              onClick={toggleMobileMenu2}
            >
              <svg viewBox="64 64 896 896" focusable="false" data-icon="unordered-list" width="1em" height="1em" fill="#000" aria-hidden="true"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg>
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileMenuOpen2}
              onClose={toggleMobileMenu2}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100%",
                },
              }}
            >
              <Box
                className="mobile-menu2"
                sx={{
                  bg: "#fff",
                  height: "100%",
                  padding: "16px 0",
                }}
              >
                <Stack spacing={2} pt={1} ml='60px' direction='row' height='35px' justifyContent='space-between' alignItems="center" >
                  <Typography fontSize='18px' fontWeight='600'>{t('categories')}</Typography>
                  <Button sx={{ color: 'currentColor', pl: '30px' }} onClick={toggleMobileMenu2}>
                    <svg fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
                  </Button>
                </Stack>
                <Divider />
                <Stack height='40px' mt='15px' direction='column' alignItems="center" >

                  {category.map((item) => (
                    <NavLink to={item.k_name_en} style={{ m: '0', height: '40px', fontSize: '16px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                      <img src={item.k_icon} style={{ pl: '10px', width: '24px', height: '24px' }} alt="" />

                      <Typography height='40px' width='190px' color='#000' fontSize='16px' pl='10px' sx={{ display: 'flex', alignItems: 'center' }} fontWeight='600'>{
                        i18n.language === 'tm' ? item.k_name_tm :
                          i18n.language === 'en' ? item.k_name_en :
                            item.k_name_ru

                      }</Typography>
                    </NavLink>
                  ))}
                </Stack>
              </Box>
            </Drawer>

            <IconButton>
              <svg viewBox="64 64 896 896" focusable="false" data-icon="heart" width="1em" height="1em" fill="#000" aria-hidden="true"><path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg>
            </IconButton>
            <IconButton
              onClick={toggleMobileMenu}
            >
              {state.length > 0 ? (

                <Badge badgeContent={state.length} color="success">
                  <img
                    src="https://100haryt.com.tm/static/media/cart.4cd0a70d.svg"
                    alt="shopping-cart"
                  />
                </Badge>
              ) :
                (<img
                  src="https://100haryt.com.tm/static/media/cartm.d4ede8df.svg"
                  alt="shopping-cart"
                />)}
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={toggleMobileMenu}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100%",
                },
              }}
            >
              <Box
                className="mobile-menu"
                sx={{
                  bg: "#fff",
                  height: "100%",
                  padding: "16px 0",
                }}
              >
                <Stack spacing={2} pt={1} direction='row' height='35px' alignItems="center" p='0 0 10px 10px'>
                  <Button sx={{ color: 'currentColor' }} onClick={toggleMobileMenu}>
                    <svg fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
                  </Button>
                  <Typography fontSize='18px' fontWeight='600'>{t('cartItems')}</Typography>
                </Stack>
                <Divider />
                <Box >
                  {state.length === 0 ? <Typography textAlign='center' fontWeight='600' mt='30px'>{t('empty')}</Typography> : ''}
                  {state.length !== 0 && state.map(cartProducts)}
                </Box>
                {state.length !== 0 ? (

                  <Stack m='15px' direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography fontWeight='600'>
                      {t('total')}{state.length}
                    </Typography>
                    <Button onClick={handleAllDelete} sx={{ backgroundColor: '#f2f5f7', p: '4px 10px', color: '#101010', fontWeight: '600', width: '91px', height: '38px' }}>
                      {t('clear')}
                    </Button>
                  </Stack>
                ) : ''}

                <Stack p='10px 10px' backgroundColor='#fff' position='fixed' bottom='0' width='375px' >
                  <Divider sx={{ mb: '15px' }} />
                  <Button sx={{ color: 'white', textTransform: 'capitalize', gap: '10px', fontWeight: '600', backgroundColor: '#00B252', m: '0 0 10px', p: '6px' }}>
                    {t('order')}
                    ({Math.ceil(totalPrice) + t('manat')})
                  </Button>
                </Stack>
              </Box>
            </Drawer>
            <IconButton>
              <svg viewBox="64 64 896 896" focusable="false" data-icon="user" width="1em" height="1em" fill="#000" aria-hidden="true"><path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
            </IconButton>
          </Stack>
        </Box>
      </>
    )
  }
  //Navbar is started
  return (
    <Box
      sx={{
        boxShadow: "0 1px 2px rgba(0,0,0,.05)", position: "sticky",
        top: "0",
        backgroundColor: '#fff',
        zIndex: '1000',
      }}
    >
      <Box
        m={isMobile ? "0 15px" : "0 60px"}
        height={{ lg: "80px", xs: "60px" }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack >
          <NavLink to="/">
            <img src={isMobile ? 'https://100haryt.com.tm/static/media/logo.1fc0a12a.svg' : "/images/logo.svg"} style={{ ...isMobile ? { width: '50px', height: '50px' } : { width: '235px' } }} alt="" />
          </NavLink>
        </Stack>
        <TextField
          id="input-with-icon-textfield"
          placeholder={t("search")}
          fullWidth
          sx={{
            width: { lg: "280px", md: "100%", sm: "100%", xs: "100%" },
            p: { lg: '0 0 0 10px', xs: '0 5px 0 5px' }

          }}

          InputProps={{
            endAdornment: (
              <Button sx={{ minWidth: '18px', minHeight: '18px', '&:hover': { backgroundColor: '#EFEFEF' }, color: 'gray', p: '0' }}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="25px" height="25px" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>

              </Button>
            ),
            sx: {
              borderRadius: "35px",
              backgroundColor: "#EFEFEF",
              height: "35px",
              fontWeight: "600",
            },
          }}
          variant="outlined"
        />
        <CategorySidebar />
        <Language />
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          borderLeft="1px solid rgba(212,199,199,.747)"
          p={{ lg: '0 10px  ', xs: '0' }}
          minHeight="32px"
          sx={{ display: { lg: 'flex', xs: 'none' } }}
        >
          <NavLink
            to="/contacts"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="customer-service"
              width="24px"
              height="24px"
              fill="#F00A0A"
              aria-hidden="true"
            >
              <path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"></path>
            </svg>
            <Typography fontWeight="600" fontSize="14px">
              {t("contacts")}
            </Typography>
          </NavLink>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          borderLeft="1px solid rgba(212,199,199,.747)"
          p={{ lg: '0 10px ', xs: '0' }}
          minHeight="32px"
          sx={{ display: { lg: 'flex', xs: 'none' } }}
        >
          <NavLink
            to="/saved"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="heart"
              width="24px"
              height="24px"
              fill="#F00A0A"
              aria-hidden="true"
            >
              <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
            </svg>
            <Typography fontWeight="600" fontSize="14px">
              {t("saved")}
            </Typography>
          </NavLink>
        </Stack>
        <Stack
          sx={{ display: { lg: 'flex', xs: 'none' } }}
          direction="row"
          alignItems="center"
          borderLeft="1px solid rgba(212,199,199,.747)"
          p={{ lg: '0 30px 0 10px ', xs: '0' }}
          minHeight="32px"
        >
          <NavLink
            to="/profile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="user"
              width="24px"
              height="24px"
              fill="#F00A0A"
              aria-hidden="true"
            >
              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
            <Typography fontWeight="600" fontSize="14px">
              {t("profile")}
            </Typography>
          </NavLink>
        </Stack>

        <Stack
          sx={{ display: { lg: 'inline', xs: 'none' }, alignItems: 'center' }}
        >

          <Button
            onClick={toggleMobileMenu}
            to="shopping-cart"
            style={{
              cursor: "pointer",
              minWidth: "120px",
              height: "36px",
              borderRadius: "20px",
              alignItems: "center",
              textDecoration: "none",
              border: "1px solid #f0f0f0",
              justifyContent: "center",
              color: "#000",
              fontWeight: "600",
              textTransform: "lowercase",
              gap: "10px",
              display: "flex",
            }}
          >
            {state.length > 0 ? (

              <Badge badgeContent={state.length} color="success">
                <img
                  src="https://100haryt.com.tm/static/media/cart.4cd0a70d.svg"
                  alt="shopping-cart"
                />
              </Badge>
            ) :
              (<img
                src="https://100haryt.com.tm/static/media/cart.4cd0a70d.svg"
                alt="shopping-cart"
              />)}
            {Math.floor(totalPrice)} {t('manat')}
          </Button>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            sx={{
              "& .MuiDrawer-paper": {
                width: "400px",
              },
            }}
          >
            <Box
              className="mobile-menu2"
              sx={{
                bg: "#fff",
                height: "100%",
                padding: "16px 0",
              }}
            >
              <Stack spacing={2} pt={1} direction='row' height='35px' alignItems="center" p='0 0 10px 10px'>
                <Button sx={{ color: 'currentColor' }} onClick={toggleMobileMenu}>
                  <svg fillRule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
                </Button>
                <Typography fontSize='18px' fontWeight='600'>{t('cartItems')}</Typography>
              </Stack>
              <Divider />
              <Box >
                {state.length === 0 ? <Typography textAlign='center' fontWeight='600' mt='30px'>{t('empty')}</Typography> : ''}
                {state.length !== 0 && state.map(cartProducts)}
              </Box>
              {state.length !== 0 ? (

                <Stack m='15px' direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography fontWeight='600'>
                    {t('total')}{state.length}
                  </Typography>
                  <Button onClick={handleAllDelete} sx={{ backgroundColor: '#f2f5f7', p: '4px 10px', color: '#101010', fontWeight: '600', width: '91px', height: '38px' }}>
                    {t('clear')}
                  </Button>
                </Stack>
              ) : ''}

              <Stack p='10px 10px' backgroundColor='#fff' position='fixed' bottom='0' width='375px' >
                <Divider sx={{ mb: '15px' }} />
                <Button sx={{ color: 'white', textTransform: 'capitalize', gap: '10px', fontWeight: '600', backgroundColor: '#00B252', m: '0 0 10px', p: '6px' }}>
                  {t('order')}
                  ({Math.ceil(totalPrice) + t('manat')})
                </Button>
              </Stack>
            </Box>
          </Drawer>
        </Stack>
      </Box>
      {isMobile ? < MobileNav /> : ''}
    </Box>
  );
}
