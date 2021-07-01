import styled from 'styled-components';
import { Text } from './../../atoms/text/index';
import { Button } from './../../atoms/button';

export const TextLabelRegister = styled(Text)`
font-style: normal;
font-weight: bold;
font-size: 50px;
line-height: 40px;
text-align: center;
color: #000;
@media (max-width: 768px) {
  font-size: 25px;
}
`;
export const ErrorDiv = styled.div`
  background-color: #ff0055;
  background-size: 16px 18px;
  border-radius: 2px;
  font-family: Bebas neue;
  color: #fff;
  margin: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 0.5em;
`;
export const RegisterButton= styled(Button)`
width:100%;
height: 50px;
background-color: #FF0055 ;
font-size: 1em;
border: 1px solid #FF0055;
outline: 0;
line-height: 0.5em;
margin: 0.5em;
&:hover {
  background: #fff;
  color: #ff0055;
  outline: none;
}
@media (max-width: 768px) {
  
  font-size: 13px;
  width:100%;
  height:auto;
  }
 
`;
export const LoginTextStyled = styled(Text)`
margin-bottom:30px;
`;
export const LoginTextButtonStyled = styled(LoginTextStyled)`
margin-bottom:0px;
margin-left: 10px;
font-size: 18px;
text-decoration:underline;
cursor:pointer;
font-weight:bold;
align-items:flex-start;

`;

export const LoginButtonStyled = styled(Button) <{ color?: string; width?: string; height?: string; fontSize?: string }>`
margin-bottom:20px;

border-radius:50px;
${({ color }) => color && `background-color: ${color}`};
${({ width }) => width && `width: ${width}`};
${({ height }) => height && `height: ${height}`};
${({ fontSize }) => fontSize && `height: ${fontSize}`};
&:hover {
    background: ${({ color }) => color ||'white'};
    color: white;
    opacity: 0.6;
  }
`;

export const FormFieldMainOuter = styled.div`
  position: relative;
  margin: 0.5em;
`;
export const FormFieldOuter = styled.div`
  &>label{
    transform: translate(14px, -6px) scale(0.75);
    background-color: #fff;
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    transform-origin: top left;
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    padding: 0;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }
  &>.formikField{
    background: #FFFFFF00 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    opacity: 1;
    padding: 0.5em;
    width: 100%;
    min-height: 50px;
    font-size:14px;
  }
  &> h4 >.formikField{
    background: #FFFFFF00 0% 0% no-repeat padding-box;
    border: 1px solid #D1D1D1;
    opacity: 1;
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  width: 30%;
  max-width: 1200px;
  height: auto;
  min-height:600px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: black;
  background-color: transparent !important;
  @media (max-width: 768px) {
    overflow-x: auto;
    overflow-y: auto;
    display: flex;
    width: 100%;
  }
`;
export const ContainerInner = styled.div`
  margin: 30% 5% 5% 5%;
  padding: 20% 4% 4%;
  width: 100%;
  min-height: 500px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #CBCBCB;
  opacity: 1;
  & > button {
    position: relative;
  }
  #styles-button {
    color: white;
    border-radius: 33px;
    background-color: #ff0055;
    font-size: 2em;
    font-style: normal;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 12px;
    width: 90%;
    text-align: center;
    border: none;
    font-family: Bebas Neue;
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
    font-size: 2em;
    font-style: normal;
    font-weight: bold;
    margin-top: 20px;
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 12px;
    width: 90%;
    text-align: center;
    font-family: Bebas Neue;
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
export const ImageLigasLogo = styled.div<{ src: string }>`
  width: 65%;
  height: auto;
  min-height: 150px;
  background-image: url(${({src})=> src}) !important;
  background-size: cover;
  background-position: center;
  border-radius: 1em;
  cursor: pointer;
  position: absolute;
  top: -100px;
`;
export const ContainerInnerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const ContainerInnerRowTitle = styled.div`
  width: 100%;
`;

export const ContainerInnerRowTextBold = styled.div`
  color: #7D7D7D;
  opacity: 1;
  font-weight: 800;
