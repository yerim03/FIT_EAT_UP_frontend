// 추천맛집결과(HomeResult.js), 검색결과(SearchResult.js) 화면에서
// 각 음식점의 이미지를 나타내는 커스텀 컴포넌트 생성
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


const ResultImage = ( props ) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: "#E0E0E0",
        width: 110,
        height: 110,
        marginHorizontal: 30,
        marginTop: 20,
    },
});

export default ResultImage;