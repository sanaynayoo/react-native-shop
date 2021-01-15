import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../constants/Color'

export default function Button(props) {
    return (
        <View>
            <TouchableOpacity style={styles.btnContent} onPress={props.OnChangeHandler}>
                <Text style={styles.btnText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContent:{
        width:wp(60),
        height:hp(6.4),
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp(10),
        backgroundColor:Color.frontColor
    },
    btnText:{
        fontSize:16,
        color:Color.fontColor
    }
})
