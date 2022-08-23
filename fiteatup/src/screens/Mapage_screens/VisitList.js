import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,FlatList } from 'react-native';
import FoodImage from '../../components/FoodImage';


const Item = ({ item: {id, title}, onPress}) => {
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress({ id, title })} >
            <FoodImage />
            <Text style={styles.itemTitle}>{title}</Text>
        </TouchableOpacity>
    );
};


const VisitList = ({ navigation }) => {
    const handleItemPress = params => {
        navigation.navigate("RestaurantInfo", params);
    };

    const renderItem = ({ item }) => (
        <Item item={item} onPress={handleItemPress}/>
    );

    return(
        <View style={styles.container}>
            <FlatList 
                data={DATA} //리스트들의 source
                renderItem={renderItem} //data로 받은 소스들의 각 item을 렌더링해주는 콜백함수
                keyExtractor={(item) => item.id}    //각 item의 key
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.8,
        borderColor: '#C0C0C0',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    itemTitle: {
        fontSize: 20,
        paddingHorizontal: 20,
    },
});



//임의의 데이터 생성
const DATA = [
    { id: '0',
      title: 'Item 0'},
    { id: '1',
      title: 'Item 1'},
    { id: '2',
      title: 'Item 2'},
    { id: '3',
      title: 'Item 3' },
    { id: '4',
      title: 'Item 4' },
    { id: '5',
      title: 'Item 5' },
];

export default VisitList;