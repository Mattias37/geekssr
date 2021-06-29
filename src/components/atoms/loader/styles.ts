import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

export const LoaderMainDiv = styled.div`
  background-color: #F50050;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderImageLogo = styled(Image)`
  display: flex;
  height: 10vh;
  cursor: pointer;
  margin: auto;
  @media (max-width: 768px) {
    height: 8vh;
  }
`;
