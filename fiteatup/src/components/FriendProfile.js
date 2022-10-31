import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import FriendProfileImage from './FriendProfileImage';
import { theme } from '../styles/theme';

const FriendProfile = ({ nickname, url }) => {
    return(
        <TouchableOpacity style={styles.container}>
            <FriendProfileImage url={url}/>
            <Text style={styles.itemNickName}>{nickname}</Text>
        </TouchableOpacity>
    );
};

export default FriendProfile;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    itemNickName: {
        fontSize: 14,
        fontWeight: '500',
        // color: `${theme.title_1}`,
    },
});