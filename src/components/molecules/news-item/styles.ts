import styled from 'styled-components';
//import facebookBadge from '../../../assets/images/facebook-badge.png';
import whatsappBadge from '../../../assets/images/whatsapp-badge.png';

interface Props {
  src?: string;
}

export const RowSliderContainer = styled.div`

`;

export const SliderContent = styled.div`
  
`;

export const SliderProduct = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const SliderProductCat = styled.div`
top: 0;
left: 15px;
background-color: #017CB3;
color: #fff;
margin: 10px;
padding: 1px 5px;
position: absolute;
text-align: left;
letter-spacing: 0px;
color: #FFFEFE;
opacity: 1;
font-size: 11px;
font-weight: 400 !important;
border-radius: 3px;
`;

export const ProductImg = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: url('${(props) => props.src}') no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 768px) {
    min-height: 40vh;
  }
`;

export const ProductName = styled.div`
  font-weight: 400 !important;
  text-align: left;
  font: normal normal normal 25px/28px;
  font-size: 2em;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
  font-family: Bebas Neue;
`;

export const NewsMeta = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 10px;
`;

export const NewsText = styled.div`
  color: #9c9c9c;
  font-size: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
`;
export const NewsText2 = styled.div`
  color: #ff0055;
  font-size: 10px;
`;

export const ProductPrice = styled.div`
  color: #ff0055;
  font-size: 18px;
`;

export const ProductShoping = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2em;
  background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%);
`;

export const ProductBadge = styled.div`
  background-color: #ff0055;
  border-radius: 5px;
  height: 24px;
  font-size: 20px;
  padding: 10px;
  line-height: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const FacebookBadge = styled.a`
  width: 25px;
  width: 25px;
  background: url('/images/facebook-badge.png') no-repeat center;
  margin-left: 10px;
  cursor: pointer;
`;
export const WhatsAppBadge = styled.a`
  width: 25px;
  width: 25px;
  background: url('/images/facebook-badge.png') no-repeat center;
  margin-left: 10px;
  cursor: pointer;
`;
