import styled from 'styled-components/native';

interface x {
    isActive: boolean
}

export const Container = styled.ScrollView`
    flex: 1;
    padding-right: 10%;
    padding-left: 10%;
    background-color: ${props => props.theme.colors.black.main};
`;

export const Title = styled.Text`
    margin-bottom: ${props =>props.theme.metrics.sm}px;

    background-color: ${props => props.theme.colors.black.main};

    color: ${props => props.theme.colors.white.main};
    font-size: 32px;
    font-weight: 600;
    text-align: center;
`;

export const Description = styled.Text`
    margin-bottom: ${props => props.theme.metrics.xlg}px;

    background-color: ${props => props.theme.colors.black.main};

    color: ${props => props.theme.colors.gray.main};
    font-size: 14px;
    text-align: center;
`;

export const DotsContainer = styled.View`
    margin-bottom: ${props => props.theme.metrics.xlg}px;
    flex-direction: row;
`;

export const Dot = styled.View<x>`
    width: ${props => props.isActive ? props.theme.metrics.xlg : props.theme.metrics.md}px;
    height: ${props => props.theme.metrics.md}px;
    margin-left: 5px;
    margin-right: 5px;

    border-radius: 100px;
    background-color: ${props => props.isActive ? props.theme.colors.gray.main : props.theme.colors.gray.secundary};
`;


