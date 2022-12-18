import React from 'react';
import { GestureResponderEvent, Text } from 'react-native';

import * as S from './styles';

interface ButtonProps {
  text: string;
  handleOnTouch: (param: GestureResponderEvent) => void
}

export function Button({ text, handleOnTouch }: ButtonProps) {
  return (
    <S.Container onPress={handleOnTouch}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
