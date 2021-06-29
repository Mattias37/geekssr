import React, { useState } from 'react';
import { Button,  Modal,/* Image, Col, Row */ } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, FormikHelpers } from 'formik';


//Components
import { Loader } from '../../atoms/loader';
import { Button2 } from '../../atoms/button2';
//Apis
import { selectTeamService } from '../../../redux/profile/action';
import { updateMePhoto, updateMe } from '../../../redux/user/action';
import { getTeamProfileConfigInfo } from '../../../redux/profile/selectors';

import {
  Container,
  Header,
  PhotoProfile,   
  Profile,
  ProfileInfo,
  CountryImg,
  SelectTeam,
  SelectPhoto,
  RowTeam,
  RowTeamPhoto,
  RowTeamName,
  RowTeamRadio,
  StyledPriceTop,
  FormFieldMainOuter,
  FormFieldOuter
} from './styles';

interface Props {
  user: any;
}
interface Values {
  fullName: string;
  country: string;
  city: null,
  username: string;
  email: string;
  birthdate: string;
}

/* 
        "fullName": "Dev Nacion E-Sports",
        "photo": "https://www.wizcase.com/wp-content/uploads/2020/06/fortnite-logo.jpg",
        "role": "5e601e82b3f2a43b5477b647",
        "isActive": false,
        "onPreRegister": true,
        "tournaments": [],
        "country": "Colombia",
        "city": null,
        "facebook": null,
        "instagram": null,
        "teamSelected": "605d33256ac9a518b564b99d",
        "username": "Developer User",
        "email": "dev@mail.com",
        "birthdate": "10/10/2010",
        "gameList": [],
        "updatedAt": "2021-04-23T15:59:15.759Z",
        "createdAt": "2021-03-12T02:31:00.677Z"
*/
export const HeaderLeague = (props: Props) => {
  const profileInfo = useSelector(getTeamProfileConfigInfo);
  const dispatch = useDispatch();
  const [team, setTeam] = useState<ProfileTeams | undefined>();
  const [modals, setModals] = useState({
    selectTeam: false,
    createTeam: false,
  });
  const [updateMeBool, setUpdateMeBool] = useState(false)

  if (!profileInfo) {
    return <Loader />;
  }
  const handleClickPhoto1 = (event: any) => {
    const fileInput = document.getElementById('file');
    fileInput?.click();
  };
  const handleClickPhoto = (event: any) => {
    const image = event.target.files[0];
    console.log(image);
    dispatch(updateMePhoto(image));
  };
  const handleUpdateMeInfo = (values: Values) => {
    if(updateMeBool === false){
      console.log('Edit ifno')
      setUpdateMeBool(!updateMeBool)
    } else {
      console.log('send info to backend', values);
      dispatch(updateMe(values));
      setUpdateMeBool(!updateMeBool);
    }
  }

  const handleHide = () => {
    setModals((modals) => ({ ...modals, selectTeam: false }));
  };

  const handleChangeTeam = (team: any) => {
    setTeam(team);
  };

/*   const handleClickSelect = () => {
    setModals((modals) => ({
      ...modals,
      selectTeam: true,
    }));
  }; */

  const handleSubmit = () => {
    if (team) {
      dispatch(selectTeamService(team._id));
    }
    setModals((modals) => ({
      ...modals,
      selectTeam: false,
    }));
  };

  return (
    <>
        <Formik
          initialValues={props.user}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              handleUpdateMeInfo(values);
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
      <Header>
        <Container>
          <Profile>
            <StyledPriceTop>
              <PhotoProfile
                photo={
                  props.user?.photo ||
                  'https://dev.nacionesports.com/static/media/01.cff48cd1.png'
                }>
                <input className="d-none" type="file" name="file" id="file" onChange={handleClickPhoto} />
                <SelectPhoto type="button" onClick={handleClickPhoto1} />
              </PhotoProfile>
            </StyledPriceTop>
            <ProfileInfo>
              {updateMeBool ? 
              <FormFieldMainOuter>
                <FormFieldOuter>
                  <label>Usuario:</label>
                  <Field className='formikField' id="username" name="username" placeholder={props.user?.username || 'Completa tu perfil'}/>
                </FormFieldOuter>
              </FormFieldMainOuter>
              :<h3>{props.user?.username || 'Completa tu perfil' }</h3>}
              <div>
                <CountryImg
                  src={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png'
                  }
                />
                <h4>{profileInfo?.country || 'Colombia'}</h4>
              </div>
            </ProfileInfo>
            <ProfileInfo>
              {updateMeBool ? 
              <FormFieldMainOuter>
                <FormFieldOuter>
                  <label>Ciudad</label>
                  <Field className='formikField' id="city" name="city" placeholder={props.user?.city || 'Completa tu perfil'} />
                </FormFieldOuter>
              </FormFieldMainOuter>
              : <h4>Ciudad: {props.user?.city || 'Completa tu perfil'}</h4>}
              {updateMeBool ? 
              <FormFieldMainOuter>
                <FormFieldOuter>
                  <label>Celular</label>
                  <Field className='formikField' id="phone" name="phone" placeholder={props.user?.phone|| 'Completa tu perfil'} />
                </FormFieldOuter>
              </FormFieldMainOuter>
              : <h4>Celular: {props.user?.phone || 'Completa tu perfil'}</h4>}
              {updateMeBool ? 
              <FormFieldMainOuter>
                <FormFieldOuter>
                  <label>Correo:</label>
                  <Field className='formikField' id="email" name="email" placeholder={props.user?.email || 'Completa tu perfil'} type="email"/>
                </FormFieldOuter>
              </FormFieldMainOuter>
              : <h4>Correo: {props.user?.email || 'Completa tu perfil'}</h4>} 
            </ProfileInfo>
          </Profile>
          <SelectTeam>
            <Button2 
              text={updateMeBool ? "GUARDAR" : "EDITA TU PERFIL"} 
              edit={true} 
              textcolor='#fff'
              backgroundcolor='#000' 
              type="submit"
              onClick={() => {console.log('cliked')}}
            />
          </SelectTeam>

        </Container>
      </Header>
            </Form>
          </Formik>
      <Modal
        centered
        show={modals.selectTeam}
        onHide={handleHide}
        animation={false}>
        <Modal.Header className="d-block bg-geek">
          <Modal.Title className="text-center">SELECCIONAR EQUIPO</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-gray">
          {profileInfo.teams.map((team) => (
            <RowTeam key={team._id}>
              <RowTeamPhoto src={team.icon} />
              <RowTeamName htmlFor={`team${team._id}`}>{team.name}</RowTeamName>
              <RowTeamRadio
                onChange={() => handleChangeTeam(team)}
                defaultValue={team._id}
                type="radio"
                name="team"
                id={`team${team._id}`}
              />
            </RowTeam>
          ))}
        </Modal.Body>
        <Modal.Footer className="bg-gray">
          <Button onClick={handleHide} type="button" className="bg-geek ff-bn">
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            type="button"
            className="bg-geek ff-bn">
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
