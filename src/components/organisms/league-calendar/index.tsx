import React, { useEffect } from 'react';
import { DivMainCalendarOuter } from './style';
import { ArticleCalendar } from '../../organisms/calendar-grid-tournament';
import { SectionTitle } from '../../molecules/section-title';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter} from 'next/router';
import {
  getLeagueSelectedCalendarSelector,
  getLeagueSelectedLoadingSelector,
  getAllPhasesSelector,
} from '../../../redux/leagues/selectors';
import { getLeagueSelectedCalendar, getPhases } from '../../../redux/leagues/action';

export const LeagueCalendar = () => {
  const router = useRouter();
  const { leagueid } = router.query; 
  const dispatch = useDispatch();

  const phasesSelector = useSelector(getAllPhasesSelector);
  const leagueCalendarSelector = useSelector(getLeagueSelectedCalendarSelector);
  const leagueLoadingSelectSelector = useSelector(
    getLeagueSelectedLoadingSelector,
  );

  useEffect(() => {
    dispatch(getPhases(leagueid));
    dispatch(getLeagueSelectedCalendar(leagueid));
  }, [dispatch, leagueid]);

  if (leagueLoadingSelectSelector || !phasesSelector) {
    return (
      <DivMainCalendarOuter>
        <SectionTitle text='El calendario en este momento no tiene fechas.'/>
      </DivMainCalendarOuter>
    );
  }

  return (
    <DivMainCalendarOuter>
      <SectionTitle text='Calendario'/>
      <ArticleCalendar phasesSelectorData={phasesSelector} title="" grid={[]} type={2}  />
    </DivMainCalendarOuter>
  );
};
