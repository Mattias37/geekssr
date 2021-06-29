import React from 'react';
import { Col, Row, Image, Container, InputGroup, Button } from 'react-bootstrap';
import { CustomAnchor, MainContainerFooter, ContentContainerFooter, MainContainerFooterEmail, NavFooterButton } from './styles';
import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { subscribeToNewsLetter } from '../../../redux/news/action';
interface Values {
  email: string;
}

export const FooterMolecule = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <MainContainerFooter>
      <MainContainerFooterEmail>
              <h5 className="copyNewsletter">
                  Entérate lo que esta pasando en el mundo E-Sport en Colombia
              </h5>
              <Formik
                initialValues={{
                  email: '',
                }}
                onSubmit={async (values: Values, { setSubmitting }: any) => {
                  dispatch(subscribeToNewsLetter(values));
                  setSubmitting(false);
                }}
              >
                {() => (
                  <Form>
                    <InputGroup className="mb-3 inputEmail">
                      <Field 
                      aria-label="Ingresa tu correo" 
                      aria-describedby="basic-addon2" name="email" placeholder="Ingresa tu correo..." type="email" />
                    <InputGroup.Append>
                      <Button className="buttonEmail" variant="outline-secondary" type='submit'>Recibe Noticias semanales</Button>
                    </InputGroup.Append>
                </InputGroup>
                  </Form>
                )}
              </Formik>
      </MainContainerFooterEmail>
      <ContentContainerFooter>
        <Container className="custom-container">
          <Row>
            <Col id="styles-col" md="4" xs="12" lg="4">
              <div id="estyles-logo">
                <Image id="style-image justify-content-center align-content-center" src='/images/logo blanco.png' fluid />
              </div>
            </Col>
            <Col id="styles-col" md="4" xs="12" lg="4">
              <div id="estyles-container">
                <h4 id="h2-home-slider">Sobre nosotros</h4>
                <p className="style-h5">
                  Somos creadores de experiencias que han impactado a miles de fanáticos del universo de los cómics y los E-sports en Colombia. Somos una Nación Gamer, somos Nación E-sports.
                </p>
              </div>
            </Col>
            <Col id="styles-col" md="4" xs="12" lg="4">
              <div id="estyles-container">
                <h4 id="h2-home-slider">Nación E-Sports</h4>
                <Row>
                  <Col>
                    <NavFooterButton onClick={() => {dispatch( router.push('/'))}}> 
                    <h5 className="style-h5">
                      Home
                    </h5>
                    </NavFooterButton>
                    <NavFooterButton onClick={() => {dispatch( router.push('/leagues'))}}> 
                    <h5 className="style-h5">
                      Ligas
                    </h5>
                    </NavFooterButton>
                    {/* <NavFooterButton onClick={() => {dispatch( router.push('/tournaments-home'))}}> 
                    <h5 className="style-h5">
                      Torneos
                    </h5>
                    </NavFooterButton> */}
                  </Col>
                  <Col>
                    {/* <NavFooterButton onClick={() => {dispatch( router.push('/tournaments-home'))}}> 
                    <h5 className="style-h5">
                      Comunidad
                    </h5>
                    </NavFooterButton> */}
                    {/* <NavFooterButton onClick={() => {dispatch( router.push('/academia'))}}> 
                    <h5 className="style-h5">
                      Academia
                    </h5>
                    </NavFooterButton> */}
                    <NavFooterButton onClick={() => {dispatch( router.push('/streaming'))}}> 
                    <h5 className="style-h5">
                      Streaming
                    </h5>
                    </NavFooterButton>
                    <NavFooterButton onClick={() => {dispatch( router.push('/shop'))}}> 
                    <h5 className="style-h5">
                      Tienda
                    </h5>
                    </NavFooterButton>
                  </Col>
                  <Col>
                    <NavFooterButton onClick={() => {dispatch( router.push('/news'))}}> 
                    <h5 className="style-h5">
                      Noticias
                    </h5>
                    </NavFooterButton>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <hr id="styleDivider"/>
          <Row>
            <Col md="4" xs="12" lg="4">
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <NavFooterButton onClick={() => {dispatch( router.push('/terminos-y-condiciones'))}}> 
                  <h5 className="style-h5">
                      Términos & Condiciones
                  </h5>
                </NavFooterButton> 
                <NavFooterButton onClick={() => {dispatch( router.push('/politicas-de-privacidad'))}}> 
                  <h5 className="style-h5">
                    Políticas de privacidad
                  </h5>
                </NavFooterButton> 
              </div>
            </Col>
            <Col md="8" xs="12" lg="8">
              <p className="textoLegal">
              Cra 12A #13-90, Edificio Galilea Apto 402 - Manizales, Caldas, Colombia - © 2021, Todos los derechos reservados 
                <CustomAnchor href="https://www.linkedin.com/company/geek-city/?originalSubdomain=co" target="_blank" rel="noopener noreferrer"> Geek City Experiences</CustomAnchor>
              </p>
            </Col>
          </Row>
        </Container>
      </ContentContainerFooter>
    </MainContainerFooter>
  );
};
