import React from 'react';
import {
   FlatList,
   StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

import {
   Container,
} from './style';
import { DrawerProps } from '../../routes/types/DrawerTypes';

const Albuns: React.FC = () => {
  
   const navigation = useNavigation<DrawerProps>();
   const toggleDrawer = (): void => {
       navigation.toggleDrawer();
   };


   return (
      <Container>
         <StatusBar backgroundColor="#FF8000" />
         <Header title="Albuns" onDrawer={toggleDrawer} />
      
            <FlatList
            />
      </Container>
   );
};

export default Albuns;
