import React, { useEffect } from 'react';
import { TransBody, ContainerTable, TransBodyChild } from './styles';
import { useDispatch,useSelector } from 'react-redux';
import { getTransmitionSelector } from '../../../redux/config/selectors';
import { RowSliderNews } from '../../organisms/row-slider-tranmission';
import { getTransmitions } from '../../../redux/config/action';
import { SectionTitle } from '../../molecules/section-title';

export const LeaguesTransmitions = () => {
  const dispatch = useDispatch();
 
  const leagueTransmitionsSelector = useSelector(getTransmitionSelector);
console.log(leagueTransmitionsSelector);
  useEffect(() => {
    dispatch(getTransmitions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 if (!leagueTransmitionsSelector) {
    return <SectionTitle text='Cargando...' />;
  } 


  return (
    <ContainerTable>
      <SectionTitle text='Canales de Streaming' />
      <TransBody>
        <TransBodyChild>
          <RowSliderNews products={leagueTransmitionsSelector}/>
        </TransBodyChild>
      </TransBody>
    </ContainerTable>
  );
};
