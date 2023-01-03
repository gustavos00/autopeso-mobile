import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import signIn from '../../static/signIn.json'
import { EMAIL_REGEX } from '../../utils/validateText';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input';

import * as S from './styles'

export function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function handleUserSignIn() {

  }
  return (
      <S.Container>
        <S.ReturnButton onPress={() => navigation.goBack()}>

        </S.ReturnButton>

        <S.HeaderText>{signIn.title}</S.HeaderText>
        <S.DescriptionText>{signIn.description}</S.DescriptionText>

        <View style={{marginBottom: 24}}>
          <Input 
            keyboardType={'email-address'}
            regexValidation={EMAIL_REGEX}
            handleOnValidText={(text) => setEmail(text)}
            value={email}
            placeholder={signIn.emailInput}
          />
        </View>
        <Input 
          isPassword
          handleOnValidText={(text) => setPassword(text)}
          value={password}
          placeholder={signIn.passwordInput}
        />
        <S.RecoveryPasswordLinkContainer>
          <TouchableOpacity>
            <S.RecoveryPasswordLinkLabel>{signIn.recoveryPassword}</S.RecoveryPasswordLinkLabel>
          </TouchableOpacity>
        </S.RecoveryPasswordLinkContainer>

        <Button 
          handleOnTouch={handleUserSignIn}
          text={signIn.signInButton}
        />
      </S.Container>
  );
}