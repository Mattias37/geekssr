import styled from 'styled-components';
import { Modal, ModalBody } from 'react-bootstrap';

export const ModalStyled = styled(Modal)``;

export const ModalHeaderStyled = styled(Modal.Header)``;

export const ModalBodyStyled = styled(ModalBody)``;

export const UlStyled = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const LiStyled = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin: 0.5rem;
  padding-bottom: 5px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

`;
