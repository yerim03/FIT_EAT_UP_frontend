import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';


const FriendProfile = () => {
    return(
        <View style={styles.container}>
            <MyProfileImage />
            <View style={{ height: 10 }} />
            <Text style={styles.nickname}>Friend's Nickname</Text>
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