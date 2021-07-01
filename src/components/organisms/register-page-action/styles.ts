import styled from 'styled-components';
import { Text } from '../../atoms/text';
import { Button } from '../../atoms/button';

type FlexAlignSetting = 'center' | 'flex-end' | 'flex-start';

export const BotonDer = styled(Button)`
  border-radius: 15px;
  background-color: #ff0055;
  margin-top: 30px;
  width: 290px;
  border: 2px solid #ff0055;
  font-size: 25px;
  @media (max-width: 768px) {
    margin-left: 25%;
    bottom: 140px;
    font-size: 10px;
    width: 100px;
    height: 40px;
    font-size: 10px;
  }
  outline: 0;
  line-height: 0.5em;
  &:hover {
    background: #f23d79;
    outline: none;
  }
`;
export const StyledDiv = styled.div<{ alignItem: FlexAlignSetting }>`
  background: #fff !important;
  width: 90%;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${({ alignItem }) => alignItem};
  @media (max-width: 768px) {
    min-height: 23vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const StyledDivInner = styled.div`
  display:flex;
  flex-directon: row;
  flex-wrap: wrap;
  height: inherit;
  width: 100%;
  justify-content: space-evenly;
`;
export const StyledPrize = styled.div<{ type: number }>`
  margin: 1em;
  min-width: 30%;
  width: 168px;
  height: 225px;
  background: #151515 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #34343626;
  border-radius: 15px;
  opacity: 1;
  padding: 2% 5%;
  @media (min-width: 768px) {
  ${({ type }) => {
    let styles = '';
    if (type === 1) {
      styles = ` `;
    }
    return styles;
  }}
  }
`;
export const StyledPriceTop = styled.div`
  background: #FFFFFF00 0% 0% no-repeat padding-box;
  border: 3px solid #707070;
  opacity: 1;
  border-radius: 120px;
  height: 130px;
  padding: 5%;
  min-width: 130px;
  margin: auto;
`;
export const StyledPriceTopInner = styled.div`
  background: #444444 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 25px #34343659;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding: 20%;
  &>img{
    height: inherit;
  }
`;
export const StyledPriceText = styled(Text)`
  color: #fff;
  margin: auto;
  font-family: Bebas Neue;
  font-size: 1.5em;
`;
export const StyledPriceTextPrice = styled(Text)`
  color: #FF0055;
  margin: auto;
  font-size: 1em;
`;

export const StyledDivInnerColumn = styled.div`
  display:flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 5%;
  min-height: 50vh;
  height: auto;
  width: 40%;
  min-width: 330px;
  padding: 5% 0% 5% 0%;
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
    border: 1px solid #ff0055;
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
`;


export const TextHome = styled(Text)<{ textAlign: AlignSetting }>`
  margin: 20px 20px 0px 20px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  color: #000;
  font-size: 3rem;
  background-color: #fff;
  text-align: left;
  font: normal normal normal 30px/23px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
  @media (max-width: 769px) {
    font-size: 30px;
    line-height: auto;
  }
`;

export const TextDescription = styled(Text)<{ textAlign: AlignSetting }>`
  margin: 20px 0px ;
  text-transform: uppercase;
  display: contents;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  color: #000;
  font-size: 1rem;
  background-color: #fff;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  text-align: ${({ textAlign }) => textAlign};
  width: 100%;
  text-align: left;
  letter-spacing: 0px;
  color: #7D7D7D;
  opacity: 1;
  @media (max-width: 769px) {
    font-size: 15px;
    line-height: auto;
  }
`;

export const MainDiv = styled.div`
  background: #fff !important;
  width: auto;
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  min-height: 30vh
  @media (max-width: 769px) {
  }
`;

export const ContainerInnerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font: normal normal bold 1em Open Sans;
  font-family: Open Sans !important;
  letter-spacing: 0px;
  color: #7D7D7D;
  opacity: 1;
  text-transform: capitalize;
`;
export const ContainerInnerRowTextBold = styled.div`
  color: #7D7D7D;
  opacity: 1;
  font-weight: 400;
  text-align: right;
  font: normal normal normal 16px/22px Open Sans;
  font-family: Open Sans !important;
  letter-spacing: 0px;
  color: #7D7D7D;
  opacity: 1;
`;