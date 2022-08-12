//회원가입 화면
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Alert, SafeAreaView } from 'react-native';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import MyProfileImage from '../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";


const Signup = ({ navigation }) => {
    const [id, setId] = useState('');   //입력 id
    const [nickname, setNickName] = useState('');   //입력 nickname
    const [password, setPassword] = useState('');   //입력 password
    const [passwordConfirm, setPasswordConfirm] = useState(''); //입력 password확인
    const [disabled, setDisabled] = useState(true);    //회원가입 버튼 disabled 여부

    const [idErrorMsg, setIdErrorMsg] = useState('');

    // const onChangeId = useCallback((e) => {
    //     const idCurrent = e.nativeEvent.text;
    //     setId(idCurrent);
    //     if(idCurrent.length > 10){
    //         setIdErrorMsg('10글자 미만으로 입력해주세요!')
    //     }
    // }, [id]);

    //회원가입 완료 버튼 disabled
    // id, password, passwordConfirm, nickname 4개가 모두 입력되어야만 버튼이 활성화되도록 함
    useEffect(() => {
        setDisabled(!(id && password && passwordConfirm && nickname))
    }, [id, password, passwordConfirm, nickname]);

    //회원가입 버튼 클릭 시 동작
    const handleSignupButtonPress = () => {
        axios.post("http://10.0.2.2:8000/accounts/signup/", { username: id, password, Name: nickname })
            .then(response => {
                console.log('response : ', response);
                Alert.alert("Signup Success!!", "회원가입이 완료되었습니다!",
                        [{ text: "OK ", 
                            onPress: () => navigation.navigate("Login")}]);
            })
            .catch(err => {
                console.log("error : ", err.response.data);
            })
    };


    return(
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <MyProfileImage />
                    <MyInput
                        label="ID"
                        value={id}
                        onChangeText={text => setId(text)}
                        // onSubmitEditing={onSubmitId}
                        placeholder="아이디(영문, 숫자 포함 몇자 이상)"
                    />
                    <Text style={styles.errortext}>{idErrorMsg}</Text>
                    <MyInput
                        label="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        // onSubmitEditing={() => passwordConfirmRef.current.focus()}
                        placeholder="비밀번호(8자 이상)"
                        isPassword
                    />
                    <Text style={styles.errortext}>{idErrorMsg}</Text>
                    <MyInput
                        label="PasswordConfirm"  
                        value={passwordConfirm}
                        onChangeText={text => setPasswordConfirm(text)}
                        // onSubmitEditing={() => nameRef.current.focus()}
                        placeholder="비밀번호 확인"
                        isPassword
                    />
                    <Text style={styles.errortext}>{idErrorMsg}</Text>
                    <MyInput
                        label="Nickname"
                        value={nickname}
                        onChangeText={text => setNickName(text)}
                        // onSubmitEditing={() => handleSignupButtonPress}
                        placeholder="사용할 닉네임을 입력하세요"
                    />
                    <Text style={styles.errortext}>{idErrorMsg}</Text>
                    <View style={{ height: 50 }} />
                    <MyButton title="회원가입완료" onPress={ handleSignupButtonPress } disabled={disabled}/>
                </View>
            </SafeAreaView>
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
        paddingTop: 10,
        paddingBottom: 80,
    },
    errortext: {
        color: "red",
        fontWeight: '400',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginBottom: 7,
    },
});

export default Signup;