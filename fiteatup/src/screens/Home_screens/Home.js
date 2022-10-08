//홈 화면
import React, { useEffect, useState } from 'react';
import { Text, 
        View,
        StyleSheet, 
        ScrollView, 
        TouchableOpacity,
        SafeAreaView,
        FlatList } from 'react-native';
import MyButton from '../../components/MyButton';
import FriendProfileImage from '../../components/FriendProfileImage';
import { useUserState } from '../../context/UserContext';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';


const Home = ({ navigation }) => {
    const [isClick, setIsClick] =useState(false);
    
    
    //방문장소 확인하는 OX 버튼
    const OXButton = ({ title, onPress }) => {
        return(
            <TouchableOpacity style={styles.oxButton} onPress={onPress} activeOpacity={0.8}>
                <Text style={{ color: '#ffffff', fontSize: 20,}}>{title}</Text>
            </TouchableOpacity>
        );
    };

    // const FriendProfiles = ({ item }) => {
    //     return(
    //         <View styles={{ flexDirection: 'row', }}>
    //             <FriendProfileImage url={item.url} isHome isClick={isClick} onPress={()=> setIsClick(!isClick)} />
    //             <FriendProfileImage isHome/>
    //         </View>
    //     );
    // };

    // const Item = ({ item: {id, title, url}, onPress }) => {
    //     return(
    //         <View styles={{ flexDirection: 'row', }}>
    //             <FriendProfileImage url={url} isHome isClick={isClick} onPress={onPress} />
    //             <Text>{title}</Text>
    //         </View> 
    //     );
    // };

    // const renderItem = ({ item }) => (
    //     <Item item={item} onPress={()=> setIsClick(!isClick)} />
    // )

    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={globalStyles.container_2}>
            <Text style={globalStyles.tabScreenTitle}>추천맛집 검색</Text>
            <Text style={globalStyles.tabScreenSmallTitle}>친구와 공통된 맛집을 추천받아보세요!</Text>
            <View style={styles.recomArea}>
                {/* <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                /> */}
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator = {true}>
                    <FriendProfiles />
                    <FriendProfiles />
                    <FriendProfiles />
                    <FriendProfiles />
                    <FriendProfiles />
                </ScrollView>  */}
                <MyButton title="추천" onPress={()=> navigation.navigate("HomeResult")}></MyButton>
            </View>
            
            <View style={{ height: 30 }} />
            <Text style={globalStyles.tabScreenTitle}>방문장소 확인</Text>
            <Text style={globalStyles.tabScreenSmallTitle}>방문한 장소가 맞나요? 확인해보세요!</Text>
            <View style={styles.checkArea}></View>
            <View style={styles.buttonArea}>
                <OXButton title="O" onPress={() => {console.log("사용자의 방문장소 리스트에 추가되도록 작성")}}/>
                <OXButton title="X" onPress={() => {console.log("아무반응 없")}}/>
            </View>
            
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    recomArea: {
        flex: 0.8,
        borderWidth: 2,
        borderColor: '#404040',
        marginTop: 5,
        borderRadius: 10,
    },
    checkArea: {
        flex: 0.4,
        width: "65%",
        backgroundColor: '#e0e0e0',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 5,
    },
    buttonArea: {
        flex: 0.11,
        width: "65%",
        alignSelf: 'center',
        flexDirection: 'row',
    },
    oxButton: {
        flex: 1,
        width: '35%',
        backgroundColor: '#404040',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
});

// const DATA = [
//     { id: '0',
//       title: 'Name 0',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//     },
//     { id: '1',
//       title: 'Name 1',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//     },
//     { id: '2',
//       title: 'Name 2',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//     },
//     { id: '3',
//       title: 'Name 3',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//      },
//     { id: '4',
//       title: 'Name 4',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//      },
//     { id: '5',
//       title: 'Name 5',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//      },
//     { id: '6',
//       title: 'Name 6',
//       url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
//      },
// ];

export default Home;