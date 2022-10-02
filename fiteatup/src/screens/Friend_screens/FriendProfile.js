//페이지 삭제할 수도 있음
import React from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';
import { API } from '../../config';


const FriendProfile = ({ route }) => {


    return(
        <View style={styles.container}>
            <MyProfileImage url={`${API.GET_PROFILEIMAGE}${route.params.avatar_url}`}/>
            <View style={{ height: 10 }} />
            <Text style={styles.nickname}>username: {route.params.username}</Text>
            <Text style={styles.nickname}>nickname: {route.params.nickname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    nickname: {
        fontSize: 17,
    },
});

export default FriendProfile;