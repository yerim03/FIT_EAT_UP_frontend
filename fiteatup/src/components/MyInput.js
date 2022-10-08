//커스텀 컴포넌트 - TextInput
//TextInput 안에 속성들 수정예정
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { theme } from '../styles/theme';

const MyInput = ( props ) => {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <View style={styles.input}>
            <Text style={[styles.label, isFocused && {color: `${theme.inputFocusColor}`}]}>{props.label}</Text>
            <TextInput
                style={props.disabled ? styles.disabledinputbox 
                                        : [styles.inputbox, isFocused && {borderColor: `${theme.inputFocusColor}`}]}
                value={props.value}
                onChangeText={props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={props.isPassword}
                placeholder={props.placeholder}
                placeholderTextColor={`${theme.inputPlaceholder}`}
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
        marginVertical: 7,
        width: '100%',
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        color: `${theme.inputNotFocusColor}`,
    },
    inputbox: {
        backgroundColor: '#ffffff',
        borderColor: `${theme.inputNotFocusColor}`,
        borderBottomWidth: 2,
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 14,
    },
    disabledinputbox: {
        alignItems: 'center',
        backgroundColor: `${theme.inputDisabled}`,
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 15,
        color: `${theme.labelTitleColor}`, 
        borderRadius: 20,
        fontWeight: '600'
    },
});
export default MyInput;