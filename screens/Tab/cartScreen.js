import React,{useState} from 'react'
import { View, Text ,StyleSheet,FlatList,TouchableOpacity,Modal,Image} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconFont from 'react-native-vector-icons/FontAwesome5';

import Header from '../../components/header';
import CartItem from '../../components/cart';
import Color from '../../constants/Color';
import * as cartActions from '../../store/action/cart';
import * as orderActions from '../../store/action/order';

export default function cartScreen() {
    const totalAmount = useSelector(state=>state.cart.totalAmount);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const Images = require('../../assets/images/blank.png');
    const noImage = Image.resolveAssetSource(Images).uri;

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: state.cart.items[key].id,
                image:state.cart.items[key].image,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems.sort((a,b)=>a.productId > b.productId ? 1:-1);
    })
    
    return (
        <View style={styles.container}>
            <Header 
                iconRight='search'
                iconLeft='menu'
                title="Shopping Cart" 
                onAdd={()=>{}}
            />
            {cartItems.length ===0?
                <View style={styles.noItemsCart}>
                    <Text style={{fontSize:15}}>No items in cart!</Text>
                </View>
                :
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={cartItems}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>(
                        <CartItem 
                            image={{uri:item.image?item.image:noImage}}
                            title={item.productTitle}
                            price ={item.productPrice}
                            count={item.quantity}
                            onDelete={()=>{
                                dispatch(cartActions.deletCartItem(item.productId))
                            }}
                            onDecreaseItems={()=>{
                                dispatch(cartActions.removeFromCart(item.productId))
                            }}
                            onIncreaseItems={()=>{
                                dispatch(cartActions.inCreaseFromCart(item.productId))
                            }}
                        />
                    )}
                />

            }
            
            {
                modalVisible?
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        // onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        // }}
                    >
                        <View style={styles.modalFooter}>
                            <View style={styles.modalView}>
                                <View style={styles.headerConent}>
                                    <IconFont name="check-circle" size={30} color="green"/>
                                    <Text style={styles.modalTitle}>Congrats!</Text>
                                    <Text style={styles.modalText}>Your order ID-xxxx was successfully Stay tuned because your items will be shipped shortly.</Text>
                                </View>
                                <TouchableOpacity style={styles.shoppingBtn} onPress={()=>{
                                    setModalVisible(false);
                                    navigation.navigate('Home')
                                }}>
                                    <Text style={{color:'#fff'}}>Continue Shopping</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
                :null
            }
            {
                cartItems.length !==0 && modalVisible === false?
                    <View style={styles.footerContent} >
                        <View style={[styles.footerContent,{width:wp(80)}]}>
                            <View style={styles.price}>
                                <Text style={{fontWeight:'bold'}}>Total</Text>
                                <Text>$ {totalAmount.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>
                            </View>
                            <TouchableOpacity style={styles.btnCheckout} onPress={()=>{
                                dispatch(orderActions.addOrder(cartItems,totalAmount));
                                setModalVisible(true);
                            }}>
                                <Text style={{color:'#fff'}}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
    noItemsCart:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    footerContent:{
        backgroundColor:'#fff',
        width:wp(100),
        height:hp(12),
        justifyContent:'space-around',
        alignItems:'center',
        borderTopEndRadius:hp(2),
        borderTopStartRadius:hp(2)
    },
    price:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    btnCheckout:{
        backgroundColor:'green',
        width:wp(80),
        height:hp(5.5),
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:hp(10),
        borderRadius:hp(10)
    },
    centeredView: {
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor:'transparent'
    },
    modalFooter:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: hp(1),
        justifyContent:'space-around',
        width:wp(80),
        height:hp(40),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalTitle:{
        fontWeight:'bold',
        fontSize:hp(2)
    },
    shoppingBtn:{
        backgroundColor:Color.barColor,
        width:wp(50),
        height:hp(6),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp(10)
    },
    headerConent:{
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        height:hp(25),
        paddingHorizontal:hp(2),
    }
})