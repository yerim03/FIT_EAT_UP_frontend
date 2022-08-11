//로그인 화면
import React, { useState } from "react";
import { Text, 
        StyleSheet, 
        View, 
        Alert, 
        SafeAreaView,
        Dimensions,
         } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    //로그인 버튼 클릭 시 동작
    const handleLoginButtonPress = async() => { 
        await Axios.post("http://10.0.2.2:8000/accounts/token/",{ username: id, password })
                .then(response => {
                    console.log("성공: ", response.data, response.config.data);
                    console.log("로그인성공끝");
                    AsyncStorage.setItem('token', JSON.stringify(response.data.token), () => { console.log("토큰저장완료") });
                    AsyncStorage.getItem('token', (err, result) => { console.log('저장된 토큰은 ', JSON.parse(result)); })
                    Alert.alert("Login Success!!", "로그인에 성공했습니다!",
                        [{ text: "ok", 
                            onPress: () => navigation.navigate("MainStack") //alert창에서 ok 버튼을 클릭하면 MainStack으로 전환
                        }]
                    );
                })
                .catch(error => {
                    console.log("Error : ", error.response);
                })
    };


    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} extraScrollHeight={20}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ height: 50 }} />
                    <Text style={styles.title}>Login</Text>
                    <View style={{ height: 50 }} />
                    <MyInput
                        label="ID"
                        value={id}
                        onChangeText={text => setId(text)}
                        onSubmitEditing={() => {}}
                        placeholder="ID를 입력해주세요."
                    />
                    <MyInput
                        label="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        onSubmitEditing={() => {}}
                        placeholder="Password를 입력해주세요."
                        isPassword  //비밀번호 입력시 입력되는 값이 보이지 않도록 설정
                    />
                    <View style={{ height: 20 }} />
                    <MyButton title="로그인" onPress={ handleLoginButtonPress }/>
                    <MyButton title="회원가입" onPress={()=> navigation.navigate("Signup")}/>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: Dimensions.get('window').width - 40,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default Login;