import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { Image as ImageAtom } from '../../atoms/image';
import { Text } from '../../atoms/text';
import { Button } from '../../atoms/button';

export const MenuStyled = styled.div`
    height: auto;
    z-index: 1000000 !important;
    position: sticky;
    top: 0;
`;
export const MenuInnerBar = styled.div`
  background-color: black;
`;
export const MenuInnerBar2 = styled.div`
  background-color: #151515;
`;

export const ImageStyledIcon = styled(ImageAtom)`
  & {
    background-size: cover;
    background-repeat: no-repeat;
    width: 23px !important;
    height: 23px !important;
    max-width: 24px !important;
    margin-right: 5px;
    margin-left: 6px;
    vertical-align: middle;
    left: 0.5rem !important;
    right: 0.5rem;
    position: absolute !important;
    top: 28%;
    @media (max-width: 375px) {
      left: 0;
    }
    @media (min-width: 1024px) {
      left: -1rem !important;
    }
    @media (max-width: 768px) {
      margin: 0px;
    }
  }
`;

export const AppBarSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  width: 100%;
  .span-appbar-custom {
    font-size: 1.2rem;
    text-shadow: 1px 1px 1px #000;
    font-weight: bolder;
    font-family: "Open Sans";
    font-size: 19px;
    height: 60px;
    align-items: center;
    width: inherit;
    & > b {
      letter-spacing: 2px;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 0.5em 0 1em;
  }
`;
export const AppBarRigthContainer = styled.div``;
export const AppBarLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  /* position: relative; */
  align-items: center;
  align-self: stretch;
  width: auto;
  &>h5{
    margin: 3px;
    font-size: 13px;
    font-family: Open Sans !important;
    text-align: left;
    letter-spacing: 0px;
    color: #7D7D7D;
    opacity: 1;
  }
  &>a{
    color: #fff;
  }
  &>svg{
    color: #fff;
    margin: 3px;
  }
`;
export const MenuImageStyledAppBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    color: #fff;
    height: auto;
    width: 45%;
  }
  @media (max-width: 768px) {
    margin-right: -9px;
    height: 100%;
    background-color: #ff0055;
    width: 60px;
  }
`;

export const AppBarContainerTop = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 36px;
  &>h5{
    margin: 3px;
    font-size: 13px;
    font-family: Open Sans !important;
    text-align: left;
    letter-spacing: 0px;
    color: #7D7D7D;
    opacity: 1;
  }
`;

export const AppBarContainer = styled.div`
  display: flex;
  height: 60px;
  background-color: #151515;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const AppBarText = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 39.6694px;
  line-height: 40px;
  text-align: left;
  color: #ffffff;
  position: absolute !important;
  left: 100%;
`;
export const HomeImageLogo = styled(Image)`
  display: flex;
  height: 107px;
  width: auto;
  cursor: pointer;
  /* margin-left: 50px; */
  margin-top: -30px;
  z-index: 1000000000;
  @media (max-width: 768px) {
    margin-left: 0px;
    height: 8vh;
  }
`;
export const BotonDer = styled(Button)`
    min-width: 4vw;
    text-align: center;
    font-size: 11px;
    outline: 0;
    line-height: 0.5em;
    background-color: transparent;
    border-top: 0px;
    border-right: 0px;
    border-left: 1px solid #151515;
    border-bottom: 0px;
    margin: 3px;
    font-size: 13px;
    font-family: Open Sans !important;
    text-align: left;
    letter-spacing: 0px;
    color: #7D7D7D;
    opacity: 1;
  @media (max-width: 768px) {
    margin-right: 10px;
    font-size: 10px;
  }
  outline: 0;
  line-height: 0.5em;
  &:hover {
    background: #ff0055;
    outline: none;
  }
`;
