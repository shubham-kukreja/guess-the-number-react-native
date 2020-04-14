import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../constants/Colors';

const CustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onTouch}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonView : {
        backgroundColor : COLORS.accent,
        paddingVertical : 12,
        paddingHorizontal : 30
    },
    buttonText : {
        color : 'white',
        fontFamily : 'open-sans'
    }
})
export default CustomButton;
