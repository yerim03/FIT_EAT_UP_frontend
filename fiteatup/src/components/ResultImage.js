//[추천맛집결과(HomeResult.js), 검색결과(Search.js) 화면에서 나타나는 음식점 이미지 컴포넌트]
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../styles/theme';


const ResultImage = ( props ) => {
    const Star = () => {
        return(
            <View style={styles.star}>
                <FontAwesome name="star" size={23} color="#F2BB13" style={{paddingHorizontal: 8}} />
                <Text style={styles.starTitle}>{props.star}/5</Text>
            </View>
        );
    }
    return(
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.image} source={{uri: props.url}}/>
            {props.recommend && <Star />}
            <Text style={styles.foodName}>{props.foodname}</Text>
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
        // height: 50,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    star: {
        flexDirection: 'row',
        paddingVertical: 4,
        width: '80%',
        borderRadius: 10,
        backgroundColor: `${theme.percentBackgroundColor}`
    },
    starTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: `${theme.title}`,
        paddingHorizontal: 8,
    }
});

export default ResultImage;