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
            activeOpacity={0.7}
        >
            <Text style={styles.bnttitle}>{props.title}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    bnt: {
        alignItems: 'center',
        backgroundColor: `${theme.buttonBackgroundColor}`,
        borderRadius: 6,
        width: '100%',
        padding: 13,
    },
    bnttitle: {
        fontSize: 16,
        color: `${theme.title}`,
    },
});

export default MyButton;