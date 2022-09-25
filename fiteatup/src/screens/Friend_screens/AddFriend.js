import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import axios from 'axios';
import { API } from '../../config';
import { useUserState } from '../../context/UserContext';

const AddFriend = ({ navigation }) => {
    const [friendId, setFriendId] = useState('');
    
    const { headers } = useUserState();
    
    //버튼 클릭 시 친구 추가 기능
    const handleAddFriendButtononPress = () => {
        axios.post(`${API.ADD_FRIEND}`, { username: friendId },{ headers: headers })
            // .then(res => { console.log('친구추가 성공 : ', res.data)})
            .then(res => { Alert.alert('친구 추가 완료', '친구가 추가되었습니다.', 
                              [{text: "확인", onPress: ()=> { navigation.replace('Friend')} }]) 
                        
                })
            .catch(err => { Alert.alert('친구 추가 실패', '해당 id를 가진 친구가 존재하지 않습니다.\n id를 다시 확인해주세요.')
                            console.log(err.response.data); })
    };

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>친구의 ID를 검색해서 친구를 추가해보세요!</Text>
                <MyInput
                        value={friendId}
                        onChangeText={text => setFriendId(text)}
                        placeholder="친구의 ID를 입력하세요"
                />
                    <View style={{height: 50}} />
                <MyButton title="친구 추가" onPress={ handleAddFriendButtononPress } />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 16,
    },
});

export default AddFriend;