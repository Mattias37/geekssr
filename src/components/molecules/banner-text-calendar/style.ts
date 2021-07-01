import styled from 'styled-components';
import { Text } from '../../atoms/text';

export const ContainerText = styled.div<{ type: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:3px;
  width: 100%;
  height: 54px;
  min-width: 100px;
  @media (max-width: 768px) {
    min-width: 5vw;
  }
  ${({ type }) => {
    let styles = '';
    if (type === 1) {
      styles = `background-color: rgba(226, 167, 3, 0.6);`;
    }
    if (type === 2) {
      styles = `
      background-color: #ff0055;
      -webkit-clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
      clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
      border: 3px solid #ff0055;
      `;
    }
    if (type === 3) {
      styles = `
      background-color: #ff0055;
      -webkit-clip-path: polygon(0 0,100% 0,100% 100%,24% 100%);
      clip-path: polygon(0 0,100% 0,100% 100%,24% 100%);
      border: 3px solid #ff0055;
      `;
    }
    return styles;
  }}
`;

export const ContainerText2 = styled.div<{ type: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:3px;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    min-width: 5vw;
  }
  ${({ type }) => {
    let styles = '';
    if (type === 1) {
      styles = `background-color: rgba(226, 167, 3, 0.6);`;
    }
    if (type === 2) {
      styles = `
      background-color: #fff;
      -webkit-clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
      clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
      `;
    }
    if (type === 3) {
      styles = `
      background-color: #fff;
      -webkit-clip-path: polygon(0 0,100% 0,100% 100%,24% 100%);
      clip-path: polygon(0 0,100% 0,100% 100%,24% 100%);
      `;
    }
    return styles;
  }}
`;

export const TextBannerCalendar = styled(Text)`
  font-size: 16px;
  color: #BABABA;
  background-color: #fff;
  -webkit-clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
  clip-path: polygon(0 0,100% 0,74% 100%,0% 100%);
  height: 100%;
  width: 99%;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

