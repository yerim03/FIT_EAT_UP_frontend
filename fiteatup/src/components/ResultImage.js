// 추천맛집결과(HomeResult.js), 검색결과(SearchResult.js) 화면에서
// 각 음식점의 이미지를 나타내는 커스텀 컴포넌트 생성
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const ResultImage = ( props ) => {
    return(
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.image} source={{uri: props.url}}/>
            <Text style={styles.foodName}>{props.foodname}</Text>
            {props.recommend && <Text style={styles.percent}>{props.percent}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#E0E0E0",
        width: 140,
        height: 140,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    foodName: {
        width: 150,
        fontSize: 17,
        textAlign: 'center',
    },
    percent: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 3,
    }
});

export default ResultImage;