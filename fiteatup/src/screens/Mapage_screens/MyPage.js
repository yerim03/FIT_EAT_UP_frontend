import React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons'; 

const MyPage = ({ navigation }) => {

    //로그아웃 버튼 클릭 시 실행함수
    const handleLogoutButtononPress = () => {};

    return(
        <View style={styles.container}>
            <View style={styles.profileArea}>
                <MyProfileImage />
                <View style={{ width : 20}} />
                <Text style={styles.nickname}> 나의 ID</Text>
            </View>
            <View style={{ height: 35 }} />
            

            <TouchableOpacity 
                style={styles.area} 
                onPress={() => navigation.navigate("VisitList")}
            >
                <MaterialCommunityIcons name="clipboard-text" size={27} color="black" style={{ marginHorizontal: 10 }} />
                <Text style={styles.nickname}>가본 장소</Text>
            </TouchableOpacity>
            <View style={styles.line } />

            <TouchableOpacity 
                style={styles.area}
                onPress={() => navigation.navigate("GoodList")}
            >
                <AntDesign name="like1" size={27} color="black" style={{ marginHorizontal: 10 }} />
                <Text style={styles.nickname}>좋아요 장소</Text>  
            </TouchableOpacity>
            <View style={styles.line } />

            <TouchableOpacity 
                style={styles.area}
                onPress={() => navigation.navigate("ProfileEdit")}
            >
                <MaterialIcons name="edit" size={27} color="black" style={{ marginHorizontal: 10 }} />
                <Text style={styles.nickname}>프로필 수정</Text>
                </TouchableOpacity>
            <View style={styles.line } />
   
            {/* <MyButton title="가본 장소" onPress={() => navigation.navigate("VisitList")} />
            <MyButton title="좋아요 장소" onPress={() => navigation.navigate("GoodList")} />
            <MyButton title="프로필 수정" onPress={() => navigation.navigate("ProfileEdit")} /> */}
            <View style={{ height: 100 }} />
            <MyButton title="로그아웃" onPress={ handleLogoutButtononPress } />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    profileArea: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nickname: {
        fontSize: 20,
        fontWeight: 'bold',  
    },
    area: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: "red",
        alignItems: 'center',
    },
    line: {
        height:3,
        width: '100%',
        backgroundColor: "#E0E0E0"
    },
});
export default MyPage;