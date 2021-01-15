import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Color from '../constants/Color';

export default function categoryItem(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.catTitleContent}>
                <Text style={styles.title}>{props.catTitle}</Text>
            </View>
            <View style={styles.content}>
                <FlatList 
                    numColumns={3}
                    data={props.subCategory}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                            style={styles.contentCa} 
                            key={item.category_id}
                            onPress={()=>{
                                navigation.navigate('Category',{
                                    id:item.category_id,
                                    title:item.category_name
                                })
                            }}
                            >
                            <Image 
                                style={styles.image}
                                source={{uri:item.category_image}}/>
                            <View style={styles.textContainer}>
                                <Text style={styles.textTitle}>{item.category_name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center'
    },
    image:{
        width:wp(25),
        height:hp(12),
    },
    textContainer:{
        width:wp(25),
        height:hp(5),
        // backgroundColor:'red',
        paddingHorizontal:hp(0.2),
        justifyContent:'center',
        alignItems:'center'
    },
    catTitleContent:{
        width:wp(95),
        height:hp(6),
        marginVertical:hp(1),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Color.barColor,
        // borderRadius:hp(0.4)
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        color:'#fff'
    },
    content:{
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        width:wp(100)
    },
    contentCa:{
        alignItems:'center',
        justifyContent:'space-between',
        width:wp(27),
        height:hp(20),
        backgroundColor:'#fff',
        marginHorizontal:hp(0.5),
        marginVertical:hp(0.5),
        paddingHorizontal:hp(1),
        paddingVertical:hp(1),
        borderRadius:hp(0.5),
        shadowOffset:{width:0,height:5},
        shadowColor:'#000',
        elevation:5
    },
    textTitle:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:13,
        alignItems:'center',
        // backgroundColor:'red'
    }
})
