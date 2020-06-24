import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Content,
    BoxContainer,
    Row,
    BoxMedia,
    BoxTitle,
    Title,
} from './styles';

import Header from '../../components/Header';
import { DrawerProps } from '../../routes/types/DrawerTypes';
import IconPlus from '../../assets/icons/plus.png';
import IconeImg from '../../assets/icons/description.png';
import IconePost from '../../assets/icons/dashboard.png';

export default function Home(): ReactElement {

    const navigation = useNavigation<DrawerProps>();
    const toggleDrawer = (): void => {
        navigation.toggleDrawer();
    };

    return (
        <Container>
            <Header title="Publicações" onDrawer={toggleDrawer} />

            <Content>
                <Title>:: Atividades</Title>

                <Row>
                    <BoxContainer>
                        <BoxMedia source={IconeImg} />
                        <BoxTitle>Albuns</BoxTitle>
                    </BoxContainer>
                </Row>
                <Row>
                    <BoxContainer>
                        <BoxMedia source={IconePost} />
                        <BoxTitle>Posts</BoxTitle>
                    </BoxContainer>
                </Row>
            </Content>
        </Container>
    );
}
