import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  TextBody,
  TextBody2,
  TextBody3,
  StyledMain
} from './style';
import { LoginForm } from '../../organisms/login-form';
export const LoginScreen = () => {
  return (
        <StyledMain>
            <TextBody>Empieza la verdadera</TextBody>
            <TextBody2>experiencia E-sport</TextBody2>
            <TextBody3>únete ahora mismo y empieza tu carrera EN EL GAMING COMPETITIVO</TextBody3>
            <Container fluid>
              <LoginForm />
            </Container>
        </StyledMain>
  );
};
