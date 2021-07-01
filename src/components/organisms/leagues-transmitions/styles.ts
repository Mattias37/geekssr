import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { Text } from './../../atoms/text/index';
interface Props {
  src: string;
}

export const Adversiting = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;


  @media (max-width: 768px) {
    display: none;
  }
`;
export const TransBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
`;
export const TransBodyChild = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: inherit;
  padding: 1em;
`;
export const Table = styled(Row)`
  background-color: rgba(255, 0, 84, 0.41);
  border-radius: 5px;
  width: 90%;
 
    @media (min-width: 601px) and (max-width: 768px) {
    width: 119%;
    
  }
  &.row {
    margin-left: 0px;
    margin-right: 15px;
  }
 
  @media (max-width: 600px) {
    width: 95%;
    &.row {
      margin-left: 0px;
      margin-right: 0px;
    }
    & > .custom {
      margin-top: 0.5rem;
      width: 33%;
      
    }
  }
  .h5{
    font-weight: bold;
    @media (max-width: 375px) {
    font-size: 0.8rem;
    }
    @media (min-width: 425px) and (max-width: 768px) {
    font-size: 1rem;
    }
  }
`;

export const TableText = styled.h1`
  font-weight: bold;
  color: white;
  font-family: Bebas-Neue;
`;

export const TableItem = styled.div`
font-weight: bold;
  width: 100%;
  display: flex;
  border-bottom: 1px solid white;
`;
export const ContainerTable = styled(Container)`
margin-bottom: 20px;
  @media (min-width: 1200px){
    max-width:100%;
  }
`;

export const Banner2 = styled.div`
font-weight: bold;
  width: 85%;
  height: 90%;
  background-color: rgba(255, 0, 85, 0.3);
  color: white;
  margin-bottom: 5rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const BannerSponsorText = styled.p`
  font-size: 64px;
  align-content: center;
  text-transform: uppercase;
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