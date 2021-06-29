import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalMain, ModalCloseButton, ModalCloseButtonOuter } from './style';
interface Props {
    show: boolean;
    onHide: any;
    children: React.ReactNode;
  }

export const  ModalRapper = ({ show, onHide,  children }: Props) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
        >
            <ModalMain>
                <ModalCloseButtonOuter>
                    <ModalCloseButton onClick={onHide}>x</ModalCloseButton>
                </ModalCloseButtonOuter>
                <Modal.Body>
                {children}
                </Modal.Body>
            </ModalMain>
        </Modal>
    );
  }