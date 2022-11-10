//커스텀 컴포넌트 - 프로필이미지를 나타내는 컴포넌트
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { theme } from '../styles/theme';

const MyProfileImage = ({ url, showButton, onChangeImage }) => {
    //우측 하단에 카메라 버튼
    const PhotoButton = ({ onPress }) => {
        return(
            <TouchableOpacity style={styles.buttonContainer} 
                                activeOpacity={0.7} 
                                hitSlop={{ top: 60, left: 60 }}
                                onPress={onPress}>
                <MaterialIcons name="photo-camera" size={20} color={theme.buttonTitleColor} />
            </TouchableOpacity>
        );
    }

    //접근권한 요청
    const getPermission = async() => {
        if(Platform.OS !== 'web'){
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted'){
                Alert.alert('사진첩 접근 권한 허용이 필요합니다.')
                return
            }
        }
    };
    
    const handlePhotoButtonPress = async () => {
        await getPermission();
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            //cancelled가 true이면(사진을 선택했을 경우에만) 해당 사진으로 변경
            if(!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (e) {
            Alert.alert('Photo Error', e.message);
        }
    };

    return(
        <View>
            <Image style={styles.image} source={{ uri: url }}/>
            {showButton && <PhotoButton onPress={handlePhotoButtonPress}/>}
        </View>
        
    );
};

const styles = StyleSheet.create({
    image: {
        backgroundColor: `${theme.imageBackgroundColor}`,
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 12, 
    },
    buttonContainer:{
        backgroundColor: `${theme.cameraButtonImageColor}`,
        position: 'absolute',
        bottom: 12,
        right: 12,
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: `${theme.backgroundColor}`,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyProfileImage;