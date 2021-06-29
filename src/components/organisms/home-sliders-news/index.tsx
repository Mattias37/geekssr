import React from 'react';
import { RowSliderNews } from '../row-slider-news'
import { SlidersContainer, WrapperContainer } from './styles';
import { SectionTitle } from '../../molecules/section-title';


interface Props {
  publicationsList: any[] | undefined;
}



export const HomeSlidersNews = ({  publicationsList }: Props) => {
  return (
    <WrapperContainer>
      <SectionTitle text='Noticias recientes' />
      <SlidersContainer>
         <RowSliderNews publications={publicationsList} /> 
      </SlidersContainer>
    </WrapperContainer>
  );
};
