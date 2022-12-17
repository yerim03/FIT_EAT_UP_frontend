import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
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