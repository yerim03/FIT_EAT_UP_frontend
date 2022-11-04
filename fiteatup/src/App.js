import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from './navigators';
import { UserProvider } from './context/UserContext';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 

// SplashScreen.preventAutoHideAsync();
const App = () => {
    //폰트관련
    //
    //
    //
    // const [isReady, setIsReady] = useState(false);
    
    // // const [fontLoaded] = Font.useFonts({
    // //     "nanumGothic" : require("../assets/NanumGothicBold.ttf"),
    // // });

    // const loadFont = async () => {
    //     try{
    //         await Font.loadAsync({
    //             'nanumGothicBold': require('../assets/NanumGothicBold.ttf')
    //         });
    //     } finally {
    //         setIsReady(true);
    //         console.log(isReady);
    //     }
    // };

    // // const prepare = async () => {
    // //     await SplashScreen.preventAutoHideAsync();
    // // };

    // useEffect(() => {
    //     // const prepare = async() => {
    //     //     await SplashScreen.preventAutoHideAsync();
    //     // }
    //     // console.log('hello');
    //     // prepare();
    //     console.log('hello2');
    //     loadFont();
    //     console.log('hello');
    //     if (isReady === true) {
    //         SplashScreen.hideAsync();
    //         console.log('성공');
    //     }
    // }, [isReady])
    //
    //
    //
    //폰트관련


    return (
        <UserProvider>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
            <Navigation />
        </UserProvider>
    );
};

export default App;