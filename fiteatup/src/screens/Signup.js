//회원가입 화면
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import MyProfileImage from '../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";
import { API } from '../config';
import { theme } from '../styles/theme';
import { globalStyles } from '../styles/styles';

const Signup = ({ navigation }) => {
    const [id, setId] = useState('');   //입력 id
    const [nickname, setNickName] = useState('');   //입력 nickname
    const [password, setPassword] = useState('');   //입력 password
    const [passwordConfirm, setPasswordConfirm] = useState(''); //입력 password확인
    const [photoUrl, setPhotoUrl] = useState(); //입력 image
    const [photoData, setPhotoData] = useState();
    const [disabled, setDisabled] = useState(true);    //회원가입 버튼 disabled 여부

    //오류메세지 저장
    const [idErrorMsg, setIdErrorMsg] = useState('');   //id 오류 메세지
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');    //password 오류 메세지
    const [passwordConfrimMsg, setPasswordConfrimMsg] = useState(''); //passwordConfrim 오류 메세지

    //유효성 검사
    const [isPassword, setIsPassword] = useState(false);    //password 유효성
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);  //passwordconfirm 유효성

    //id, password 정규표현식
    const idRegex = /^[A-Za-z0-9]{6,}$/; //id 규칙(영문 또는 숫자 6자 이상)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/;  //password 규칙(영문 또는 숫자 또는 특수문자를 최소 한개씩 포함해서  8자 이상)

    //id, password, passwordconfirm, nickname 초기화
    const onReset = () => {
        setId('');
        setPassword('');
        setPasswordConfirm('');
        setNickName('');
    };

    //아이디 오류 메세지
    const onChangeId = id => {
        const CurrentId = id;
        setId(CurrentId);
        if(!idRegex.test(CurrentId)){
            setIdErrorMsg('영문+숫자 조합 6자리 이상으로 입력해주세요.');
        }
        else{
            setIdErrorMsg('');
        }
    };

    //비밀번호 오류 메세지
    const onChangePassword = password => {
        const CurrentPWD = password;
        setPassword(CurrentPWD);
        if(!passwordRegex.test(CurrentPWD)){
            setPasswordErrorMsg('영문+숫자+특수문자 조합 8자리 이상으로 입력해주세요.');
            setIsPassword(false);
        }
        else{
            setPasswordErrorMsg('사용가능한 비밀번호입니다!');
            setIsPassword(true);
        }
    };

    // 비밀번호 확인 오류 메시지
    const onChangePasswordConfirm = passwordConfirm => {
        const CurrentPWDConfrim = passwordConfirm;
        setPasswordConfirm(CurrentPWDConfrim);
        if( password !== CurrentPWDConfrim){
            setPasswordConfrimMsg('비밀번호가 일치하지 않습니다.');
            setIsPasswordConfirm(false);
        }
        else{
            setPasswordConfrimMsg('비밀번호가 일치합니다!');
            setIsPasswordConfirm(true);
        }
    };


    //회원가입 완료 버튼 disabled
    // id, password, passwordConfirm, nickname 4개가 모두 입력되어야만 버튼이 활성화되도록 함
    useEffect(() => {
        setDisabled(!(id && password && passwordConfirm && nickname))
    }, [id, password, passwordConfirm, nickname]);


    //수정필요
    //
    //
    //회원가입 버튼 클릭 시 동작
    const handleSignupButtonPress = () => {
        // const filename = photoData.uri.split('/').pop();
        // const match = /\.(w+)$/.exec(filename ?? '');
        // const type = match ? `image/${match[1]}` : `image`;
        // console.log(type);
        const formdata = new FormData();
        formdata.append('username', id);
        formdata.append('password', password);
        formdata.append('nickname', nickname);
        formdata.append('avatar', {uri: photoData.uri, 
                                   type: "image/jpeg",
                                   name: "profilephoto"});
        console.log(formdata);

        axios.post(`${API.SIGNUP}`, 
                    formdata, 
                    {headers: {"content-type": "multipart/form-data"}}
                  )
            .then(response => {
                console.log('response : ', response);
                Alert.alert("회원가입 성공", "회원가입이 완료되었습니다!",
                        [{ text: "OK ", onPress: () => navigation.navigate("Login")}]
                );
                onReset();
            })
            .catch(err => {
                if(err.response.data.username) {
                    Alert.alert("이미 사용중인 id입니다.", "다른 id를 입력해주세요.");
                    console.log("iderror : ", err.response.data.username);
                }
                if(err.response.data.nickname) {
                    Alert.alert("이미 사용중인 닉네임입니다.", "다른 닉네임을 입력해주세요.");
                    console.log("nicknameerror : ", err.response.data.nickname);
                }
            })
    };
    //
    //
    // 수정 필요


    return(
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView extraScrollHeight={40}>
                <View style={globalStyles.container}>
                    <Text style={styles.title}>회원가입</Text>
                    <MyProfileImage url={photoUrl} showButton onChangeImage={photo => {setPhotoUrl(photo.uri); setPhotoData(photo)}}/>
                    <MyInput
                        label="아이디"
                        value={id}
                        onChangeText={onChangeId}
                        onSubmitEditing={() => {}}
                        placeholder="아이디(영문 또는 숫자 6글자 이상)"
                    />
                    <Text style={styles.errorText}>{idErrorMsg}</Text>
                    <View style={{ height: 15 }}/>
                    <MyInput
                        label="비밀번호"
                        value={password}
                        onChangeText={onChangePassword}
                        onSubmitEditing={() => {}}
                        placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
                    />
                    <Text style={isPassword ? styles.correctText : styles.errorText}>{passwordErrorMsg}</Text>
                    <View style={{ height: 15 }}/>
                    <MyInput
                        label="비밀번호 확인"  
                        value={passwordConfirm}
                        onChangeText={onChangePasswordConfirm}
                        onSubmitEditing={() => {}}
                        placeholder="비밀번호를 다시 한번 입력해주세요."
                    />
                    <Text style={isPasswordConfirm ?  styles.correctText : styles.errorText}>{passwordConfrimMsg}</Text>
                    <View style={{ height: 15 }}/>
                    <MyInput
                        label="닉네임"
                        value={nickname}
                        onChangeText={text => setNickName(text)}
                        onSubmitEditing={() => {}}
                        placeholder="사용할 이름을 입력하세요"
                    />
                    <View style={{ height: 50 }} />
                    <MyButton title="회원가입완료" onPress={ handleSignupButtonPress } disabled={disabled}/>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: `${theme.title}`,
        marginBottom: 40,
    },
    errorText: {
        color: `${theme.errorMessage}`,
        fontWeight: '500',
        fontSize: 13,
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginBottom: 7,
    },
    correctText: {
        color: `${theme.correctMesage}`,
        fontWeight: '500',
        fontSize: 13,
        alignSelf: 'flex-start',
        marginLeft: 5,
        marginBottom: 7,
    },

});

export default Signup;