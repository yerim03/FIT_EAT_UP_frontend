import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './navigators/AuthStack';
import MainStack from './navigators/MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


const App = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="AuthStack" component={AuthStack}/> */}
            <Stack.Screen name="MainStack" component={MainStack}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;











// const App = () => {
//     const [isToken, setIsToken] = useState(false);

//     const CheckToken = async() => {
//         const token = await AsyncStorage.getItem('token');
//         console.log(token);
//         if(token == null){
//             setIsToken(false);
//         }
//         else{
//             setIsToken(true);        
//         }
//     };

//     CheckToken();
//     if(isToken){
//         return(
//             <NavigationContainer>
//                 <MainStack />
//             </NavigationContainer>
//         );
//     }
//     else{
//         return(
//             <NavigationContainer>
//                 <AuthStack />
//             </NavigationContainer>
//         );
//     }
// };