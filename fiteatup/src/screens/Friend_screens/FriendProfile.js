//수정수정수정
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';
import { API } from '../../config';
import { globalStyles } from '../../styles/styles';

const FriendProfile = ({ route }) => {
    return(
        <View style={globalStyles.container}>
            <MyProfileImage url={`${API.GET_PROFILEIMAGE}${route.params.avatar_url}`}/>
            <View style={{ height: 20 }} />
            <Text style={styles.nickname}>username: {route.params.username}</Text>
            <Text style={styles.nickname}>nickname: {route.params.nickname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nickname: {
        fontSize: 17,
    },
});

export default FriendProfile;