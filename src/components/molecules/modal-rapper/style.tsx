import styled from 'styled-components';

export const ModalMain = styled.div`
    position: relative;
`;
export const ModalCloseButtonOuter = styled.div`
    position: absolute;
    top: 10px; 
    right: 10px;
    width: 49px;
    height: 49px;
    z-index: 10000;
`;
export const ModalCloseButton = styled.button`
    width: inherit;
    height: inherit;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #00000073;
    opacity: 1;
    border: none;
    border-radius: 50%;
    color: #ff0055;
    font-size: x-large;
`;