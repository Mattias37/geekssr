import styled from 'styled-components';
import { Modal } from 'react-bootstrap';


export const ModalContainer = styled(Modal)`
#style-nick-correo{
    background-color: #FF0055;
}
.body-styles{
    min-height: 50vh;
}
#Button-styled-organims{
    height: 2vh;
    display: flex;
    align-items: center;
    background-color:#FF0055;
    border-color: #FF0055;
}
.form-control{
    background: rgba(255, 0, 85, 0.3);
    border-radius: 9px;
}
.input-group-text{
    background: rgba(255, 0, 85, 0.3);
    border-radius: 9px;
}
#Button-styled-organims{
    height: 5vh;
    width:8vw;
    display: flex;
    align-items: center;
    background-color:#FF0055;
    border-color: #FF0055;
    justify-content: center;
    text-align:center
}
    height: auto;
    width: inherit;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 20px;
    opacity: 1;
    top: 30%;
`;

export const FormContainer = styled.div`
    min-height: 20vh;
`;