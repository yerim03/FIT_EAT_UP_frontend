import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';

const AddFriend = () => {
    const [fid, setFId] = useState('');
    const handleAddFriendButtononPress = () => {};

    return(
        <View style={styles.container}>
            <Text style={styles.title}>친구의 ID를 검색해서 친구를 추가해보세요!</Text>
            <MyInput
                    value={fid}
                    onChangeText={text => setFId(text)}
                    onSubmitEditing={() => {}}
                    placeholder="친구의 ID를 입력하세요"
                />
                <View style={{height: 50}} />
            <MyButton title="친구 추가" onPress={ handleAddFriendButtononPress } />
        </View>
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