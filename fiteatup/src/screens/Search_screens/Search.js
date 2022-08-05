import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const Search = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Search Screen</Text>
            <Button title="검색" onPress={() => navigation.navigate("SearchResult")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
});

export default Search;