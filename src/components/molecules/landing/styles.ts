import styled from 'styled-components';

// import landing from '~/assets/images/landing.jpg';
// import landingMobile from '~/assets/images/landing_mobile.png';

export const ContainerStyledCity = styled.div<{color?: string}>`
  min-height: 100vh;
  min-width:100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  ${({color}) => color && `background-color: ${color}`};
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  @media (orientation: portrait) {
    background-size: auto 100%;
  }
  @media (max-width: 1024px) {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  &.ui.container {
    display: flex;
    ${({color}) => color && `background-color: ${color}`};
    margin-left: 0em !important;
    margin-right: 0em !important;
  }
`;
