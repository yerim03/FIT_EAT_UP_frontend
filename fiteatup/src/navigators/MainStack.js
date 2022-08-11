import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';
import { RestaurantInfo } from '../screens';

const Stack = createStackNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainTab} options={{ headerShown: false }}/>
            <Stack.Screen name="RestaurantInfo" component={RestaurantInfo}
                            options={{ headerTitleAlign: 'center', headerTitle: '' }}/>
        </Stack.Navigator>
    );
};

export default MainStack;