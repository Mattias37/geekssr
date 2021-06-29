import React from 'react';
import TagManager from 'react-gtm-module'
import {
  SliderProduct,
  ProductImg,
  ProductShoping,
} from './styles';
interface Props {
  news: any;
}

export const News = (props: Props) => {
  //const isSmall = useMediaQuery('(max-width: 1025px)');
  return (
    <SliderProduct className="cursor-pointer" href={props.news.link} target="_blank" onClick={() => {
      TagManager.dataLayer({
        dataLayer:{
          event: 'event',
          eventProps: {
              category: 'Banners',
              action: 'Click on banner',
              label: `click-banner-${props.news.link}`,
              value: `click-banner-${props.news.link}`
          }
        }
      })
    }}>
      <ProductImg
          src={props.news.img.url}
      >
              <ProductShoping>
              </ProductShoping>
      </ProductImg>
    </SliderProduct>
  );
};
