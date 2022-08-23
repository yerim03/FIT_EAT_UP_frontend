// 추천맛집결과(HomeResult.js), 검색결과(SearchResult.js) 화면에서
// 각 음식점의 이미지를 나타내는 커스텀 컴포넌트 생성
import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const ResultImage = ( props ) => {
    return(
        <TouchableOpacity style={{ alignItems: 'center', marginBottom: 15 }} onPress={props.onPress}>
            <Image style={styles.image} />
            <Text style={styles.foodName}>{props.foodname}</Text>
            {props.recommend && <Text style={styles.percnet}>{props.percent}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#E0E0E0",
        width: 160,
        height: 160,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    foodName: {
        fontSize: 17,
    },
    percnet: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 3,
    }
});

export default ResultImage;