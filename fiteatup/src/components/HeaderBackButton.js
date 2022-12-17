//헤더의 뒤로가기 버튼을 커스텀
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

const HeaderBackButton = () => {
    return(
    <Ionicons 
            name="chevron-back" 
            size={30} 
            color={`${theme.backButtonColor}`} 
            style={styles.backbtn} 
        />
    );
};

const styles = StyleSheet.create({
    backbtn: {
        marginRight: 5,
        marginLeft: Platform.OS === 'ios' ? 11 : 0,
    },
});

export default HeaderBackButton;