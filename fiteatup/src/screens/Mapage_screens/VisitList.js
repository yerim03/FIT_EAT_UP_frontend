import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const VisitList = () => {
    return(
        <View style={styles.container}>
            <Text>VisitList Screen</Text>
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

export default VisitList;