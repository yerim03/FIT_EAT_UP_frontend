import React from 'react';
// import {View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigators/AuthStack';
import MainStack from './navigators/MainStack';

const App = () => {
    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default App;
