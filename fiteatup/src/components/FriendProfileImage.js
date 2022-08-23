//커스텀 컴포넌트 - 친구의 프로필 이미지
//MyProfileImage 컴포넌트보다 크기를 작게 만든 것
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, } from 'react-native';


const FriendProfileImage = ({ url, isHome, isClick, onPress }) => {
    if(isHome){
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Image style={isClick ? styles.clickImage: styles.image} source={{ uri: url}}/>
            </TouchableOpacity>
        );
    } else{
        return(
            <Image style={styles.image} />
        );
    }
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#E0E0E0",
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
    },
    clickImage: {
        backgroundColor: "#E0E0E0",
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        opacity: 0.5,
    }
});


export default FriendProfileImage;