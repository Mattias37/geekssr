import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import { Card, Col, Container, Row } from 'react-bootstrap';
import MasterLayout from '../../components/templates/MaterLayout';
import { LeagueProfileTab } from '../../components/organisms/league-profile-tab';
import { HeaderLeague } from '../../components/organisms/header-league';
//API
import { getTeamProfile, getTeams } from '../../redux/profile/action';
import { getProfile, getAuth } from '../../redux/user/selectors';

const Banner = styled.div`
  height: auto;
  color: white;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  min-height: 70vh;
  padding-left: 2rem;
  padding-top: 3rem;
  padding-right: 2rem;
  color: #000;
`;


const Streaming = () => {    
  TagManager.dataLayer({
    dataLayer:{
      event: 'page_title',
      path: `/streaming-home`
    }
  })
  const { push } = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuth);
  const user = useSelector(getProfile);
  useEffect(() => {
    dispatch(getTeamProfile());
    dispatch(getTeams());
  }, [dispatch]);
  if(!isAuth){
    push('/');
  }
    return (
        <>
        <Head>
          <title>Nación eSports | Streaming</title>
          <meta name="description" content="Generated by create next app" />
          <meta property="og:description" content="¿Quieres ser jugador E-Sports? Registrate en la plataforma, es gratis y en pocos pasos" />
          <meta property="og:title" content="Nacion E-Sports | Atrevete a unirte al mundo de E-Sports" />
          <meta property="og:image" content="http://localhost:3000/fine.png" />
          <link rel="icon" href="/images/01.png" />
        </Head>
        <div>
          <Banner>
            <HeaderLeague user={user} />
          </Banner>
          <BodyContainer>
            <LeagueProfileTab />
          </BodyContainer>
        </div>
    </>
    )
}

Streaming.Layout = MasterLayout;
export default Streaming
