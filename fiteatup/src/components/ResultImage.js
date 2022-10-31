//[추천맛집결과(HomeResult.js), 검색결과(Search.js) 화면에서 나타나는 음식점 이미지 컴포넌트]
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
        width: 140,
        height: 140,
        marginBottom: 4,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: `${theme.restInfoLineColor}`
    },
    foodName: {
        width: 150,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    percent: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: `${theme.title}`,
        paddingVertical: 4,
        width: '80%',
        borderRadius: 10,
        backgroundColor: `${theme.percentBackgroundColor}`
    }
});

export default ResultImage;