import styled from 'styled-components';
import {Text} from "../../atoms/text";
import {Button} from "../../atoms/button";

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
/* export const CheckBoxLogin = styled (Checkbox) <{ color?: string; width?: string; height?:string;}>`
margin-bottom:20px;
 
${({width}) => width && `width: ${width} `};
${({height}) => height && `height: ${height} `};
margin-right:15px;
margin-top: 20px;
&.ui.checkbox > label{
  color: #000 !important;
  font-size: 18px;
  font-weight:bold;
}
&.ui.checkbox > label::before{
  background-color: #FF0055;
  border: 1px solid #FF0055;
}
&.ui.checkbox > label::after{
  background-color: #FF0055;
  border: 1px solid #FF0055;
  color: #000 !important;
}
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
*/
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
  text-transform: capitalize;
`;

export const ContainerInnerRowTitle = styled.div`
  width: 100%;
`;

export const ContainerInnerRowTextBold = styled.div`
  color: #7D7D7D;
  opacity: 1;
  font-weight: 800;
`;

