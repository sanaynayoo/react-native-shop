import React from 'react'
import { View, Text ,StyleSheet,FlatList} from 'react-native';
import { useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import moment from 'moment';

import Header from '../../components/header';
import OrderItem from '../../components/order';
import Color from '../../constants/Color';

export default function accountScreen() {
    const orderItems = useSelector(state=>state.order.orders);
    
    return (
        <View style={styles.container}>
            <Header 
                iconRight='search'
                iconLeft='menu'
                title="Account" 
                onAdd={()=>{}}
            />
            <View style={styles.accounts}>
                <View style={styles.accountInfo}>
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Account Informations</Text>
                </View>
                <View style={styles.orderInfo}>
                    <View style={styles.orderItemText}>
                        <Text style={styles.orderTitle}>Order Items</Text>
                    </View>
                    {
                        orderItems.length !==0?
                        <FlatList 
                            data={orderItems}
                            keyExtractor={(item,index)=>index.toString()}
                            renderItem={({item})=>(
                                <OrderItem
                                    price ={item.totalAmount}
                                    date={moment(item.data).format('MMMM Do YYYY,hh:ss')}
                                />
                            )}
                        />
                        :
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text>No items in order</Text>
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    accounts:{
        flex:1,
        width:wp(100),
    },
    accountInfo:{
        height:hp(30),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Color.barColor
    },
    orderInfo:{
        flex:1,
        alignItems:'center'
    },
    orderItemText:{
        width:wp(100),
        justifyContent:'center',
        alignItems:'center',
    },
    orderTitle:{
        fontWeight:'bold',
        fontSize:16,
        marginTop:hp(1),
        textDecorationLine:'underline'
    }
})
