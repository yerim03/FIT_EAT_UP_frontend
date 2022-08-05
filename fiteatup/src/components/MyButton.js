//커스텀 컴포넌트 - Button
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyButton = ( props ) => {
    return(
        <TouchableOpacity
            style={styles.bnt}
            onPress={props.onPress}
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
        padding: 11,
        marginVertical: 4,
    },
    bnttitle: {
        fontSize: 16,
        color: '#ffffff',
    },
});

export default MyButton;