import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ResultImage from '../../components/ResultImage';
import MyInput from '../../components/MyInput';
import axios from 'axios';


const SearchResult = ({ navigation, route }) => {

    //serachword의 데이터 값
    // const [place, setPlace] = useState([]);

    // const SearchData = async () => {
    //     await axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${route.params.searchword}&size=10`,
    //                     { headers: { 
    //                         Authorization: 'KakaoAK'}})
    //             .then((res) => { setPlace(res.data.documents)} );
    // };

    // useEffect(() => {
    //     SearchData();
    //     console.log('place: ', place);
    // }, []);


    // const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${route.params.searchword}&size=10`
    // useEffect(() => {
    //     const fetchData = async() => {
    //         const result = await axios.get(url, 
    //             {headers: { 
    //                 Authorization: 'KakaoAK'}});
    //         setPlace(result.data.documents);
    //     }
    //     fetchData();
    // }, []);

    return(
        <View style={styles.container}>
            <MyInput style={styles.title} disabled value={route.params.searchword}/>
            <View style={styles.resultArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.result}>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                
                <View style={styles.result}>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>

                <View style={styles.result}>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="12" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                </ScrollView>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    title: {
        flex: 0.07,
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultArea: {
        flex: 1,
        width: '100%',
    },
    result: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
});

export default SearchResult;