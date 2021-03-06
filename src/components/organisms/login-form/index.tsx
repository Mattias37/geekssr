import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Field, } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { SectionTitle } from '../../molecules/section-title';
import { apiClient } from '../../../services';
import { loginUser } from '../../../redux/user/action';
import { getErrors, getAuth } from '../../../redux/user/selectors';
import { loginValidation, emailValidation, newPasswordValidation } from './login-validation';
import {
  RegisterButton,
  LoginTextButtonStyled,
  FormFieldMainOuter,
  FormFieldOuter,
  ErrorDiv
} from './styles';
import {  useRouter } from 'next/router';

const initialValues = {};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [screen, setScreen] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const isAuth = useSelector(getAuth);
  const errorsAuth = useSelector(getErrors);
  const handleSubmit = useCallback(
    async (values) => {
      await dispatch(loginUser(values));
    },
    [dispatch],
  );
  const handleSubmitEmail = useCallback(
    async (values) => {
      // await dispatch(loginUser(values));
      try {
        const { data } = await apiClient.AuthService.passwordRecoveryEmail(values.email);
        console.log(data);
        setMessage(data.message)
        setScreen(2);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );
  const handleResetEmail = useCallback(
    async (values) => {
      // await dispatch(loginUser(values));
      try {
        const { data } = await apiClient.AuthService.changePassword(values.recoveryCode, values.newPassword);
        console.log(data);
        setMessage(data.message)
        setScreen(0);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );
  useEffect(() => {
    if(isAuth) {router.push('/profile')}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])
  if(screen === 0) {return (
    <Formik 
      initialValues={initialValues}
      validationSchema={loginValidation}
      onSubmit={handleSubmit}> 
      {({ errors, isValid, submitForm }) => {
          const errorMessage = Object.entries(errors);
        return (
        <Container fluid>
        <SectionTitle text={message === '' ? 'Ingrese con sus credenciales.' : message} />
          {errorMessage.map((error, index) => (
              <ErrorDiv key={index}><span role='img' aria-label="error">????</span>{error.toString()}</ErrorDiv>
            ))}
          {errorsAuth && <ErrorDiv><span role='img' aria-label="error">????</span>{errorsAuth.data.message}</ErrorDiv>}
          <Row>
          <Col xs={12} md={12}>
            <FormFieldMainOuter>
              <FormFieldOuter>
                <label>Correo:</label>
                <Field 
                  className='formikField' 
                  type="email" id="email" 
                  name="email" 
                  placeholder='Correo electr??nico' 
                  required
                />
              </FormFieldOuter>
            </FormFieldMainOuter>
          </Col>
          <Col xs={12} md={12}>
            <FormFieldMainOuter>
              <FormFieldOuter>
                <label>Contrase??a:</label>
                <Field 
                  className='formikField' 
                  type="password"
                  name="password"
                  required
                  placeholder="*********"
                />
              </FormFieldOuter>
            </FormFieldMainOuter>
          </Col>
          </Row>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}>
            <RegisterButton disabled={false} onClick={submitForm}>
              {false ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                'INICIAR SESI??N'
              )}
            </RegisterButton>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <CheckBoxLogin color="white" label="RECORDARME" /> */}
            <LoginTextButtonStyled size="12px" color="#ff0055" onClick={() => setScreen(1)}>
              OLVID?? MI CONTRASE??A
            </LoginTextButtonStyled>
          </div>
        </Container>
      )}}
    </Formik>
  );
} else if (screen === 1) {
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={emailValidation}
      onSubmit={handleSubmitEmail}> 
      {({ errors, isValid, submitForm }) => {
          const errorMessage = Object.entries(errors);
        return (
        <Container fluid>
          <SectionTitle text='Correo con c??digo para recuperar contrase??a' />
          {errorMessage.map((error, index) => (
              <ErrorDiv key={index}><span role='img' aria-label="error">????</span>{error.toString()}</ErrorDiv>
            ))}
          {errorsAuth && <ErrorDiv><span role='img' aria-label="error">????</span>{errorsAuth.data.message}</ErrorDiv>}
          <Row>
          <Col xs={12} md={12}>
            <FormFieldMainOuter>
              <FormFieldOuter>
                <label>Correo:</label>
                <Field 
                  className='formikField' 
                  type="email" id="email" 
                  name="email" 
                  placeholder='Correo electr??nico' 
                  required
                />
              </FormFieldOuter>
            </FormFieldMainOuter>
          </Col>
          </Row>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}>
            <RegisterButton disabled={false} onClick={submitForm}>
              {false ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                'RECIBIR CORREO'
              )}
            </RegisterButton>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <CheckBoxLogin color="white" label="RECORDARME" /> */}
            <LoginTextButtonStyled size="12px" color="#ff0055" onClick={() => setScreen(0)}>
              VOLVER A LOGIN
            </LoginTextButtonStyled>
          </div>
        </Container>
      )}}
    </Formik>
  );
} else {
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={newPasswordValidation}
      onSubmit={handleResetEmail}> 
      {({ errors, isValid, submitForm }) => {
          const errorMessage = Object.entries(errors);
        return (
        <Container fluid>
          <SectionTitle text={message === '' ? 'Ingrese c??digo con nueva contrase??a.' : message} />
          {errorMessage.map((error, index) => (
              <ErrorDiv key={index}><span role='img' aria-label="error">????</span>{error.toString()}</ErrorDiv>
            ))}
          {errorsAuth && <ErrorDiv><span role='img' aria-label="error">????</span>{errorsAuth.data.message}</ErrorDiv>}
          <Row>
          <Col xs={12} md={12}>
            <FormFieldMainOuter>
              <FormFieldOuter>
                <label>C??digo de verificaci??n:</label>
                <Field 
                  className='formikField' 
                  type="string" id="email" 
                  name="recoveryCode" 
                  placeholder='C??digo de verificaci??n' 
                  required
                />
              </FormFieldOuter>
            </FormFieldMainOuter>
          </Col>
          <Col xs={12} md={12}>
            <FormFieldMainOuter>
              <FormFieldOuter>
                <label>Nueva Contrase??a:</label>
                <Field 
                  className='formikField' 
                  type="password"
                  name="newPassword"
                  required
                  placeholder="*********"
                />
              </FormFieldOuter>
            </FormFieldMainOuter>
          </Col>
          </Row>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}>
            <RegisterButton disabled={false} onClick={submitForm}>
              {false ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                'CAMBIAR CONTRASE??A'
              )}
            </RegisterButton>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <CheckBoxLogin color="white" label="RECORDARME" /> */}
            <LoginTextButtonStyled size="12px" color="#ff0055" onClick={() => setScreen(0)}>
              VOLVER A LOGIN
            </LoginTextButtonStyled>
          </div>
        </Container>
      )}}
    </Formik>
  );
}
};
