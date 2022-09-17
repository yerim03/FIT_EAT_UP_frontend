//페이지 삭제할 수도 있음
import React from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';
import MyButton from '../../components/MyButton';
import axios from 'axios';
import { API } from '../../config';
import { useUserState } from '../../context/UserContext';

const FriendProfile = ({ navigation, route }) => {
    const { user } = useUserState();

    // const handleRemoveFriendButtononPress = () => {
    //     Alert.alert("친구삭제", "친구를 삭제하시겠습니까?", 
    //                 [{text: "취소", onPress: ()=> { console.log("취소") }, style: 'cancel'}, 
    //                 {text:"삭제", 
    //                  onPress: ()=> { 
    //                                 axios.post(`${API.REMOVE_FRIEND}`,
    //                                     { username: route.params.username },
    //                                     { headers: { 
    //                                         Authorization: `jwt ${user.userToken}`}
    //                                     })
    //                                     .then(res => { console.log('친구삭제 성공 : ', res.data)})
    //                                     .then(()=> navigation.replace('Friend'))
    //                                 }, 
    //                  style: 'destructive'}])
    // };

    return(
        <View style={styles.container}>
            <MyProfileImage url={`${API.GET_PROFILEIMAGE}${route.params.avatar_url}`}/>
            <View style={{ height: 10 }} />
            <Text style={styles.nickname}>username: {route.params.username}</Text>
            <Text style={styles.nickname}>nickname: {route.params.nickname}</Text>
            {/* <MyButton title="친구삭제" onPress={handleRemoveFriendButtononPress}/> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    nickname: {
        fontSize: 17,
    },
});

export default FriendProfile;