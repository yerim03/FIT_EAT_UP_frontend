import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUserState } from '../context/UserContext';
import axios from 'axios';
import { API } from "../config";

const RestaurantInfo = ({ route }) => {
    const [isLike, setIsLike] = useState(false);    //좋아요 버튼 클릭여부
    const [isVisit, setIsVisit] = useState(false);  //가본장소 버튼 클릭여부

    const { user, headers } = useUserState();
    
    //Search.js에서 받아온 음식점 data
    let foodData = route.params.item;

    //페이지 렌더링 시에 axios로 post(or get) 하여 사용자가 좋아요, 가봤어요 버튼을 눌렀는지 여부를 판단
    //response data에 눌렀는지 여부를 담아 가져온다.
    //눌렀을 경우, setIsLike, setIsVisit을 true or false로 변경

    //삭제할 것
    useEffect(() => {
        console.log('여기는 상세정보:\n', foodData);
    }, []);


    //좋아요 가봤어요 버튼
    //onPress 시에 db 갱신하는 과정이 필요함
    const GoodVisitButton = ({ buttonType, clickState, onPress, title }) => {
        if(buttonType === 'heart'){ //heart 모양이면 좋아요 버튼
            return(
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                    <Ionicons name={clickState ? "heart" : "heart-outline"} size={35} color={clickState ? "#FF3333" : "#000000"}/>
                    <Text style={styles.detail}>{title}</Text>
                </TouchableOpacity>
            );
        } else if( buttonType === 'visit'){ //visit 모양이면 가봤어요 버튼
            return(
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}> 
                    <Ionicons name={clickState ? "location" : "location-outline"} size={35} color={clickState ? "#FF3333" : "#000000"}/>
                    <Text style={styles.detail}>{title}</Text>
                </TouchableOpacity>
            );
        }
    };

    //연락처, 음식점 카테고리 등 정보
    const Info = () => {
        return(
            <View>
                <View style={styles.oneDataArea}>
                    <Text style={styles.detail}>연락처</Text>
                    <Text style={styles.detail}>{foodData.phone}</Text>
                </View>
                <View style={styles.oneDataArea}>
                    <Text style={styles.detail}>{foodData.category_name}</Text>
                </View>
            </View>
        );
    };

    //좋아요 버튼 클릭 동작
    const handleGoodButtononPress = () => {
        foodData.pk=user.userPk; 
        console.log('여기는 handleGoodButtononPress\n', foodData); //삭제할 것
        setIsLike(!isLike);
        axios.post(`${API.SAVE_GOODLIST}`, foodData, { headers: headers })
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    };

    //가봤어요 버튼 클릭 동작
    const handleVisitButtononPress = () => {
        foodData.pk=user.userPk; 
        console.log('여기는 handleVisitButtononPress\n', foodData); //삭제할 것
        setIsVisit(!isVisit);
        axios.post(`${API.SAVE_VISITLIST}`, foodData, { headers: headers })
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    };

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.foodIamgeArea} source={{ uri: foodData.image_url }}/>
                <View style={styles.nameArea}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{foodData.place_name}</Text>
                </View>

                <View style={styles.goodVisitArea}>
                    <GoodVisitButton buttonType='heart' clickState={isLike} title='좋아요' onPress={handleGoodButtononPress}/>
                    <GoodVisitButton buttonType='visit' clickState={isVisit} title='가봤어요' onPress={handleVisitButtononPress}/>
                </View>

                <View style={styles.starArea}>
                    <Text>star area</Text>
                </View>

                <View style={styles.locationArea}>
                    <Text style={styles.title}>{foodData.road_address_name}</Text>
                    <Text style={styles.detail}>{foodData.address_name}</Text>
                    <View style={{flex: 1, backgroundColor: 'orange'}}>
                        <Text>지도영역</Text>
                    </View>
                </View>

                <View style={styles.infoArea}>
                    <Text style={styles.title}>상세정보</Text>
                    <Info />
                </View>

                {/* <View style={styles.infoArea}>
                    <Text style={styles.title}>메뉴</Text>
                    <View style={{flex: 1, backgroundColor: 'orange'}}>
                            <Text>메뉴영역</Text>
                    </View>
                </View> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0F0F0',
        flex: 1,
    },
    scrollView: {
        alignItems: 'center',
    },
    foodIamgeArea: {
        backgroundColor: '#ffffff',
        height: 170,
        width: '100%',
    },
    nameArea: {
        backgroundColor: '#ffffff',
        height: 60,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#404040', 
    },
    goodVisitArea: {
        backgroundColor: '#ffffff',
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    starArea: {
        backgroundColor: '#ffffff',
        height: 60,
        width: '100%',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    locationArea: {
        backgroundColor: '#ffffff',
        height: 300,
        width: '100%',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    infoArea: {
        backgroundColor: '#ffffff',
        height: 120,
        width: '100%',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    oneDataArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        paddingVertical: 3,
    },
    detail: {
        fontSize: 16,
        color: '#404040',
        fontWeight: '500',
        paddingVertical: 5,
    },
    button: {
        flex: 0.5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
});

export default RestaurantInfo;