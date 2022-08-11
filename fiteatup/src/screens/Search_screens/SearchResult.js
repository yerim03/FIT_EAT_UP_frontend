import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ResultImage from '../../components/ResultImage';
import MyInput from '../../components/MyInput';

const SearchResult = ({ navigation }) => {

    const Result = () => {
        return(
            <View style={{ flexDirection: 'row' }}>
                <ResultImage onPress={() => navigation.navigate("RestaurantInfo")}/>
                <ResultImage onPress={() => navigation.navigate("RestaurantInfo")} />
            </View>
        );
    };

    return(
        <View style={styles.container}>
            <MyInput style={styles.title} disabled/>
            <View style={styles.resultArea}>
                <ScrollView>
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                </ScrollView>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    title: {
        flex: 0.07,
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultArea: {
        flex: 1,
        width: '100%',
    },
});

export default SearchResult;