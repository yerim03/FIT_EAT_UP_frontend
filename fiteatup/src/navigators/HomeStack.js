//첫 번째 탭 - Home
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, HomeResult } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';
import { theme } from '../styles/theme';


const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                cardStyle: { backgroundColor: `${theme.backgroundColor}`},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false, 
                headerBackImage: HeaderBackButton,
            }} 
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="HomeResult" 
                component={HomeResult}
                options={{ headerTitle: '추천 결과',
                            headerTitleStyle: {fontWeight: 'bold'} }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;