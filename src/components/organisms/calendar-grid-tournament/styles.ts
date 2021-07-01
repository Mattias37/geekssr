import styled from 'styled-components';
import { Text } from '../../atoms/text';

export const ContainerCalenadar = styled.div`
  display: flex;
  flex-direction: row;
  wrap: flex-wrap;
  justify-content: center;
  margin: 0 2em;
  align-items: center;
  width: 90%;
  @media (max-width: 768px) {
    &>.col{
      padding: 0
    }
  }
`;

export const ContainerCalenadarMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &>p{
    color: #373737;
    font-family: Bebas Neue;
    font-weight: Bolder;
    font-size: 41px;
  }

`;

export const ContainerCalenadarV2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 0px;
  margin-top: 5px;
  align-items: center;
  width: 100%;
`;

export const DividerContainer = styled.div`
  border-top: 3px solid rgba(226, 167, 3, 0.6);
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;
export const Jornada = styled(Text)`
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  color: #FF0055;
  font-size: 2em;
  font-family: Bebas Neue;
  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;
export const TextTitle = styled(Text)`
  font-style: normal;
  font-weight: bold;
  font-size: 1.1vw;
  text-align: center;
  color: white;
  margin: 0px 10px;
  @media (max-width: 769px) {
    font-size: 4vw;
  }
`;
