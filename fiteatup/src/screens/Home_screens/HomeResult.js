import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeResult = () => {
    return(
        <View style={styles.container}>
            <Text>HomeResult Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
});

export default HomeResult;