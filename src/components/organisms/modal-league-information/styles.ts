import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
export const ModalPrincipal = styled(Modal)`


`;

export const ModalHeaderStyle = styled(Modal.Header)`
width:100%;
height:100%;
background-color:black;
color:white;
border-bottom: none;
.modal-title{
    font-size: 3rem;
    display:flex;
    justify-content:center;
    width: 30vw;
}
`;


export const ModalBody = styled(Modal.Body)`
  background-color:black;
  height: 50vh;
 #color-p{
     color:white;
 }
`;