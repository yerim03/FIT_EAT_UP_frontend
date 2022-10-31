//친구와의 공통 추천 맛집 결과화면
// 총 10개의 추천 맛집 결과가 출력된다
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ResultImage from '../../components/ResultImage';
import { globalStyles } from '../../styles/styles';
import { theme } from '../../styles/theme';


const HomeResult = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return(
            <View style={styles.oneResultArea}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("RestaurantInfo", {item})}>
                    <ResultImage 
                        foodname={item.place_name} 
                        recommend
                        percent="%"
                        // url={item.}          
                    />
                </TouchableOpacity>
            </View>
        );
    };


    return(
        <View style={[globalStyles.container_2, {alignItems: 'center'}]}>
            <Text style={styles.title}>친구 ????와의 공통 추천 맛집 결과입니다!</Text>
            <View style={styles.resultArea}>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator ={false}
                />
                {/* <ScrollView showsVerticalScrollIndicator={false}>
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
                </ScrollView> */}
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 0.1,
        fontSize: 18,
        fontWeight: 'bold',
        color: `${theme.title_1}`,
    },
    resultArea: {
        flex: 1,
        alignItems: 'center', 
        width: '100%',
    },
    oneResultArea: {
        flexDirection: 'row', 
        marginHorizontal: 8,
        marginVertical: 12,
    },
    result: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
});

export default HomeResult;

const DATA = [
    {
        id: "1",
        place_name: "Item 11",
    },
    {
        id: "2",
        place_name: "Item 22",
    },
    {
        id: "3",
        place_name: "Item 33",
    },
    {
        id: "4",
        place_name: "Item 44",
        },
    {
        id: "5",
        place_name: "Item 55",
        },
    {
        id: "6",
        place_name: "Item 66",
        },
    {
        id: "7",
        place_name: "Item 77",
        },
    {
        id: "8",
        place_name: "Item 88",
        },
]