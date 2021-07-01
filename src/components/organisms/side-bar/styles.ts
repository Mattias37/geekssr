import styled from 'styled-components';

export const SidebarStyled = styled.div`
  background: white;
  width: 20vw !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  @media (max-width: 769px) {
    width: 60vw !important;
  }
`;
/* import styled from 'styled-components';
import { Menu, Divider } from 'semantic-ui-react';
import { Image } from 'react-bootstrap';
import Fondo from '../../../assets/images/fondo.png';

const NAV_BAR_HEIGHT = 57;
export const SidebarStyled = styled.div`
  background: white;
  width: 20vw !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  @media (max-width: 769px) {
    width: 60vw !important;
  }
`;
export const HomeImageLogo = styled(Image)`
  display: flex;
  min-height: calc(80vh - ${NAV_BAR_HEIGHT}px);
  height: 107px;
  cursor: pointer;
  /* margin-left: 50px; 
  margin-top: -30px;
  z-index: 1000000000;
  @media (max-width: 768px) {
    margin-left: 0px;
    height: 8vh;
  }
`;

export const StyledMenu = styled(Menu)`
  &.ui.menu {
    min-height: calc(80vh - ${NAV_BAR_HEIGHT}px);
    background-size: cover;
    background-image: url(${Fondo});
    background-attachment: fixed;
    &.secondary {
      &.vertical {
        width: 100%;
        margin: 0;
        .dropdown-list {
          .item {
            &:hover {
              background: #ff0055;
              color: #fff;
            }
            &.active {
              background: #ff0055;
              color: #fff;
            }
          }
        }
        > .item {
          display: flex;
          align-items: center;
          border-radius: 0 !important;
          min-height: ${NAV_BAR_HEIGHT}px;
          margin-bottom: 0;
          height: 57px;
          color: #fff;
          font-weight: bold;
          > svg {
            width: 25px;
            margin-right: 10px;
            path {
              fill: black;
              stroke: black;
            }
          }
          > i.icon {
            float: left;
            margin: 0 0.5em 0;
          }
          &:hover {
            background: #ff0055;
            color: #fff;
            height: 57px;
            > svg {
              path {
                fill: white;
                stroke: white;
              }
            }
          }
          &.active {
            color: #fff;
            background: #ff0055;
            height: 57px;
            > svg {
              path {
                fill: white;
                stroke: white;
              }
            }
          }
        }
      }
    }
  }
  .ui.accordion .title:not(.ui) {
    padding: 0;
  }
`;

export const StyledDivider = styled(Divider)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;
 */