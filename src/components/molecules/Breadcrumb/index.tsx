import React from 'react';
import { ContainerText, TextBannerCalendar } from './style';
interface Props {
  text?: string;
  type: number;
}
export const Breadcrumb = (props: Props) => {
  return (
    <ContainerText type={props.type}>
        <TextBannerCalendar color="#ff0055" weight="bold" justify="center">
          Inicio
        </TextBannerCalendar>
        /
        <TextBannerCalendar color="#BABABA" weight="bold" justify="center">
          {props.text}
        </TextBannerCalendar>
    </ContainerText>
  );
};
