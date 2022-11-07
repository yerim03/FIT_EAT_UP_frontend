//홈 화면
import React, { useEffect, useState } from 'react';
import { Text, 
        Image,
        View,
        StyleSheet, 
        TouchableOpacity,
        SafeAreaView,
        FlatList } from 'react-native';
import HomeFriendProfile from '../../components/HomeFriendProfile';
import { useIsFocused } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useUserState } from '../../context/UserContext';
import axios from 'axios';
import { API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';


const Home = ({ navigation }) => {
    const [friendsList, setFriendsList] = useState([{}]); //친구 리스트
    const [selectedFriends, setSelectedFriends] = useState([]);   //선택한 친구들
    const isFocused = useIsFocused();
    const { user, headers } = useUserState();
    
    useEffect(()=> {
        setSelectedFriends([]);
        const getFriendList = async () => { 
            const friends = await axios.get(`${API.FRIEND_LIST}`, { headers: headers } );
            for(let i=0; i < friends.data.length; i++){
                friends.data[i].selected=false;
            }
            setFriendsList(friends.data);
        };
        getFriendList();
    }, [isFocused])

    //방문장소 확인하는 OX 버튼
    const OXButton = ({ name, onPress }) => {
        return(
            <TouchableOpacity style={styles.oxButton} onPress={onPress} activeOpacity={0.8}>
                <Ionicons name={name} size={24} color={theme.buttonTitleColor} />
            </TouchableOpacity>
        );
    };

    const makeSelectFriends = ( item ) => {
        if(item.selected) {
            //삭제
            setSelectedFriends(selectedFriends.filter(data => data.pk !== item.pk));
        } else {
            //추가
            setSelectedFriends([...selectedFriends, { pk: item.pk, nickname: item.nickname }]);
        }
    };

    const onToggle = ( item ) => {
        setFriendsList(friendsList.map(data => 
                        data.pk === item.pk ? {...data, selected: !data.selected} : data
                       ))
        makeSelectFriends(item);
    };

    const renderItem = ({ item }) => {
        return(
            <HomeFriendProfile
                item={item} 
                url={`${API.GET_PROFILEIMAGE}${item.avatar_url}`}
                onPressOut={() => { onToggle(item) }}
            />
        );
    };


    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container_2}>
                <Text style={globalStyles.tabScreenTitle}>추천맛집 검색</Text>
                <Text style={globalStyles.tabScreenSmallTitle}>친구와 공통된 맛집을 추천받아보세요!</Text>
                <View style={styles.recomArea}>
                    <FlatList 
                        data={friendsList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.pk}
                        numColumns={3}
                        style={{ margin: 10 }}
                    />
                    <TouchableOpacity style={styles.recomButton} onPress={() => navigation.navigate("HomeResult", selectedFriends)}>
                    
                        <Text style={{color: `${theme.buttonTitleColor}`, fontSize: 17 }}>맛집 추천</Text>
                        <AntDesign name="like1" size={25} color={theme.buttonTitleColor} style={{paddingHorizontal: 6}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{ height: 30 }} />
                <Text style={globalStyles.tabScreenTitle}>나이대별 추천 장소</Text>
                <Text style={globalStyles.tabScreenSmallTitle}>{user.userNickname} 님과 같은 나이대의 사용자들이{'\n'}좋아한 장소에요!</Text>
                <View style={styles.checkArea}>
                    {/* 연령별 추천 장소 이미지 넣을 것 */}
                    <Image style={styles.checkPlaceImage} source={{uri : 'https://k.kakaocdn.net/dn/2yveN/btrA1BDPuuu/3oG4ZNI7uZCAIoKdZr9LR1/img.jpg'}}/>
                    <View style={styles.checkPlaceName}>
                        <Text style={styles.checkPlaceNameTitle}>팬더스윗</Text>
                        {/* 연령 별 추천 장소이름 넣을 것 */}
                    </View>
                    <View style={styles.buttonArea}>
                        <OXButton name="heart" onPress={() => {console.log("사용자의 좋아요 장소 리스트에 추가되도록 작성")}}/>
                        <OXButton name="heart-dislike" onPress={() => {console.log("아무반응 없")}}/>
                    </View>
                </View>  
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    recomArea: {
        flex: 0.8,
        borderWidth: 1.5,
        borderColor: `${theme.buttonLineColor}`,
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
    },
    scrollvieweArea: {
        flexDirection: 'row'
    }, 
    checkArea: {
        flex: 0.5,
        width: '70%',
        alignSelf: 'center',
        marginTop: 5,
    },
    checkPlaceImage: {
        flex: 0.7,
        backgroundColor: `${theme.imageBackgroundColor}`
    },
    checkPlaceName: {
        flex: 0.15,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonArea: {
        flex: 0.2,
        flexDirection: 'row',
    },
    checkPlaceNameTitle: {
        color: `${theme.title_1}`,
        fontSize: 16,
        fontWeight: '600'
    },
    recomButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${theme.buttonBackgroundColor}`,
        width: '100%',
        borderRadius: 10,
        padding: 10,
    },
    oxButton: {
        width: '50%',
        backgroundColor: `${theme.buttonBackgroundColor}`,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: `${theme.buttonLineColor}`
    },
});

export default Home;