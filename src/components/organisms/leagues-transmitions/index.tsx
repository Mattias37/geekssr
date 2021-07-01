import React, { useEffect } from 'react';
import { TransBody, ContainerTable, TransBodyChild, Jornada } from './styles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector  } from 'react-redux';
import { getLeagueSelectedTransmitionsSelector } from '../../../redux/leagues/selectors';
import { RowSliderNews } from '../../organisms/row-slider-tranmission';
import { getLeagueSelectedTransmition } from '../../../redux/leagues/action';
import { SectionTitle } from '../../molecules/section-title';

export const LeaguesTransmitions = () => {
  const router = useRouter();
  const { leagueid } = router.query;
  const dispatch = useDispatch();

  const leagueTransmitionsSelector = useSelector(getLeagueSelectedTransmitionsSelector);
  console.log(leagueTransmitionsSelector)

  useEffect(() => {
    dispatch(getLeagueSelectedTransmition(leagueid));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leagueid]);

   if (!leagueTransmitionsSelector || leagueTransmitionsSelector.length === 0) {
    return (
      <ContainerTable>
        <SectionTitle text='transmisiones' />
        <TransBody>
          <Jornada>Más adelante se agregaran transmisiones.</Jornada>
        </TransBody>
      </ContainerTable>
    );
  } 

  return (
    <ContainerTable>
      <SectionTitle text='transmisiones' />
      <TransBody>
        <TransBodyChild>
          <RowSliderNews products={leagueTransmitionsSelector}/>
        </TransBodyChild>
      </TransBody>
    </ContainerTable>
  );
};
