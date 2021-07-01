import React from 'react';
import TagManager from 'react-gtm-module'
import {
  RowSliderContainer,
  SliderProduct,
  ProductImg,
  ProductName,
  NewsMeta,
  NewsText,
  NewsText2,
  SliderProductCat,
  AuthorContainer,
  DateContainer
} from './styles';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '../../../hooks/useMediaQuery';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
//import useMediaQuery from '../../../hooks/useMediaQuery';

import { useRouter } from 'next/router';
SwiperCore.use([Navigation, Pagination]);

interface Props {
  publications: Publications[] | undefined;
}
interface Publications {
  id: string;
  author: { name: string; id: string };
  category: string;
  title: string;
  content: string;
  image: string;
  publishDate: string;
}


export const RowSliderNews = ({ publications }: Props) => {
  const { push } = useRouter();
  const isSmall = useMediaQuery('(max-width: 745px)');
  return (
    <RowSliderContainer>
      <Swiper
        pagination={{
          "dynamicBullets": true
        }} 
        slidesPerColumnFill="row"
        slidesPerView={isSmall ? 1 : 3}
        slidesPerColumn={1}>
        {publications?.map((product) => (
          <SwiperSlide key={product.title} style={isSmall ? { width: '100%' } : { width: '30%' }}>
            <SliderProduct className="cursor-pointer" onClick={() => {
              TagManager.dataLayer({
                dataLayer:{
                  event: 'event',
                  eventProps: {
                      category: 'Noticias recientes / Home',
                      action: `Click on Noticias recientes-${product.title}`,
                      label: `click-news-preview-${product.title}`,
                      value: `click-news-preview-${product.title}`
                  }
                }
              })
              push(`/news/${product.id}`)
              }}>
              <ProductImg
                src={product.image}
              >
                <SliderProductCat>
                  {product.category}
                </SliderProductCat>
              </ProductImg>
              <ProductName >
                {product.title}
              </ProductName>
              <NewsMeta>
                <AuthorContainer>
                  By <NewsText2>{product?.author?.name}</NewsText2>
                </AuthorContainer>
                <DateContainer>
                  {new Date(product.publishDate).toLocaleDateString()}
                </DateContainer>
              </NewsMeta>
              <NewsText
                dangerouslySetInnerHTML={{
                  __html: product.content,
                }}>
              </NewsText>
            </SliderProduct>
          </SwiperSlide>
        ))}
      </Swiper>
    </RowSliderContainer>
  );
};
