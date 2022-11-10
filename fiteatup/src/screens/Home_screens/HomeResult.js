//친구와의 공통 추천 맛집 결과화면
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import CustomText from '../../components/CustomText';
import ResultImage from '../../components/ResultImage';
import { useUserState } from '../../context/UserContext';
import axios from 'axios';
import { API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';


const HomeResult = ({ navigation, route }) => {
    const [recommendResults, setRecommendResults] = useState(); //추천 결과 data
    const [isLoading, setIsLoading] = useState(true);  //Activity Indicator show 여부 관리

    const { user, headers } = useUserState();
    let friends = route.params; //Home.js에서 가져온 선택한 친구들 pk
    let data = {};  //선택한 친구들 data
    let nicknames = ''; //선택한 친구들 names

    //서버에 보낼 data
    data.model_name = 'model_5';
    data.num = friends.length + 1;
    data.user_id1 = user.userPk;
    for(let i=0; i<friends.length; i++){
        data['user_id' + (i+2)] = friends[i]['pk'];
        if(i === friends.length-1){
            nicknames += friends[i]['nickname'];
        } else {
            nicknames += friends[i]['nickname'] + ', ';
        }
    }

    useEffect(() => {
        //여기서 추천 결과를 가져올 예정
        console.log(data);
        const getResults = async() => {
            const results = await axios.post(`${API.RECOMMEND_RESULTS}`, data, {headers: headers})
            setRecommendResults(results.data);
        }
        getResults();
    }, [])

    useEffect(() => {
        if(recommendResults) {
            setIsLoading(false);
        }
    }, [recommendResults])

    const renderItem = ({ item }) => {
        return(
            <View style={styles.oneResultArea}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantInfo", {item, isHome: true})}>
                    <ResultImage 
                        foodname={item.place_name} 
                        recommend
                        star={item.rating}
                        url={`${API.GET_RESTAURANT_IMAGE}/${item.image}`}          
                    />
                </TouchableOpacity>
            </View>
        );
    };


    return(
        <View style={[globalStyles.container_2, {alignItems: 'center'}]}>
            <CustomText style={styles.title} fontType="Medium">{nicknames} 님과의 공통 추천 맛집 결과입니다!</CustomText>
            <View style={styles.resultArea}>
                {isLoading ?
                    <ActivityIndicator size="large" color={theme.activityIndicator} animating={true} />
                    :
                    <FlatList 
                        data={recommendResults}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator ={false}
                    />
                }
            </View>         
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 0.1,
        fontSize: 18,
        color: `${theme.title_1}`,
    },
    resultArea: {
        flex: 1,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },
    oneResultArea: {
        flexDirection: 'row', 
        marginHorizontal: 8,
        marginVertical: 12,
    },
    result: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
});

export default HomeResult;

//삭제할 것
const DATA = [
    {
        id: "1",
        place_name: "홍대개미 홍대점",
        image: 'https://postfiles.pstatic.net/MjAxODA0MTBfMjQg/MDAxNTIzMjg3NzYwNDMz._6szSBWx1nDU48aukXNCD08zZK2fjV-3mHojRF2HXMIg.FZ0zPTNKOynzgbs764WUPWPgjLNuOfo8dI86ucDrm1Qg.JPEG.ksh68988/20180409_155644.jpg?type=w580',
        rating: 4.3
    },
    {
        id: "2",
        place_name: "한신포차 홍대점",
        image: 'https://postfiles.pstatic.net/MjAxOTExMjFfMTY4/MDAxNTc0MzMwNzM2MjIz.ynRZUMJ8kBi6IS68KbLdDa_e6stECaRkT9sRawTniJEg.Wddv45FB49qXRomeHg8fNGcX9w6iGw6C7XwPbl6ingAg.JPEG.minyeong8305/%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A83.JPG?type=w773',
        rating: 4.3
    },
    {
        id: "3",
        place_name: "역전우동0410 홍대입구역점",
        image: 'https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20180521_124%252F1526889064543a3X57_PNG%252FBN_xy9hFuT1glq9THEWwgbiw.png%22&type=ff500_300',
        rating: 4.0
    },
    {
        id: "4",
        place_name: "히메시야",
        image: 'http://t1.daumcdn.net/cfile/tistory/996B973D5DB471D901',
        rating: 3.3
    },
    {
        id: "5",
        place_name: "미정국수0410 홍대입구역점",
        image: 'https://postfiles.pstatic.net/20121005_207/dnfdjaaktpdu_1349392370848BNIvm_JPEG/%BB%E7%C1%F8_007.jpg?type=w1',
        rating: 3.5
    },
    {
        id: "6",
        place_name: "롤링파스타 홍대점",
        image: 'https://t1.daumcdn.net/cafeattach/1XNWd/a9eb7461cad3b49fbb791e91d9a7061ab8ab65e8',
        rating: 2.0
        },
]