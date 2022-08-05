//로그인 화면
import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = ({ navigation }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    //로그인 버튼 클릭 시 동작
    const handleLoginButtonPress = () => {};

    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
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
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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