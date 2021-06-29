import React from 'react';
import { ContainerHome, RowStylesHome, WraperHomeBanner, ColStylesHome } from './styles';
import{ News } from '../../molecules/news-item';

interface Props {
  news: any;
}

export const NewHomeMolecule = (props: Props) => {
  return (
    <WraperHomeBanner img={''}>
      <ContainerHome>
        <RowStylesHome>
          <ColStylesHome md="8">
            <News news={props.news?.sponsors[0]} />
          </ColStylesHome>
          <ColStylesHome id="col-right" md="4">
            <News news={props.news?.sponsors[1]} />
            <News news={props.news?.sponsors[2]} />
          </ColStylesHome>
        </RowStylesHome>
      </ContainerHome>
    </WraperHomeBanner>
  );
};
