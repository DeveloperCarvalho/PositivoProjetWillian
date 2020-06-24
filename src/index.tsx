import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';


import App from './App';

const Root: React.FC = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#1c2331" />
            <App />
            </>
      
    );
};

export default Root;
