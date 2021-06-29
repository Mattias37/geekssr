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
  height: 249px;
`;

export const ProductImg = styled.div<Props>`
  width: 100%;
  height: 150px;
  background: url('${(props) => props.src}') no-repeat center;
  background-size: contain;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-family: Bebas Neue;
`;

export const ProductPrice = styled.div`
  color: #ff0055;
  font-size: 18px;
  font-weight: bolder;
}
`;

export const ProductShoping = styled.div`
  display: flex;
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
