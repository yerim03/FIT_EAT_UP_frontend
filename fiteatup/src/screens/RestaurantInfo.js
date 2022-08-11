import React from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';

const RestaurantInfo = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>해당 음식점 명</Text>

            <Text style={styles.detailTitle}>상세정보</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: 20,
    },
    title: {   
        fontSize: 20,
        fontWeight: '600',
    },
    detailTitle: {   
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'flex-start',
    },
});

export default RestaurantInfo;