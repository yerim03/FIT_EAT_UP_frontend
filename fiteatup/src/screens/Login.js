//로그인 화면
import React, { useState, useEffect } from "react";
import { View, 
        StyleSheet, 
        Text, 
        Alert,
         } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useSafeAreaInsets } from "react-native-safe-area-context"; //노치디자인 대응(SafeAreaView 대신 사용)
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const [id, setId] = useState(''); //입력 id
    const [password, setPassword] = useState(''); //입력 password
    const [disabled, setDisabled ] = useState(true); //로그인 버튼 disabled 여부

    const insets = useSafeAreaInsets(); //노치디자인

    //id, password 초기화
    const onReset = () => {
        setId('');
        setPassword('');
    };

    //로그인 버튼 disabled
    //id, password가 모두 입력되어야만 버튼이 활성화되도록 함
    useEffect(() => {
        setDisabled(!(id && password));
    }, [id, password]);

    //로그인 버튼 클릭 시 동작 - 로그인 기능
    const handleLoginButtonPress = async() => { 
        await axios.post("http://10.0.2.2:8000/accounts/token/",{ username: id, password: password })
                .then(response => {
                    console.log("성공: \n", response);
                    console.log("로그인성공끝");    //나중에 지울거
                    AsyncStorage.setItem('token', JSON.stringify(response.data.token), () => { console.log("토큰저장완료") });
                    AsyncStorage.getItem('token', (error, result) => { console.log('저장된 토큰은 ', JSON.parse(result)); })    //나중에 지울거
                    Alert.alert("Login Success!!", "로그인에 성공했습니다!",
                        [{ text: "OK", 
                            onPress: () => navigation.navigate("MainStack") //alert창에서 OK 버튼을 클릭하면 MainStack으로 전환
                        }]
                    );
                    onReset();
                })
                .catch(err => {
                    Alert.alert("Login Fail", "ID 또는 Password를 잘못 입력했습니다.")
                    console.log("Error : \n", err.response.data);
                })
    };


    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} extraScrollHeight={20}>
            <View style={styles.container} insets={insets}>
                <View style={{ height: 80 }} />
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
                <View style={{ height: 50 }} />
                <MyButton title="로그인" onPress={ handleLoginButtonPress } disabled={disabled}/>
                <MyButton title="회원가입" onPress={()=> navigation.navigate("Signup")}/>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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