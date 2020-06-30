import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: 'Roborto-Light';
    color: #a0a0a0;
    text-transform: uppercase;
`;

export const SectionActions = styled.View`
    right: 20px;
    bottom: 30px;
    justify-content: flex-end;
    position: absolute;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const BoxContainer = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    padding: 15px;
    border-radius: 10px;
    elevation: 5;
    margin-top: 20px;
    background-color: #ff8000;
`;

export const BoxMedia = styled.Image`
    width: 35px;
    height: 35px;
`;

export const BoxTitle = styled.Text`
    font-size: 16px;
    font-family: 'Roboto-light';
    color: #fff9c4;
    text-align: center;
    position: absolute;
    right: 75%;
    top: 50%;
`;

