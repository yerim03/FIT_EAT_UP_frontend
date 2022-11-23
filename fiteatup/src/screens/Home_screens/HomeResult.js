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
    let friends = route.params.selectedFriends; //Home.js에서 가져온 선택한 친구들 pk
    let data = {};  //선택한 친구들 data
    let nicknames = ''; //선택한 친구들 names

    //서버에 보낼 data
    data.model_name = 'model_5';
    data.num = friends.length + 1;
    data.user_id1 = user.userPk;
    data.area = route.params.areaValue;
    for(let i=0; i<friends.length; i++){
        data['user_id' + (i+2)] = friends[i]['pk'];
        if(i === friends.length-1){
            nicknames += friends[i]['nickname'];
        } else {
            nicknames += friends[i]['nickname'] + ', ';
        }
    }

    useEffect(() => {
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
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantInfo", {item})}>
                    <ResultImage 
                        foodname={item.place_name} 
                        recommend
                        star={item.rating}
                        url={item.image}          
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