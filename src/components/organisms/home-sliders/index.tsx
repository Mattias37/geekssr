import React from 'react';
//import { ColumnSlider } from '../colum-slider';
import { RowSlider } from '../row-slider';
import { SlidersContainer, WrapperContainer } from './styles';
import { SectionTitle } from '../../molecules/section-title';

interface Props {
  productList: any[];
  imageList?: ImageList[];
}

export const HomeSlidersProducts = ({ imageList, productList }: Props) => {
  return (
    <WrapperContainer>
      <SectionTitle text='Últimos Productos'/>
      <SlidersContainer>
        {/* <ColumnSlider images={imageList} /> */}
        <RowSlider products={productList} />
      </SlidersContainer>
    </WrapperContainer>
  );
};
