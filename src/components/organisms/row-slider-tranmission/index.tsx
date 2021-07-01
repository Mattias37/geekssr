import React from 'react';
import * as Io from 'react-icons/io';
import {
  SliderProduct,
  ProductImg,
  ProductName,
  NewsMeta,
  NewsText,
  NewsText2
} from './styles';
//import useMediaQuery from '../../../hooks/useMediaQuery';


import { useRouter } from 'next/router';


interface Props {
  products: Transmissions[];
}
interface Transmissions {
  _id:  string; 
  title:  string;
  image:   string;
  author:  any;
  description:   string;
  endDate:string;
  startDate:string;
  url:string;
  status: string; 
  iframeTransmission?: string;
}

export const RowSliderNews = ({ products }: Props) => {
  const { push } = useRouter();
  //const isSmall = useMediaQuery('(max-width: 1025px)');
  return (
    <>
        {products && products.map((product) => (
          <SliderProduct key={product._id} className="cursor-pointer" onClick={() =>
            push(`/transmitions/${product._id}`)}>
              <ProductImg
                src={product.image}
              >
                <Io.IoIosPlayCircle />
              </ProductImg>
              <ProductName>
                {product.title}
              </ProductName>
              <NewsMeta>
                By <NewsText2>{product.author.name}</NewsText2> • Abril 3 2021
              </NewsMeta>
              <NewsText>
                {product.description}
              </NewsText>
            </SliderProduct>
        ))}
    </>
  );
};
