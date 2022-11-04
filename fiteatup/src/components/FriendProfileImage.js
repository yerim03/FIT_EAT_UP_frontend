//[친구의 프로필 이미지를 나타내는 컴포넌트]
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