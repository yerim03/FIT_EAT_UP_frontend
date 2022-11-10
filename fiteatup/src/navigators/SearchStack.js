//두 번째 스택 - Search
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, SearchResult } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';
import { theme } from '../styles/theme';


const Stack = createStackNavigator();

const SearchStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{ 
                cardStyle: { backgroundColor: `${theme.backgroundColor}`},
                headerBackTitleVisible: false, 
                headerBackImage: HeaderBackButton,
            }} 
        >
            <Stack.Screen 
                name="Search" 
                component={Search} 
                options={{ headerShown: false }} 
            />   
        </Stack.Navigator>
    );
};

export default SearchStack;