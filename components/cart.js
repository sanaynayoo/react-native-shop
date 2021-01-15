import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconFea from 'react-native-vector-icons/Feather';

export default function cart(props) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image 
                        style={styles.image}
                        source={props.image}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text>{props.title}</Text>
                        <TouchableOpacity onPress={props.onDelete}>
                            <IconFea name="trash-2" size={20} color="#000"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text>$ {props.price.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                        <View style={styles.count}>
                            <TouchableOpacity onPress={props.onDecreaseItems}>
                                <IconFea name="minus" size={20} color="#000"/>
                            </TouchableOpacity>
                            <Text>{props.count}</Text>
                            <TouchableOpacity onPress={props.onIncreaseItems}>
                                <IconFea name="plus" size={20} color="#000"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:wp(95),
        height:hp(15),
        marginTop:hp(2),
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:hp(1),
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:hp(1.5),
        paddingVertical:hp(1)
    },
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        width:wp(30),
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp(1)
    },  
    content:{
        flexDirection:'column',
        justifyContent:'space-around',
        paddingHorizontal:hp(1.3),
        width:wp(60),
        height:'100%'
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    count:{
        flexDirection:'row',
        width:wp(30),
        height:hp(4.5),
        borderRadius:hp(10),
        justifyContent:'space-around',
        paddingHorizontal:hp(1.2),
        alignItems:'center',
        backgroundColor:'#ddd'
    },
})
