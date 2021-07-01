import React, { useCallback, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
import { SectionTitle } from '../../molecules/section-title';
import { registerUser } from '../../../redux/user/action';
import { getErrors, getAuth } from '../../../redux/user/selectors';
import { SignUpValidator, validateConfirmPassword } from './validator';
import { getErrorMessage, isValid } from '../../../helpers/isValid';
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
  const onSubmit = (values) => {
    console.log(values);

}
  useEffect(() => {
    if (isAuth) { router.push('/profile')}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])
  return (
    <FormMAin>

      <SectionTitle text='Regístrate con tus datos' />
      <Formik
                            initialValues={{
                                fullname: '',
                                username: '',
                                phone: '',
                                email: '',
                                password: '',
                                passwordConfirm: '',
                                birthdate: '',
                                acceptTerms: '',
                                receiveEmails: false
                            }}
                            validationSchema={SignUpValidator}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values }) => (
                                <Form>
                                    <Row>
                                        {/* <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                                <label htmlFor="">Nombre Completo</label>
                                              <Field
                                                // className='formikField'
                                                name="fullname" 
                                                type="text" 
                                                className={isValid(errors, touched, 'fullname')}
                                                required
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'fullname')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col> */}
                                        
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                                <label htmlFor="">Nombre de usuario</label>
                                              <Field
                                                // className='formikField'
                                                name="username" 
                                                type="text" 
                                                className={isValid(errors, touched, 'username')}
                                                required
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'username')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col>
                                      <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                              <label htmlFor="">Fecha de nacimiento</label>
                                              <Field
                                                // className='formikField'
                                                name="birthdate"
                                                type="date" 
                                                className={isValid(errors, touched, 'birthdate')}
                                                required
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'birthdate')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col>
                                        <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                              <label htmlFor="">Correo Electronico</label>
                                              <Field
                                                // className='formikField'
                                                name="email" 
                                                type="email" 
                                                className={isValid(errors, touched, 'email')}
                                                required
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'email')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col>
                                        <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                                <label htmlFor="">Numero de celular</label>
                                              <Field
                                                // className='formikField'
                                                name="phone" 
                                                type="number" 
                                                className={isValid(errors, touched, 'phone')}
                                                required
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'phone')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                                <label htmlFor="">Contraseña</label>
                                              <Field
                                                // className='formikField' 
                                                className={isValid(errors, touched, 'password')}
                                                type="password"
                                                name="password"  
                                                required
                                                placeholder='*********'
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'password')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col>
                                        <Col xs={12} md={6}>
                                          <FormFieldMainOuter>
                                            <FormFieldOuter>
                                              <label htmlFor="">Confirmacion Contraseña</label>
                                              <Field
                                                // className='formikField'
                                                validate={value => validateConfirmPassword(values.password, value)} 
                                                className={isValid(errors, touched, 'passwordConfirm')}
                                                type="password"
                                                name="passwordConfirm"
                                                required
                                                placeholder='*********'
                                              />
                                              <div className="invalid-feedback">{getErrorMessage(errors, touched, 'passwordConfirm')}</div>
                                            </FormFieldOuter>
                                          </FormFieldMainOuter>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="form-check mb-3">
                                                <Field type="checkbox" name="acceptTerms" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="invalidCheck3">
                                                    ¿Aceptas terminos y condiciones?
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="form-check mb-3">
                                                <Field type="checkbox" name="receiveEmails" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="invalidCheck2">
                                                    ¿Quieres recibir correos electronicos?
                                                </label>
                                            </div>
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
                                    <RegisterButton disabled={!values.acceptTerms} type="submit">Registrarme</RegisterButton>
                                    </div>
                                </Form>
                            )}
                        </Formik>
      
    </FormMAin>
  );
};
