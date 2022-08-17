// 친구 목록이 뜨는 부분은 이런 식으로 뜰것이다 라는 예시이고,
// 추가한 친구 수에 따라 다르게 표시될 예정
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FriendProfileImage from '../../components/FriendProfileImage';


const Friend = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.area}>
                <FriendProfileImage text= "id1" onPress={() => navigation.navigate("FriendProfile")} />
                <FriendProfileImage text= "id2" onPress={() => navigation.navigate("FriendProfile")}/>
                <FriendProfileImage text= "id3" onPress={() => navigation.navigate("FriendProfile")}/>
            </View>
            <View style={styles.area}>
                <FriendProfileImage />
                <FriendProfileImage />
                <FriendProfileImage />
            </View>
            <View style={styles.area}>
                <FriendProfileImage />
                <FriendProfileImage />
                <FriendProfileImage />
            </View>   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    area: {
        // backgroundColor: 'red',
        height: 150,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
export default Friend;





{/* <TouchableOpacity  onPress={() => navigation.navigate("AddFriend")}>
    <Ionicons name="add" size={35} color="black" />
</TouchableOpacity> */}
{/* <Button title="친구프로필" onPress={() => navigation.navigate("FriendProfile")} /> */}