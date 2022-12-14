//네 번째 탭 - MyPage
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyPage, VisitList, GoodList, ProfileEdit } from '../screens';
import HeaderBackButton from '../components/HeaderBackButton';
import { theme } from '../styles/theme';


const Stack = createStackNavigator();

const MyPageStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{ 
                cardStyle: { backgroundColor: `${theme.backgroundColor}`},
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'netmarbleMedium',
                    fontSize: 19
                },
                headerTintColor: `${theme.title}`,
                headerBackTitleVisible: false,
                headerBackImage: HeaderBackButton,
            }} 
        >
            <Stack.Screen 
                name="MyPage" 
                component={MyPage} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="VisitList" 
                component={VisitList} 
                options={{ headerTitle: '가본 장소 리스트' }}
            />
            <Stack.Screen 
                name="GoodList"
                component={GoodList} 
                options={{ headerTitle: '좋아요 장소 리스트' }}
            />
            <Stack.Screen 
                name="ProfileEdit"
                 component={ProfileEdit} 
                 options={{ headerTitle: '프로필 수정' }}
                />
        </Stack.Navigator>
    );
};

export default MyPageStack;