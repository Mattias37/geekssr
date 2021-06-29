import React from 'react';
import { Col } from 'react-bootstrap';
import { ContainerHome, RowStylesHome, WraperHomeBanner } from './styles';

interface Props {
  img: string;
  leftTitle: string;
  leftDescrition: string;
}

export const NewHomeMolecule = (props: Props) => {
  return (
    <WraperHomeBanner img={props.img}>
      <ContainerHome>
        <RowStylesHome>
          <Col md="4">
            <div id="col-left" >
              <h2 id="style-h2-left">
                {props.leftTitle}
              </h2>
              <h5 id="style-h5-left">
                {props.leftDescrition}
              </h5>
            </div>
          </Col>
          <Col md="4" />
          <Col id="col-right" md="4" />
        </RowStylesHome>
      </ContainerHome>
    </WraperHomeBanner>
  );
};
