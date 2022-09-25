import React, { useState } from 'react';
import { Text, 
         View, 
         StyleSheet, 
         SafeAreaView, 
         FlatList, 
         TouchableOpacity,
         TouchableWithoutFeedback,
         Keyboard } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import SearchBar from '../../components/SearchBar';
import ResultImage from '../../components/ResultImage';
import { KAKAO_API_KEY } from '../../cofig/config_secret';
import { KAKAO_API } from '../../config';
import axios from 'axios';


const Search = ({ navigation }) => {
    const [foodData, setFoodData] = useState([]);
    const[searchWord, setSearchWord] = useState('');

    const onPressSearchButton = () => {
        setFoodData([]);
        let URL1 = `${KAKAO_API.LOCAL_API}query=${searchWord}&size=8`;  //카카오 로컬 API
        let URL2 = `${KAKAO_API.IMAGE_API}query=${searchWord}&size=6`;  //카카오 이미지 검색 API

        const GETDATA = axios.get(URL1, {headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` }});
        const GETIMAGE = axios.get(URL2, {headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` }});

        Promise.all([GETDATA, GETIMAGE])
            .then((res) => { let getdata = res[0].data.documents; 
                             let getimage=res[1].data.documents;
                            for(let i = 0; i < getdata.length; i++){
                                let oneData = getdata[i];
                                oneData.image_url = getimage[0].image_url;
                                setFoodData(prevData => [...prevData, oneData]);
                            }
                            
                        })
            .catch(err => console.log(err))
    };

    const renderItem = ({ item }) => {
        return(
            <View style={{ flexDirection: 'row',  margin: 10}}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantInfo", {item})}>
                    <ResultImage 
                        foodname={item.place_name} 
                        url={item.image_url}          
                    />
                </TouchableOpacity>
            </View>
        );
    };

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <Text style={styles.title}>장소 검색</Text>
                    <Text style={styles.smalltitle}>원하는 음식점을 검색해보세요!</Text>
                    {/* <MyInput onChangeText={text => setSearchWord(text)} placeholder="검색어를 입력하세요."/>
                    <MyButton title="검색" onPress={onPressSearchButton} /> */}
                    <SearchBar 
                        value={searchWord}
                        onChangeText={text => setSearchWord(text)}
                        placeholder="검색어를 입력하세요." onPress={onPressSearchButton}/>
                    <View style={{ flex: 1}}>
                        <FlatList 
                            data={foodData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
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