//커스텀 컴포넌트 - 프로필이미지를 나타내는 컴포넌트
import React from 'react';
import { Image, StyleSheet } from "react-native";

const MyProfileImage = () => {
    return(
        <Image style={styles.image} />
    );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#E0E0E0",
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 12,
    },
});

export default MyProfileImage;