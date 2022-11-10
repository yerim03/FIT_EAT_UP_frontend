import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigators';
import { UserProvider } from './context/UserContext';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; 


const App = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync();
        };
        const loadResources = async () => {
            try { 
                await Font.loadAsync({
                    'netmarbleBold': require('../assets/fonts/netmarbleB.ttf'),
                    'netmarbleMedium': require('../assets/fonts/netmarbleM.ttf'),
                    'netmarbleLight': require('../assets/fonts/netmarbleL.ttf'),
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setIsLoadingComplete(true);
                await SplashScreen.hideAsync();
            }
        }
        prepare();
        loadResources();
    }, [isLoadingComplete])

    
    if(!isLoadingComplete){
        return null;
    } else {
        return (
            <UserProvider>
                <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
                <Navigation />
            </UserProvider>
        );
    }
};

export default App;