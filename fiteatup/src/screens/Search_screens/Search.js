//다시 수정
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


const Search = ({ navigation }) => {
    // const[filterData, setFilterData] = useState([]);
    const[search, setSearch] = useState('');


    // const renderItem = ({ item }) => {
    //     return(
    //         <Text style={{ padding: 10 }}>
    //             {item.id}{'. '}{item.title.toUpperCase()}
    //         </Text>
    //     );
    // };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container} >
                <Text style={styles.title}>장소 검색</Text>
                <Text style={styles.smalltitle}>원하는 음식점을 검색해보세요!</Text>
                <MyInput onChangeText={text => setSearch(text)} placeholder="검색어를 입력하세요."/>
                {/* <FlatList 
                    data={filterData}
                    renderItem={({item}) => { console.log('renderItem\n', item.id)}}
                    keyExtractor={(item, index) => index.toString()}/> */}
                {/* <MyButton title="검색" onPress={() => navigation.navigate("SearchResult")} /> */}
            
                {/* <View style={styles.cateArea}>
                    <Text style={styles.title}>카테고리 선택</Text>
                </View> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#404040',
    },
    smalltitle: {
        fontSize: 14,
        color: '#606060',
    },
});


export default Search;