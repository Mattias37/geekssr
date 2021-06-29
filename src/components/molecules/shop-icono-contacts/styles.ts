import styled from 'styled-components';
//import whatsappBadge from '../../../assets/images/whatsapp-badge.png';

export const FacebookBadge = styled.div`
  height: 25px;
  width: 25px;
  background: url('/images/facebook-badge.png') no-repeat center;
  margin-left: 10px;
  cursor: pointer;

`;
export const WhatsAppBadge = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #ff0055;
padding: 5px;
width: 100%;
  &> svg{
    height: 25px;
    width: 25px;
    color: #fff;
  }
  &> h3{
    font-size: larger;
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
  }
  margin-left: 10px;
  cursor: pointer;
`;
