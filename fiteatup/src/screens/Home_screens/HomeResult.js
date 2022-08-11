//친구와의 공통 추천 맛집 결과화면
// 총 10개의 추천 맛집 결과가 출력된다
import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ResultImage from '../../components/ResultImage';


const HomeResult = ({ navigation }) => {
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
            <Text style={styles.title}>친구 ? 와의 공통 추천 맛집 결과입니다!</Text>
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
        paddingTop: 20,
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

export default HomeResult;