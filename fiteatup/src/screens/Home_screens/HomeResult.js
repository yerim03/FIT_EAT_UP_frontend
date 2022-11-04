//친구와의 공통 추천 맛집 결과화면
// 총 10개의 추천 맛집 결과가 출력된다
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ResultImage from '../../components/ResultImage';
import { globalStyles } from '../../styles/styles';
import { theme } from '../../styles/theme';


const HomeResult = ({ navigation }) => {
    let name = 'bluesky'

    const renderItem = ({ item }) => {
        return(
            <View style={styles.oneResultArea}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantInfo", {item})}>
                    <ResultImage 
                        foodname={item.place_name} 
                        recommend
                        star={item.rating}
                        url={item.image}          
                    />
                </TouchableOpacity>
            </View>
        );
    };


    return(
        <View style={[globalStyles.container_2, {alignItems: 'center'}]}>
            <Text style={styles.title}>{name} 님과의 공통 추천 맛집 결과입니다!</Text>
            <View style={styles.resultArea}>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator ={false}
                />
            </View>         
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 0.1,
        fontSize: 18,
        fontWeight: 'bold',
        color: `${theme.title_1}`,
    },
    resultArea: {
        flex: 1,
        width: '100%',
    },
    oneResultArea: {
        flexDirection: 'row', 
        marginHorizontal: 8,
        marginVertical: 12,
    },
    result: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
});

export default HomeResult;

const DATA = [
    {
        id: "1",
        place_name: "홍대개미 홍대점",
        image: 'https://postfiles.pstatic.net/MjAxODA0MTBfMjQg/MDAxNTIzMjg3NzYwNDMz._6szSBWx1nDU48aukXNCD08zZK2fjV-3mHojRF2HXMIg.FZ0zPTNKOynzgbs764WUPWPgjLNuOfo8dI86ucDrm1Qg.JPEG.ksh68988/20180409_155644.jpg?type=w580',
        rating: 4.3
    },
    {
        id: "2",
        place_name: "한신포차 홍대점",
        image: 'https://postfiles.pstatic.net/MjAxOTExMjFfMTY4/MDAxNTc0MzMwNzM2MjIz.ynRZUMJ8kBi6IS68KbLdDa_e6stECaRkT9sRawTniJEg.Wddv45FB49qXRomeHg8fNGcX9w6iGw6C7XwPbl6ingAg.JPEG.minyeong8305/%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A83.JPG?type=w773',
        rating: 4.3
    },
    {
        id: "3",
        place_name: "역전우동0410 홍대입구역점",
        image: 'https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D100%26type%3Df640_380%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20180521_124%252F1526889064543a3X57_PNG%252FBN_xy9hFuT1glq9THEWwgbiw.png%22&type=ff500_300',
        rating: 4.0
    },
    {
        id: "4",
        place_name: "히메시야",
        image: 'http://t1.daumcdn.net/cfile/tistory/996B973D5DB471D901',
        rating: 3.3
    },
    {
        id: "5",
        place_name: "미정국수0410 홍대입구역점",
        image: 'https://postfiles.pstatic.net/20121005_207/dnfdjaaktpdu_1349392370848BNIvm_JPEG/%BB%E7%C1%F8_007.jpg?type=w1',
        rating: 3.5
    },
    {
        id: "6",
        place_name: "롤링파스타 홍대점",
        image: 'https://t1.daumcdn.net/cafeattach/1XNWd/a9eb7461cad3b49fbb791e91d9a7061ab8ab65e8',
        rating: 2.0
        },
]