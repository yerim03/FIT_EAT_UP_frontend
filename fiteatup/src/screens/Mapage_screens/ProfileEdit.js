//프로필 수정 화면
//프로필 이미지 수정 기능 추가할 예정
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import AgeDropDown from '../../components/AgeDropDown';
import MyProfileImage from '../../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { API } from '../../config';
import { useUserDispatch, useUserState } from '../../context/UserContext';



const ProfileEdit = () => {
    const { user, headers } = useUserState();
    const dispatch = useUserDispatch();
    const [changeNickname, setChangeNickname] = useState(user.userNickname);
    const [photoUrl, setPhotoUrl] = useState(`${API.GET_PROFILEIMAGE}${user.userProfileImage}`);


    //프로필 수정 버튼 클릭 시 1. 닉네임 수정 or 2. 프로필 이미지 수정
    const handleEditButtonPress = async() => {
        //닉네임 수정
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
                                        profileImage: res.data.avatar_url,
                                        token: user.userToken}
                                    });
                          Alert.alert('프로필 수정', '프로필 수정이 완료되었습니다.');
                })
            .catch(err => {
                if(err.response.data.nickname) {
                    Alert.alert('이미 사용중인 닉네임입니다.', '다른 닉네임을 입력해주세요.');
                    console.log('Nickname Check Error: ', err.response.data.nickname);
                }
            })
    };


    return(
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <View style={styles.container}>
                <MyProfileImage url={photoUrl} showButton onChangeImage={url => setPhotoUrl(url)} />
                <MyInput value={user.userId} label="아이디" disabled  />
                <View style={{ height: 10 }} />
                <MyInput
                    value={changeNickname}
                    label="닉네임"
                    onChangeText={text => setChangeNickname(text)}
                    onSubmitEditing={() => {}}
                />
                <View style={{ marginVertical: 10, alignSelf: 'flex-start' }}>
                    <AgeDropDown />
                </View>
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