import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const RestaurantInfo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>해당 음식점 명</Text>
            <View style={styles.foodimage}>
                <Text style={{ fontSize: 20 }}>음식점 대표사진?</Text>
            </View>
            <View style={styles.goodArea}>
                <Text style={{ fontSize: 20 }}>좋아요 여부 혹은 리뷰(별점?)</Text>
            </View>
            <View style={styles.detailArea}>
                <Text style={{ fontSize: 20 }}>상세정보</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {   
        fontSize: 22,
        fontWeight: 'bold',
    },
    foodimage: {
        backgroundColor: "blue",
        flex: 0.75,
        width: '75%',
        borderRadius: 10,
        marginTop: 10,
    },
    goodArea: {
        backgroundColor: "green",
        flex: 0.2,
        width: '75%',
        borderRadius: 10,
    },
    detailArea: {
        backgroundColor: 'red',
        flex: 1.5,
        width: '90%',
        borderRadius: 10,
    },
});

export default RestaurantInfo;