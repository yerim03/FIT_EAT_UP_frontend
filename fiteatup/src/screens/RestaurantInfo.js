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

    useEffect(()=> {
        //여기서 사용자의 Likeplaces, Visitplaces를 가져와야 함
        const getGoodPlaces = async () => { 
            const goodPlaceList = await axios.get(`${API.GET_GOODLIST}`, { headers: headers } );
            for(let i=0; i<goodPlaceList.data.length; i++){
                if(goodPlaceList.data[i].id == foodData.id){
                    setIsLike(true);
                }
            }
        };
        const getVisitPlaces = async () => { 
            const visitPlaceList = await axios.get(`${API.GET_VISITLIST}`, { headers: headers } );
            for(let i=0; i<visitPlaceList.data.length; i++){
                if(visitPlaceList.data[i].id == foodData.id){
                    setIsVisit(true);
                }
            }
        };
        getGoodPlaces();
        getVisitPlaces();
    }, [])

    //좋아요 가봤어요 버튼
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


    //좋아요 버튼 클릭 동작
    const handleGoodButtononPress = () => {
        if(isLike){
            //isLike==False(좋아요 X)
            setIsLike(false);
            axios.post(`${API.DELETE_GOODLIST}`, {id: foodData.id}, { headers: headers })
                .then(res => console.log("좋아요 삭제 성공"))
                .catch(err => console.log(err.response.data))
        }
        else{
            //isLike==True(좋아요 0)
            setIsLike(true);
            foodData.pk=user.userPk;    //json 데이터에 pk 추가
            axios.post(`${API.SAVE_GOODLIST}`, foodData, { headers: headers })
                .then(res => console.log("좋아요 저장 성공"))
                .catch(err => console.log(err.response.data))
        }
    };

    //가봤어요 버튼 클릭 동작
    const handleVisitButtononPress = () => {
        if(isVisit){
            //isVisit == False(가봤어요 X)
            setIsVisit(false);
            axios.post(`${API.DELETE_VISITLIST}`, {id: foodData.id}, { headers: headers })
                .then(res => console.log("가봤어요 삭제 성공"))
                .catch(err => console.log(err.response.data))
        }
        else{
            //isLike==True(좋아요 0)
            setIsVisit(true);
            foodData.pk=user.userPk;    //json 데이터에 pk 추가
            console.log('여기는 handleVisitButtononPress\n', foodData); //삭제할 것
            axios.post(`${API.SAVE_VISITLIST}`, foodData, { headers: headers })
                .then(res => console.log("가봤어요 저장 성공"))
                .catch(err => console.log(err.response.data))
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