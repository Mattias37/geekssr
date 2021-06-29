//Imports
import React, { useCallback, useState, useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import * as Ai from 'react-icons/ai';
import * as Io from 'react-icons/io';
import {
  MenuStyled,
  AppBarLeftContainer,
  MenuImageStyledAppBar,
  AppBarSubContainer,
  AppBarContainer,
  AppBarContainerTop,
  HomeImageLogo,
  BotonDer,
  MenuInnerBar,
  MenuInnerBar2
} from './styles';
import { ModalRapper } from '../../molecules/modal-rapper';
import { LoginScreen } from '../../organisms/loginScreen';
import { RegisterScreen } from '../../organisms/registerScreen';
//Api
import useMediaQuery from '../../../hooks/useMediaQuery';
import { changeDrawerSidebar } from '../../../redux/layout/action';
import { getDrawerSidebar } from '../../../redux/layout/selector';
import { drawerConfig, drawerConfig2 } from '../side-bar/drawer-config';
import { getProfile, getAuth } from '../../../redux/user/selectors';
import { logOutUser } from '../../../redux/user/action';

export const AppBar2 = () => {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleOpen = () => {
    TagManager.dataLayer({
      dataLayer:{
        event: 'login',
        path: `/login`
      }
    })
    setShow(true)
  };
  const handleClose = () => setShow(false);
  const handleOpenRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const drawerState = useSelector(getDrawerSidebar);
  const user = useSelector(getProfile);

  useEffect(() => {
    if (user?.username) {
      setTimeout(() => {
        handleClose();
        handleCloseRegister();
      }, 1000);

    }
  }, [user])



  const handleClickHome = () => {
     router.push('/');
  };
  const handleClicKProfile = async () => {
    TagManager.dataLayer({
      dataLayer:{
        event: 'event',
        eventProps: {
            category: 'Botones ver perfil',
            action: 'Clic',
            label: `click-view-profile`,
            value: `click-view-profile`
        }
      }
    })
    await router.push('/profile');
  };
  const handleSignOut = useCallback(() => {
    dispatch(logOutUser());
  }, [dispatch]);
  const handleChangeDrawer = () => {
    dispatch(changeDrawerSidebar(!drawerState));
  };
  const isSmall = useMediaQuery('(max-width: 1025px)');
  const isAuth = useSelector(getAuth);

  const handleItemClick = useCallback(
    (url, title) => {
      TagManager.dataLayer({
        dataLayer:{
          event: 'event',
          eventProps: {
              category: 'Botones menu printipal',
              action: 'Clic',
              label: `menu-${title}`,
              value: `click-menu-item-${title}`
          }
        }
      })
      router.push(url);
    },
    [dispatch],
  );

  return (
    <MenuStyled>
      <MenuInnerBar>
        <AppBarContainerTop>
          <h5>Únete ahora mismo y empieza tu carrera en el gaming competitivo</h5>
          <AppBarLeftContainer>
            <h5>@nacionesportscol</h5>
            <a href="https://www.facebook.com/NacionEsportscol" target="_blank" rel="noopener noreferrer">
              <Ai.AiOutlineFacebook />
            </a>
            <a href="https://instagram.com/nacionesportscol?igshid=g25bvl7urfm8" target="_blank" rel="noopener noreferrer">
              <Ai.AiOutlineInstagram />
            </a>
            {!isSmall && !isAuth && (
              <BotonDer onClick={handleOpen}> <Io.IoIosPerson /> LOGIN</BotonDer>
            )}
            {!isSmall && !isAuth && (
              <BotonDer onClick={handleOpenRegister}><Io.IoIosLock />REGISTRATE</BotonDer>
            )}
            {!isSmall && isAuth && (
              <BotonDer onClick={handleClicKProfile}> <Io.IoIosPerson /> {user?.username}</BotonDer>
            )}
            {!isSmall && isAuth && (
              <BotonDer onClick={handleSignOut}>SALIR <Io.IoIosLogOut /></BotonDer>
            )}
          </AppBarLeftContainer>
        </AppBarContainerTop>
      </MenuInnerBar>
      <MenuInnerBar2>
        <AppBarContainer>
          <AppBarSubContainer>
            {isSmall && <HomeImageLogo src='/images/01.png' onClick={handleClickHome} />}
            {!isSmall && (
              <Container>
                <Row style={{ justifyContent: 'space-around', height: '60px' }} className="flex-nowrap">
                  {process.env.NEXT_PUBLIC_API_STAGE !== 'PROD' ? drawerConfig.map((itemProps, index) => {
                    const { title, requireAuth, ...rest } = itemProps;
                    if (requireAuth && !isAuth) {
                      return null;
                    }
                    if (title === 'Logo') {
                      return <HomeImageLogo src='/images/01.png' onClick={handleClickHome} />
                    }
                    return (
                      <span
                        key={rest.id}
                        className=" d-flex justify-content-center align-self-center cursor-pointer span-appbar-custom"
                        onClick={() => handleItemClick(rest.url, title)}
                        style={{
                          borderBottom: router.pathname.includes(
                            itemProps.url as string,
                          )
                            ? '4px solid rgb(245, 0, 80)'
                            : 'unset',
                          color: router.pathname.includes(
                            itemProps.url as string,
                          )
                            ? '#F50050'
                            : '#fff',
                          fontWeight: 'bolder',
                          fontFamily: 'Open Sans',
                          fontSize: '19px',
                          fontVariantCaps: 'all-petite-caps',
                          letterSpacing: '1px'
                        }}>
                        <b>{title}</b>
                      </span>
                    );
                  })
                :
                drawerConfig2.map((itemProps, index) => {
                  const { title, requireAuth, ...rest } = itemProps;
                  if (requireAuth && !isAuth) {
                    return null;
                  }
                  if (title === 'Logo') {
                    return <HomeImageLogo src='/images/01.png' onClick={handleClickHome} />
                  }
                  return (
                    <span
                      key={rest.id}
                      className=" d-flex justify-content-center align-self-center cursor-pointer span-appbar-custom"
                      onClick={() => handleItemClick(rest.url, title)}
                      style={{
                        borderBottom: router.pathname.includes(
                          itemProps.url as string,
                        )
                          ? '4px solid rgb(245, 0, 80)'
                          : 'unset',
                        color: router.pathname.includes(
                          itemProps.url as string,
                        )
                          ? '#F50050'
                          : '#fff',
                        fontWeight: 'bolder',
                        fontFamily: 'Open Sans',
                        fontSize: '19px',
                        fontVariantCaps: 'all-petite-caps',
                        letterSpacing: '1px'
                      }}>
                      <b>{title}</b>
                    </span>
                  );
                })
                }
                </Row>
              </Container>
            )}
            {isSmall && (
              <MenuImageStyledAppBar
                onClick={handleChangeDrawer}
              >
                <Io.IoIosMenu />
              </MenuImageStyledAppBar>
            )}
          </AppBarSubContainer>
        </AppBarContainer>
      </MenuInnerBar2>
      <ModalRapper
        show={show}
        onHide={handleClose}>
        <LoginScreen />
      </ModalRapper>
      <ModalRapper
        show={showRegister}
        onHide={handleCloseRegister}>
        <RegisterScreen />
      </ModalRapper>
    </MenuStyled>
  );
};
