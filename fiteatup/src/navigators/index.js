import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserState } from '../context/UserContext';


const Navigation = () => {
    const { user } = useUserState();
    // let token;

    // useEffect(() => {
    //     const getToken = async () => { 
    //         try{
    //             token = await AsyncStorage.getItem('token');
    //             console.log('token: ',token);
    //         } catch(e){
    //             console.log(e.message);
    //         }
    //     }
    //     getToken();
    // }, []);

    return(
        <NavigationContainer>
            {user === null ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
    );
};

export default Navigation;