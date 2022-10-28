//[추천맛집결과(HomeResult.js), 검색결과(SearchResult.js) 화면에서 나타나는 음식점 이미지 컴포넌트]
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';


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
        backgroundColor: `${theme.imageBackgroundColor}`,
        width: 130,
        height: 130,
        marginVertical: 10,
    },
    foodName: {
        width: 150,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
    percent: {
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 3,
    }
});

export default ResultImage;