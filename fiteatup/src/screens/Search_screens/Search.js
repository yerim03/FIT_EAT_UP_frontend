import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import MyInput from '../../components/MyInput';


const Search = ({ navigation }) => {
    const[search, setSearch] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.title}>장소 검색</Text>
            <MyInput 
                onChangeText={text => setSearch(text)}
                placeholder="검색어를 입력하세요."
            />
            <Button title="검색" onPress={() => navigation.navigate("SearchResult")} />
            <Text style={styles.title}>카테고리 선택</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Search;