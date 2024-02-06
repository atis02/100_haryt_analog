import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const title = {
    fontSize: { lg: '18px', xs: '14px' },
    fontWeight: '800',
    height: { lg: '45px', xs: '35px' },
    color: '#010100',
  }
  const title2 = {
    fontSize: '14px',
    color: '#010101',
    textDecoration: 'none',
    fontWeight: '600',
    height: '34px',
  }
  return (
    <>
      <Box
        m={isMobile ? "30px 15px 10px 15px" : "20px 60px 10px 60px"}
        minHeight="265px"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',

        }}
      >
        <Stack direction='row' alignItems='start' mb='10px' justifyContent='space-between' flexWrap='wrap'>

          <Stack sx={{ display: { lg: 'inline', xs: 'none' } }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <img src="/images/logo.svg" alt="" />
              <Typography textAlign='center' color='#000'>Tiz Ýeňil Amatly</Typography>
            </NavLink>
          </Stack>

          <Stack direction='column' alignItems='start'  >
            <Typography sx={title}>{t('aboutUs')}</Typography>
            <NavLink to='/about' style={title2}>{t('aboutUs')}</NavLink>
            <NavLink to='/payment' style={title2}>{t('payment')}</NavLink>
            <NavLink to='/order' style={title2}>{t('order')}</NavLink>
            <NavLink to='/faq' style={title2}>{t('faq')}</NavLink>
          </Stack>

          <Stack direction='column' alignItems='start' width="142px">
            <Typography sx={title}>{t('cooparation')}</Typography>
            <NavLink to='/cooparation' style={title2}>{t('cooparation')}</NavLink>
            <NavLink to='/brands' style={title2}>{t('brands')}</NavLink>
          </Stack>
          <Stack direction='column' alignItems='start'>
            <Typography sx={title} width={{ lg: '100%', xs: '152px' }} mb={{ lg: '0', xs: '10px' }} >{t('privacy_and_rules')}</Typography>
            <NavLink to='/terms' style={title2}>{t('termsOfUse')}</NavLink>
            <NavLink to='/privacyPolicy' style={title2}>{t('privacyPolicy')}</NavLink>
          </Stack>
          <Stack direction='column' alignItems='start' width='142px'>
            <Typography sx={title}>{t('help')}</Typography>
            <Typography sx={{
              fontSize: '14px',
              color: '#010101',
              textDecoration: 'none',
              height: '34px',
            }}
            >{t('support')}</Typography>
            <Typography sx={{
              fontSize: '14px',
              color: '#010101',
              textDecoration: 'none',
              height: '34px',
            }}>{t('e_mail')}</Typography>
            <NavLink to='/privacyPolicy' style={title2}>{t('contacts')}</NavLink>
          </Stack>

          <Stack>
            <Typography color='#00B252' fontSize='18px' fontWeight='800' height='42px'>{t('telephone')}</Typography>
            <Stack direction='column' >
              <Stack direction='row' alignItems='center' height='34px'>

                <svg viewBox="64 64 896 896" focusable="false" data-icon="phone" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>
                <Link href='tel:+99365724311' style={{ textDecoration: 'none', color: '#000', fontWeight: '800', fontSize: '18px' }}>+993 65 72-43-11</Link>
              </Stack>
              <Typography sx={{
                fontSize: '14px',
                color: '#010101',
                textDecoration: 'none',
                fontWeight: '600',
                height: '34px',
              }}>{t('programs')}</Typography>
              <Stack direction='row' spacing={1}>
                <Link to='https://apps.apple.com/us/app/100haryt/id1563218520'>
                  <img src="https://100haryt.com.tm/static/media/ios.6991a102.svg" alt="ios" />
                </Link>
                <Link to='https://play.google.com/store/apps/details?id=com.yuzharyt&pli=1'>

                  <img src="https://100haryt.com.tm/static/media/android.ac2deca6.svg" alt="android" />
                </Link>
              </Stack>

            </Stack>
          </Stack>

        </Stack>
        <Divider />
        <Typography textAlign='center' fontWeight='700' color='silver'>Made with ♥ by 1OOharyt</Typography>


      </Box>
    </>
  );
}
