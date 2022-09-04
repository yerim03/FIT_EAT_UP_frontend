import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUserState } from '../context/UserContext';


const RestaurantInfo = ({ route }) => {
    const [isLike, setIsLike] = useState(false);    //좋아요 버튼 클릭여부
    const [isVisit, setIsVisit] = useState(false);  //가본장소 버튼 클릭여부

    const { user } = useUserState();
    
    //Search.js에서 받아온 음식점 data
    let foodData = route.params.item;

    //페이지 렌더링 시에 axios로 post(or get) 하여 사용자가 좋아요, 가봤어요 버튼을 눌렀는지 여부를 판단
    //response data에 눌렀는지 여부를 담아 가져온다.
    //눌렀을 경우, setIsLike, setIsVisit을 true or false로 변경

    useEffect(() => {
        console.log('여기는 상세정보:\n', foodData);
    }, []);


    //좋아요 가봤어요 버튼
    //onPress 시에 db 갱신하는 과정이 필요함
    const GoodVisitButton = ({ buttonType, clickState, onPress, title }) => {
        if(buttonType === 'heart'){
            return(
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                    <Ionicons name={clickState ? "heart" : "heart-outline"} size={35} color={clickState ? "#FF3333" : "#000000"}/>
                    <Text style={styles.detail}>{title}</Text>
                </TouchableOpacity>
            );
        } else if( buttonType === 'visit'){
            return(
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}> 
                    <Ionicons name={clickState ? "location" : "location-outline"} size={35} color={clickState ? "#FF3333" : "#000000"}/>
                    <Text style={styles.detail}>{title}</Text>
                </TouchableOpacity>
            );
        }
    };

    const Info = () => {
        return(
            <View>
                <View style={styles.oneDataArea}>
                    <Text style={styles.detail}>연락처</Text>
                    <Text style={styles.detail}>02-1234-1234</Text>
                </View>
                <View style={styles.oneDataArea}>
                    <Text style={styles.detail}>영업시간</Text>
                    <Text style={styles.detail}>09:00 - 21:00</Text>
                </View>
                <View style={styles.oneDataArea}>
                    <Text style={styles.detail}>음식점종류</Text>
                    <Text style={styles.detail}>카페</Text>
                </View>
            </View>
            
        );
    };


    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.foodIamgeArea} source={{ uri: "https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg" }}/>
                <View style={styles.nameArea}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{foodData.place_name}</Text>
                    <View style={{ flex: 1 }} />
                    <Ionicons style={{ padding: 7 }} name="heart" size={28} color="#FF3333" />
                    <Text style={{ fontSize: 22 }}>127</Text>
                </View>

                <View style={styles.clickArea}>
                    <GoodVisitButton buttonType='heart' clickState={isLike} title='좋아요' 
                                     //클릭 시 user pk, username 추가해서 서버로 데이터 보냄
                                     onPress={() => {foodData.pk=user.userPk; foodData.username=user.userId; console.log(foodData); setIsLike(!isLike)}}/>
                    <GoodVisitButton buttonType='visit' clickState={isVisit} title='가봤어요' onPress={() => setIsVisit(!isVisit)}/>
                </View>

                <View style={styles.locationArea}>
                    <Text style={styles.title}>서울 마포구 월드컵로1길 14 </Text>
                    <Text style={styles.detail}>서울 마포구 합정동 172</Text>
                    <View style={{flex: 1, backgroundColor: 'orange'}}>
                        <Text>지도영역</Text>
                    </View>
                </View>

                <View style={styles.infoArea}>
                    <Text style={styles.title}>상세정보</Text>
                    <Info />
                </View>

                <View style={styles.infoArea}>
                    <Text style={styles.title}>메뉴</Text>
                    <View style={{flex: 1, backgroundColor: 'orange'}}>
                            <Text>메뉴영역</Text>
                        </View>
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
    clickArea: {
        backgroundColor: '#ffffff',
        height: 80,
        width: '100%',
        flexDirection: 'row',
    },
    locationArea: {
        backgroundColor: '#ffffff',
        height: 250,
        width: '100%',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    infoArea: {
        backgroundColor: '#ffffff',
        height: 150,
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

{/* <Text>id: {route.params.id}</Text>
 <Text>title: {route.params?.title}</Text> */}