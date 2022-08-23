import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//우선 Nickname만 수정할 수 있도록 설정
//ID, Password, PasswordConfirm은 disabled
const ProfileEdit = () => {
    const [photoUrl, setPhotoUrl] = useState();

    return(
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <View style={styles.container}>
                <MyProfileImage url={photoUrl} showButton onChangeImage={url => setPhotoUrl(url)} />
                <MyInput label="ID" disabled />
                <View style={{ height: 5 }} />
                <MyInput label="Password" disabled />
                <View style={{ height: 5 }} />
                {/* <MyInput label="PasswordConfirm" disabled /> */}
                <MyInput
                    label="Nickname"
                    onChangeText={() => {}}
                    onSubmitEditing={() => {}}
                />
                <View style={{ height: 80 }}/>
                <MyButton title="프로필 수정" />
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