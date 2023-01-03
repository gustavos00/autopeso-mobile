import styled from 'styled-components/native';

interface InputProps {
    haveContent: boolean
    haveError: boolean
}

export const InputWrapper = styled.View<InputProps>`
    padding: 0 ${props => props.theme.metrics.lg}px;

    flex-direction: row;
    justify-content: space-between;

    color: ${props => props.theme.colors.white.main};
    
    border-width: 1px;
    border-radius: 16px;
    border-color: ${props => props.haveContent ? (props.haveError  ? 'red' : props.theme.colors.gray.secundary) : props.theme.colors.gray.main};// TO DO - CHANGE COLOR

`;

export const IconContainer = styled.TouchableOpacity`
    margin-left: ${props => props.theme.metrics.md}px;
    flex: .2;
    justify-content: center;
    align-self: center;
`;

export const Input = styled.TextInput`
    flex: .9;
    padding: ${props => props.theme.metrics.lg}px 0;

    color: ${props => props.theme.colors.white.main};
`;
