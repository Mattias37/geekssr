import React from 'react';
import { ContainerStyledCity } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Landing(props: Props) {
  return (
    <ContainerStyledCity>
      {/* <img src={logo} alt="frubana" srcSet={`${logo2x} 2x, ${logo3x} 3x`} /> */}
      {props.children}
    </ContainerStyledCity>
  );
}
