import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserDispatch, useUserState } from '../context/UserContext';
import * as Location from 'expo-location';


const Navigation = () => {
    const { user } = useUserState();
    const dispatch = useUserDispatch();

    const [ok, setOk] =useState();

    //사용자 현재 위치 정보 가져오기
    const getLocation = async () => {   
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if(!granted) {  //위치 권한 요청 거부
            setOk(false);
        }
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        // const location = await Location.reverseGeocodeAsync({ latitude, longitude });
        // console.log(location);
        console.log('현재 나의 위치는\n', 'latitude: ',  latitude, '\nlongitude: ', longitude);
        dispatch({type: "LOCATION", 
                  userLocation : {
                    latitude: latitude,
                    longitude: longitude,
                  }
                });

    }

    useEffect(()=>{ 
        getLocation();

    }, [])

    return(
        <NavigationContainer>
            {/* <MainStack /> */}
            {user === null ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
    );
};

export default Navigation;