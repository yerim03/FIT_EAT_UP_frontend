import React, { useState } from 'react';
import { View, 
         StyleSheet, 
         TouchableOpacity,
         SafeAreaView, 
         FlatList, 
         TouchableWithoutFeedback,
         Keyboard } from 'react-native';
import CustomText from '../../components/CustomText';
import SearchBar from '../../components/SearchBar';
import ResultImage from '../../components/ResultImage';
import * as Location from 'expo-location';
import { useUserState, useUserDispatch } from '../../context/UserContext';
import axios from 'axios';
import { KAKAO_API_KEY } from '../../cofig/config_secret';
import { KAKAO_API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';


const Search = ({ navigation }) => {
    const [foodData, setFoodData] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [ok, setOk] = useState();
    const [isLocate, setIsLocate] = useState(false);    //현재 위치 정보를 얻었는지 여부
 
    const { location } = useUserState();
    const dispatch = useUserDispatch();

    //사용자 현재 위치 정보 가져오기
    const getLocation = async() => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if(!granted) {  //위치 권한 요청 거부
            setOk(false);
        }
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        console.log('현재 나의 위치는\n', 'latitude: ',  latitude, '\nlongitude: ', longitude);
        dispatch({type: "LOCATION", 
                  userLocation : {
                    latitude: latitude,
                    longitude: longitude,
                  }
                });
        setIsLocate(true);
    }

    //장소 검색 
    const onPressSearchButton = () => {
        let URL1 = '';
        if(isLocate) {
            //위치 기반 검색
            URL1 = `${KAKAO_API.LOCAL_API}query=${searchWord}&size=8&y=${location.latitude}&x=${location.longitude}`;  //카카오 로컬 API
        } else {
            //그냥 검색
            URL1 = `${KAKAO_API.LOCAL_API}query=${searchWord}&size=8`;  //카카오 로컬 API
            
        }
        setFoodData([]);
        let URL2 = `${KAKAO_API.IMAGE_API}query=${searchWord}&size=10`;  //카카오 이미지 검색 API
        
        const GETDATA = axios.get(URL1, {headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` }});
        const GETIMAGE = axios.get(URL2, {headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` }});

        Promise.all([GETDATA, GETIMAGE])
            .then((res) => { let getdata = res[0].data.documents; 
                            let getimage=res[1].data.documents;
                            for(let i = 0; i < getdata.length; i++){
                                let oneData = getdata[i];
                                oneData.image = getimage[0].image_url;
                                setFoodData(prevData => [...prevData, oneData]);
                            }
                        })
            .catch(err => console.log(err))
    };

    const renderItem = ({ item }) => {
        return(
            <View style={styles.oneItemArea}>
                <TouchableOpacity 
                    activeOpacity={0.7} 
                    onPress={() => navigation.navigate("RestaurantInfo", {item})}
                >
                    <ResultImage 
                        foodname={item.place_name} 
                        url={item.image}          
                    />
                </TouchableOpacity>
            </View>
        );
    };


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={globalStyles.container_2} >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <CustomText style={globalStyles.tabScreenTitle} fontType="Bold">장소 검색</CustomText>
                        <TouchableOpacity onPress={getLocation} activeOpacity={0.7}>
                            <MaterialIcons name="gps-fixed" size={30} color={theme.iconColor} style={{ paddingHorizontal: 7 }}/>
                        </TouchableOpacity>
                    </View>
                    <CustomText style={globalStyles.tabScreenSmallTitle} fontType="Medium">원하는 음식점을 검색해보세요!</CustomText>
                    <View style={styles.serachBarArea}>
                        <SearchBar 
                            value={searchWord}
                            onChangeText={text => setSearchWord(text)}
                            placeholder="검색어를 입력하세요." 
                            onPress={onPressSearchButton}
                        />
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