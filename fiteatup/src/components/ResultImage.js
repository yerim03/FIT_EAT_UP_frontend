//[추천맛집결과(HomeResult.js), 검색결과(Search.js) 화면에서 나타나는 음식점 이미지 컴포넌트]
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../styles/theme';


const ResultImage = ( props ) => {
    const Star = () => {
        return(
            <View style={styles.star}>
                <FontAwesome name="star" size={23} color="#F2BB13" style={{paddingHorizontal: 8}} />
                <CustomText style={styles.starTitle} fontType="Medium">{props.star}/5</CustomText>
            </View>
        );
    }
    return(
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.image} source={{ uri: props.url }} />
            {props.recommend && <Star />}
            <CustomText style={styles.foodName}  fontType="Light">{props.foodname}</CustomText>
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
        fontSize: 15,
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
        color: `${theme.title}`,
        paddingHorizontal: 8,
    }
});

export default ResultImage;