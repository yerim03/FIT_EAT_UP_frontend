//[친구의 프로필 이미지를 나타내는 컴포넌트]
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';


const FriendProfileImage = ({ url }) => {
    // if(isHome){
    //     return(
    //         <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    //             <Image style={isClick ? styles.clickImage: styles.image} source={{ uri: url}}/>
    //         </TouchableOpacity>
    //     );
    // } else{
        return(
            <Image style={styles.image} source={{ uri: url }}/>
        );
    // }
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: `${theme.imageBackgroundColor}`,
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 5,
    },
    // clickImage: {
    //     backgroundColor: "#E0E0E0",
    //     width: 70,
    //     height: 70,
    //     borderRadius: 35,
    //     margin: 5,
    //     borderWidth: 2,
    //     borderColor: 'black',
    //     opacity: 0.5,
    // }
});


export default FriendProfileImage;