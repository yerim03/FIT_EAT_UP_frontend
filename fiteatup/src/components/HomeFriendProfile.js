import React from 'react';
import { Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import FriendProfileImage from './FriendProfileImage';
import CHECK from '../../assets/check.png'
import { theme } from '../styles/theme';


const FriendProfile = ({ item, url, onPressOut }) => {
    return(
        <TouchableOpacity style={styles.container} onPressOut={onPressOut} activeOpacity={0.8}>
            {item.selected ? <Image style={{ width: 70, height:70, borderRadius: 35, margin: 5, }} source={CHECK}/> :
                            <FriendProfileImage url={url}/>
            }
            <Text style={item.selected? styles.itemNickNameSelected : styles.itemNickName}>{item.nickname}</Text>

        </TouchableOpacity>
    );
};

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
        color: `${theme.notSelectTitleColor}`,
    },
    itemNickNameSelected: {
        fontSize: 14,
        fontWeight: '500',
        color: `${theme.selectTitleColor}`,
    }
});

export default FriendProfile;