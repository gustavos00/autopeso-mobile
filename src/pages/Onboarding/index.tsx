import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import onboarding from '../../static/onboarding.json'
import { Button } from '../../components/Button'

import * as S from './styles'

export function Onboarding(): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <S.Container 
      contentContainerStyle={{
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
      <S.BoxContainer 
        pagingEnabled
        horizontal
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}  
        contentContainerStyle={{alignItems: 'center'}}
      >
        <S.Box>

        </S.Box>

        <S.Box>

        </S.Box>

        <S.Box>

        </S.Box>
      </S.BoxContainer>

      <S.Title>{onboarding.title}</S.Title>
      <S.Description>{onboarding.description}</S.Description>

      <S.DotsContainer>
        <S.Dot isActive={false}/>
        <S.Dot isActive={false} />
        <S.Dot isActive={true} />
      </S.DotsContainer>

      <Button 
        text={'Get Started'}
        handleOnTouch={() => navigation.navigate('SignIn')}
      />
    </S.Container>
  )
}
