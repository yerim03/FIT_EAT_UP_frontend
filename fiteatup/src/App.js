import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from './screens';
import AuthStack from './navigators/AuthStack';
import MainStack from './navigators/MainStack';


const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <StatusBar />
            <Stack.Navigator  screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Splash" component={Splash} /> */}
                {/* <Stack.Screen name="AuthStack" component={AuthStack}/> */}
                <Stack.Screen name="MainStack" component={MainStack}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
};
// initialRouteName='Splash'
export default App;











// const [isToken, setIsToken] = useState(false);  //토큰 존재여부 확인

// useEffect(() => {
//     const currentToken = AsyncStorage.getItem('token');
//     console.log(currentToken);
//     if(currentToken){
//         setIsToken(false);
//         console.log("토큰이 존재하지 않음.");
//     }
//     else{
//         setIsToken(true);
//         console.log("토큰이 존재함.");
//     }
// }, []);

// return(
//     <NavigationContainer>
//         <StatusBar />
//         <Stack.Navigator>
//             {isToken ? (
//                 <Stack.Screen name="MainStack" component={MainStack}/>
//             ) : (
//                 <Stack.Screen name="AuthStack" component={AuthStack}/>
//             )}
//         </Stack.Navigator>
//     </NavigationContainer>
// );