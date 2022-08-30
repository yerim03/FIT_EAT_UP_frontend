import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';


const FriendProfile = ({ route }) => {
    return(
        <View style={styles.container}>
            <MyProfileImage url={route.params.url}/>
            <View style={{ height: 10 }} />
            <Text style={styles.nickname}>{route.params.title}</Text>
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