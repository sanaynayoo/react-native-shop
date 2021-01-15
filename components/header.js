import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Color from '../constants/Color';

export default function header(props) {
    const [search,setSearch] = useState({
        addSearch:false
    })

    const onSearchHandler =()=>{
        setSearch({
            ...search,
            addSearch:!search.addSearch
        })
    }
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <TouchableOpacity onPress={props.onBtnLeft}>
                    <Ionic name={props.iconLeft} size={25} color='#fff'/>
                </TouchableOpacity>
                {
                    search.addSearch?
                    <TextInput 
                        placeholder="Search" 
                        placeholderTextColor="#fff"
                        style={styles.search}
                    />
                    :
                    <Text style={{fontSize:18,color:'#fff'}}>{props.title}</Text>
                }
                <TouchableOpacity onPress={onSearchHandler}>
                    <Ionic name={props.iconRight} size={25} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    header:{
        width:wp(100),
        height:hp(8),
        paddingHorizontal:hp(2),
        paddingVertical:hp(1),
        justifyContent:'center',
        backgroundColor:Color.barColor
    },
    search:{
        width:wp(60),
        borderWidth:1,
        height:hp(5),
        paddingHorizontal:hp(3),
        borderRadius:hp(10),
        fontSize:13,
        color:'#fff',
        borderColor:Color.fontColor
    }
})
