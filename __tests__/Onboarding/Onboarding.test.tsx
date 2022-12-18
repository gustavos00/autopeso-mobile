import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { Onboarding } from '../../src/routes/Onboarding';
import { theme } from '../../src/theme/index'

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({}))
  };
});

describe('Onboarding Screen', () => {
  it('should render Layout with all the content', async () => {
      const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Onboarding />
      </ThemeProvider>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});