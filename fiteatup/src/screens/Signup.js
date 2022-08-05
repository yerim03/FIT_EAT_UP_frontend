//회원가입 화면
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Input from "../components/Input";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import MyProfileImage from '../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Axios from "axios";

const Signup = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // const nameRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();


    //회원가입 버튼 클릭 시 동작
    // const handleSignupButtonPress = (e) => {
    //     e.preventDefault();
    // //
    // //     console.log(inputs.username, inputs.password);
    // //
    //     Axios.post("http://127.0.0.1:8000/accounts/signup/", {id, password})
    //         .then(response => {
    //             console.log('response : ', response);
    //         })
    //         .catch(error => {
    //             console.log("error : ", error);
    //         })
    // };

    // const handleSignupButtonPress = () => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((response) => response.json())
    //     .then( response => console.log(response))
    // }

    const handleSignupButtonPress = () => {
        fetch("http://localhost:8000/accounts/signup/")
        .then((response) => response.json())
        .then( console.log("success"))
    }
    // const handleSignupButtonPress = () => {
    //     fetch("http://127.0.0.1:8000/accounts/signup/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //           },
    //         body: JSON.stringify({
    //             id : id,
    //             password: password,
    //         }),
    //     })
    //     .then((response) => response.json())
    //     .then( response => console.log(response))
    //     .catch((err) => {
    //         console.log(err.message);
    //     })
    // };

    return(
        <KeyboardAwareScrollView 
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}>
            <View style={styles.container}>
                <Text style={styles.title}>SignUp</Text>
                <MyProfileImage />
                <MyInput
                    label="ID"
                    value={id}
                    onChangeText={text => setId(text)}
                    // onSubmitEditing={() => {}}
                    placeholder="아이디(영문, 숫자 포함 몇자 이상)"
                />
                <MyInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    // onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder="비밀번호(8자 이상)"
                    isPassword
                />
                <MyInput
                    label="PasswordConfirm"  
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
                    // onSubmitEditing={() => nameRef.current.focus()}
                    placeholder="비밀번호 확인"
                    isPassword
                />
                <MyInput
                    label="Nickname"
                    value={name}
                    onChangeText={text => setName(text)}
                    // onSubmitEditing={() => handleSignupButtonPress}
                    placeholder="사용할 닉네임을 입력하세요"
                />
                <View style={{ height: 40 }} />
                <MyButton title="회원가입완료" onPress={ handleSignupButtonPress }/>
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
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});

export default Signup;