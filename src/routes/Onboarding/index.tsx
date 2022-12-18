import React from 'react'
import { useNavigation } from '@react-navigation/native';

import onboarding from '../../static/onboarding.json'
import { Button } from '../../components/Button'

import * as S from './styles'


export function Onboarding(): JSX.Element {
  const navigation = useNavigation();
  
  return (
    <S.Container 
      contentContainerStyle={{
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center'
      }}>

      <S.Title>{onboarding.title}</S.Title>
      <S.Description>{onboarding.description}</S.Description>

      <S.DotsContainer>
        <S.Dot isActive={false}/>
        <S.Dot isActive={false} />
        <S.Dot isActive={true} />
      </S.DotsContainer>

      <Button 
        text={'Get Started'}
        handleOnTouch={() => navigation.navigate('signIn')}
      />
    </S.Container>
  )
}
