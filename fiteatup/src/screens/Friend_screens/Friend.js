//친구 목록
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import CustomText from '../../components/CustomText';
import FriendProfileImage from '../../components/FriendProfileImage';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { API } from '../../config';
import { useUserState } from '../../context/UserContext';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';


const Friend = ({ navigation }) => {
    const [friendList, setFriendList] = useState([{}]); //친구 리스트
    const isFocused = useIsFocused();
    const { headers } = useUserState();


    //친구리스트 가져오기
    useEffect(() => {
        const getFriendList = async () => { 
            const friends = await axios.get(`${API.FRIEND_LIST}`, { headers: headers } );
            setFriendList(friends.data);              
        };
        getFriendList();
    }, [isFocused]);

    //flatlist의 renderItem
    const renderItem = ({ item: {pk, username, nickname, avatar_url} }) => {
        //친구 삭제 버튼 함수
        const handleRemoveFriendButtononPress = () => {
            Alert.alert("친구삭제", "친구를 삭제하시겠습니까?", 
                        [
                            {text: "취소", onPress: ()=> { console.log("취소") }, style: 'cancel'}, 
                            {text:"삭제", 
                            onPress: ()=> { 
                                axios.post(`${API.REMOVE_FRIEND}`, { username: username }, { headers: headers })
                                    .then(res => { console.log('친구삭제 성공'); 
                                                navigation.replace('Friend')}
                                    )
                                    .catch(err => {console.log('친구 삭제 실패', err)})
                            }, 
                            style: 'destructive'}
                        ]
            )
        };
        
        return(
            <View>
                <TouchableOpacity 
                    style={styles.itemContainer} 
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('FriendProfile', { pk, username, nickname, avatar_url })} 
                >
                    <FriendProfileImage url={`${API.GET_PROFILEIMAGE}${avatar_url}`}/>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <CustomText style={styles.itemNickname} fontType="Medium">{nickname}</CustomText>
                        <CustomText style={styles.itemId} fontType="Light">{username}</CustomText>
                    </View>

                    <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveFriendButtononPress}>
                        <CustomText style={styles.deleteTitle} fontType="Light">삭제</CustomText>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container_2}>
                <View style={styles.titleArea}>
                    <CustomText style={[{flex: 1}, globalStyles.tabScreenTitle]} fontType="Bold">친구 목록</CustomText>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10}} 
                        onPress={() => { navigation.navigate("AddFriend") }}
                    >
                        <Ionicons name="person-add" size={30} color={`${theme.iconColor}`} style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: 'flex-end' }}>
                    <CustomText style={{ fontSize: 15, color: `${theme.title_1}`}} fontType="Light">친구 수 : {friendList.length}</CustomText>
                </View>
                
                <View style={{ flex: 1 }}>
                    <FlatList 
                        data={friendList}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator ={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleArea: {
        flex: 0.13,
        width: '100%',
        flexDirection: 'row',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',   
        paddingVertical: 3,
    },
    itemId: {
        fontSize: 15,
        paddingHorizontal: 25,
        color: `${theme.title_2}`,
    },
    itemNickname: {
        fontSize: 19,
        color: `${theme.title_1}`,
        paddingHorizontal: 25,
    },
    deleteButton: {
        backgroundColor: `${theme.buttonBackgroundColor}`,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 12,
        //ios 그림자 설정
        shadowColor: "#000",    //그림자 색
        shadowOffset: { //그림자 위치
            width: 5,
            height: 5
        },
        shadowOpacity: 0.2,    //그림자 투명도
        shadowRadius: 5,
        //android 그림자 설정
        elevation: 5
    },
    deleteTitle: {
        fontSize: 15,
        color: `${theme.buttonTitleColor}`
    },
});

export default Friend;