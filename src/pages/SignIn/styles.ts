import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background-color: ${props => props.theme.colors.black.main};
`;

export const ReturnButton = styled.TouchableOpacity`
    width: ${props => props.theme.metrics.lg}px;
    height: ${props => props.theme.metrics.lg}px;
    margin-bottom: ${props =>props.theme.metrics.lg}px;
    
    background-color: red;
`;

export const HeaderText = styled.Text`
    background-color: ${props => props.theme.colors.black.main};

    color: ${props => props.theme.colors.white.main};
    font-size: ${props => props.theme.metrics.xlg}px;
    font-weight: 600;
`;

export const DescriptionText= styled.Text` 
    margin-bottom: 64px; // TO DO - CHANGE COLOR
    background-color: ${props => props.theme.colors.black.main};

    color: ${props => props.theme.colors.white.main};
    font-size: ${props => props.theme.metrics.md}px;
`;

export const RecoveryPasswordLinkContainer = styled.View`
    margin-top: ${props => props.theme.metrics.md}px;
    margin-bottom: ${props => props.theme.metrics.xxlg}px;
    align-items: flex-end;
`;

export const RecoveryPasswordLinkLabel = styled.Text`
    color: ${props => props.theme.colors.white.main};
    font-size: calc(${props => props.theme.metrics.md}px - 2px);
`;

