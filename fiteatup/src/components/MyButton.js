//[버튼 커스텀]
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { theme } from '../styles/theme';


const MyButton = ( props ) => {
    return(
        <TouchableOpacity
            style={props.disabled ? [styles.bnt, {opacity:0.5}] : styles.bnt}
            onPress={props.onPress}
            disabled={props.disabled}
            activeOpacity={0.7}
        >
            <CustomText style={styles.bnttitle} fontType="Light">{props.title}</CustomText>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    bnt: {
        alignItems: 'center',
        backgroundColor: `${theme.buttonBackgroundColor}`,
        borderRadius: 25,
        width: '100%',
        padding: 15,
        //ios 그림자 설정
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        //android 그림자 설정
        elevation: 8
    },
    bnttitle: {
        fontSize: 17,
        color: `${theme.buttonTitleColor}`,
    },
});

export default MyButton;