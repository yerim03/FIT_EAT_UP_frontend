import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import FriendProfileImage from './FriendProfileImage';
import CHECK from '../../assets/check.png'
import { theme } from '../styles/theme';


const FriendProfile = ({ item, url, onPressOut }) => {
    return(
        <View style={styles.container}>
        <TouchableOpacity  onPressOut={onPressOut} activeOpacity={0.8}>
            {item.selected ? 
                <Image style={{ width: 70, height:70, borderRadius: 35, margin: 5, }} source={CHECK}/> :
                <FriendProfileImage url={url}/>
            }
        </TouchableOpacity>
            <Text style={item.selected? 
                            styles.itemNickNameSelected : 
                            styles.itemNickName}>
                {item.nickname}
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    bnt: {
        alignItems: 'center',
        backgroundColor: '#404040',
        borderRadius: 6,
        width: '100%',
        padding: 13,
    },
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