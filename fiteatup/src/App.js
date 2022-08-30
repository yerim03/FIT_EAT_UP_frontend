import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigators';
import { UserProvider } from './context/UserContext';


const App = () => {
    const [isReady, setIsReady] = useState(true);

    return (
        <UserProvider>
            <StatusBar />
            <Navigation />
        </UserProvider>
    );
};

export default App;

// import React, { useContext, useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { UserProvider, UserContext } from './context/UserContext';

// const Stack = createStackNavigator();

// const App = () => {
//     const { user } = useContext(UserContext);
//     let token;

//     // useEffect(() => {
//     //     const getToken = async () => { 
//     //         try{
//     //             token = await AsyncStorage.getItem('token');
//     //             // console.log('token: ',token);
//     //         } catch(e){
//     //             console.log(e.message);
//     //         }
//     //     }
//     //     getToken();
//     // }, []);

//     return(
//         // <UserProvider>
//             <NavigationContainer>
//                 <StatusBar />
//                 <Stack.Navigator screenOptions={{ headerShown: false }}>

//                         {/* <Stack.Screen name="Splash" component={Splash} /> */}
//                         {/* id가 존재하고 token이 null이 아니면 MainStack으로,  */}
//                         {/* { token !=== ? <MainStack /> : <AuthStack />} */}
//                         {/* <Stack.Screen name="AuthStack" component={AuthStack}/> */}
//                         <Stack.Screen name="MainStack" component={MainStack}/>
//                 </Stack.Navigator>
//             </NavigationContainer>
//         // </UserProvider>
//         );
// };

// export default App;











// // const [isToken, setIsToken] = useState(false);  //토큰 존재여부 확인

// // useEffect(() => {
// //     const currentToken = AsyncStorage.getItem('token');
// //     console.log(currentToken);
// //     if(currentToken){
// //         setIsToken(false);
// //         console.log("토큰이 존재하지 않음.");
// //     }
// //     else{
// //         setIsToken(true);
// //         console.log("토큰이 존재함.");
// //     }
// // }, []);

// // return(
// //     <NavigationContainer>
// //         <StatusBar />
// //         <Stack.Navigator>
// //             {isToken ? (
// //                 <Stack.Screen name="MainStack" component={MainStack}/>
// //             ) : (
// //                 <Stack.Screen name="AuthStack" component={AuthStack}/>
// //             )}
// //         </Stack.Navigator>
// //     </NavigationContainer>
// // );