import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
interface Props {
  src: string;
}
export const GridLigaSelected = styled(Container)`
  @media (max-width: 769px) {
  }
  .height-100 {
    height: 100%;
  }
  .button-style {
    width: 98%;
    display: flex;
    font-size: 14px;
    height: 0vh;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .col-style {
    background-color: rgba(255, 0, 84, 0.41);
    border-radius: 20px;
    text-align: center;
    padding: 10px;
  }
  .p-style {
    font-size:20px;
    color: white;
    display: flex;
    text-align: start;
    margin-top: 15px;
  }
  .precio-style {
    color: white;
    display: flex;
    text-align: end;
    font-size: 15px;
  }
  .h3-style {
    margin-top:15px;
    color: white;
    font-size:30px;
    
  }
  .h3-style2{
    margin-top:30px;
    color: white;
    font-size:20px;

  }
  .button-left-style {
    font-size: 16px;
    text-align: center;
    height: 6vh;
    width: 11vw;
    border-radius: 26px;
    @media (max-width: 425px) {
      height: 7vh !important;
      width: 27vw !important;
    }
    @media (min-width: 426px) and (max-width: 769px) {
      height: 7vh !important;
      width: 17vw !important;
  }
      
    
  }


`;

export const ColStyle = styled(Col)`
 @media (max-width: 425px) {
      
   margin-bottom: 33px;
    }
`;

export const AdversitingBannerInformation = styled.div<Props>`
  margin-top: 20px;
  width: 100%;
  max-height: 170px;
  height: 170px;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
`;


export const SlidersContainer = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 768px) and (min-width: 375px) {
    flex-direction: column;
  }
`;

