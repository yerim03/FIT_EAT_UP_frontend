import React, { useState } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import FriendProfileImage from './FriendProfileImage';
import { theme } from '../styles/theme';

const FriendProfile = ({ item, url, onPressOut }) => {
    return(
        <TouchableOpacity style={styles.container} onPressOut={onPressOut}>
            <FriendProfileImage url={url}/>
            <Text style={item.selected? styles.itemNickNameSelected : styles.itemNickName}>{item.nickname}</Text>
        </TouchableOpacity>
    );
};

export default FriendProfile;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    itemNickName: {
        fontSize: 14,
        fontWeight: '500',
        color: `${theme.title_1}`,
    },
    itemNickNameSelected: {
        fontSize: 14,
        fontWeight: '500',
        color: 'red'
    }
});