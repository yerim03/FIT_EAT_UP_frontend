import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import axios from 'axios';

const getdata = () => {
    axios.get("http://127.0.0.1:8000/admin/accounts/user/2/change/")
        .then(res => console.log(res))
};
//우선 Nickname만 수정할 수 있도록 설정
//ID, Password, PasswordConfirm은 disabled
const ProfileEdit = () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <MyProfileImage />
                <MyInput label="ID" disabled />
                {getdata}
                <MyInput label="Password" disabled />
                <MyInput label="PasswordConfirm" disabled />
                <MyInput
                    label="Nickname"
                    onChangeText={() => {}}
                    onSubmitEditing={() => {}}
                />
                <View style={{ height: 40 }}/>
                <MyButton title="프로필 수정" />
            </View>
        </SafeAreaView>
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
        fontSize: 20,
    },
});
export default ProfileEdit;