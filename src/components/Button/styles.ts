import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;

    justify-content: center;
    align-items: center ;

    background-color: ${props => props.theme.colors.primary.main};
    border-radius: ${props => props.theme.metrics.sm}px;
`;

export const Text = styled.Text`
    font-size: ${props => props.theme.metrics.md}px;
    font-weight: 600;
    color: ${props => props.theme.colors.white.main};
`;
