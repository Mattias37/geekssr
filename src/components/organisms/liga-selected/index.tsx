//Imports
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  MainDiv,
  DivSignInButton,
  FormFieldMainOuter,
  FormFieldOuter,
  RegisterButton,
  ErrorDiv
} from './style';
import {
  getTeamProfileConfigInfo,
  getTeamsProfileConfig
} from '../../../redux/profile/selectors';
import { apiClient } from '../../../services/index'
import { SectionTitle } from '../../molecules/section-title'
//Components
import { NewHomeMolecule } from '../../molecules/home-new-molecule';
import { LeagueTotalScreen } from '../league-total-tabs';
import { ModalInformationLeague } from '../../organisms/modal-league-information/index';
import { Landing } from '../../molecules/landing';
import { Loader } from '../../atoms/loader';
import { Button2 } from '../../atoms/button2';
// import { SponsorSectionStyledEdit } from '../../templates/tent/styles';
import { ModalLisTeams } from '../../molecules/modal-list-teams';
//Api
import { getMyLeaguesList, getTeamProfile, getTeams } from '../../../redux/profile/action';
import { getAuth } from '../../../redux/user/selectors';
import { getUserTeams } from '../../../redux/profile/selectors';
import { getTeamsList } from '../../../redux/profile/action';
import { getSponsors } from '../../../redux/config/action';
import { getLeagueSelected, getLeagues } from '../../../redux/leagues/action';
import { getRegisterLeague , getUnRegisterLeague } from '../../../redux/leagues/action'
import {
  getLeagueLoading,
  getLeagueSelectedSelector,
} from '../../../redux/leagues/selectors';

import { ModalRapper } from '../../molecules/modal-rapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'react-app-polyfill/ie11';
import { Formik, Field, Form, FormikHelpers } from 'formik';
//import { getSponsorsSelector } from '../../../store/config/selectors';
interface Values {
  id: string;
}

