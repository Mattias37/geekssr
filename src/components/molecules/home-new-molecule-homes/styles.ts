import styled from 'styled-components';
import { Row } from 'react-bootstrap';
export const WraperHomeBanner = styled.div<{ img: string }>`
  background-image: url(${({ img }) => img});
  background-position: inherit;
  background-size: cover;
  width: 100vw;
  max-width:1200px !important;
  margin: 0 auto;
  height: 334px;
  #col-left:{
    display: flex !important;
    flex-direction: column !important;
    align-content: baseline !important;
    justify-content: center !important;
    height: 100%;
    text-align: left;
  }
  #col-right:{
    display: flex;
    flex-direction: column;
    align-content: baseline;
    justify-content: center;
  }
  #style-img {
    width: auto;
    max-height: 150px
  }
  #style-timmer {
    color: #fff;
  }
  #style-h2-left {
    text-transform: uppercase;
    font-family: Bebas Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 3em;
    line-height: normal;
    color: white;
    text-align: initial;
  }
  #style-h5-left {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: normal;
    color: white;
    text-align: initial;
  }
  #styles-button {
    color: white;
    border-radius: 33px;
    background-color: #ff0055;
    font-size: 3em;
    font-style: normal;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    width: 90%;
    text-align: center;
    border: none;
    font: normal normal normal 30px/25px;
    letter-spacing: 0px;
    text-transform: uppercase;
    opacity: 1;

    @media (max-width: 768px) {
      font-size: 30px/25px;
      margin-top: 51px;
      width: 80%;
    }
  }
  #styles-button2 {
    color: #ff0055;
    border-radius: 33px;
    background-color: #fff;
    font-size: 3em;
    font-style: normal;
    font-weight: bold;
    margin-top: 20px;
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
    width: 90%;
    text-align: center;
    border: none;
    font: normal normal normal 30px/25px;
    letter-spacing: 0px;
    text-transform: uppercase;
    opacity: 1;
    @media (max-width: 768px) {
      font-size: 30px/25px;
      margin-top: 51px;
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    height: 21vh;
    background-size: cover;
  }
`;

export const ContainerHome = styled.div`
  display: flex;
  padding: 0px 20px;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  text-align: center;
`;
export const RowStylesHome = styled(Row)`
  flex-wrap: none;
  display: flex;
  height: 75%;
  justify-content: center;
  align-content: center;
`;
