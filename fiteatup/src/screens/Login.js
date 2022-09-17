//로그인 화면
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";
import { API } from "../config";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserDispatch } from "../context/UserContext";


const Login = ({ navigation }) => {
    const [id, setId] = useState(''); //입력 id
    const [password, setPassword] = useState(''); //입력 password
    const [disabled, setDisabled ] = useState(true); //로그인 버튼 disabled 여부

    const dispatch = useUserDispatch();

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

    const getUserData = async (token) => {;
        await axios.get(`${API.USER_DATA}`, 
                { headers: { 
                    'Authorization': `jwt ${token}`}
                })
            .then(res => { //context api로 user 정보 관리
                            dispatch({type: "LOGIN", 
                                      userData : { 
                                      pk: res.data.pk, 
                                      id: res.data.username,
                                      nickname: res.data.nickname,
                                      profileImage: res.data.avatar_url,
                                      token: token}})
                            console.log('context api 완료')})
            .catch(err => console.log(err.message))
    };

    
    //로그인 버튼 클릭 시 동작 - 로그인 기능
    const handleLoginButtonPress = () => {
        axios.post(`${API.LOGIN}`,{ username: id, password: password })
            .then(response => {
                console.log("로그인 성공");
                // AsyncStorage.setItem('token', JSON.stringify(response.data.token), () => { console.log("토큰저장완료") });
                getUserData(response.data.token);   // accounts/toekn에서 얻은 토큰으로 user정보 가져오기
                Alert.alert('로그인 성공',  '환영합니다!');
                onReset();
            })
            .catch(err => {
                Alert.alert("Login Fail", "ID 또는 Password를 잘못 입력했습니다.");
                console.log("Login Error : ", err);
            })
    };
    

    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} extraScrollHeight={20}>
            <View style={styles.container}>
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
                <View style={{ height: 5 }} />
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
                <View style={{ height: 12 }} />
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