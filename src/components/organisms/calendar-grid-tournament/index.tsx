import React from 'react';
import * as Bi from 'react-icons/bi';
import { BannerText } from '../../molecules/banner-text-calendar';
import { Jornada, ContainerCalenadar, ContainerCalenadarMiddle } from './styles';
import format from 'date-fns/format';
import { es } from 'date-fns/locale';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
interface Props {
  title: string;
  grid: any[];
  type: number;
  phasesSelectorData: any[];
}

export const ArticleCalendar = (props: Props) => {
  const { push } = useRouter();
  console.log(props);
  return (
    <ContainerCalenadar>
      <Container fluid>
        <Row>
         {props.phasesSelectorData.length === 0 ? (<Jornada>Más información se actualizará más adelante</Jornada>): props.phasesSelectorData ? 
         (props.phasesSelectorData.map((i, index)=>(
          <Col key={`hs_${index}`} md={12} xs={12}>
            <Jornada>
              {`Jornada ${index + 1}`},{' '}
              {format(new Date(i.date), "EEEE',' MMMM d ','yyyy", {
                locale: es,
              })}
            </Jornada>
            {i.matches.length === 0 ? ('No hay partidas para esta fecha'): (i.matches.map((m: any, index: number)=>{
              return (<>
              <ContainerCalenadar key={index}>
                <Col xs={6} md={2.5} lg={5}>
                  <BannerText type={props.type} text={`${m.local.username}-${
                      m.winner === null
                        ? '-'
                        : m.winner === m.local._id
                        ? 'GANADOR'
                        : 'PERDEDOR'
                    }`} />
                </Col>
                <Col xs={4} md={4} lg={2} style={{color: '#373737'}}>
                  <ContainerCalenadarMiddle>
                    <p>{m.score === null ? `VS` : `${m.score}`}</p>
                  
                  {m.iframeTransmission ? (
                    <>
                      <Button
                        size="sm"
                        variant="success"
                        style={{
                          backgroundColor: '#ff0055',
                          border: 'none',
                          borderRadius: '31px'
                        }}
                        onClick={() =>
                          push(`/transmitions/${m._id}`)
                        }>
                        <Bi.BiPlayCircle/>
                        Ver transmisión
                      </Button>
                    </>
                  ):
                  <Jornada>
                    {format(new Date(m.startDate), 'p', { locale: es })}-
                    {format(new Date(m.endDate), 'p', { locale: es })}
                  </Jornada>
                  }
                  </ContainerCalenadarMiddle>
                </Col>
                <Col xs={6} md={2.5} lg={5}>
                  <BannerText type={3} text={`${m.visitor.username}-${
                      m.winner === null
                        ? '-'
                        : m.winner === m.visitor._id
                        ? 'GANADOR'
                        : 'PERDEDOR'
                    }`} />
                </Col>
              </ContainerCalenadar>
            </>)
            }))}
          </Col>
         )))
         : <Col>El calendario en este momento no tiene fechas.</Col>}
        </Row>
      </Container>
    </ContainerCalenadar>
  );
};
