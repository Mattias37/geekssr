import React, { useState, useEffect } from 'react';
//import NumberFormat from 'react-number-format';
import format from 'date-fns/format';
import { es } from 'date-fns/locale';
import { apiClient } from '../../../services/index'
import { SectionTitle } from '../../molecules/section-title'
import {
  ContainerBanner,
  ImageLigasLogo,
  ContainerInner,
  ContainerInnerRow,
  ContainerInnerRowTextBold,
  ContainerInnerRowTitle,
  FormFieldMainOuter,
  FormFieldOuter,
  RegisterButton,
  ErrorDiv
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { 
  getUnRegisterLeague, 
  /* getRegisterLeague, */
  getLeagues,
  getLeagueSelected
 } from '../../../redux/leagues/action';
import {
  getTeamProfileConfigInfo,
  getTeamsProfileConfig
} from '../../../redux/profile/selectors';
import { getMyLeaguesList, getTeamProfile, getTeams } from '../../../redux/profile/action'
import { getAuth } from '../../../redux//user/selectors';
import { ModalRapper } from '../../molecules/modal-rapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'react-app-polyfill/ie11';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  id: string;
}
interface Props {
  id: string;
  name: string;
  image: string;
  game: string;
  awards: any[];
  registrationStartDate: string; 
  registrationEndDate: string;
  imRegister: boolean;
  remainingPlaces: number;
  participantType: string;
}
export const BannerLigas = (props: Props) => {
  const { push } = useRouter();
  const [modalShowOne, setModalShowOne] = useState(false);
  const [error, setError] = useState('');
  const isAuth = useSelector(getAuth);
  const dispatch = useDispatch();
  const profileInfo = useSelector(getTeamProfileConfigInfo);
  const profileTeams = useSelector(getTeamsProfileConfig);

  useEffect(() => {
    dispatch(getTeams())
    dispatch(getMyLeaguesList())
    dispatch(getTeamProfile())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleInfoLiga = async () => {
    await dispatch(push(`/ligas-selected/${props.id}`));
  };
  const handleRegister = async () => {
    await dispatch(push(`/register/`));
  };
  const handleRegisterLiga = async () => {
    setModalShowOne(true);
    // dispatch(getRegisterLeague(props.id)); 
  };
  const handleUnRegisterLiga = async () => {
    dispatch(getUnRegisterLeague(props.id));
  };
  return (
    <ContainerBanner>
      <ContainerInner>
          <ImageLigasLogo onClick={handleInfoLiga} src={props.image}/>
        <ContainerInnerRow>
          <ContainerInnerRowTitle>
            {props.name}
          </ContainerInnerRowTitle>
        </ContainerInnerRow>
        <ContainerInnerRow>
          <ContainerInnerRowTextBold>
            Juego:
          </ContainerInnerRowTextBold>
          {props.game}
        </ContainerInnerRow>
        <ContainerInnerRow>
          <ContainerInnerRowTextBold>
            Cupos restantes:
          </ContainerInnerRowTextBold>
          {props.remainingPlaces}
        </ContainerInnerRow>
        <ContainerInnerRow>
          <ContainerInnerRowTextBold>
            Inicio/Cierre:
          </ContainerInnerRowTextBold>
          {format(new Date(props.registrationStartDate), " MMMM d','yy", { locale: es,
              })}-
          {format(new Date(props.registrationEndDate), " MMMM d','yy", {
                locale: es,
              })}
        </ContainerInnerRow>
        {props.awards.map(a => (
          <ContainerInnerRow key={a.label}>
            <ContainerInnerRowTextBold>{`${a.label}`}</ContainerInnerRowTextBold>
            <ContainerInnerRowTextBold>{`${a.award}`}</ContainerInnerRowTextBold>
          </ContainerInnerRow>))}
        <button onClick={handleInfoLiga} id="styles-button2">Información</button>
        {!isAuth ?
          <button onClick={handleRegister} id="styles-button">Crea tu cuenta</button>
          :
          !props.imRegister ? 
          <button onClick={handleRegisterLiga} id="styles-button">Registrate</button> 
          :
          <button onClick={handleUnRegisterLiga} id="styles-button">Salir de Liga</button>
          }
      </ContainerInner>
      {isAuth && <ModalRapper
              show={modalShowOne}
              onHide={() => {
                setModalShowOne(false);
              }}>
              <div
              style={{ width: '100%', height: '300px'}}>
                {props?.participantType === 'Team' ?
                  <>
                    <SectionTitle text={`Inscribete a este liga de equipo: ${props.name}`} />
                    <Formik
                      initialValues={{
                        id: '',
                      }}
                      onSubmit={async (
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                      ) => {
                        try {
                          const res = await apiClient.LeagueService.getRegisterLegueByTeamId(props.id, values.id)
                          console.log(res);
                          setModalShowOne(false);
                          dispatch(getLeagues());
                          dispatch(getLeagueSelected(props.id))
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
                              const res = await apiClient.LeagueService.getRegisterLegue(props.id)
                              dispatch(getLeagues());
                              dispatch(getLeagueSelected(props.id))
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
    </ContainerBanner>
  );
};
