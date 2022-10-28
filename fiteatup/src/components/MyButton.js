//커스텀 컴포넌트 - Button
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';


const MyButton = ( props ) => {
    return(
        <TouchableOpacity
            style={props.disabled ? [styles.bnt, {opacity:0.5}] : styles.bnt}
            onPress={props.onPress}
            disabled={props.disabled}
            activeOpacity={0.8}
        >
            <Text style={styles.bnttitle}>{props.title}</Text>
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
        shadowColor: "#000",    //그림자 색
        shadowOffset: { //그림자 위치
        width: 2,
        height: 2
        },
        shadowOpacity: 0.3,    //그림자 투명도
        shadowRadius: 4,
        elevation: 5
    },
    bnttitle: {
        fontSize: 17,
        color: `${theme.buttonTitleColor}`,
    },
});

export default MyButton;