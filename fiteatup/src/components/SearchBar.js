import React from 'react';
import { View, TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';


const SearchBar = ( props ) => {
    return(
        <View style={styles.container}>
                <TextInput 
                    style={styles.searhInput}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    placeholderTextColor={`${theme.inputPlaceholder}`}
                />
                <TouchableOpacity style={styles.searchBtn} onPress={props.onPress} activeOpacity={0.7}>
                    <Ionicons name="md-search" size={25} color={`${theme.backgroundColor}`} />
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
        flexDirection: 'row',
    },
    searhInput: {
        flex: 0.85,
        height: '100%',
        backgroundColor: `${theme.searchBarInput}`,
        paddingVertical: 15,
        paddingHorizontal: 17,
        fontSize: 16,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        //ios 그림자 설정
        shadowColor: "#000",    //그림자 색
        shadowOffset: { //그림자 위치
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,    //그림자 투명도
        shadowRadius: 4,
        //android 그림자 설정
        elevation: 10
        
    },
    searchBtn: {
        flex: 0.15,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${theme.searchBarButton}`,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        //ios 그림자 설정
        shadowColor: "#000",    //그림자 색
        shadowOffset: { //그림자 위치
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,    //그림자 투명도
        shadowRadius: 4,
        //android 그림자 설정
        elevation: 10
    },
});

export default SearchBar;