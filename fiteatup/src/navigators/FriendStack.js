//세 번째 탭 - Freind
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Friend, FriendProfile, AddFriend } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';


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
            <Stack.Screen name="Friend" component={Friend} options={{ headerShown: false }}/>
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
                                        onPress={()=> 
                                            Alert.alert("친구삭제", "정말로 삭제하시겠습니까?", 
                                                        [{text: "취소", onPress: ()=>console.log("취소"), style: 'cancel'}, 
                                                        {text:"삭제", onPress: ()=>console.log("삭제"), style: 'destructive'}])} //누르면 친구목록에서 친구 삭제
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