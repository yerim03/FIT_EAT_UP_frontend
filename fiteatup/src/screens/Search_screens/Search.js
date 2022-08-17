import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, SafeAreaView } from 'react-native';
import MyInput from '../../components/MyInput';


const Search = ({ navigation }) => {
    const[search, setSearch] = useState('');

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container} >
                <Text style={styles.title}>장소 검색</Text>
                <Text style={styles.smalltitle}>원하는 음식점을 검색해보세요!</Text>
                <MyInput 
                    onChangeText={text => setSearch(text)}
                    placeholder="검색어를 입력하세요."
                />
                <Button title="검색" onPress={() => navigation.navigate("SearchResult")} />
                <Text style={styles.title}>카테고리 선택</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#404040',
    },
    smalltitle: {
        fontSize: 14,
        color: '#606060',
    },
});

export default Search;