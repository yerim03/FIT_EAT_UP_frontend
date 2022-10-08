import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserState } from '../context/UserContext';


const Navigation = () => {
    const { user } = useUserState();

    return(
        <NavigationContainer>
            {user === null ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
    );
};

export default Navigation;