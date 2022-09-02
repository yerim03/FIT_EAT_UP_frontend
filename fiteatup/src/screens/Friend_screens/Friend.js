//친구 목록
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import FriendProfileImage from '../../components/FriendProfileImage';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { API } from '../../config';
import { useUserState } from '../../context/UserContext';


const Friend = ({ navigation }) => {
    const [friendList, setFriendList] = useState([{}]); //친구 리스트
    const isFocused = useIsFocused();
    const { headers } = useUserState();

    //친구리스트 가져오기
    useEffect(() => {
        const getFriendList = async () => { 
            const friends = await axios.get(`${API.FRIEND_LIST}`, { headers: headers } );
            console.log(friends.data);
            setFriendList(friends.data);              
        };
        getFriendList();
    }, [isFocused]);


    // const handleItemPress = params => {
    //     navigation.navigate("FriendProfile", params);
    // };
    
    //flatlist의 renderItem
    const renderItem = ({ item: {pk, username, nickname, avatar_url} }) => {
        const handleRemoveFriendButtononPress = () => {
            Alert.alert("친구삭제", "친구를 삭제하시겠습니까?", 
                        [{text: "취소", onPress: ()=> { console.log("취소") }, style: 'cancel'}, 
                        {text:"삭제", 
                         onPress: ()=> { 
                            axios.post(`${API.REMOVE_FRIEND}`, { username: username }, { headers: headers })
                                .then(res => { console.log('친구삭제 성공 : ', res.data)})
                                .then(()=> navigation.replace('Friend'))
                            }, 
                         style: 'destructive'}
                        ])
        };
        
        return(
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('FriendProfile', { pk, username, nickname, avatar_url })} >
                <FriendProfileImage url={`${API.GET_PROFILEIMAGE}${avatar_url}`}/>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={styles.itemId}>{username}</Text>
                    <Text style={styles.itemNickname}>{nickname}</Text>
                </View>
                <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveFriendButtononPress}>
                    <Text style={{ color: '#ffffff' }}>삭제</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
        // <Item item={item} onPress={handleItemPress} />
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>친구 목록</Text>
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10}} 
                        onPress={() => { navigation.navigate("AddFriend") }}
                    >
                        <Ionicons name="person-add" size={30} color="#404040" style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 15, color: '#404040', }}>친구 수 : {friendList.length}</Text>
                </View>
                
                <View style={{ flex: 1 }}>
                    <FlatList 
                        data={friendList}
                        renderItem={renderItem}
                        // keyExtractor={(item) => { console.log('heelo : ', item.pk);  }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleArea: {
        flex: 0.13,
        width: '100%',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontSize: 21,
        fontWeight: 'bold',
        color: '#404040',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',   
        paddingVertical: 3,
    },
    itemId: {
        fontSize: 18,
        paddingHorizontal: 25,
    },
    itemNickname: {
        fontSize: 15,
        paddingHorizontal: 25,
        color: '#606060'
    },
    deleteButton: {
        backgroundColor: '#404040',
        paddingVertical: 8,
        paddingHorizontal: 13,
        borderRadius: 5,
    },
});


export default Friend;




// const Item = ({ item: {pk, username, nickname, avatar_url}, onPress }) => {
//     // const [isRemove, setIsRemove] = useState(false);
//     const { user } = useUserState();

//     const removeFriend = async() => {
//         axios.post(`${API.REMOVE_FRIEND}`, { username: username }, { headers: { Authorization: `jwt ${user.userToken}`}})
//             .then(res => { console.log('친구삭제 성공 : ', res.data);})
//             .catch(err => { console.log(err); })
//     };

//     //친구 삭제 버튼
//     const handleRemoveFriendButtononPress = () => {
//         Alert.alert("친구삭제", "친구를 삭제하시겠습니까?", 
//                     [{text: "취소", onPress: ()=> { console.log("취소") }, style: 'cancel'}, 
//                     {text:"삭제", 
//                      onPress: removeFriend,
//                      style: 'destructive'}
//                     ])
//     };

//     return(
//         <TouchableOpacity style={styles.itemContainer} onPress={() => onPress({ pk, username, nickname, avatar_url })} >
//             <FriendProfileImage url={`${API.GET_PROFILEIMAGE}${avatar_url}`}/>
//             <View style={{ flexDirection: 'column', flex: 1 }}>
//                 <Text style={styles.itemId}>{username}</Text>
//                 <Text style={styles.itemNickname}>{nickname}</Text>
//             </View>
//             <TouchableOpacity style={styles.deleteButton} onPress={handleRemoveFriendButtononPress}>
//                 <Text style={{ color: '#ffffff' }}>삭제</Text>
//             </TouchableOpacity>
//         </TouchableOpacity>
//     );
// };