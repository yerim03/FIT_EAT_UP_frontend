//연령대를 표시할 수 있는 드롭다운
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from '../styles/theme';


const AgeDropDown = () => {
    const [ageOpen, setAgeOpen] = useState(false);
    const [ageValue, setAgeValue] = useState();     //value값 관리
    const [age, setAge] = useState([
        { label: '10대', value: '10' },
        { label: '20대', value: '20' },
        { label: '30대', value: '30' },
        { label: '40대', value: '40' },
        { label: '50대', value: '50' },
        { label: '60대', value: '60' },
        { label: '70대', value: '70' },
        { label: '80대', value: '80' },
        { label: '90대', value: '90' }
    ]);

    return(
        <View style={styles.input}>
            <CustomText style={[styles.label, ageValue && {color: `${theme.dropdownColor}`}]} fontType="Medium">연령대</CustomText>
            <DropDownPicker 
                style={styles.dropdown}
                textStyle={{color: `${theme.dropdownColor}`, fontFamily: 'netmarbleMedium', fontWeight: '500'}}
                open={ageOpen}
                value={ageValue}
                items={age}
                setOpen={setAgeOpen}
                setValue={setAgeValue}
                setItems={setAge}
                placeholder="연령대를 선택하세요."
                listMode="SCROLLVIEW"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 7,
        width: '60%',
    },
    label:{
        fontSize: 17,
        color: `${theme.inputNotFocusColor}`,
        paddingBottom: 10,
    },
    dropdown:{
        borderColor: `${theme.inputNotFocusColor}`,
    }
})

export default AgeDropDown;