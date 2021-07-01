import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLeagueSelectedLoadingSelector,
  getAllParticipantsSelector
} from '../../../redux/leagues/selectors';
import { getLeagueParticipants } from '../../../redux/leagues/action';
import { TournamentsGameCard } from '../../molecules/tournaments-game-card';
import { SectionTitle } from '../../molecules/section-title';
import { DivParticipante, DivMainParticipante, DivMainParticipanteOuter } from './style';

export const  LeagueParticipantsScreen = () => {

  const router = useRouter();
  const { leagueid } = router.query;
  const dispatch = useDispatch();
  const leagueParticipants = useSelector(getAllParticipantsSelector);
  const leagueLoadingSelectSelector = useSelector(
    getLeagueSelectedLoadingSelector,
  );
  useEffect(()=>{
    dispatch(getLeagueParticipants(leagueid));
  }, [dispatch, leagueid]);

  if (leagueLoadingSelectSelector || !leagueParticipants) {
    return (
      <DivMainParticipanteOuter>
          <SectionTitle text="Cargando datos..."/>
      </DivMainParticipanteOuter>
    );
  }
  return (
    <DivMainParticipanteOuter>
      <SectionTitle text="Participantes"/>
      <DivMainParticipante>
          {leagueParticipants.length === 0
          ?
          <SectionTitle text="No hay jugadores inscritos"/>
          :
          leagueParticipants.map((participant, index) => (
            <DivParticipante key={index}>
                <TournamentsGameCard
                  key={index}
                  image={ participant?.user?.photo || 'https://nacionbe-sports-images.s3.amazonaws.com/dc134a1f-c140-4764-b176-d3041e253056.png'}
                  gameName={participant?.user?.username}
                  description={participant?.gameAccount?.username}
                />
            </DivParticipante>
            ))}
      </DivMainParticipante>
    </DivMainParticipanteOuter>
  )
}
