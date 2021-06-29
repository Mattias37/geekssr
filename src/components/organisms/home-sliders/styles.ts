import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SlidersContainer = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 768px) and (min-width: 375px) {
    flex-direction: column;
  }
`;
export const WrapperContainer = styled(Container)`
  #h2-home-slider {
    margin: 20px 20px 0px 20px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    color: #e62c5d;
    font-size: 3rem;
    background-color: #fff;
    &::before{
      background-color: green;
    }
  }
  @media (min-width: 1200px) {
    max-width: 100vw;
  }
`;
