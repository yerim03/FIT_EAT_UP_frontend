import React from 'react';
import { Text, 
        SafeAreaView, 
        View, 
        StyleSheet, 
        TouchableOpacity, 
        Alert } from 'react-native';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { MaterialCommunityIcons, AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyPage = ({ navigation }) => {

    //로그아웃 버튼 클릭 시 실행함수
    const handleLogoutButtononPress = async() => {
        AsyncStorage.getItem('token', (err,result) => { console.log('로그아웃 전 현재 저장된 토큰은 ', JSON.parse(result)); })
        try{
            AsyncStorage.clear();
            Alert.alert("Logout Success!!", "로그아웃이 완료되었습니다.",
                [{ text: "OK",
                    onPress: () => navigation.navigate("AuthStack")
                }]
            );
        }
        catch(error) {
            console.log(error);
        }
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
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
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
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