`;



export const MainDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 769px) {
  }
`;
export const DivSignInButton = styled.div`
  width: 100%;
  height: 100px;
  display: flex; 
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

export const PageStyleDiv = styled.div`
height: 100vh;
background-color: #fff;
max-width: 1200px;
margin: 0 auto;
overflow: scroll;
overflow-x: hidden;
}
&::-webkit-scrollbar {
width: 0;  /* Remove scrollbar space */
background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
&::-webkit-scrollbar-thumb {
background: #FF0000;
}
@media (max-width: 769px) {
  bottom: 0px;
  left: 11%;
}
`;
export const SubContainerDiv = styled.div`
  background: transparent !important;
  z-index: 100;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 85%;
  & > h1 {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
  @media (max-width: 769px) {
  }

  #style-trailer {
    display: flex;
    justify-content: center;
  }
  #style-colsigon {
    display: flex;
    justify-content: center;
  }
  #style-information {
    display: flex;
    justify-content: center;
  }
`;
export const ButtonStyled = styled(Button)`
  width: 100%;
  background-color: white;
  color: #ff0055;
  border-radius: 30px;
  height: 4rem;
  font-size: 24px;
  font-weight: bold;
  line-height: 0;
  padding: 0;
  &:hover {
    opacity: 0.8;
    background-color: white;
    color: #ff0055;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    border-radius: 10px;
    height: 2rem;
  }
  @media (min-width: 401px) and(max-width: 769px) {
    font-size: 15px;
    border-radius: 10px;
    height: 2rem;
  }
`;


export const StyledDiv = styled.div`
  background: transparent !important;
  width: auto;
  z-index: 100;
  margin: 0 auto !important;
  position: absolute;
  bottom: 0px;
  left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    bottom: 0px;
    left: 0%;
  }
`;

export const Scroll = styled.div`
  width: 20px;
  height: 20px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
`;
export const ScrollFinal = styled.div`
  width: 5px;
  height: 50px;
  border: 1px solid #fff;
  background: #fff;
  @media (max-width: 600px) {
    height: 30px;
  }
`;
export const TextBody = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const TextTitle = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 400px) {
    font-size: 30px;
  }
  @media (min-width: 401px) and(max-width: 769px) {
    font-size: 30px;
  }
`;
export const TextTitleSubtitle1 = styled(TextTitle)`
  font-size: 40px;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  @media (min-width: 401px) and(max-width: 769px) {
    font-size: 20px;
  }
`;
export const TextTitleSubtitle2 = styled(TextTitle)`
  font-size: 20px;
  @media (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 401px) and(max-width: 769px) {
    font-size: 15px;
  }
`;

export const LigaSponsorsStyled = styled.div`
  background-image: url('/images/liga-sponsor.png');
  min-height: 19vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LigaSponsorsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  & > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    @media (max-width: 769px) {
      font-size: 25px;
    }
  }
`;
export const ButtonTrailer = styled(Button)`
  width: 12vw;
  text-align: center;
  background-color: #ff0055;
  color: white;
  border-radius: 10px;
  height: 4vh;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ff0055;
    color: white;
    opacity: 0.8;
  }
  @media (max-width: 769px) {
    width: 19vw;
    height: 6vh;
  }
`;
export const ButtonSingOn = styled(Button)`
  background-color: white;
  color: #ff0055;
  height: 4vh;
  /* text-align: center; */
  width: 17vw;
  font-size: 13px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    color: #ff0055;
    background-color: white;
    color: #ff0055;
    height: 4vh;
    /* text-align: center; */
    width: 17vw;
    font-size: 13px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 769px) {
    height: 7vh;
    width: 22vw;
  }
`;
export const ButtonInformation = styled(Button)`
  width: 12vw;
  text-align: center;
  background-color: #ff0055;
  color: white;
  font-size: 13px;
  border-radius: 10px;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: #ff0055;
    opacity: 0.8;
  }
  @media (max-width: 769px) {
    width: 21vw;
    height: 6.4vh;
    font-size: 12px;
  }
`;
