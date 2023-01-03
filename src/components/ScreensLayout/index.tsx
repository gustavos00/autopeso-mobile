import React from 'react'

import { ThemeProvider } from 'styled-components/native';

import { Router } from '../../pages/Router'
import { theme } from '../../theme'

import * as S from './styles'

export function ScreensLayout(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <S.SafeAreaContainer>
        <S.Wrapper >
          <Router />
        </S.Wrapper>
      </S.SafeAreaContainer>
    </ThemeProvider>
  );
}
