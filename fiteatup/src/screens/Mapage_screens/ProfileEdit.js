import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { API } from '../../config';
import { useUserDispatch, useUserState } from '../../context/UserContext';

//우선 Nickname만 수정할 수 있도록 설정
//ID, Password, PasswordConfirm은 disabled
const ProfileEdit = () => {
    const { user, headers } = useUserState();
    const dispatch = useUserDispatch();
    const [changeNickname, setChangeNickname] = useState(user.userNickname);
    const [photoUrl, setPhotoUrl] = useState();


    //닉네임 수정
    const handleEditButtonPress = async() => {
        axios.put(`${API.USER_DATA_UPDATE}${user.userPk}/update/`,
                  {username: user.userId, nickname: changeNickname},
                  { headers: headers }
        )
            .then(res => {console.log('수정 후 data: ', res.data); 
                          dispatch({type: "EDIT_NICKNAME",
                                    userData : { 
                                        pk: res.data.pk,
                                        id: res.data.username,
                                        nickname: res.data.nickname,
                                        token: user.userToken}
                                    });
                          Alert.alert("닉네임 수정", "닉네임 수정이 완료되었습니다.");
                })
            .catch(err => {
                if(err.response.data.nickname) {
                    Alert.alert("이미 사용중인 닉네임입니다.", "다른 닉네임을 입력해주세요.");
                    console.log('nicknameerror: ', err.response.data.nickname);
                }
            })
    };


    return(
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <View style={styles.container}>
                <MyProfileImage url={photoUrl} showButton onChangeImage={url => setPhotoUrl(url)} />
                <MyInput value={user.userId} label="ID" disabled  />
                <View style={{ height: 10 }} />
                <MyInput
                    value={changeNickname}
                    label="Nickname"
                    onChangeText={text => setChangeNickname(text)}
                    onSubmitEditing={() => {}}
                />
                <View style={{ height: 80 }}/>
                <MyButton title="프로필 수정" onPress={handleEditButtonPress}/>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
export default ProfileEdit;