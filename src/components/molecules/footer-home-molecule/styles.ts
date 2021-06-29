import styled from 'styled-components';
export const MainContainerFooter = styled.div`
  background-color: #161616;
  color: #A1A1A1;
  height: 100%;
  min-height: 30vh;
  position: relative;
  z-index: 2;
  .custom-container{
    height: 100%;
    width: 100%;
  }
  #styletext{
    color: #555555;
  }
  #estyles-logo {
    height: 100%;
    width: 100%;
    padding: 15% 25%;
  }
  #estyles-container {
    align-items: flex-start;
    height: 100%;
    width: 100%;

    @media (min-height: 320px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 5px;
    }
  }
  #h2-home-slider {
    font-family: Bebas Neue;
    margin: 5% 0;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    color: #FC0052;
    font-size: 22px;
  }
  & > button {
    background: transparent;

  }
  #emailText{
    text-align: left;
    font: normal normal normal 22px/21px Bebas Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
  }
  .style-h5 {
    margin-bottom: 5px;
    font-style: 13px;
    font-weight: bold;
    display: flex;
    text-align: left;
    color: #A1A1A1;
    align-items: center;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
  #styletext{
    color: #555555;
    font-style: 13px;
  }
  #style-h4 {
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 5px;

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }

  #row-styles {
    margin-top: 5px;
  }

  #row-divider {
    margin-bottom: 40px;
  }
  #styleDivider {
    border-top: 1px solid #6c757d;
  }
  @media (min-width: 1200px) {
    .custom-container {
      max-width: 100vw;
    }
  }
`;
export const NavFooterButton = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100%;
  .style-h5 {
    font-family: Open Sans;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: bold;
    display: flex;
    text-align: left;
    font-size: 15px;
    align-items: center;
    color: #A1A1A1;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;
export const MainContainerFooterEmail = styled.div`
  background-color: #373737;
  color: white;
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .custom-container{
    height: 100%;
    width: 100%;
  }
  #estyles-logo {
    height: 100%;
    width: 100%;
    padding: 15% 25%;
  }
  #estyles-container {
    align-items: flex-start;
    height: 100%;
    width: 100%;

    @media (min-height: 320px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 5px;
    }
  }
  #h2-home-slider {
    margin: 5% 0;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    color: #e62c5d;
    font-size: 2rem;
  }
  .style-h5 {
    margin: 5% 0;
    font-style: normal;
    font-weight: bold;
    display: flex;
    text-align: center;
    font-size: 13px;
    align-items: center;
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
  #style-h4 {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 5px;

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }

  #row-styles {
    margin-top: 5px;
  }

  #row-divider {
    margin-bottom: 40px;
  }
  #styleDivider {
    border-top: 1px solid #6c757d;
  }
  .copyNewsletter{
    font-size: 20px;
    color: #fff;
    font-family: Bebas Neue;
  }
  .inputEmail{
    margin: 5% 0;
    background-color: #252525;
  }
  .buttonEmail{
    background-color: #ed3a53;
    color: #fff;
  }
  @media (min-width: 1200px) {
    .custom-container {
      max-width: 100vw;
    }
  }
`;

export const ContentContainerFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  min-height: 392px;
  width: 100%;
  .textoLegal{
    font-size: 13px;
    color: #555555
  }
`;
export const CustomAnchor = styled.a`
  color:  #fff;

  &:hover{
    color:  #FF0055;
  }
`;