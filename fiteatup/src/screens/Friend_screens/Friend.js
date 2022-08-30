// 친구 목록이 뜨는 부분은 이런 식으로 뜰것이다 라는 예시이고,
// 추가한 친구 수에 따라 다르게 표시될 예정
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import FriendProfileImage from '../../components/FriendProfileImage';
import { Ionicons } from '@expo/vector-icons';


const Item = ({ item: {id, title, url}, onPress}) => {
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress({ id, title, url })} >
            <FriendProfileImage url={url}/>
            <Text style={styles.itemTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

//FlatList로 변경해서 구현할 것인지 고민
const Friend = ({ navigation }) => {
    const handleItemPress = params => {
        navigation.navigate("FriendProfile", params);
    };

    const renderItem = ({ item }) => (
        <Item item={item} onPress={handleItemPress}/>
    );

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>친구 목록</Text>
                    <TouchableOpacity activeOpacity={0.8} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10}} 
                                        onPress={() => navigation.navigate("AddFriend")}>
                        <Ionicons name="person-add" size={30} color="#404040" style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 15, color: '#404040', }}>친구 수 : </Text>
                </View>
                
                <View style={{ flex: 1 }}>
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleArea: {
        flex: 0.13,
        width: '100%',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontSize: 21,
        fontWeight: 'bold',
        color: '#404040',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',   
        paddingVertical: 3,
    },
    itemTitle: {
        fontSize: 17,
        paddingHorizontal: 25,
    },
});

//임의의 데이터 생성
const DATA = [
    { id: '0',
      title: 'Name 0',
      url: "http://t1.daumcdn.net/news/201706/21/kedtv/20170621155930292vyyx.jpg",
    },
    { id: '1',
      title: 'Name 1',
      url: "http://t1.daumcdn.net/news/201706/21/kedtv/20170621155930292vyyx.jpg",
    },
    { id: '2',
      title: 'Name 2',
      url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
    },
    { id: '3',
      title: 'Name 3',
      url: "https://images.dog.ceo/breeds/chihuahua/n02085620_1569.jpg",
     },
    { id: '4',
      title: 'Name 4',
      url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
     },
    { id: '5',
      title: 'Name 5',
      url: "https://images.dog.ceo/breeds/chihuahua/n02085620_1569.jpg",
     },
    { id: '6',
      title: 'Name 6',
      url: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
     },
];


export default Friend;





{/* <TouchableOpacity  onPress={() => navigation.navigate("AddFriend")}>
    <Ionicons name="add" size={35} color="black" />
</TouchableOpacity> */}
{/* <Button title="친구프로필" onPress={() => navigation.navigate("FriendProfile")} /> */}