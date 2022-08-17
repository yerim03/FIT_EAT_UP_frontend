//두 번째 스택 - Search
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search, SearchResult } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';

const Stack = createStackNavigator();

const SearchStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{ 
                cardStyle: { backgroundColor: '#ffffff'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false, 
                headerBackImage: HeaderBackButton,
            }} 
        >
            <Stack.Screen 
                name="Search" 
                component={Search} 
                options={{ headerShown: false }} 
            />   
            <Stack.Screen 
                name="SearchResult" 
                component={SearchResult}
                options={{ headerTitle: '검색 결과',
                            headerTitleStyle: {fontWeight: 'bold'} }}
            />    
        </Stack.Navigator>
    );
};

export default SearchStack;