export const LigaSelected = () => {
  //const isAuth = useSelector(getAuth);
  const router = useRouter();
  console.log(router.query)
  const { push } = useRouter();
  const [modalShowOne, setModalShowOne] = useState(false);
  const [error, setError] = useState('');
  const [showInformation, setShowInformation] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const isAuth = useSelector(getAuth);
  const { leagueid  } = router.query;
  const dispatch = useDispatch();
  const loading = useSelector(getLeagueLoading);
  const leagueSelected = useSelector(getLeagueSelectedSelector);
  //const sponsorSelector = useSelector(getSponsorsSelector);

  const userTeams = useSelector(getUserTeams);
  const fetch = () => {
    dispatch(getLeagueSelected('torneo-cod-mobile-20'));
    dispatch(getTeamsList());
    dispatch(getSponsors());
    dispatch(getTeams())
    dispatch(getMyLeaguesList())
    dispatch(getTeamProfile())
    // dispatch(getTeamProfile())
  };
  const profileInfo = useSelector(getTeamProfileConfigInfo);
  const profileTeams = useSelector(getTeamsProfileConfig);
  TagManager.dataLayer({
    dataLayer:{
      event: 'page_title',
      path: `/grandes-torneos-${leagueid}`
    }
  })
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //const isLarge = useMediaQuery('(min-width: 1024px)');

  const handleRegisterLiga = async () => {
    if (!isAuth) {
      dispatch(push(`/register/`));
    } else if (leagueSelected?.imRegister) {
      dispatch(getUnRegisterLeague(leagueid));
    } else {
      setModalShowOne(true);
      dispatch(getRegisterLeague(leagueid));
    }
  };


  if (loading || !leagueSelected ) { 
    return (
      <Landing>
        <Loader />
      </Landing>
    );
  }

  return (
    <>
        <MainDiv>
          <NewHomeMolecule
            img={leagueSelected?.banner || 'https://nacionbe-sports-images.s3.amazonaws.com/6793790e-da40-4655-ab86-c1b6b1924ac2.png'}
            imgLogo={leagueSelected?.image}
            leftTitle={leagueSelected?.name}
            buttonText={!isAuth ? "Crea una cuenta" : leagueSelected?.imRegister ? "SALIR DE LIGA" : "PARTICIPA EN ESTA LIGA"}
            leftDescrition={leagueSelected?.description}
            startDate={leagueSelected?.startDate}
            onclick={handleRegisterLiga}
          />
          <LeagueTotalScreen
            buttonText={!isAuth ? "Crea una cuenta" : leagueSelected?.imRegister ? "SALIR DE LIGA" : "PARTICIPA EN ESTA LIGA"}
            onclick={handleRegisterLiga}
          />
          <DivSignInButton>
            <Button2
              text={!isAuth ? "Crea una cuenta" : leagueSelected?.imRegister ? "SALIR DE LIGA" : "PARTICIPA EN ESTA LIGA"}
              edit={false}
              textcolor='#fff'
              backgroundcolor='#ff0055'
              onClick={handleRegisterLiga}
            />
          </DivSignInButton>
        </MainDiv>
        <ModalInformationLeague
          show={showInformation}
          onHide={() => setShowInformation(false)}
        />
        {/* <SponsorSectionStyledEdit /> */}
        {showTeams && (
          <>
            <ModalLisTeams
              show={showTeams}
              onHide={() => setShowTeams(false)}
              teams={userTeams || []}
              idLeague={leagueid}
            /> 
          </>
        )}
                    {isAuth && <ModalRapper
              show={modalShowOne}
              onHide={() => {
                setModalShowOne(false);
              }}>
              <div
              style={{ width: '100%', height: '300px'}}>
                {leagueSelected?.participantsModel === 'Team' ?
                  <>
                    <SectionTitle text="Inscribete" />
                    <Formik
                      initialValues={{
                        id: '',
                      }}
                      onSubmit={async (
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                      ) => {
                        try {
                          const res = await apiClient.LeagueService.getRegisterLegueByTeamId(leagueid as string, values.id)
                          console.log(res);
                          setModalShowOne(false);
                        } catch (error) {
                          setError(error.response.data.message);
                        }
                        console.log( values);
                        setSubmitting(false);
                      }}
                    >
                      <Form>
                      <Row>
                        <Col xs={12} md={12}>
                          {error && <ErrorDiv>{error}</ErrorDiv>}
                          <FormFieldMainOuter>
                            <FormFieldOuter>
                              <label>Equipos:</label>
                              <Field 
                                className='formikField' 
                                type="text" 
                                as="select"
                                id="id" 
                                name="id"
                                placeholder='' 
                                required
                              >
                                <option value="default">Escoge un equipo</option>
                                {profileTeams?.filter((team:any) => team.role === 'Administrador').map((team: any, index: number) => (
                                  <option key={index} value={team._id}>{team.name}</option>
                                ))}
                              </Field>
                            </FormFieldOuter>
                            <label>*Recuerda solo se puede inscribir equipos donde eres administrador.</label>
                          </FormFieldMainOuter>
                        </Col>
                        </Row>
                        <RegisterButton type="submit">
                          Registrar Equipo
                        </RegisterButton>
                      </Form>
                    </Formik>
                  </>
                  :
                  <>
                    {profileInfo?.gameList?.length !== 0 ? 
                      <>
                        <SectionTitle text="Inscribete" />
                        <Formik
                          initialValues={{
                            id: '',
                          }}
                          onSubmit={async (
                            values: Values,
                            { setSubmitting }: FormikHelpers<Values>
                          ) => {
                            try {
                              const res = await apiClient.LeagueService.getRegisterLegue(leagueid as string);
                              dispatch(getLeagues());
                              dispatch(getLeagueSelected(leagueid))
                              console.log(res);
                            } catch (error) {
                              setError(error.response.data.message);
                            }
                            console.log( values );
                            setSubmitting(false);
                          }}
                        >
                          <Form>
                          <Row>
                            <Col xs={12} md={12}>
                              {error && <ErrorDiv>{error}</ErrorDiv>}
                            </Col>
                            </Row>
                            <RegisterButton type="submit">
                              Registrate
                            </RegisterButton>
                          </Form>
                        </Formik>
                      </>
                      :
                      <>
                        <SectionTitle text="Error" />
                        <ErrorDiv>No cuentas con cuentas asociadas para registrarte! puedes crear una en perfil.</ErrorDiv>
                      </>
                    }
                  </>
                }
              </div>
            </ModalRapper>}
    </>
  );
};
