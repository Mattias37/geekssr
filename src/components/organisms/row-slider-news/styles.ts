import styled from 'styled-components';

interface Props {
  src?: string;
}

export const RowSliderContainer = styled.div`
  margin-bottom: 20px;
  padding: 0px 20px;
  width: 100%;
  & > .swiper-container > .swiper-pagination {
    bottom: 0 !important;
  }
  & > .swiper-container > .swiper-wrapper {
    padding-bottom: 20px;
  }
  .cursor-pointer{
    padding: 1em;
  }
  @media (max-width: 768px) and (min-width: 375px) {
    padding: 0px;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
`;

export const SliderProduct = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  min-width: 275px;
  position: relative;
`;

export const SliderProductCat = styled.div`
top: 20px;
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
  width: 298px;
  height: 150px;
  max-height: 150px;
  background-color: #ff0055;
  margin-bottom:1em;
  background: url('${(props) => props.src}') no-repeat center;
  background-size: cover;
`;

export const ProductName = styled.div`
  font-weight: 400 !important;
  text-align: left;
  font: normal normal normal 25px/28px Bebas Neue;
  letter-spacing: 0px;
  color: #212121;
  opacity: 1;
`;

export const NewsMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #d9d9d9;
  font-size: 10px;
`;

export const AuthorContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 50%;
`;
export const DateContainer = styled.span`
  color: #ff0055;
`;

export const NewsText = styled.div`
  color: #9c9c9c;
  font-size: 15px; 
  text-align: left;
  letter-spacing: 0px;
  overflow: hidden;
  color: #7D7D7D;
  height: 100px;
  opacity: 1;
  background: -webkit-linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const NewsText2 = styled.div`
  color: #ff0055;
  font-size: 10px;
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
  background: url('/images/whatsapp-badge.png') no-repeat center;
  margin-left: 10px;
  cursor: pointer;
`;
