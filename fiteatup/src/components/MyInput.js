//커스텀 컴포넌트 - TextInput
//TextInput 안에 속성들 수정예정
import React from 'react';
import { Text, TextInput, View, StyleSheet} from 'react-native';


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
        marginVertical: 4,
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
        borderWidth: 2,
        padding: 15,
    },
    disabledinputbox: {
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 6,
        borderColor: '#404040',
        borderWidth: 2,
        padding: 15,
    },
});
export default MyInput;