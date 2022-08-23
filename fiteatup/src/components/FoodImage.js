import React from 'react';
import { Image, StyleSheet} from 'react-native';

const FoodImage = () => {
    return(
        <Image style={styles.foodImage} />
    );
};

const styles=StyleSheet.create({
    foodImage: {
        backgroundColor: "#E0E0E0",
        width: 100,
        height: 100,
        borderRadius: 15,
        marginHorizontal: 10,
    },
});

export default FoodImage;