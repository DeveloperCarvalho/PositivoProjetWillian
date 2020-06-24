import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import NavigationService from './services/navigation';

const App: React.FC = () => {

    const registerService = (ref: unknown) => {
        NavigationService.setTopLevelNavigator(ref);
    };

    return (
        <NavigationContainer ref={registerService}>
            <Routes />
        </NavigationContainer>
    );
};

export default App;
