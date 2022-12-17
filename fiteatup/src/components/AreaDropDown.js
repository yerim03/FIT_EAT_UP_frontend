//[지역구 드롭다운] -> 삭제
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from '../styles/theme';


const AreaDropDown = () => {
    const [areaOpen, setAreaOpen] = useState(false);
    const [areaValue, setAreaValue] = useState('');     //area value값 관리
    const [area, setArea] = useState([
        { label: '강남구', value: '강남구' },
        { label: '강동구', value: '강동구' },
        { label: '강북구', value: '강북구' },
        { label: '강서구', value: '강서구' },
        { label: '관악구', value: '관악구' },
        { label: '광진구', value: '광진구' },
        { label: '구로구', value: '구로구' },
        { label: '금천구', value: '금천구' },
        { label: '노원구', value: '노원구' },
        { label: '도봉구', value: '도봉구' },
        { label: '동대문구', value: '동대문구' },
        { label: '동작구', value: '동작구' },
        { label: '마포구', value: '마포구' },
        { label: '서대문구', value: '서대문구' },
        { label: '서초구', value: '서초구' },
        { label: '성동구', value: '성동구' },
        { label: '성북구', value: '성북구' },
        { label: '송파구', value: '송파구' },
        { label: '양천구', value: '양천구' },
        { label: '영등포구', value: '영등포구' },
        { label: '용산구', value: '용산구' },
        { label: '은평구', value: '은평구' },
        { label: '종로구', value: '종로구' },
        { label: '중구', value: '중구' },
        { label: '중랑구', value: '중랑구' },
    ]);


    return(
        <View style={styles.input}>
            <DropDownPicker 
                style={styles.dropdown}
                textStyle={{color: `${theme.dropdownColor}`, fontFamily: 'netmarbleMedium', fontWeight: '500'}}
                open={areaOpen}
                value={areaValue}
                items={area}
                setOpen={setAreaOpen}
                setValue={setAreaValue}
                setItems={setArea}
                placeholder="지역을 선택하세요."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 7,
        width: '60%',
    },
    dropdown:{
        borderColor: `${theme.dropdownBorderColor}`,
    }
})

export default AreaDropDown;