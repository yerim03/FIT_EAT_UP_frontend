//프로필 수정 화면
//프로필 이미지 수정 기능 추가할 예정
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { API } from '../../config';
import { useUserDispatch, useUserState } from '../../context/UserContext';


const ProfileEdit = () => {
    const { user } = useUserState();
    const dispatch = useUserDispatch();
    const [changeNickname, setChangeNickname] = useState(user.userNickname);
    const [changePhotoUrl, setChangePhotoUrl] = useState(`${API.GET_PROFILEIMAGE}${user.userProfileImage}`);

    //프로필 수정 기능
    const handleEditButtonPress = async() => {
        let imageFile = {
            uri: changePhotoUrl,
            type: 'image/jpeg',
            name: `${user.userId}ProfileImage.jpg`
        };
        //formdata 생성
        const formdata = new FormData();
        formdata.append('username', user.userId);
        formdata.append('nickname', changeNickname);
        formdata.append('avatar', imageFile);

        axios.put(`${API.USER_DATA_UPDATE}${user.userPk}/update/`, formdata, { 
                    headers: { 'Authorization': `jwt ${user.userToken}`,
                            'Content-Type': 'multipart/form-data' 
                    },
                    transformRequest: foodFormdata => foodFormdata,
        })
            .then(res => {console.log('프로필 수정 완료'); 
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
                <MyProfileImage url={changePhotoUrl} showButton onChangeImage={uri => setChangePhotoUrl(uri)} />
                <MyInput value={user.userId} label="아이디" disabled  />
                <View style={{ height: 10 }} />
                <MyInput
                    value={changeNickname}
                    label="닉네임"
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