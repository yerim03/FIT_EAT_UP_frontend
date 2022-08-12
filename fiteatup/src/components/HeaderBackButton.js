//헤더 오른쪽의 뒤로가기 버튼을 커스텀한 컴포넌트
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const HeaderBackButton = () => {
    return(
    <Ionicons name="chevron-back" size={30} color="#404040" style={styles.backbtn} />
    );
};

const styles = StyleSheet.create({
    backbtn: {
        marginRight: 5,
        marginLeft: Platform.OS === 'ios' ? 11 : 0,
    },
});

export default HeaderBackButton;