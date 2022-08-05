//홈 화면
import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>home screen</Text>
            <Button title="검색" onPress={()=> navigation.navigate("HomeResult")}></Button>
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

export default Home;