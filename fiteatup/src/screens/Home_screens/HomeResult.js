//친구와의 공통 추천 맛집 결과화면
// 총 10개의 추천 맛집 결과가 출력된다
import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ResultImage from '../../components/ResultImage';


const HomeResult = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>친구 ? 와의 공통 추천 맛집 결과입니다!</Text>
            <View style={styles.resultArea}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 1" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 2" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 3" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 4" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 5" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 6" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 7" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 8" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")} />
                </View>
                <View style={styles.result}>
                    <ResultImage foodname="음식점 9" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")}/>
                    <ResultImage foodname="음식점 10" recommend percent="%" onPress={() => navigation.navigate("RestaurantInfo")} />
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
        paddingVertical: 10,
        paddingHorizontal: 5,
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

export default HomeResult;