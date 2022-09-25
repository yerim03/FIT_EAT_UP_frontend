import React from 'react';
import { View, Text, TextInput,TouchableOpacity, StyleSheet, } from 'react-native';

const SearchBar = ( props ) => {
    return(
        <View style={styles.container}>
            <View style={{ flex: 6.5}}>
                <TextInput 
                    style={styles.searhInput}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.searchBtn} onPress={props.onPress} activeOpacity={0.7}>
                    <Text style={{color: 'white'}} >검색</Text>
                    {/* <Image source={{}} /> */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searhInput: {
        backgroundColor: '#f0f0f0f0',
        borderRadius: 7,
        padding: 12,
        margin: 3,
    },
    searchBtn: {
        alignItems: 'center',
        
        backgroundColor: '#404040',
        borderRadius: 7,
        paddingVertical: 15,
    },
});

export default SearchBar;