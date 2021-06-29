import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  TextBody,
  TextBody2,
  TextBody3,
  DivContainerRegisterStyled
} from './style';
import { RegisterForm } from '../../organisms/regirter-form';
export const RegisterScreen = () => {
  return (
            <DivContainerRegisterStyled>
            <TextBody>Empieza la verdadera</TextBody>
            <TextBody2>experiencia E-sport</TextBody2>
            <TextBody3>únete ahora mismo y empieza tu carrera EN EL GAMING COMPETITIVO</TextBody3>
                <Container fluid>
                  <RegisterForm />
                </Container>
            </DivContainerRegisterStyled>
  );
};
