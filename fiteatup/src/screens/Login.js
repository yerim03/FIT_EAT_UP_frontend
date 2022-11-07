//로그인 화면
import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { API } from '../config';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserDispatch } from '../context/UserContext';
import { theme } from '../styles/theme';
import { globalStyles } from '../styles/styles';
import Logo from '../../assets/icon2.png';

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

    //로그인 성공 후 받은 토큰으로 user 정보 get
    const getUserData = async (token) => {;
        await axios.get(`${API.USER_DATA}`, 
                { headers: { 
                    'Authorization': `jwt ${token}`
                }}
        )
            .then(res => { //context api로 user 정보 관리
                            dispatch({type: "LOGIN", 
                                      userData : { 
                                        pk: res.data.pk, 
                                        id: res.data.username,
                                        nickname: res.data.nickname,
                                        profileImage: res.data.avatar_url,
                                        // 여기에 가능하다면 나이도 추가
                                        token: token}
                                    })
                            console.log('context api 완료')
            })
            .catch(err => {console.log(err)})
    };

    
    //로그인 기능
    const handleLoginButtonPress = () => {
        axios.post(`${API.LOGIN}`, { username: id, password: password })
            .then(res => {
                console.log('로그인 성공');
                // AsyncStorage.setItem('token', JSON.stringify(response.data.token), () => { console.log("토큰저장완료") });
                getUserData(res.data.token);
                Alert.alert('로그인 성공', '환영합니다!!');
                onReset();
            })
            .catch(err => {
                Alert.alert("로그인 실패", "ID 또는 Password를 잘못 입력했습니다.");
                console.log("Login Error : ", err.response.data);
            })
    }; 


    return(
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} extraScrollHeight={20}>
                <View style={globalStyles.container}>
                    {/* <Image style={{ backgroundColor: 'red', width: 100, height: 100, margin: 30}} 
                            source={Logo}/> */}
                    <View style={{ height: 90 }} />
                    <Text style={styles.title}>FIT EAT UP</Text>
                    <Text style={styles.smallTitle}>친구와의 공통 맛집 추천 서비스</Text>
                    <MyInput
                        label="아이디"
                        value={id}
                        onChangeText={text => setId(text)}
                        returnKeyType="next"
                        onSubmitEditing={() => {}}
                        placeholder="아이디를 입력해주세요."
                    />
                    <View style={{ height: 15 }}/>
                    <MyInput
                        label="비밀번호"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        onSubmitEditing={() => {}}
                        placeholder="비밀번호를 입력해주세요."
                        isPassword  //비밀번호 입력시 입력되는 값이 보이지 않도록 설정
                    />
                    <View style={{ height: 50 }} />
                    <MyButton title="로그인" onPress={ handleLoginButtonPress } disabled={disabled}/>
                    <View style={{ height: 20 }} />
                    <MyButton title="회원가입" onPress={()=> navigation.navigate("Signup")}/>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        fontWeight: '600',
        alignSelf: 'flex-start',
        color: theme.title,
    },
    smallTitle: {
        fontSize: 17,
        fontWeight: '600',
        alignSelf: 'flex-start',
        color: theme.smallTitle,
        marginBottom: 40,
    }
});

export default Login;