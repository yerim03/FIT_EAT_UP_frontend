import React from 'react';
import { View, TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';


const SearchBar = ( props ) => {
    return(
        <View style={styles.container}>
            <View style={{ flex: 5.5 }}>
                <TextInput 
                    style={styles.searhInput}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    placeholderTextColor={`${theme.inputPlaceholder}`}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.searchBtn} onPress={props.onPress} activeOpacity={0.7}>
                    <Ionicons name="md-search" size={30} color={`${theme.backgroundColor}`} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${theme.backgroundColor}`,
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searhInput: {
        backgroundColor: `${theme.searchBarInput}`,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 17,
        marginVertical: 3,
        fontSize: 16,
    },
    searchBtn: {
        alignItems: 'center',
        backgroundColor: `${theme.searchBarButton}`,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 10,
    },
});

export default SearchBar;