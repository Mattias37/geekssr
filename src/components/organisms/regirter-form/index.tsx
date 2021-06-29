import React, { useCallback, useEffect } from 'react';
import { Formik, Field } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
import { SectionTitle } from '../../molecules/section-title';
import { registerUser } from '../../../redux/user/action';
import { getErrors, getAuth } from '../../../redux/user/selectors';
import { InputDate } from './input-date';
import { registerValidation } from './register-validation';
import { 
  RegisterButton, 
  FormFieldMainOuter, 
  FormFieldOuter, 
  CheckboxMain, 
  FormMAin, 
  CustomAnchor, 
  ErrorDiv 
} from './styles';
const initialValues = {
  username: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  habeasData: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector(getAuth);
  const errorsAuth = useSelector(getErrors);
  const handleSubmit = useCallback(
    async (values) => {
      console.log(values);
      await dispatch(registerUser(values));
    },
    [dispatch],
  );
  useEffect(() => {
    if (isAuth) return router.push('/profile')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])
  return (
    <FormMAin>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidation}
        onSubmit={handleSubmit}>
        {({ errors, touched, isValid, submitForm }) => {
          const errorMessage = Object.entries(errors);
          console.log(touched, errors, errorMessage);
          return (
          <Container fluid>
            <SectionTitle text='Regístrate con tus datos' />
            {errorMessage.map((error, index) => (
              <ErrorDiv key={index}><span role='img' aria-label="error">😰</span>{error.toString()}</ErrorDiv>
            ))}
            {errorsAuth && <ErrorDiv><span role='img' aria-label="error">😰</span>{errorsAuth.data.message}</ErrorDiv>}
            <Row>
              <Col xs={12} md={6}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>Username:</label>
                    <Field
                      className='formikField'
                      type="text"
                      name="username"
                      required
                      placeholder='Username'
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={6}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>Celular:</label>
                    <Field
                      className='formikField'
                      type="text"
                      name="phone"
                      required
                      placeholder='Celular'
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={6}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>Correo:</label>
                    <Field
                      className='formikField'
                      type="email"
                      name="email"
                      required
                      placeholder='Correo'
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={6}>
                <InputDate
                  type="text"
                  name="date"
                  required
                  label=""
                />
              </Col>
              <Col xs={12} md={6}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>Contraseña:</label>
                    <Field
                      className='formikField'
                      type="password"
                      name="password"
                      required
                      placeholder='*********'
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
              <Col xs={12} md={6}>
                <FormFieldMainOuter>
                  <FormFieldOuter>
                    <label>Confirmar contraseña:</label>
                    <Field
                      className='formikField'
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder='*********'
                    />
                  </FormFieldOuter>
                </FormFieldMainOuter>
              </Col>
            </Row>
            <Col xs={12} md={12}>
              <CheckboxMain >
                <Field
                  type="checkbox"
                  name="habeasData"
                  required
                />
                <label>¿Aceptas el <CustomAnchor href="https://nacionesports.com/politicas-de-privacidad" target="_blank" rel="noopener noreferrer">AVISO DE PRIVACIDAD</CustomAnchor>?</label>
                {/* <label>¿Aceptas la <a href="https://nacionesports.com/politicas-de-privacidad"  rel="noopener noreferrer" target="_blank">política de habeas data, Tratamientos de datos</a> y los  <a href="https://nacionesports.com/terminos-y-condiciones" target="_blank">TratamientosTérminos y condiciones</a>?</label> */}
              </CheckboxMain>
            </Col>
            <Col xs={12} md={12}>
              <CheckboxMain >
                <Field
                  type="checkbox"
                  name="receiveEmails"
                  required
                />
                <label>¿Quieres recibir correos acerca de las ligas, torneos y promociones exclusivas que tenemos para ti?</label>
              </CheckboxMain>
            </Col>
            {errorsAuth?.data.message && <h4>{errorsAuth?.data.message}</h4>}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
              }}>
              <RegisterButton disabled={!isValid} onClick={submitForm}>
                {false ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
                ) : (
                  'crea tu cuenta'
                )}
              </RegisterButton>
            </div>
          </Container>
        )}}
      </Formik>
    </FormMAin>
  );
};
