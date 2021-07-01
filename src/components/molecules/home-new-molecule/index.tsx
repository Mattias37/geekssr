import React/* , { useState, useMemo, useEffect } */ from 'react';
import { Col } from 'react-bootstrap';
import { format } from 'date-fns';
import Image from 'next/image';
import { 
  ContainerHome, 
  RowStylesHome, 
  WraperHomeBanner,
  BannerText,
  BannerText2
} from './styles';
import { Button2 } from '../../atoms/button2';
//import differenceInSeconds from "date-fns/differenceInSeconds";
//NO BORRAR EN CASO DE QUERER INCLUIR COOUNTDOWN
/* const Timer = ({ deadline }: any) => {
  const ONE_DAY = 60 * 60 * 24;
  const ONE_HOUR = 60 * 60;
  const ONE_MINUTE = 60;
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const diffInSeconds = differenceInSeconds(deadline, currentTime);

  const getCoundown = () => {
    if (diffInSeconds <= 1) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor(
      (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
    );
    const seconds =
      diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const countdown = useMemo(getCoundown, [currentTime]);

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);
    }, 1000);
  }, []);

  return (
    <div id="style-timmer">
      <h5 id="style-h5-left">
             Cierre de inscripciones en:
            </h5>
      <h5 id="style-h5-left">{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s </h5>
    </div>
  );
}; */
//NO BORRAR EN CASO DE QUERER INCLUIR COOUNTDOWN

interface Props {
  img: string;
  imgLogo: string;
  leftTitle: string;
  buttonText: string;
  leftDescrition: string;
  startDate: string;
  onclick(): any;
}

export const NewHomeMolecule = (props: Props) => {
  return (
    <WraperHomeBanner img={props.img}>
      <ContainerHome>
        <RowStylesHome>
          <Col md="4" />
          <Col md="4" />
          <Col id="col-right" md="4">
            <div style={{ position: "relative", width: "200px", height: "200px" }}>
              <Image id='style-img' src={props.imgLogo} alt='e-spirts liga logo' layout="fill"
            objectFit="contain"/>
            </div>
            <BannerText>{'FECHA DEL TORNEO:'}</BannerText>
            {<BannerText2>{format(new Date(props.startDate), 'dd/MM/yyyy - h:mm aa')}</BannerText2>}
            <Button2 
              text={props.buttonText} 
              edit={true} 
              textcolor='#fff'
              backgroundcolor='#ff0055' 
              onClick={props.onclick}
            /> 
          </Col>
        </RowStylesHome>
      </ContainerHome>
    </WraperHomeBanner>
  );
};
