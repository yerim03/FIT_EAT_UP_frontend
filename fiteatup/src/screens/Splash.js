//시작화면
// 추후에 수정 혹은 삭제 예정
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('token')
                .then((value) => {
                    console.log("현재 토큰은 : " , value);
                    if(value != null){   //토큰 있음
                        console.log("토큰이 존재함.");
                        navigation.navigate('MainStack');
                    } else{   //토큰 없음
                        console.log("토큰이 존재하지 않음.");
                        navigation.navigate('AuthStack');
                    }
                });
        }, 3000);
    }, []);
    
    return(
        <View style={styles.container}>
        <Text style={styles.title}>FIT EAT UP</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
    }
});
export default Splash;