import React from 'react';
import { ImageAtom, DivAtom } from './styles';

interface Props {
  size: string;
  src: string;
  fluid?: boolean;
  rounded?: boolean;
  inline?: boolean;
  hidden?: boolean;
  centered?: boolean;
  bordered?: boolean;
  circular?: boolean;
  left?: string;
  right?: string;
  div?: boolean;
}

export const Image = (props: Props) => {
  if (props.div) {
    return <DivAtom {...props} />;
  }

  return <ImageAtom {...props} />;
};


