//[음식점의 이미지] - GoodList, VisitList 사용
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';


const FoodImage = ({ url }) => {
    return(
        <Image style={styles.foodImage} source={{ uri: url }} />
    );
};

const styles=StyleSheet.create({
    foodImage: {
        backgroundColor: `${theme.imageBackgroundColor}`,
        width: 90,
        height: 90,
        borderRadius: 20,
        marginHorizontal: 10,
    },
});

export default FoodImage;