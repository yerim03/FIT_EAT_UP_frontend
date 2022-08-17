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
                cardStyle: { backgroundColor: '#ffffff'},
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
                            // 우측 상단의 친구추가 페이지(AddFriend.js)로 이동하는 버튼 생성
                            headerRight: () => {
                                return(
                                    <Ionicons 
                                        name="add" 
                                        size={35} 
                                        color="#404040"
                                        style={{ marginRight: 10 }}
                                        onPress={() => navigation.navigate("AddFriend")} 
                                    />
                                );
                            },
                        }} 
                />
            <Stack.Screen 
                name="FriendProfile" 
                component={FriendProfile} 
                options={{ headerTitle: '프로필', 
                            headerTitleStyle: {fontWeight: 'bold'},
                            // 우측 상단의 해당 친구를 삭제하는 버튼 생성
                            headerRight: () => {
                                return(
                                    <MaterialIcons 
                                        name="more-horiz" 
                                        size={35} 
                                        color="#404040"
                                        style={{ marginRight: 10 }} 
                                        // onPress={} 누르면 친구목록에서 친구 삭제
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