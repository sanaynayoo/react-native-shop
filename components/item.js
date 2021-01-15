import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../constants/Color';

export default function item(props) {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={props.onEdit}>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{props.title}</Text>
                        <Text style={styles.date}>{props.date}</Text>
                    </View>
                    <View style={styles.amount}>
                        <Text style={styles.amountText}>$ {props.amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                    </View>
                    <View style={styles.btnContent}>
                        <TouchableOpacity style={styles.btnEdit} onPress={props.onEdit}>
                            <Text style={{color:'#fff'}}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDel} onPress={props.onDelete}>
                            <Text style={{color:'#fff'}}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:wp(94),
        height:hp(18),
        backgroundColor:'#fff',
        borderRadius:hp(0.8),
        marginVertical:hp(1.5),
        paddingHorizontal:hp(3),
        justifyContent:'space-evenly',
        shadowColor:'#ddd',
        shadowOffset:{width:0,height:5},
        shadowRadius:hp(2),
        elevation:5
    },
    date:{
        fontSize:hp(1.8)
    },
    content:{
        height:'100%',
        justifyContent:'space-evenly'
    },
    amountText:{
        fontSize:hp(2.5),
    },
    titleText:{
        fontWeight:'bold',
        fontSize:hp(3)
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    amount:{
        justifyContent:'center',
        alignItems:'center'
    },
    btnContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        position:'relative'
    },
    btnEdit:{
        backgroundColor:'#ff8800',
        paddingHorizontal:hp(7),
        paddingVertical:hp(1),
        borderRadius:hp(3)
    },
    btnDel:{
        backgroundColor:Color.frontColor,
        paddingHorizontal:hp(6),
        paddingVertical:hp(1),
        borderRadius:hp(3)
    },
})
