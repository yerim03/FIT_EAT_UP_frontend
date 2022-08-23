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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 1" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 2" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 3" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 4" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 5" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 6" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 7" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 8" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 9" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 10" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
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
    result: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
});

export default SearchResult;