import styled from 'styled-components';
import { Text } from '../../atoms/text';

export const ContainerText = styled.div<{ type: number }>`
  display: flex;
  justify-content: left;
  align-items: center;
  padding:3px;
  width: 20%;
  height: 54px;
  min-width: 100px;
  @media (max-width: 768px) {
    min-width: 5vw;
  }
`;


export const TextBannerCalendar = styled(Text)`
  font-size: 16px;
  background-color: #fff;
  -webkit-clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
  clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
  height: 100%;
  width: 99%;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

