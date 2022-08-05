import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GoodList = () => {
    return(
        <View style={styles.container}>
            <Text>GoodList Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
});

export default GoodList;