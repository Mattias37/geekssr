/* eslint-disable react-hooks/rules-of-hooks */
import React, {  useEffect/* , useCallback, useState */ } from 'react';
import {
  DivMainPositions,
  DivMainPositionsOuter,
  DivPositionPlayer,
  DivPositionPlayerIndex,
  DivPositionClasified,
  DivPositionNotClasified,
  Jornada
} from './style';
//import useMediaQuery from '../../../hooks/useMediaQuery';
import { SectionTitle } from '../../molecules/section-title';
import { getLeagueSelectedPositions } from '../../../redux/leagues/action';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  getLeagueSelectedLoadingSelector,
  getLeagueSelectedPositionsSelector,
} from '../../../redux/leagues/selectors';
interface Params {
  nan: string;
}
export const LeaguePositions = () => {
  const router = useRouter();
  const { leagueid } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeagueSelectedPositions(leagueid));
  }, [dispatch, leagueid]);
  const leaguePositionSelector = useSelector(
    getLeagueSelectedPositionsSelector,
  );
  const leagueLoadingSelectSelector = useSelector(
    getLeagueSelectedLoadingSelector,
  );
/*   const handleSelected = useCallback(
    (valueData: any) => {
      setDataTemp(valueData);
    },
    [setDataTemp],
  ); */

  if (leagueLoadingSelectSelector || !leaguePositionSelector) {
    return (<DivMainPositionsOuter>
              <SectionTitle text='Posiciones' />
              <DivMainPositions>
                <Jornada>Más información se agregará más adelante.</Jornada>
              </DivMainPositions>
            </DivMainPositionsOuter>);
  }

  return (
    <DivMainPositionsOuter>
      <SectionTitle text='Posiciones' />
      <DivMainPositions>
        {leaguePositionSelector.map((player: any, index: number)=>(
          <DivPositionPlayer key={`position${index}`}>
            <DivPositionPlayerIndex>{index + 1}</DivPositionPlayerIndex>
            <h3>{player.participant.username}-{index < 8 && 'Clasificado'}</h3>
            {index < 8 ? <DivPositionClasified>
              {player.points}puntos
              </DivPositionClasified>: <DivPositionNotClasified>{player.points}puntos</DivPositionNotClasified>}
          </DivPositionPlayer>
        ))}
      </DivMainPositions>
    </DivMainPositionsOuter>
  );
};
