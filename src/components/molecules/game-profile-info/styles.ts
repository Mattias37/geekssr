import styled from 'styled-components';
interface P {
  imageUrl?: string;
}
export const Container = styled.div`
  display: flex;
  width: 30%;
  min-width: 250px;
  position: relative;
  padding-bottom: 2rem;
  .close-div {
    position: absolute;
    color: white;
    top: 0px;
    right: 0px;
    font-size: 2rem;
  }
  .edit-div {
    position: absolute;
    color: white;
    bottom: 0px;
    right: 0px;
    font-size: 1.5rem;
  }
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  min-width: 200px;
`;

export const StyledImage = styled.div<P>`
  background: transparent url('img/!.png') 0% 0% no-repeat padding-box;
  ${({ imageUrl }) => imageUrl && ` background-image: url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 23px;
  opacity: 1;
  border: 0;
  min-width: 87px;
  min-height: 105px;
  @media (min-width: 501px) {
    max-height: 85px;
    max-width: 85px;
  }
  @media (max-width: 500px) {
    max-height: 54px;
    max-width: 54px;
  }
`;

export const StyledTitle = styled.p`
  text-transform: uppercase;
  margin: 0;
  color: #FF0055;
`;

export const StyledSubtitle = styled.p`
  color: #707070;
  margin: 0;
  font-family: Open Sans !important;
`;
