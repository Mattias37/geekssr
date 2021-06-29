import React from 'react';
import TagManager from 'react-gtm-module';
import {
  RowSliderContainer,
  SliderProduct,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductShoping,
  /* ProductBadge,
  FacebookBadge,
  WhatsAppBadge, */
} from './styles';
import { ShopIconBuy } from '../../molecules/shop-icono-contacts';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '../../../hooks/useMediaQuery';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { useRouter} from 'next/router';

SwiperCore.use([Navigation, Pagination]);

interface Props {
  products: ProductHome[];
}

export const RowSlider = ({ products }: Props) => {
  const { push } = useRouter();
  const isSmall = useMediaQuery('(max-width: 1025px)');
  return (
    <RowSliderContainer>
      <Swiper
        pagination={{
          "dynamicBullets": true
        }} 
        slidesPerColumnFill="row"
        slidesPerView={isSmall ? 1 : 3}
        slidesPerColumn={1}>
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <SliderProduct className="cursor-pointer">
              <ProductImg
                src={product.imgCenter}
                onClick={() => {
                  TagManager.dataLayer({
                    dataLayer:{
                      event: 'event',
                      eventProps: {
                          category: 'Presentacion de productos',
                          action: 'Clic Presentacion de productos',
                          label: `click-products-preview-${product.name}`,
                          value: `click-products-preview-${product.name}`
                      }
                    }
                  })
                  push(`/store/${product._id}`)
                }}
              />
              <ProductName                 
              onClick={() => {
                  TagManager.dataLayer({
                    dataLayer:{
                      event: 'event',
                      eventProps: {
                          category: 'Presentacion de productos',
                          action: 'Clic Presentacion de productos',
                          label: `click-products-preview-${product.name}`,
                          value: `click-products-preview-${product.name}`
                      }
                    }
                  })
                  push(`/store/${product._id}`)
                }}>
                {product.name}
              </ProductName>
              <ProductPrice                 
              onClick={() => {
                  TagManager.dataLayer({
                    dataLayer:{
                      event: 'event',
                      eventProps: {
                          category: 'Presentacion de productos',
                          action: 'Clic Presentacion de productos',
                          label: `click-products-preview-${product.name}`,
                          value: `click-products-preview-${product.name}`
                      }
                    }
                  })
                  push(`/store/${product._id}`)
                }}>
                {product.price}
              </ProductPrice>
              <ProductShoping>
                {/* <ProductBadge>compra por</ProductBadge>
                <FacebookBadge
                  onClick={() => window.open('http://m.me/allensmilko')}
                />
                <WhatsAppBadge
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?phone=573206969453&text=Quiero%20comprar%20uno%20de%20sus%20productos!%0Aproducto%3A%20${product.name}%0Aprecio%3A%20${product.price}%0Aimage%3A%20${product.imgCenter}`,
                    )
                  }
                /> */}
                  <ShopIconBuy
                    name={product.name}
                    price={product.price}
                    url={product.imgCenter}
                  /> 
              </ProductShoping>
            </SliderProduct>
          </SwiperSlide>
        ))}
      </Swiper>
    </RowSliderContainer>
  );
};
