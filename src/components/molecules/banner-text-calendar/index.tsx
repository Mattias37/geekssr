import React from 'react';
import { ContainerText, TextBannerCalendar, ContainerText2 } from './style';
interface Props {
  text?: string;
  type: number;
}
export const BannerText = (props: Props) => {
  return (
    <ContainerText type={props.type}>
      <ContainerText2 type={props.type}>
        <TextBannerCalendar color="white" weight="bold" justify="center">
          {props.text}
        </TextBannerCalendar>
      </ContainerText2>
    </ContainerText>
  );
};
