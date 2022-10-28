//가본 장소 리스트 화면
////서버에서 사진불러와서 출력하면 완성
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,FlatList } from 'react-native';
import FoodImage from '../../components/FoodImage';
import axios from 'axios';
import { API } from '../../config';
import { useUserState } from '../../context/UserContext';
import { theme } from '../../styles/theme';


const VisitList = ({ navigation }) => {
    const [visitList, setVisitList] = useState([{}]);
    const { headers } = useUserState();

    //서버로부터 visitlist 가져오기
    useEffect(()=> {
        const getVisitList = async () => { 
            const visitPlaceList = await axios.get(`${API.GET_VISITLIST}`, { headers: headers } );
            console.log(visitPlaceList.data);
            setVisitList(visitPlaceList.data);  //삭제할 것         
        };
        getVisitList();
    }, [])

    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity 
                style={styles.itemContainer} 
                onPress={() => navigation.navigate('RestaurantInfo', {item}) } 
            >
                <FoodImage />
                <Text style={styles.itemTitle}>{item.place_name}</Text>
            </TouchableOpacity>
        );
    };

    return(
        <View style={styles.container}>
            <FlatList 
                data={visitList} //리스트들의 source
                renderItem={renderItem} //data로 받은 소스들의 각 item을 렌더링해주는 콜백함수
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
        borderBottomWidth: 0.5,
        borderColor: `${theme.flatlistLineColor}`,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        color: `${theme.title_1}`
    },
});

export default VisitList;