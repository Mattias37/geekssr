import React from 'react'

export const DrawerSidebar = () =>  {
  return (
    <div>
      Testeo
    </div>
  )
}


/* import { useCallback } from 'react';
import { Offcanvas }from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useLocation } from 'react-router';
import { SidebarStyled, StyledMenu } from './styles';
import { drawerConfig, drawerConfig2 } from './drawer-config';
import { getAuth } from '../../../redux/user/selectors';
import { getDrawerSidebar } from '../../../redux/layout/selector';
import { changeDrawerSidebar } from '../../../redux/layout/action';
import { MenuFooter } from '../../molecules/menu-footer';

export const DrawerSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const visible = useSelector(getDrawerSidebar);
  const isAuth = useSelector(getAuth);
  const location = useLocation();
  const memoizedCallback = useCallback(() => {
    dispatch(changeDrawerSidebar(false));
  }, [dispatch]);
  const handleItemClick = useCallback(
    (e, data) => {
      if (!data.render) {
        dispatch(changeDrawerSidebar(false));
        dispatch(routerpush(data.url));
      }
    },
    [dispatch],
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  ); */
  /* return (
    <Sidebar
      as={SidebarStyled}
      animation="overlay"
      direction="right"
      icon="labeled"
      visible={!!visible}
      onHide={memoizedCallback}
      width="wide"
      vertical>
      <StyledMenu vertical secondary>
        {process.env.REACT_APP_STAGE !== 'PROD' ? 
        drawerConfig.map((itemProps, index) => {
          const { title, requireAuth, ...rest } = itemProps;
          if (requireAuth && !isAuth) {
            return null; 
          }
           else if (title === 'Logo') {
            return  null;
          } 
          let ResultComponent = (
            <Menu.Item
              key={`${title}-${index}`}
              onClick={handleItemClick}
              {...rest}
              active={location.pathname.includes(itemProps.url as string)}>
              {/* {Icon && <Icon />} }
              {title}
            </Menu.Item>
          );
          return ResultComponent;
        })
      :
      drawerConfig2.map((itemProps, index) => {
        const { title, requireAuth, ...rest } = itemProps;
        if (requireAuth && !isAuth) {
          return null; 
        }
         else if (title === 'Logo') {
          return  null;
        } 
        let ResultComponent = (
          <Menu.Item
            key={`${title}-${index}`}
            onClick={handleItemClick}
            {...rest}
            active={location.pathname.includes(itemProps.url as string)}>
            {/* {Icon && <Icon />} }
            {title}
          </Menu.Item>
        );
        return ResultComponent;
      })}
      </StyledMenu>
      <MenuFooter />
    </Sidebar>
  ); */
// };
