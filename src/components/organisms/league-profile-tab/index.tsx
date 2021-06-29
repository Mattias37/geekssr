import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify'
import { apiClient } from '../../../services';
import { GameProfile } from '../../molecules/game-profile-info';
import {
  getTeamProfileConfigInfo,
  getAllMyLeagues,
  getTeamsProfileConfig
} from '../../../redux/profile/selectors';
import { Loader } from '../../atoms/loader';
import { AddMoreModal } from '../profile-add-modal';
import { AddTeamModal } from '../profile-add-team-modal'; 
import { useDispatch, useSelector } from 'react-redux';
import { ModalRapper } from '../../molecules/modal-rapper';
import { getSponsors } from '../../../redux/config/action';
import { deleteAccountGame, getMyLeaguesList, getTeams } from '../../../redux/profile/action'
import { SectionTitle } from '../../molecules/section-title';
import { Button2 } from '../../atoms/button2';
import { 
  GameAccountContainer, 
  UsernameContainer, 
  ProfileContainer, 
  DeleteButton, 
  ProfileContainerTeams,
  ProfileContainerTeams2,
  ProfileContainerHeader
} from './styles';

export const LeagueProfileTab = () => {
  const [modalShowTwo, setModalShowTwo] = useState(false);
  const [modalShowOne, setModalShowOne] = useState(false);
  const [initialData, setInitialData] = useState(undefined);
  const [myCourses, setMyCourses] = useState([]);
  const profileInfo = useSelector(getTeamProfileConfigInfo);
  const profileTeams = useSelector(getTeamsProfileConfig);
  const myLeagues = useSelector(getAllMyLeagues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSponsors());
    dispatch(getMyLeaguesList());
    handleGetMyCourse()
  }, [dispatch]);

  const selectGameAccount = (initialData: any) => {
    setInitialData(initialData);
    setModalShowTwo(true);
  }

  const deleteGameAccount = async (gameAccountId: string) => {
    await dispatch(deleteAccountGame(gameAccountId));
  }

  const handleGetMyCourse = async () => {
      // unregister
      try {
        const res = await apiClient.CourseService.getMyCourses();
        console.log('My courses', res.data.data);
        setMyCourses(res.data.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
  };

  if (!profileInfo || !profileTeams) {
    return <Loader />;
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>
                <ProfileContainer>
                  <SectionTitle text="Sobre mi" />
                  <p>Lalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  <Button2
                    text="EDITA BIO"
                    edit={true}
                    textcolor='#fff'
                    backgroundcolor='#ff0055'
                    onClick={() => toast.success('Aqui podras editar tu descripción / Próximamente disponible')}
                  />
                </ProfileContainer>
              </Col>
              <Col>
                <ProfileContainer>
                  <SectionTitle text='Cuentas asociadas' />
                  {profileInfo.gameList?.length === 0 || !profileInfo.gameList ?
                    'No tienes ninguna cuenta asociada'
                    : (profileInfo.gameList?.map((cuentaAsociada, index) => (
                      <GameAccountContainer key={index}>
                        <UsernameContainer onClick={() => selectGameAccount({
                          username: cuentaAsociada.username,
                          gameId: cuentaAsociada.gameId,
                          gameName: cuentaAsociada.gameName,
                          gameAccountId: cuentaAsociada.gameAccountId
                        })}>{cuentaAsociada.username}</UsernameContainer>
                        <span>{cuentaAsociada.gameName}</span>
                        <DeleteButton onClick={() => deleteGameAccount(cuentaAsociada.gameAccountId)}>
                          X
                        </DeleteButton>
                      </GameAccountContainer>
                    )))}
                  <Button2
                    text="AGREGAR UNA CUENTA"
                    edit={false}
                    textcolor='#fff'
                    backgroundcolor='#ff0055'
                    onClick={() => setModalShowTwo(true)}
                  />
                </ProfileContainer>
              </Col>
            </Row>
            <ProfileContainer>
              <ProfileContainerHeader>
              <SectionTitle text='Equipos' />
                {profileTeams.length > 0 && 
                <Button2 
                  text="AGREGAR MÁS EQUIPOS" 
                  edit={false} 
                  textcolor='#ff0055'
                  backgroundcolor='#fff' 
                  onClick={() => setModalShowOne(true)}
                /> }
              </ProfileContainerHeader>
                {profileTeams.length > 0 ?
                  <ProfileContainerTeams>
                    {profileTeams?.map((item, index) => (
                    <GameProfile
                      key={index}
                      handle={(data: any) => {
                        setInitialData(data);
                        setModalShowOne(true);
                      }}
                      img={item.icon || 'https://nacionbe-sports-images.s3.amazonaws.com/e6a2e6b7-913b-4eb6-86e8-3f388487bc36.jpeg'}
                      gameId={item._id}
                      gameAccountId={item._id}
                      gameName={item.name}
                      username={item.name}
                    />
                    ))}
                    </ProfileContainerTeams>
                  :
                  <ProfileContainerTeams2>
                    <Button2 
                      text="AGREGAR MÁS EQUIPOS" 
                      edit={false} 
                      textcolor='#fff'
                      backgroundcolor='#ff0055' 
                      onClick={() => setModalShowOne(true)}
                    />
                  </ProfileContainerTeams2> }
                
            </ProfileContainer>
            <Row>
              <Col>
                <ProfileContainer>
                  <SectionTitle text='Torneos Inscritos' />
                  <ul>
                    {myLeagues.length === 0
                      ?
                      'No te has inscrito a ninguna liga'
                      :
                      myLeagues?.map((myLeague: any, index: number) => (
                        <li key={index}>{myLeague.name}</li>
                      ))}
                  </ul>
                </ProfileContainer>
              </Col>
              {/* <Col>
            <ProfileContainer>
              <SectionTitle text='Torneos de Comunidad' />
              <ul>
                {true
                ?
                'No te has inscrito a ningún torneo / Proximamente disponible'
                :
                myLeagues?.map((myLeague: any, index: number) => (
                  <li key={index}>{myLeague.name}</li>
                ))}
              </ul>
                <Button2 
                  text="AGREGAR MÁS EQUIPOS" 
                  edit={false} 
                  textcolor='#fff'
                  backgroundcolor='#ff0055' 
                  onClick={() => toast.success('Aqui podrás inscribirte a torneos o hacerles seguimiento / Próximamente disponible')}
                /> 
            </ProfileContainer>
            </Col> */}
               <Col>
            <ProfileContainer>
              <SectionTitle text='Cursos Inscritos' />
              <ul>
                { myCourses && myCourses.length === 0 
                ?
                'No te has inscrito a ningún curso'
                :
                myCourses?.map((myLeague: any, index: number) => (
                  <li key={index}>{myLeague.name}</li>
                ))}
              </ul>
              {/*   <Button2 
                  text="CREA TU PROPIO TORNEO" 
                  edit={false} 
                  textcolor='#fff'
                  backgroundcolor='#ff0055' 
                  onClick={() => toast.success('Aqui podrás inscribirte a cursos / Próximamente disponible')}
                />  */}
            </ProfileContainer>
            </Col>
              {/* <Col>
            <ProfileContainer>
              <SectionTitle text='Streaming' />
              <ul>
                {true 
                ?
                'No estas sigiendo canales de streaming'
                :
                myLeagues?.map((myLeague: any, index: number) => (
                  <li key={index}>{myLeague.name}</li>
                ))}
              </ul>
                <Button2 
                  text="SUBE UNA TRANSMICIÓN" 
                  edit={false} 
                  textcolor='#fff'
                  backgroundcolor='#ff0055' 
                  onClick={() => toast.success('Aqui podrás seguir canales de streaming/ Próximamente disponible')}
                /> 
            </ProfileContainer>
            </Col> */}
              <Col>
                <ProfileContainer>
                  <SectionTitle text='Tienda' />
                  <ul>
                    <li>Mis Pedidos</li>
                    <li>Mis Direcciones</li>
                    <li>Mis Métodos de pago</li>
                  </ul>
                </ProfileContainer>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ModalRapper
        show={modalShowOne}
        onHide={() => {
          setModalShowOne(false);
        }}>
        <AddTeamModal
          onHide={() => {setModalShowOne(false); dispatch(getTeams());}}
          initialData={initialData} />
      </ModalRapper>
      <ModalRapper
        show={modalShowTwo}
        onHide={() => {
          setInitialData(undefined);
          setModalShowTwo(false);
        }}>
        <AddMoreModal initialData={initialData} />
      </ModalRapper>
    </>
  );
};
