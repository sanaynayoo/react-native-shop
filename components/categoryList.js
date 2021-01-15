import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import Color from '../constants/Color';

export default function categoryList(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={props.onVewProduct}>
                <View style={styles.catConatent}>
                    <Image 
                        style={styles.image}
                        source={props.image} />
                    <Text style={styles.catTitle}>{props.title}</Text>
                </View>
                <View style={styles.catFooter}>
                    <Text style={{fontSize:14}}>$ {props.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                    <TouchableOpacity onPress={props.onAddToCart}>
                        <Ionic name='cart' size={25} color={Color.frontColor}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:wp(40),
        height:hp(30),
        backgroundColor:'#fff',
        marginHorizontal:hp(2),
        marginVertical:hp(2),
        borderRadius:hp(1),
        shadowOffset:{width:0,height:5},
        shadowColor:'#000',
        elevation:5
    },
    catTitle:{
        marginVertical:hp(1),
        marginHorizontal:hp(1),
        textAlign:'center'
    },
    catConatent:{
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:wp(35),
        height:hp(15)
    },
    content:{
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    catFooter:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    }
})
