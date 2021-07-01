import styled from 'styled-components';
import { Text } from '../../atoms/text';

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
export const DivMainPositionsOuter = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;
export const DivMainPositions = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 1em;
`;
export const DivPositionPlayer = styled.div`
  margin: 7px auto;
  background-color: #EFEFEF;
  width: 100%;
  max-width: 940px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > h3 {
    margin-bottom: .5rem;
    font-weight: 500;
    width: inherit;
    margin-left: 10px;
    line-height: 1.2;
    font-size: large;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`;

export const DivPositionPlayerIndex = styled.div`
  background-color: #262626;
  width: 100%;
  max-width: 47px;
  color: #fff;
  font-size: large;
  text-align: justify;
  padding: 0 0 0 5px;
  -webkit-clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
  clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
`;

export const DivPositionClasified = styled.div`
    background-color: #0FFF17;
    min-width: 130px;
    max-width: 47px;
    color: #fff;
    font-size: inherit;
    text-align: justify;
    padding: 5px 0 0 55px;
    -webkit-clip-path: polygon(35% 0,100% 0,100% 100%,51% 100%);
    -webkit-clip-path: polygon(35% 0,100% 0,100% 100%,24% 100%);
    clip-path: polygonpolygon(35% 0,100% 0,100% 100%,24% 100%);
`;

export const DivPositionNotClasified = styled.div`
    background-color: #ff0055;
    min-width: 130px;
    max-width: 47px;
    color: #fff;
    font-size: inherit;
    text-align: justify;
    padding: 5px 0 0 55px;
    -webkit-clip-path: polygon(35% 0,100% 0,100% 100%,51% 100%);
    -webkit-clip-path: polygon(35% 0,100% 0,100% 100%,24% 100%);
    clip-path: polygonpolygon(35% 0,100% 0,100% 100%,24% 100%);
`;