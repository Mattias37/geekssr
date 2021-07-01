import styled from 'styled-components';

export const StyledCard = styled.div<{ image: string }>`
  height: 25rem;
  min-width: 18rem !important;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-transform: uppercase;
  margin: 1.5em;
  font-family: Bebas Neue;
`;

export const StyledTitle = styled.div`
  display: flex;
  background: rgba(191, 0, 63, 0.57);
  font-family: Open Sans;
  height: 23%;
  color: white;
  font-family: Bebas Neue;
  font-size: xx-large;
  align-items: center;
  justify-content: center;
`;

export const StyledDescription = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  padding: 1rem;
  height: 77%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.36);
  font-family: Bebas Neue;
`;
