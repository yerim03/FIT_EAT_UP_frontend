import React from 'react';
import { Text } from 'react-native';


const CustomText = ({ children, style, fontType }) => {
    let textStyle = [];

    if(fontType){
        if(fontType === 'Bold') {
            textStyle.push({ fontFamily: 'netmarbleBold' });
        } else if (fontType === 'Medium') {
            textStyle.push({ fontFamily: 'netmarbleMedium' });
        } else if ( fontType === 'Light') {
            textStyle.push({ fontFamily: 'netmarbleLight' });
        }
    } else {
        textStyle.push({ fontFamily: 'netmarbleLight' });
    }

    if(style) {
        if(Array.isArray(style)) {
            textStyle = textStyle.concat(style);
        }
        else {
            textStyle.push(style);
        }  
    } 


    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}

export default CustomText;