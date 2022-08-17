//네 번째 탭 - MyPage
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyPage, VisitList, GoodList, ProfileEdit } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';

const Stack = createStackNavigator();

const MyPageStack = () => {
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
                name="MyPage" 
                component={MyPage} 
                options={{ headerTitle: '마이페이지',
                            headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
                }} />
            <Stack.Screen 
                name="VisitList" 
                component={VisitList} 
                options={{ headerTitle: '가본 장소 리스트',
                            headerTitleStyle: {fontWeight: 'bold'} }}
            />
            <Stack.Screen 
                name="GoodList"
                component={GoodList} 
                options={{ headerTitle: '좋아요 장소 리스트',
                            headerTitleStyle: {fontWeight: 'bold'} }}
                />
            <Stack.Screen 
                name="ProfileEdit"
                 component={ProfileEdit} 
                 options={{ headerTitle: '프로필 수정',
                            headerTitleStyle: {fontWeight: 'bold'} }}
                 />
        </Stack.Navigator>
    );
};

export default MyPageStack;