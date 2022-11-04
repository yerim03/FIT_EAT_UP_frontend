//친구 목록
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, SafeAreaView, FlatList, Modal } from 'react-native';
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
    const [modalVisible, setModalVisible] = useState(false);    //모달 창 보이는 여부
    const [friend, setFriend] = useState();
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
    
    const MyModal = ({ onShow }) => {
        return(
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* <FriendProfileImage url={`${API.GET_PROFILEIMAGE}${avatar_url}`}/>
                    <Text>{username}</Text>
                    <Text>{nickname}</Text> */}
                    <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                        <Text style={{fontSize: 14}}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        );
    };

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
                    // onPress={() => {setModalVisible(true);}}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('FriendProfile', { pk, username, nickname, avatar_url })} 
                >
                    <FriendProfileImage url={`${API.GET_PROFILEIMAGE}${avatar_url}`}/>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        <Text style={styles.itemId}>{username}</Text>
                        <Text style={styles.itemNickname}>{nickname}</Text>
                    </View>

                    <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveFriendButtononPress}>
                        <Text style={styles.deleteTitle}>삭제</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container_2}>
                <View style={styles.titleArea}>
                    <Text style={[{flex: 1}, globalStyles.tabScreenTitle]}>친구 목록</Text>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10}} 
                        onPress={() => { navigation.navigate("AddFriend") }}
                    >
                        <Ionicons name="person-add" size={30} color={`${theme.iconColor}`} style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 15, color: `${theme.title_1}`}}>친구 수 : {friendList.length}</Text>
                </View>
                
                <View style={{ flex: 1 }}>
                    <FlatList 
                        data={friendList}
                        renderItem={renderItem}
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
        fontSize: 19,
        fontWeight: '500',
        color: `${theme.title_1}`,
        paddingHorizontal: 25,
    },
    itemNickname: {
        fontSize: 15,
        paddingHorizontal: 25,
        color: `${theme.title_2}`,
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


export default Friend;