import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';
import AlbunScreen from '../screens/Albuns';

interface INavigationProps {
    signed: boolean;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator(): ReactElement {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Albuns" component={AlbunScreen} />
            <Drawer.Screen name="Posts" component={HomeScreen} />
        </Drawer.Navigator>
    );
}

const getInitialRoute = (signed: boolean): string => {
    if (signed) {
        return 'Home';
    }

    return 'Home';
};

export default function RootNavigator({
    signed,
}: INavigationProps): ReactElement {
    function RootStack(): ReactElement {
        return (
            <Stack.Navigator
                headerMode="none"
                initialRouteName={getInitialRoute(signed)}
            >
                <Stack.Screen name="Home" component={HomeNavigator} />
            </Stack.Navigator>
        );
    }

    return <RootStack />;
}
