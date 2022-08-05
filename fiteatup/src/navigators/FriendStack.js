//세 번째 탭 - Freind
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Friend, FriendProfile, AddFriend } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const FreindStack = ({ navigation }) => {
    return(
        <Stack.Navigator 
            screenOptions={{ 
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerBackImage: HeaderBackButton,
            }} 
        >
            <Stack.Screen 
                name="Friend" 
                component={Friend}
                options={{ headerTitle: '친구 목록',
                            headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
                            headerRight: () => {
                                return(
                                    <Ionicons 
                                        name="add" 
                                        size={35} 
                                        color="#404040"
                                        style={{ marginRight: 10 }}
                                        onPress={() => navigation.navigate("AddFriend")} />
                                );
                            },
                        }} 
                />
            <Stack.Screen 
                name="FriendProfile" 
                component={FriendProfile} 
                options={{ headerTitle: '프로필', 
                            headerTitleStyle: {fontWeight: 'bold'},
                            headerRight: () => {
                                return(
                                    <MaterialIcons 
                                        name="more-horiz" 
                                        size={35} 
                                        color="#404040"
                                        style={{ marginRight: 10 }} 
                                    />
                                );
                            }, 
                        }}
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