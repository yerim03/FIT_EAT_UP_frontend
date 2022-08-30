//커스텀 컴포넌트 - Button
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const MyButton = ( props ) => {
    return(
        <TouchableOpacity
            style={props.disabled ? styles.bntDisabled : styles.bnt}
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
        backgroundColor: '#404040',
        borderRadius: 6,
        width: '100%',
        padding: 13,
        // marginVertical: 6,
    },
    bntDisabled: {
        alignItems: 'center',
        backgroundColor: '#404040',
        borderRadius: 6,
        width: '100%',
        padding: 13,
        // marginVertical: 6,
        opacity: 0.5,
    },
    bnttitle: {
        fontSize: 16,
        color: '#ffffff',
    },
});

export default MyButton;