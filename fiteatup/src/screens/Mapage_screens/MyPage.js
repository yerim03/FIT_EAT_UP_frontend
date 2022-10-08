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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserDispatch, useUserState } from '../../context/UserContext';
import { API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';


const MyPage = ({ navigation }) => {
    const { user } =useUserState();
    const dispatch = useUserDispatch();

    //로그아웃 버튼 클릭 시 실행함수
    const handleLogoutButtononPress = () => {
        try{
            // await AsyncStorage.clear(); //로그아웃 시 토큰 삭제
            dispatch({type: "LOGOUT", });
            Alert.alert('FIT_EAT_UP', '로그아웃이 완료되었습니다.');
        }
        catch(error) {
            console.log("Logout Error : ", error);
        }
    };


    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container_2}>
                <Text style={globalStyles.tabScreenTitle}>내 정보</Text>
                <View style={styles.profileArea}>
                    <MyProfileImage url={`${API.GET_PROFILEIMAGE}${user.userProfileImage}`} />
                    <Text style={styles.nickname}>{user.userNickname}</Text>
                </View>
                <View style={{ height: 30 }} />
                
                <TouchableOpacity 
                    style={styles.settingArea}
                    onPress={() => navigation.navigate("GoodList")}
                    activeOpacity={0.8}
                >
                    <Ionicons name="heart" size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 10 }} />
                    <Text style={styles.settingTitle}>좋아요</Text>  
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.settingArea} 
                    onPress={() => navigation.navigate("VisitList")}
                    activeOpacity={0.8}
                >
                    <Ionicons name="location" size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 10 }} />
                    <Text style={styles.settingTitle}>가봤어요</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.settingArea}
                    onPress={() => navigation.navigate("ProfileEdit")}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="edit" size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 10 }} />
                    <Text style={styles.settingTitle}>프로필 수정</Text>
                    </TouchableOpacity>
                <View style={{ height: 100 }} />
                <MyButton title="로그아웃" onPress={ handleLogoutButtononPress } />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
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
        // color: `${theme.title}`
    },
    settingArea: {
        paddingVertical: 17,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: `${theme.mypageLine}`,
    },
});
export default MyPage;







    // //사용자 정보 가져오기
    // const getUserData = async () => {;
    //     await AsyncStorage.getItem('token', (err, result) => 
    //         { mytoken = JSON.parse(result);
    //           console.log("마이페이지에 토큰", mytoken) });
    //     console.log("async 밖: ", mytoken);
    //     await axios.get("http://10.0.2.2:8000/accounts/user/", 
    //             { headers: { 
    //                 Authorization: `jwt ${mytoken}`}
    //             })
    //         .then(response => {console.log(response.data);
    //                         setUser(response.data); })
    //         .catch(err => console.log(err.message))
    // };