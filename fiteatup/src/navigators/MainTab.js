import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FreindStack from './FriendStack';
import MyPageStack from './MyPageStack';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabIcon = ({ iconName, size, color }) => {
    return <Ionicons name={iconName} size={size} color={color} />
};

const MainTab = () => {
    return(
        <Tab.Navigator 
            initialRouteName='HomeStack'
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    let iconName = '';
                    if(route.name === 'HomeStack') {
                        iconName = props.focused? 'md-home' : 'md-home-outline';}
                    else if(route.name === 'SearchStack') {
                        iconName = props.focused? 'md-search' : 'md-search-outline';}
                    else if(route.name === 'FreindStack') {
                        iconName = props.focused? 'md-people' : 'md-people-outline';}
                    else  {
                        iconName = props.focused? 'md-person' : 'md-person-outline';}
                    return TabIcon({ ...props, iconName });
                },
                headerShown: false,
                //하단 탭 바 속성
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#404040',
                tabBarInactiveTintColor: '#E0E0E0',
                tabBarActiveBackgroundColor: '#E0E0E0',
                tabBarInactiveBackgroundColor: '#404040',
            })}
        >   
            <Tab.Screen name="HomeStack" component={HomeStack}/>
            <Tab.Screen name="SearchStack" component={SearchStack}/>
            <Tab.Screen name="FreindStack" component={FreindStack}/>
            <Tab.Screen name="MyPageStack" component={MyPageStack}/>
        </Tab.Navigator>
    );
};

export default MainTab;

