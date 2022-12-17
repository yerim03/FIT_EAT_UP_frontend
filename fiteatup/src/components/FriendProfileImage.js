//[친구의 프로필 이미지] - Friend 목록에서 사용
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';


const FriendProfileImage = ({ url }) => {
        return(
            <Image style={styles.image} source={{ uri: url }}/>
        );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: `${theme.imageBackgroundColor}`,
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
    },
});


export default FriendProfileImage;