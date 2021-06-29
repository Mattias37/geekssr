import styled from "styled-components";
import { Text } from "../../atoms/text";


export const StyledMain = styled.div`

`;

export const DivContainerRegisterStyled = styled.div`
display: flex;
width: 100%;
padding: 2em 3em;
flex-direction: column;
height: 100%;
justify-content: center;
align-items: center;
text-align: center;
`;
export const DivImageContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TextBody = styled(Text)`
  font-style: normal;
  font-family: Bebas Neue;
  font-weight: bold;
  font-size: 2em;
  line-height: 40px;
  text-align: center;
  color: #000;
`;
export const TextBody2 = styled(Text)`
font-style: normal;
font-family: Bebas Neue;
font-weight: bold;
font-size: 3em;
line-height: 40px;
text-align: center;
color: #ff0055;
`;
export const TextBody3 = styled(Text)`
  font-style: normal;
  font-family: Bebas Neue;
  font-weight: bold;
  font-size: 1.4em;
  line-height: 37px;
  text-align: center;
  color: rgba(0,0,0,0.5);
`;

export const GridData = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 10px;
  background-color: transparent;
  padding: 10px;
`;
