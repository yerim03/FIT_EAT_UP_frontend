//인증스택
//로그인, 회원가입 화면
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';

const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen 
                name="Signup" 
                component={Signup}
                options={{ headerBackTitleVisible: false,
                            headerBackImage: HeaderBackButton}}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;