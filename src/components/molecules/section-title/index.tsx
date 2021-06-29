import React from 'react';
import { MainDiv, BlackDiv, RedDiv } from './styles';
import { Text } from '../../atoms/text';

interface Props {
  text?: string;
}
export const SectionTitle = (props: Props) => {
  return (
    <MainDiv>
      <BlackDiv />
      <RedDiv />
      <Text color="#000000" size="2em" weight="bold" justify="center" input={true}>
        {props.text}
      </Text>
    </MainDiv>
  );
};