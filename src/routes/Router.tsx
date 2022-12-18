import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding } from './Onboarding'

type RootStackParamList = {
  Onboarding: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function Router(): JSX.Element {
  return (
      <NavigationContainer>
        <Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false
          }}>
            <Screen name="Onboarding" component={Onboarding} />
        </Navigator>
      </NavigationContainer>
  )
}
