//인증스택
//로그인, 회원가입 화면
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';
import { theme } from '../styles/theme';


const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{ 
                cardStyle: { backgroundColor: `${theme.backgroundColor}`},
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'netmarbleMedium',
                    fontSize: 19
                },
                headerTintColor: `${theme.title}`,
                headerBackTitleVisible: false,
                headerBackImage: HeaderBackButton 
            }}
        >
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Signup" 
                component={Signup}
                options={{ headerTitle: '회원가입' }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;