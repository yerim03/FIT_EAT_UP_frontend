import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Item = ({ title }) => {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};


const VisitList = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return(
        <View style={styles.container}>
            <Text>VisitList Screen</Text>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
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
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        width: 400,
    },
    title: {
        fontSize: 32,
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