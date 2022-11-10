import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FreindStack from './FriendStack';
import MyPageStack from './MyPageStack';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';


const Tab = createBottomTabNavigator();

const TabIcon = ({ iconName, size, color }) => {
    return <Ionicons name={iconName} size={size} color={color} />
};

const MainTab = () => {
    return(
        <Tab.Navigator 
            initialRouteName='HomeStack'
            //탭 아이콘 설정
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    let iconName = '';
                    let size;
                    if(route.name === 'HomeStack') {
                        iconName = props.focused? 'md-home' : 'md-home-outline';
                        size = 27;}
                    else if(route.name === 'SearchStack') {
                        iconName = props.focused? 'md-search' : 'md-search-outline';
                        size = 27;}
                    else if(route.name === 'FreindStack') {
                        iconName = props.focused? 'md-people' : 'md-people-outline';
                        size = 27;}
                    else  {
                        iconName = props.focused? 'md-person' : 'md-person-outline';
                        size = 27;}
                    return TabIcon({ ...props, iconName, size });
                },
                headerShown: false,
                //하단 탭 바 속성
                tabBarActiveTintColor: `${theme.tabActiveTint}`,
                tabBarInactiveTintColor: `${theme.tabInActiveTint}`,
            })}
        >   
            <Tab.Screen 
                name="HomeStack" 
                component={HomeStack} 
                options={{ tabBarLabel: '홈', 
                            tabBarLabelStyle: { fontFamily: 'netmarbleMedium', fontSize: 12, marginBottom: 2 }
                        }} 
            />
            <Tab.Screen 
                name="SearchStack" 
                component={SearchStack} 
                options={{ tabBarLabel: '검색', 
                            tabBarLabelStyle: { fontFamily: 'netmarbleMedium', fontSize: 12, marginBottom: 2 }
                }}
            />
            <Tab.Screen 
                name="FreindStack" 
                component={FreindStack} 
                options={{ tabBarLabel: '친구', 
                            tabBarLabelStyle: { fontFamily: 'netmarbleMedium', fontSize: 12, marginBottom: 2 }
                }} 
            />
            <Tab.Screen 
                name="MyPageStack" 
                component={MyPageStack} 
                options={{ tabBarLabel: '내정보', 
                            tabBarLabelStyle: { fontFamily: 'netmarbleMedium', fontSize: 12, marginBottom: 2 }
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;

