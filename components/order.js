import React,{useState} from 'react'
import {View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../constants/Color';

export default function order(props) {

    const [showDetails,setShowDetails] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.titleContent}>
                <Text>$ {props.price.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                <Text>{props.date}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                onPress={()=>{
                    setShowDetails(prevState=>!prevState)
                }}
            >
                <Text style={{color:Color.barColor}}>{showDetails?'Hide Details':'Show Details'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:wp(95),
        height:hp(12),
        marginTop:hp(2),
        backgroundColor:'#fff',
        borderRadius:hp(1),
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:hp(1.5),
        paddingVertical:hp(1),
        shadowOffset:{width:0,height:5},
        shadowColor:'#000',
        elevation:5
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
        height:'100%',
    },
    titleContent:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleText:{
        fontSize:15
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})