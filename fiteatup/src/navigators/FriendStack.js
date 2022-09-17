//세 번째 탭 - Freind
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Friend, FriendProfile, AddFriend } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';


const Stack = createStackNavigator();

const FreindStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{ 
                cardStyle: { backgroundColor: '#ffffff'},
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerBackImage: HeaderBackButton,
            }} 
        >
            <Stack.Screen name="Friend" component={Friend} options={{ headerShown: false }}/>
            <Stack.Screen 
                name="FriendProfile" 
                component={FriendProfile} 
                options={{ headerTitle: '프로필', 
                            headerTitleStyle: {fontWeight: 'bold'} }}
            />
            <Stack.Screen 
                name="AddFriend" 
                component={AddFriend} 
                options={{ headerTitle: '친구 추가',
                            headerTitleStyle: {fontWeight: 'bold'} }}
                />
        </Stack.Navigator>
    );
};

export default FreindStack;