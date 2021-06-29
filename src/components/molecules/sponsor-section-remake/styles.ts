import styled from 'styled-components';

interface P {
  imageUrl?: string;
  responsiveUrl?: string;
  sizeBG: string;
}

export const LigaSponsorsStyled = styled.div<P>`
  ${({ imageUrl }) => imageUrl && ` background-image: url(${imageUrl})`};
  min-height: 25vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

  align-items: center;
  @media (max-width: 769px) {
    ${({ responsiveUrl }) =>
      responsiveUrl && ` background-image: url(${responsiveUrl})`};
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
export const LigaSponsorsContainer = styled.div`
  flex: 1;
  display: flex;
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;

  & > h1 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    @media (max-width: 769px) {
      font-size: 25px;
    }
  }
  @media (min-width: 769px) {
    justify-content: center;
    align-items: center;
  }
`;
