import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';


const FriendProfile = () => {
    return(
        <View style={styles.container}>
            <MyProfileImage />
            <Text>Friend's ID</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
});

export default FriendProfile;