//커스텀 컴포넌트 - TextInput
//TextInput 안에 속성들 수정예정
import React, { useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import CustomText from './CustomText';
import { theme } from '../styles/theme';


const MyInput = ( props ) => {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <View style={styles.input}>
            <CustomText style={[styles.label, 
                          isFocused && {color: `${theme.inputFocusColor}`}, 
                          props.disabled && {color: `${theme.inputFocusColor}`}
                        ]}
                        fontType="Medium"
            >
                {props.label}
            </CustomText>
            <TextInput
                style={props.disabled ? styles.disabledinputbox : 
                                        [styles.inputbox, isFocused && {borderColor: `${theme.inputFocusColor}`}]
                }
                value={props.value}
                onChangeText={props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                returnKeyType={props.returnKeyType}
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
        fontSize: 17,
        color: `${theme.inputNotFocusColor}`,
    },
    inputbox: {
        fontFamily: 'netmarbleLight',
        borderColor: `${theme.inputNotFocusColor}`,
        borderBottomWidth: 2,
        width: '100%',
        paddingHorizontal: 6,
        paddingTop: 10,
        paddingBottom: 14,
        fontSize: 15
    },
    //이거는 MyProfile 수정에서 사용하는 input disabled
    disabledinputbox: {
        fontFamily: 'netmarbleMedium',
        backgroundColor: `${theme.inputDisabled}`,
        width: '100%',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginVertical: 6,
        color: `${theme.title}`,    
        fontSize: 16,
    },
});
export default MyInput;