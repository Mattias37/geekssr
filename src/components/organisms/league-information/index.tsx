import React from 'react';
import { RegisterPageAction } from '../../organisms/register-page-action';
interface Props {
  name: string;
  content: string;
  subContent: string;
  isFree: boolean;
  price: number;
  closeDate: string;
  sponsor: string;
}

export const LeagueInformation = () => {
  return (<RegisterPageAction text="Información"/>);
};
