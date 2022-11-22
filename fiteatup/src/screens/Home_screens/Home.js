//홈 화면
import React, { useEffect, useState } from 'react';
import { Image,
        View,
        StyleSheet, 
        TouchableOpacity,
        SafeAreaView,
        FlatList, 
        Alert,
        Modal } from 'react-native';
import HomeFriendProfile from '../../components/HomeFriendProfile';
import CustomText from '../../components/CustomText';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign, FontAwesome  } from '@expo/vector-icons';
import { useUserState } from '../../context/UserContext';
import axios from 'axios';
import { API } from '../../config';
import { theme } from '../../styles/theme';
import { globalStyles, modalStyles } from '../../styles/styles';
import DropDownPicker from 'react-native-dropdown-picker';


const Home = ({ navigation }) => {
    const [friendsList, setFriendsList] = useState([{}]); //친구 리스트
    const [selectedFriends, setSelectedFriends] = useState([]);   //선택한 친구들
    
    //모달창 관련
    const [modalVisible, setModalVisible] = useState(false);    //모달 창 보이는 여부
    const [areaOpen, setAreaOpen] = useState(false);
    const [areaValue, setAreaValue] = useState('');     //area value값 관리
    const [area, setArea] = useState(AREA_DATA);
    //모달창 관련

    const [isRandomClick, setIsRandomClick] = useState(false);
    const isFocused = useIsFocused();
    const { headers } = useUserState();
    
    // 랜덤 추천 장소 가져올 부분
    // useEffect(()=>{}, [])

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

    //추천받을 친구선택
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

    const handleRecommendButtononPress = () => {
        if(selectedFriends.length === 0) {
            Alert.alert("맛집 추천 실패", '1명 이상의 친구를 선택해주세요!');
        } else {
            navigation.navigate("HomeResult", {selectedFriends, areaValue});
        }
    };

    //지역 선택 드롭다운
    const AreaDropDown = () => {
        return(
            <View style={styles.input}>
                <DropDownPicker 
                    style={styles.dropdown}
                    textStyle={{color: `${theme.dropdownColor}`, fontFamily: 'netmarbleMedium', fontWeight: '500'}}
                    open={areaOpen}
                    value={areaValue}
                    items={area}
                    setOpen={setAreaOpen}
                    setValue={setAreaValue}
                    setItems={setArea}
                    placeholder="지역을 선택하세요."
                />
            </View>
        );
    };

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={globalStyles.container_2}>
                <CustomText style={globalStyles.tabScreenTitle} fontType="Bold">추천맛집 검색</CustomText>
                <CustomText style={globalStyles.tabScreenSmallTitle} fontType="Medium">친구와 공통된 맛집을 추천받아 보세요!</CustomText>
                <View style={styles.recomArea}>
                    <FlatList 
                        data={friendsList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.pk}
                        numColumns={3}
                        style={{ margin: 10 }}
                    />
                     <Modal animationType="fade" transparent={true} visible={modalVisible}>
                        <View style={modalStyles.centeredView}>
                            <View style={modalStyles.modalView}>
                                <CustomText style={[styles.modal, {marginBottom: 20}]}>추천 받을 맛집의 지역 선택해주세요!</CustomText>
                                <AreaDropDown />
                                <View style={{ flexDirection: 'row'}}>
                                    <TouchableOpacity style={modalStyles.modalButton} onPress={() => {setModalVisible(false);}}>
                                            <CustomText style={modalStyles.modalButtonTitle}>취소</CustomText>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={modalStyles.modalButton} onPress={() => {setModalVisible(false); handleRecommendButtononPress(); }}>
                                            <CustomText style={modalStyles.modalButtonTitle}>추천 받기</CustomText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    
                    <TouchableOpacity style={styles.recomButton} onPress={() => {setModalVisible(true)}}>
                        <CustomText style={{color: `${theme.buttonTitleColor}`, fontSize: 17 }} fontType="Light">맛집 추천</CustomText>
                        <AntDesign name="like1" size={25} color={theme.buttonTitleColor} style={{paddingHorizontal: 6}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{ height: 30 }} />
                <CustomText style={globalStyles.tabScreenTitle} fontType="Bold">오늘의 랜덤 추천 장소</CustomText>
                <CustomText style={globalStyles.tabScreenSmallTitle} fontType="Medium">오늘의 장소를 추천받아 보세요!</CustomText>
                {isRandomClick ? 
                        <View style={styles.randomRecomm}>
                            {/* 오늘의 랜덤 추천 장소 이미지 넣을 것 */}
                            <Image style={styles.randomRecommPlaceImage} source={{uri : 'https://k.kakaocdn.net/dn/2yveN/btrA1BDPuuu/3oG4ZNI7uZCAIoKdZr9LR1/img.jpg'}}/>
                            <View style={styles.randomRecommPlaceName}>
                                <CustomText style={styles.randomRecommTitle} fontType="Medium">팬더스윗</CustomText>
                                {/* 오늘의 랜덤 추천 장소 이름 넣을 것 */}
                            </View>
                            {/* <View style={styles.buttonArea}>
                                <OXButton name="heart" onPress={() => {console.log("사용자의 좋아요 장소 리스트에 추가되도록 작성")}}/>
                                <OXButton name="heart-dislike" onPress={() => {console.log("아무반응 없")}}/>
                            </View> */}
                        </View>  
                        :
                        <TouchableOpacity 
                            style={[styles.randomRecomm, {alignItems: 'center', justifyContent:'center'}]} 
                            onPress={() => {setIsRandomClick(true);}}
                            activeOpacity={0.7}
                        >
                            <FontAwesome name="question" size={70} color={theme.randomQuestionImageColor} />
                            <CustomText style={[styles.randomRecommTitle, {padding: 4, fontSize: 13}]}>이곳을 클릭해보세요!</CustomText>
                        </TouchableOpacity> 
                        
                }
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
    randomRecomm: {
        flex: 0.5,
        width: '70%',
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: `${theme.randomRecommBackgroundColor}`
    },
    randomRecommPlaceImage: {
        flex: 0.9,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: `${theme.imageBackgroundColor}`
    },
    randomRecommPlaceName: {
        flex: 0.2,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    randomRecommTitle: {       
        color: `${theme.title_1}`,
        fontSize: 16,
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
    modal: {
        fontSize: 16,
        color: `${theme.title_1}`,
        paddingVertical: 5,
    },
    input: {
        marginVertical: 7,
        width: '60%',
    },
    dropdown:{
        borderColor: `${theme.inputNotFocusColor}`,
    }
});

export default Home;

const AREA_DATA = [
    { label: '강남구', value: '강남구' },
    { label: '강동구', value: '강동구' },
    { label: '강북구', value: '강북구' },
    { label: '강서구', value: '강서구' },
    { label: '관악구', value: '관악구' },
    { label: '광진구', value: '광진구' },
    { label: '구로구', value: '구로구' },
    { label: '금천구', value: '금천구' },
    { label: '노원구', value: '노원구' },
    { label: '도봉구', value: '도봉구' },
    { label: '동대문구', value: '동대문구' },
    { label: '동작구', value: '동작구' },
    { label: '마포구', value: '마포구' },
    { label: '서대문구', value: '서대문구' },
    { label: '서초구', value: '서초구' },
    { label: '성동구', value: '성동구' },
    { label: '성북구', value: '성북구' },
    { label: '송파구', value: '송파구' },
    { label: '양천구', value: '양천구' },
    { label: '영등포구', value: '영등포구' },
    { label: '용산구', value: '용산구' },
    { label: '은평구', value: '은평구' },
    { label: '종로구', value: '종로구' },
    { label: '중구', value: '중구' },
    { label: '중랑구', value: '중랑구' },
]