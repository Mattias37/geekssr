import React from 'react';
import { Modal } from 'react-bootstrap';
import { ModalBody, ModalHeaderStyle } from './styles';

export const ModalInformationLeague = ({ show, onHide }: any) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title">
      <ModalHeaderStyle closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          INFORMACION DE LA LIGA
        </Modal.Title>
      </ModalHeaderStyle>
      <ModalBody>
        <p id="color-p">
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
          atque a dolores quisquam quisquam adipisci possimus laboriosam.
          Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos
          quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro
          quo magni incidunt dolore amet atque facilis ipsum deleniti rem Ipsum
          molestiae natus adipisci modi eligendi? Debitis ame quae unde commodi
          aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a
          dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam
          facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos
          consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
          incidunt dolore amet atque facilis ipsum deleniti rem!
        </p>
      </ModalBody>
    </Modal>
  );
};
