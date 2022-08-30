//다시 수정
//검색기능 아직 미완성
import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


const Search = ({ navigation }) => {
    const [data, setData] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const[searchWord, setSearchWord] = useState('');


    // const onPressSearchButton = () => {
    //     //카카오 로컬 api
    //     axios.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchWord}&size=3`,
    //                     { headers: { 
    //                         Authorization: 'KakaoAK'}
    //                     })
    //             .then((res) => { console.log('serach data: ', res.data.documents[0]); 
    //                             setData(res.data.documents[0].place_name); })
    //             .catch((err) => { console.log(err.message);})

    //     //카카오 다음 검색 이미지 api
    //     axios.get(`https://dapi.kakao.com/v2/search/image?query=${searchWord}&size=3`,
    //                     { headers: { 
    //                         Authorization: 'KakaoAK'}
    //                     })
    //             .then((res) =>  {console.log('search image: ', res.data.documents);
    //                             setImageUrl(res.data.documents[0].image_url); })
    //             .catch((err) => { console.log(err.message);})
    // };

    return(
        <KeyboardAwareScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container} >
                    <Text style={styles.title}>장소 검색</Text>
                    <Text style={styles.smalltitle}>원하는 음식점을 검색해보세요!</Text>
                    <MyInput onChangeText={text => setSearchWord(text)} placeholder="검색어를 입력하세요."/>
                    <MyButton title="검색" onPress={() => {}} />
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#404040',
    },
    smalltitle: {
        fontSize: 14,
        color: '#606060',
    },
});


export default Search;