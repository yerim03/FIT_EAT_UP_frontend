//커스텀 컴포넌트 - 프로필이미지를 나타내는 컴포넌트
//카메라 버튼 클릭 시 사진첩에 접근해서 이미지를 추가할 수 있다.
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const MyProfileImage = ({ url, showButton, onChangeImage }) => {

    //ios 사진첩 접근 권한 요청
    useEffect(()=> {
        (async () => {
            try{
                if(Platform.OS === 'ios'){
                    const { status } = await Permissions.askAsync(
                        Permissions.MEDIA_LIBRARY
                    );
                    if( status !== 'granted') {
                        Alert.alert('Photo Permission', 'Turn on Permissions');
                    }
                }
            } catch(e) {
                Alert.alert('Photo Permissions Error', e.message);
            }
        })
    }, []);

    //우측 하단에 카메라 버튼
    const PhotoButton = ({ onPress }) => {
        return(
            <TouchableOpacity style={styles.buttonContainer} 
                                activeOpacity={0.7} 
                                hitSlop={{ top: 60, left: 60 }}
                                onPress={onPress}>
                <MaterialIcons name="photo-camera" size={20} color="#ffffff" />
            </TouchableOpacity>
        );
    }


    const handlePhotoButtonPress = async () => {
        try{
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            console.log(result);

            //cancelled가 true이면 해당 사진으로 변경
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
        backgroundColor: '#E0E0E0',
        width: 90,
        height: 90,
        borderRadius: 45,
        margin: 12,
        
    },
    buttonContainer:{
        backgroundColor: '#A6A6A6',
        position: 'absolute',
        bottom: 12,
        right: 12,
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyProfileImage;