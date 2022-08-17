//홈 화면
import React from 'react';
import { Text, StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import MyButton from '../../components/MyButton';
import FriendProfileImage from '../../components/FriendProfileImage';


const Home = ({ navigation }) => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <Text style={styles.title}>추천맛집 검색</Text>
            <Text style={styles.smalltitle}>친구와 공통된 맛집을 추천받아보세요!</Text>
            <View style={styles.recomArea}>
                <View style={styles.friendprofile}>
                    <FriendProfileImage isHome />
                    <FriendProfileImage />
                    <FriendProfileImage />
                </View>
                <MyButton title="추천" onPress={()=> navigation.navigate("HomeResult")}></MyButton>
            </View>     
            <View style={{ height: 30 }} />
            <Text style={styles.title}>방문장소 확인</Text>
            <Text style={styles.smalltitle}>방문한 장소가 맞나요? 확인해보세요!</Text>
            <View style={styles.checkArea}></View>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#404040',
    },
    smalltitle: {
        fontSize: 14,
        color: '#606060',
    },
    recomArea: {
        flex: 0.8,
        backgroundColor: '#808080',
        marginTop: 5,
        borderRadius: 5,
    },
    friendprofile: {
        flex: 1,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
    },
    checkArea: {
        flex: 0.5,
        width: "70%",
        backgroundColor: '#808080',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
});

export default Home;