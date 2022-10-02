//[음식점의 이미지를 나타내는 컴포넌트]
import React from 'react';
import { Image, StyleSheet} from 'react-native';
import { theme } from '../styles/theme';


const FoodImage = () => {
    return(
        <Image style={styles.foodImage} />
    );
};

const styles=StyleSheet.create({
    foodImage: {
        backgroundColor: `${theme.imageBackgroundColor}`,
        width: 100,
        height: 100,
        borderRadius: 15,
        marginHorizontal: 10,
    },
});

export default FoodImage;