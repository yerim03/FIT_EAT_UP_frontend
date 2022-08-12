import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './navigators/AuthStack';
import MainStack from './navigators/MainStack';
// import { Login, Signup } from './screens';

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthStack" component={AuthStack}/>
                <Stack.Screen name="MainStack" component={MainStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
