//마이페이지 화면
import React from 'react';
import { View, 
         StyleSheet, 
         TouchableOpacity,
         SafeAreaView, 
         Alert } from 'react-native';
import CustomText from '../../components/CustomText';
import MyButton from '../../components/MyButton';
import MyProfileImage from '../../components/MyProfileImage';
import { useUserDispatch, useUserState } from '../../context/UserContext';
import { API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 


const MyPage = ({ navigation }) => {
    const { user } =useUserState();
    const dispatch = useUserDispatch();

    //로그아웃 기능
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
                <CustomText style={globalStyles.tabScreenTitle} fontType="Bold">내 정보</CustomText>
                <View style={styles.profileArea}>
                    <MyProfileImage url={`${API.GET_PROFILEIMAGE}${user.userProfileImage}`} />
                    <CustomText style={styles.nickname} fontType="Medium">{user.userNickname}</CustomText>
                </View>
                <View style={{ height: 30 }} />
                
                <TouchableOpacity 
                    style={styles.settingArea}
                    onPress={() => navigation.navigate("GoodList")}
                    activeOpacity={0.8}
                >
                    <Ionicons name="heart" size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 10 }} />
                    <CustomText style={styles.settingTitle} fontType="Medium">좋아요</CustomText>  
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.settingArea} 
                    onPress={() => navigation.navigate("VisitList")}
                    activeOpacity={0.8}
                >
                    <Ionicons name="location" size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 10 }} />
                    <CustomText style={styles.settingTitle} fontType="Medium">가봤어요</CustomText>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.settingArea}
                    onPress={() => navigation.navigate("ProfileEdit")}
                    activeOpacity={0.8}
                >
                    <MaterialIcons name="edit" size={26} color={`${theme.iconColor}`} style={{ marginHorizontal: 10 }} />
                    <CustomText style={styles.settingTitle} fontType="Medium">프로필 수정</CustomText>
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
        fontSize: 22,  
        marginHorizontal: 20,
        color: `${theme.title_1}`,
    },
    settingTitle: {
        fontSize: 18,
        paddingLeft: 10,
        color: `${theme.title_1}`
    },
    settingArea: {
        paddingVertical: 17,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: `${theme.flatlistLineColor}`,
    },
});

export default MyPage;