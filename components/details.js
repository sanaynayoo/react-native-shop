import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../constants/Color';

export default function details(props) {

    const [favorite,setFavorite] = useState({
        heart:false
    })

    const AddFavoriteHandler =()=>{
        setFavorite({
            ...favorite,
            heart:!favorite.heart
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imgContent}>
                    <Image 
                        style={styles.image} 
                        source={props.image}/>
                </View>
                <View style={styles.textContent}>
                    <View style={styles.title}>
                        <Text>{props.title}</Text>
                        <TouchableOpacity onPress={AddFavoriteHandler}>
                            {favorite.heart?
                                <Icon name="heart" size={23} color={Color.frontColor}/>
                                :
                                <Icon name="heart-outline" size={23} color={Color.frontColor}/>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titlFooter}>
                        <Text>$ {props.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                        {/* <Text>{props.giftText}</Text> */}
                    </View>
                </View>
            </View>
            <View style={styles.addCart}>
                <TouchableOpacity style={styles.addToCart} onPress={props.onAddToCart}>
                    <Text style={{fontSize:14,color:'#fff'}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center'
    },
    imgContent:{
        width:wp(100),
        height:hp(35),
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:wp(50),
        height:hp(30),
    },
    addToCart:{
        backgroundColor:Color.barColor,
        paddingHorizontal:hp(14),
        paddingVertical:hp(1.5)
    },
    addCart:{
        backgroundColor:'transparent',
        width:wp(100),
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:hp(2),
        paddingVertical:hp(1)
    },
    titlFooter:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:hp(2)
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:hp(2)
    },
    textContent:{
        backgroundColor:'#fff',
        width:wp(90),
        height:hp(13),
        borderRadius:hp(1),
        justifyContent:'space-around',
        paddingHorizontal:hp(1),
        paddingVertical:hp(1),
        shadowOffset:{width:0,height:5},
        shadowColor:'#000',
        elevation:5,
        shadowRadius:hp(2)
    },
    content:{
        height:hp(60),
        // backgroundColor:'red',
        width:wp(100),
        alignItems:'center',
        justifyContent:'space-around'
    }
})
