import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
    interface Console {
        tron: any;
    }
}

if (__DEV__) {
    const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
        .configure({ host: '192.168.1.21' })
        .useReactNative()
        .connect();

    tron.clear!();

    console.tron = tron;
}
