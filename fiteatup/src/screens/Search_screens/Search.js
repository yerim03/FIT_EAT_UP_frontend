import React, { useState } from 'react';
import { Text, 
         View, 
         StyleSheet, 
         SafeAreaView, 
         FlatList, 
         TouchableOpacity,
         TouchableWithoutFeedback,
         Keyboard } from 'react-native';
import SearchBar from '../../components/SearchBar';
import ResultImage from '../../components/ResultImage';
import { KAKAO_API_KEY } from '../../cofig/config_secret';
import { KAKAO_API } from '../../config';
import axios from 'axios';
import { globalStyles } from '../../styles/styles';
import { theme } from '../../styles/theme';
import { useUserState } from '../../context/UserContext';


const Search = ({ navigation }) => {
    const [foodData, setFoodData] = useState([]);
    const[searchWord, setSearchWord] = useState('');

    const { location } = useUserState();
    //장소 검색 
    const onPressSearchButton = () => {
        setFoodData([]);
        let URL1 = `${KAKAO_API.LOCAL_API}query=${searchWord}&y=${location.latitude}&x=${location.longitude}&size=8`;  //카카오 로컬 API
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
            <View style={styles.oneItemArea}>
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
                <View style={globalStyles.container_2} >
                    <Text style={globalStyles.tabScreenTitle}>장소 검색</Text>
                    <Text style={globalStyles.tabScreenSmallTitle}>원하는 음식점을 검색해보세요!</Text>
                    <View style={styles.serachBarArea}>
                        <SearchBar 
                            value={searchWord}
                            onChangeText={text => setSearchWord(text)}
                            placeholder="검색어를 입력하세요." onPress={onPressSearchButton}/>
                    </View>
                    <View style={styles.itemArea}>
                        <FlatList 
                            data={foodData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator ={false}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    serachBarArea: {
        flex: 0.15,
    },
    itemArea: {
        flex: 0.85,  
        width: '100%',
    },
    oneItemArea: {
        flexDirection: 'row', 
        marginHorizontal: 8,
        marginVertical: 12,
    },
})
export default Search;