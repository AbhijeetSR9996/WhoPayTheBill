import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import Toast from 'react-native-toast-message';
import { MyProvider } from './src/context';

const index = () => {
    return (
        <MyProvider>
         <App/>
         <Toast ref={(ref) => Toast.setRef(ref)} />
        </MyProvider>
    );
};

AppRegistry.registerComponent(appName, () => index);