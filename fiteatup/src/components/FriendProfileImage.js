//커스텀 컴포넌트 - 친구 프로필 이미지
//MyProfileImage 컴포넌트보다 크기를 작게 만든 것
import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const FriendProfileImage = ( props ) => {
    return(
        <TouchableOpacity 
            style={{ alignItems: 'center' }}
            onPress={props.onPress}
        >
                <Image style={styles.image} />
                <Text style={styles.id}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#E0E0E0",
        width: 85,
        height: 85,
        borderRadius: 50,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    id: {
        fontSize: 17, 
    },
});

export default FriendProfileImage;