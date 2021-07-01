import React, { useEffect /*, useState , useCallback  */} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter} from 'next/router';
import { SectionTitle } from '../../molecules/section-title';
//import useMediaQuery from '../../../hooks/useMediaQuery';
import { getLeagueSelectedFinals } from '../../../redux/leagues/action';
import {
  getLeagueSelectedLoadingSelector,
  getLeagueSelectedFinalsSelector,
} from '../../../redux/leagues/selectors';
import {
  RedSquare,
  Jornada,
  MainBarkets,
  MainBarketsChild,
  MainBarketsChildInner,
  MatchDiv
} from './styles';


export const LeagueBrackets = () => {
  const router = useRouter();
  const { leagueid } = router.query;
  const dispatch = useDispatch();

  const leagueFinalsSelector = useSelector(getLeagueSelectedFinalsSelector);
  const leagueLoadingSelectSelector = useSelector(
    getLeagueSelectedLoadingSelector,
  );
/*   const handleSelected = useCallback(
    (valueData: any) => {
      setMatches(valueData);
    },
    [setMatches],
  ); */

  useEffect(() => {
    dispatch(getLeagueSelectedFinals(leagueid));
  }, [dispatch, leagueid]);

  if (leagueLoadingSelectSelector) {
    return( <>
        <SectionTitle text='Finales' />
        <MainBarkets>
          <Jornada>Cargando...</Jornada>
        </MainBarkets>
        </>); 
  }
  if (!leagueFinalsSelector) {
    return <Jornada>Todavía no hay información</Jornada>;
  }

  return (
    <>
      <SectionTitle text='Finales' />
        <MainBarkets>
          {leagueFinalsSelector.length === 0 ? <Jornada>Más información se agregará más adelante</Jornada> :leagueFinalsSelector.map((nivel, index) => { 
            return(
              <MainBarketsChild key={index}>
                {nivel.label}
                <MainBarketsChildInner>
                  {nivel.versus.map((team: any, index: number) => (
                    <MatchDiv
                      key={index}
                      /* xs={12}
                      style={{ color: 'white', display: 'flex', maxWidth:`calc(100vw / ${nivel.versus.length})` }}
                      className="" */>
                      <RedSquare borderLeft={true} className="mr-1 p-2" rounded>
                        <h5>{team?.participantA?.username || '-'}</h5>
                      </RedSquare>
                      <h5 className="my-auto" style={{color: '#000', fontFamily: 'Bebas Neue'}}>vs</h5>
                      <RedSquare borderRight={true} className="ml-2 p-2" rounded>
                        <h5>{team?.participantB?.username || '-'}</h5>
                      </RedSquare>
                    </MatchDiv>
                  ))}
              </MainBarketsChildInner>
            </MainBarketsChild>
        )
        })}
      </MainBarkets>
    </>
  );
};