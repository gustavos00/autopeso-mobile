import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    padding-left: 10%;
    padding-right: 10%;
`;

export const SafeAreaContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${props => props.theme.colors.black.main};
`;