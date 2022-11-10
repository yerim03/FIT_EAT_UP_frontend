//친구 프로필 화면
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CustomText from '../../components/CustomText';
import MyProfileImage from '../../components/MyProfileImage';
import FoodImage from '../../components/FoodImage';
import { Ionicons } from '@expo/vector-icons'; 
import { useUserState } from '../../context/UserContext';
import axios from 'axios';
import { API } from '../../config';
import { theme } from '../../styles/theme';


const FriendProfile = ({ route }) => {
    const [goodList, setGoodList] = useState(); //친구의 좋아요 장소
    const [visitList, setVisitList] = useState();// 친구의 가봤어요 장소
    const { headers } = useUserState();

    //친구의 좋아요, 가봤어요 리스트 가져오기
    const getFriendGoodList = async () => {
        const GET_GOODLIST = await axios.get(`${API.GET_FRIEND_GOODLIST}`, { 
                                            params: { pk: route.params.pk }, 
                                            headers: headers 
                                    })
        const GET_VISITLIST = await axios.get(`${API.GET_FRIEND_VISITLIST}`, { 
                                            params: { pk: route.params.pk }, 
                                            headers: headers 
                                    })
        Promise.all([GET_GOODLIST, GET_VISITLIST])
            .then(res => { setGoodList(res[0].data); setVisitList(res[1].data);})
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        getFriendGoodList();
    }, [])


    const renderItem = ({item: {place_name, image}}) => {
        return(
            <View style={styles.renderItem}>
                <FoodImage url={image}/>
                <CustomText style={{ paddingVertical: 3 }} fontType="Light">{place_name}</CustomText>
            </View>
        );
    };

    const ListTitle = ({ title, name }) => {
        return(
            <View style={{ paddingHorizontal: 10, paddingTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={name} size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 5 }} />
                <CustomText style={{fontSize: 18, color: `${theme.title_1}`}} fontType="Medium">{title}</CustomText>
            </View>
        );
    }

    
    return(
        <View style={styles.container}>
            <View style={styles.profileArea}>
                <MyProfileImage url={`${API.GET_PROFILEIMAGE}${route.params.avatar_url}`}/>
                <View style={styles.textArea}>
                    <CustomText style={styles.nickname} fontType="Medium">{route.params.nickname}</CustomText>
                    <CustomText style={styles.id} fontType="Light">{route.params.username}</CustomText>
                </View>
            </View>
            <View style={styles.listArea}>
                <ListTitle title="좋아요" name="heart"/>
                    <FlatList 
                        data={goodList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal = {true}
                        style={styles.flatlist}
                        />
                <View style={{ marginVertical: 10 }}/>
                <ListTitle title="가봤어요" name="location"/>
                <FlatList 
                    data={visitList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal = {true}
                    style={styles.flatlist}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${theme.restInfoBackgroundColor}`,
    },
    profileArea: {
        paddingHorizontal: 20, 
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        backgroundColor: `${theme.backgroundColor}`,
        borderBottomWidth: 0.5,
        borderBottomColor: `${theme.restInfoLineColor}`,
    },
    textArea: {
        marginLeft: 50,
        justifyContent: 'center',
    },
    listArea: {
        marginTop: 30,
        backgroundColor: `${theme.backgroundColor}`,
    },
    id: {
        fontSize: 17,
        color: `${theme.title_2}`
    },
    nickname: {
        fontSize: 22,
        paddingVertical: 3,
        color: `${theme.title_1}`,
    },
    renderItem: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 5, 
        paddingHorizontal: 5
    },
    flatlist: {
        height: 120, 
        marginHorizontal: 20, 
        marginVertical: 10,
    }
});

export default FriendProfile;