//다시 수정
//검색기능 아직 미완성
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import ResultImage from '../../components/ResultImage';
import { KAKAO_REST_API } from '../../cofig/config_secret';
import axios from 'axios';


const Search = ({ navigation }) => {
    const [foodData, setFoodData] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const[searchWord, setSearchWord] = useState('');

    const onPressSearchButton = () => {
        //카카오 로컬 api
        axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchWord}&size=3`,
                        { headers: { 
                            Authorization: `KakaoAK ${KAKAO_REST_API}` }
                        })
                .then((res) => { console.log('결과는: ', res.data.documents) 
                                for(let i=0; i < res.data.documents.length; i++){
                                    let oneData = res.data.documents[i];
                                    setFoodData(prevData => [...prevData, oneData]);
                                }
                            })
                .catch((err) => { console.log(err.message);})

        //카카오 다음 검색 이미지 api
        // axios.get(`https://dapi.kakao.com/v2/search/image?query=${searchWord}&size=3`,
        //                 { headers: { 
        //                     Authorization: `KakaoAK ${KAKAO_REST_API}`}
        //                 })
        //         .then((res) =>  {console.log('search image: ', res.data.documents);
        //                         // for(let i=0; i<foodData.length; i++){
        //                         //     foodData.forEach(element => {element.image_url= res.data.documents[0].image_url;})
        //                         //     console.log(foodData);
        //                         // }
        //                     })
        //         .catch((err) => { console.log(err.message);})
    };

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity>
                <ResultImage foodname={item.place_name} onPress={() => navigation.navigate("RestaurantInfo", {item})}/>
            </TouchableOpacity>
        );
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container} >
                <Text style={styles.title}>장소 검색</Text>
                <Text style={styles.smalltitle}>원하는 음식점을 검색해보세요!</Text>
                <MyInput onChangeText={text => setSearchWord(text)} placeholder="검색어를 입력하세요."/>
                <MyButton title="검색" onPress={onPressSearchButton} />

                <View style={{ flex: 1 }}>
                    <FlatList 
                        data={foodData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
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