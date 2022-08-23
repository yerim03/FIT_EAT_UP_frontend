import React from 'react';
import { Text, 
        View, 
        StyleSheet, 
        TouchableOpacity,
        SafeAreaView, 
        Alert } from 'react-native';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyPage = ({ navigation }) => {

    //로그아웃 버튼 클릭 시 실행함수
    const handleLogoutButtononPress = async() => {
        AsyncStorage.getItem('token', (err,result) => { console.log('로그아웃 전 현재 저장된 토큰은 ', JSON.parse(result)); })
        try{
            await AsyncStorage.clear(); //로그아웃 시 토큰 삭제
            Alert.alert("Logout Success!!", "로그아웃이 완료되었습니다.",
                [{ text: "OK",
                    onPress: () => navigation.navigate("AuthStack") //AuthStack의 Login 스크린으로 이동
                }]
            );
        }
        catch(error) {
            console.log("Logout Error : ", error);
        }
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>내 정보</Text>
                <View style={styles.profileArea}>
                    <MyProfileImage />
                    <Text style={styles.nickname}> 나의 Nickname</Text>
                </View>
                <View style={{ height: 30 }} />
                
                <TouchableOpacity 
                    style={styles.settingArea}
                    onPress={() => navigation.navigate("GoodList")}
                    activeOpacity={0.8}
                >
                    <Ionicons name="heart" size={26} color="black" style={{ marginHorizontal: 10 }} />
                    <Text style={styles.settingTitle}>좋아요</Text>  
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.settingArea} 
                    onPress={() => navigation.navigate("VisitList")}
                    activeOpacity={0.8}
                >
                    <Ionicons name="location" size={26} color="black" style={{ marginHorizontal: 10 }} />
                    <Text style={styles.settingTitle}>가봤어요</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.settingArea}
                    onPress={() => navigation.navigate("ProfileEdit")}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="edit" size={26} color="black" style={{ marginHorizontal: 10 }} />
                    <Text style={styles.settingTitle}>프로필 수정</Text>
                    </TouchableOpacity>
                <View style={{ height: 100 }} />
                <MyButton title="로그아웃" onPress={ handleLogoutButtononPress } />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#404040',
    },
    profileArea: {
        height: 150,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nickname: {
        fontSize: 20,
        fontWeight: 'bold',  
        marginHorizontal: 20,
    },
    settingTitle: {
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    settingArea: {
        paddingVertical: 17,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
    },
});
export default MyPage;