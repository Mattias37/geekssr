import { Button } from './../../atoms/button';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Text } from '../../atoms/text/index';

export const MatchDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 7px;
`;
export const RedSquare = styled(Col)<{
  rounded?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
}>`
  font-weight:bold;
  background-color: #0000001A;
  color: #000;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  width: 123px;
  height: 32px;
  text-align: center;
  ${({ rounded }) => rounded && `border-radius: 5px;`}
  ${({ borderLeft }) => borderLeft && `border-left: 4px solid white`}
  ${({ borderRight }) => borderRight && `border-right: 4px solid white`}
  `;

export const ContainerTable = styled.div`
    font-weight:bold;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 

`;

export const GridRowLigaSelected = styled.div`

  overflow-y: hidden;
  display: flex;
  align-self: stretch;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    overflow-y: hidden;
    flex-direction: row;
    margin: 0px 15px 0px 0px;
  }
  /* & > button {
    margin: 0px 10px;
  } */
`;

export const GridRowChildLigaSelected = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;

  @media (max-width: 768px) {
    margin: 10px 5px;

    flex-direction: column;
  }
`;

export const ButtonStyled = styled(Button)`
  @media (max-width: 769px) {
    font-size: 2.9vw;
  }
`;
export const Jornada = styled(Text)`
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  color: #FF0055;
  font-size: 2em;
  font-family: Bebas Neue;
  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

export const MainBarkets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::nth-child(n){
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;
export const MainBarketsChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Bebas Neue;
  font-size: 2em;
`;
export const MainBarketsChildInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;