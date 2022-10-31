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
import FriendProfile from '../../components/FriendProfile';
import { useUserState } from '../../context/UserContext';
import axios from 'axios';
import { API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles } from '../../styles/styles';
import Friend from '../Friend_screens/Friend';


const Home = ({ navigation }) => {
    // const [isClick, setIsClick] =useState(false);
    const [friendList, setFriendList] = useState([{}]); //친구 리스트
    const { headers } = useUserState();
    
    useEffect(()=> {
        const getFriendList = async () => { 
            const friends = await axios.get(`${API.FRIEND_LIST}`, { headers: headers } );
            setFriendList(friends.data);            
        };
        getFriendList();
    }, [])

    //방문장소 확인하는 OX 버튼
    const OXButton = ({ btnTitle, onPress }) => {
        return(
            <TouchableOpacity style={styles.oxButton} onPress={onPress} activeOpacity={0.8}>
                <Text style={{ color: `${theme.buttonTitleColor}`, fontSize: 15,}}>{btnTitle}</Text>
            </TouchableOpacity>
        );
    };


    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={globalStyles.container_2}>
            <Text style={globalStyles.tabScreenTitle}>추천맛집 검색</Text>
            <Text style={globalStyles.tabScreenSmallTitle}>친구와 공통된 맛집을 추천받아보세요!</Text>
            <View style={styles.recomArea}>
                <View style={styles.profileArea}>
                    {Object.values(friendList)
                        .map(item => (
                            <FriendProfile 
                                key={item.pk} 
                                nickname={item.nickname} 
                                url={`${API.GET_PROFILEIMAGE}${item.avatar_url}`}
                            />
                        ))}
                    </View>
                <MyButton title="추천" onPress={()=> navigation.navigate("HomeResult")}></MyButton>
            </View>
            
            <View style={{ height: 30 }} />
            <Text style={globalStyles.tabScreenTitle}>방문장소 확인</Text>
            <Text style={globalStyles.tabScreenSmallTitle}>방문한 장소가 맞나요? 확인해보세요!</Text>
            <View style={styles.checkArea}>
                <View style={styles.checkPlaceImage}>
                    {/* 연령별 추천 장소 이미지 넣을 것 */}
                </View>
                <View style={styles.checkPlaceName}>
                    <Text>hello</Text>
                    {/* 연령 별 추천 장소 이름 넣을 것 */}
                </View>
                <View style={styles.buttonArea}>
                    <OXButton btnTitle="O" onPress={() => {console.log("사용자의 방문장소 리스트에 추가되도록 작성")}}/>
                    <OXButton btnTitle="X" onPress={() => {console.log("아무반응 없")}}/>
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
        marginTop: 5,
        // borderRadius: 10,
    },
    profileArea: {
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
    },
    buttonArea: {
        flex: 0.2,
        flexDirection: 'row',
    },
    oxButton: {
        width: '50%',
        backgroundColor: `${theme.buttonBackgroundColor}`,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: `${theme.buttonLineColor}`
    }
});

const DATA = [
    { id: '0',
      nickname: 'Name 0',
      avatar_url: 'vx',
    },
    { id: '1',
      nickname: 'Name 1',
      avatar_url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
    },
    { id: '2',
      nickname: 'Name 2',
      avatar_url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
    },
    { id: '3',
      nickname: 'Name 3',
      avatar_url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
     },
    { id: '4',
      nickname: 'Name 4',
      avatar_url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
     },
    { id: '5',
      nickname: 'Name 5',
      avatar_url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
     },
    { id: '6',
      nickname: 'Name 6',
      avatar_url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
     },
];

export default Home;