//커스텀 컴포넌트 - TextInput
//TextInput 안에 속성들 수정예정
import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';


const MyInput = ( props ) => {
    return(
        <View style={styles.input}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={ props.disabled ? styles.disabledinputbox : styles.inputbox}
                value={props.value}
                onChangeText={props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                secureTextEntry={props.isPassword}
                placeholder={props.placeholder}
                placeholderTextColor="#A0A0A0"
                autoCapitalize="none"
                maxLength={props.maxLength}
                editable={!props.disabled}
                >
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        flexDirection: 'column',
        marginVertical: 5,
        width: '100%',
    },
    label:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5,
        color: '#404040',
    },
    inputbox: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 6,
        borderColor: '#404040',
        borderWidth: 1.5,
        padding: 13,
    },
    disabledinputbox: {
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        borderColor: '#404040',
        borderWidth: 1.5,
        padding: 13,
        color: 'black'
    },
});
export default MyInput;