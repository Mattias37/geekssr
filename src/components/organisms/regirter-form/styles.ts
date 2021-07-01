import styled from 'styled-components';
import { Text } from '../../atoms/text';
import { Button } from '../../atoms/button';

export const TextLabelRegister = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 1vw;
  line-height: 40px;
  text-align: center;
  color: black;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;
export const FormMAin = styled.div`
  
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
export const CustomAnchor = styled.a`
  color:  #FF0055;

  &:hover{
    color:  #FF0055;
  }
`;

export const RegisterButton = styled(Button)`
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

export const RegisterButtonStyled = styled(Button) <{ color?: string; width?: string; height?: string; fontSize?: string }>`
  margin:10px 10px 0;
  border-radius:5px ;
  ${({ color }) => color && `background-color: ${color}`};
  width: 100%;
  height: auto;
  ${({ fontSize }) => fontSize && `height: ${fontSize}`};
  &:hover {
      background: ${({ color }) => color || 'white'};
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
  &> input{
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
export const CheckboxMain = styled.div`
    display: flex;
    justify-content: inherit;
    align-items: center;
    height: fit-content;
    min-height: 50px;
    width: 100%;
    &>input{
      margin-right: 5px;
    }
`;

export const CheckboxMainOuter = styled.div`
      display: flex;
      align-self: stretch;
      width: 100%;
      flex-direction: row;
      flexWrap: wrap;
      padding: 0.5em;
`;