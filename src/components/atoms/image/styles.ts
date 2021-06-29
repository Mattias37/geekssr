import { Image } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  src: string;
  size: string;
  left?: string;
  right?: string;
}
export const ImageAtom = styled(Image)<Props>`
${({size}) => size && `width:${size}; height: ${size};`}


`;

export const DivAtom = styled.div<Props>`
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 10rem;
  z-index: 1;
  position: absolute;
  left: ${props => (props.left ? props.left : 'unset')};
  right: ${props => (props.right ? props.right : 'unset')};
  top: 0;
  background-position: center;
  height: 100%;
`;
