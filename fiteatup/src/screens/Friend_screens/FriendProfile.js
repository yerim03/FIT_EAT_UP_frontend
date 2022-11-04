//친구 프로필 화면
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyProfileImage from '../../components/MyProfileImage';
import { API } from '../../config';
import { globalStyles } from '../../styles/styles';
import { theme } from '../../styles/theme';


const FriendProfile = ({ route }) => {
    return(
        <View style={[globalStyles.container_2, styles.container]}>
            <View style={styles.profileArea}>
                <MyProfileImage url={`${API.GET_PROFILEIMAGE}${route.params.avatar_url}`}/>
                <View style={styles.textArea}>
                    <Text style={styles.id}>{route.params.username}</Text>
                    <Text style={styles.nickname}>{route.params.nickname}</Text>
                </View>
            </View>
            <View style={styles.listArea}>
                <Text>list area</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileArea: {
        flexDirection: 'row',
    },
    textArea: {
        marginLeft: 50,
        justifyContent: 'center',
    },
    listArea: {
        marginTop: 50,
    },
    id: {
        fontSize: 22,
        fontWeight: '500',
        paddingVertical: 3,
        color: `${theme.title_1}`,
    },
    nickname: {
        fontSize: 17,
    },
});

export default FriendProfile;