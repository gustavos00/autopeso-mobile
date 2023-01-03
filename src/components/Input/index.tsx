import React, { useState } from 'react';
import { KeyboardTypeOptions, Text } from 'react-native';
import { validateText } from '../../utils/validateText';
import { theme } from '../../theme';

import * as S from './styles';

interface InputProps {
  isPassword?: boolean
  keyboardType?: KeyboardTypeOptions
  regexValidation?: RegExp
  handleOnValidText: (text: string) => void
  handleOnInvalidText?: () => void
  value: string
  placeholder?: string
}

export function Input({ isPassword, keyboardType, regexValidation, handleOnValidText, handleOnInvalidText, value, placeholder }: InputProps) {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(isPassword || false)
  const [haveError, setHaveError] = useState<boolean>(false)

  function handleOnChange(text: string) {
    if(!regexValidation) {
      return handleOnValidText(text)
    }

    const isValid = validateText(regexValidation, text)

    if(!isValid) {
      setHaveError(true)

      if(handleOnInvalidText) {
        handleOnInvalidText()
      }
    }

    setHaveError(false)
    handleOnValidText(text)
  }
  return (
    <S.InputWrapper
      haveContent={value !== ''}
      haveError={haveError}
    >
      <S.Input
        keyboardType={keyboardType}
        secureTextEntry={isShowingPassword}
        onChangeText={(text) => handleOnChange(text)}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray.main}
      >
        {value}
      </S.Input>
      {isPassword &&
        <S.IconContainer
          onPress={() => setIsShowingPassword(!isShowingPassword)}
        >
          <Text>EYE</Text>
        </S.IconContainer>
      }
    </S.InputWrapper>
  );
}


