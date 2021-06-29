import { ReactNode, SyntheticEvent } from 'react';
import { TextStyled } from './styles';
interface Props {
  onClick?: (e: SyntheticEvent) => void;
  children: ReactNode;
  size?: string;
  color?: string;
  width?: string;
  aling?: string;
  weight?: string;
  justify?: string;
  marginTop?: number;
  underline?: boolean;
}

export const Text = TextStyled
