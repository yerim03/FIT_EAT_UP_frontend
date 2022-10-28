//음식점 상세정보 화면
import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUserState } from '../context/UserContext';
import { Rating } from 'react-native-ratings';
import axios from 'axios';
import { API } from "../config";
import { theme } from '../styles/theme';


const RestaurantInfo = ({ route }) => {
    const [isLike, setIsLike] = useState(false);    //좋아요 버튼 클릭여부
    const [isVisit, setIsVisit] = useState(false);  //가본장소 버튼 클릭여부
    const [modalVisible, setModalVisible] = useState(false);    //모달 창 보이는 여부
    const [starRating, setStarRating] = useState(0);    //별점 매길 때 별점 개수
    
    const { user, headers } = useUserState();
    
    //Search.js에서 받아온 음식점 data
    let foodData = route.params.item;

    useEffect(()=> {
        //starRating 데이터도 가져와서 설정해야 함
        //Likeplaces 가져오기
        const getLikePlaces = async () => { 
            const likePlaceList = await axios.get(`${API.GET_GOODLIST}`, { headers: headers } );
            for(let i=0; i<likePlaceList.data.length; i++){
                if(likePlaceList.data[i].id == foodData.id){
                    setIsLike(true);
                }
            }
        };
        //Visitplaces 가져오기
        const getVisitPlaces = async () => { 
            const visitPlaceList = await axios.get(`${API.GET_VISITLIST}`, { headers: headers });
            for(let i=0; i<visitPlaceList.data.length; i++){
                if(visitPlaceList.data[i].id == foodData.id){
                    setIsVisit(true);
                }
            }
        };
        //starRating 가져오기
        const getStarRating = async() => {
            const starRatingList = await axios.get(`${API.GET_STAR_RATINGLIST}`, { headers: headers });
            for(let i=0; i<starRatingList.data.length; i++){
                if(starRatingList.data[i].user==user.userPk && starRatingList.data[i].place==foodData.id){
                    setStarRating(starRatingList.data[i].rating);
                }
            }
        }
        getLikePlaces();
        getVisitPlaces();
        getStarRating();
    }, [])

    //좋아요 가봤어요 버튼
    const GoodVisitButton = ({ buttonType, clickState, onPress, title }) => {
        if(buttonType === 'heart'){ //heart 모양이면 좋아요 버튼
            return(
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                    <Ionicons name={clickState ? "heart" : "heart-outline"} size={35} color={clickState ? `${theme.iconColor}` : "#000000"}/>
                    <Text style={styles.data}>{title}</Text>
                </TouchableOpacity>
            );
        } else if( buttonType === 'visit'){ //visit 모양이면 가봤어요 버튼
            return(
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}> 
                    <Ionicons name={clickState ? "location" : "location-outline"} size={35} color={clickState ? `${theme.iconColor}` : "#000000"}/>
                    <Text style={styles.data}>{title}</Text>
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
                    <Text style={styles.data}>연락처</Text>
                    <Text style={styles.data}>{foodData.phone}</Text>
                </View>
                <View style={styles.oneDataArea}>
                    <Text style={styles.data}>{foodData.category_name}</Text>
                </View>
            </View>
        );
    };
    
    //별점데이터를 백엔드 서버에 보내는 함수
    const handleRatingFinishonPress = () => {
        let data = {
            user: user.userPk,
            place: foodData.id,
            rating: starRating
        }
        axios.post(`${API.SAVE_STAR_RATING}`, data, { headers: headers })
            .then(res => {console.log('rating 저장성공 \n', res.data);})
            .catch(err => {console.log(err.response.data)})
    };

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.foodImageArea} source={{ uri: foodData.image_url }}/>
                <View style={styles.nameArea}>
                    <Text style={styles.title}>{foodData.place_name}</Text>
                </View>

                <View style={styles.goodVisitArea}>
                    <GoodVisitButton buttonType='heart' clickState={isLike} title='좋아요' onPress={handleGoodButtononPress}/>
                    <GoodVisitButton buttonType='visit' clickState={isVisit} title='가봤어요' onPress={handleVisitButtononPress}/>
                </View>
                
                <View style={styles.starArea}>
                    <Modal animationType="fade" transparent={true} visible={modalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={[styles.data, {marginBottom: 20}]}>이 음식점을 평가해주세요!</Text>
                                <Rating 
                                    startingValue={starRating}
                                    imageSize={35}
                                    onFinishRating={(rating) => {console.log("Rating is: " + rating);
                                                                 setStarRating(rating)}}/>
                                <View style={{ flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                    <Text style={{fontSize: 15}}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.modalButton}
                                    onPress={() => {setModalVisible(false);
                                                    handleRatingFinishonPress();}
                                }>   
                                    <Text style={{fontSize: 15}}>완료</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Text style={styles.data}>나의 별점은?</Text>
                    <TouchableOpacity 
                        activeOpacity={0.7} 
                        hitSlop={{ top: 10, bottom: 10, left: 30, right: 30}}
                        onPress={() => {if(isLike || isVisit) setModalVisible(true)}}
                    >
                        <Rating
                            readonly
                            startingValue={starRating}
                            imageSize={35}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.locationArea}>
                    <Text style={styles.dataTitle}>{foodData.road_address_name}</Text>
                    <Text style={styles.data}>{foodData.address_name}</Text>
                    {/* <View style={{flex: 1, backgroundColor: 'orange'}}>
                        <Text>지도영역</Text>
                    </View> */}
                </View>

                <View style={styles.infoArea}>
                    <Text style={styles.dataTitle}>상세정보</Text>
                    <Info />
                </View>
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
    foodImageArea: {
        backgroundColor: `${theme.backgroundColor}`,
        height: 170,
        width: '100%',
    },
    nameArea: {
        backgroundColor: `${theme.backgroundColor}`,
        height: 60,
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: `${theme.flatlistLineColor}`, 
    },
    goodVisitArea: {
        backgroundColor: `${theme.backgroundColor}`,
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    starArea: {
        backgroundColor: `${theme.backgroundColor}`,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    locationArea: {
        backgroundColor: `${theme.backgroundColor}`,
        height: 120,
        width: '100%',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    infoArea: {
        backgroundColor: `${theme.backgroundColor}`,
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
        fontSize: 24, 
        fontWeight: 'bold',
    },
    dataTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    data: {
        fontSize: 16,
        color: '#404040',
        fontWeight: '600',
        paddingVertical: 5,
    },
    button: {
        flex: 0.5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 25,
        alignItems: "center",
        shadowColor: "#000",    //그림자 색
        shadowOffset: { //그림자 위치
        width: 2,
        height: 2
        },
        shadowOpacity: 0.3,    //그림자 투명도
        shadowRadius: 4,
        elevation: 5
    },
    modalButton: {
        marginTop: 30, 
        marginHorizontal: 12,
        paddingVertical: 10, 
        paddingHorizontal: 36,
        borderRadius: 10, 
        backgroundColor: '#a0a0a0'
    }
});

export default RestaurantInfo;