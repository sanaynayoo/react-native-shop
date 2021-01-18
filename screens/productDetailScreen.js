import React from 'react'
import { View, Text,StyleSheet,Image,ToastAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../components/header';
import ProductDetails from '../components/details';
import * as cartActions from '../store/action/cart';

export default function productDetailScreen(props) {
    const {item,title,image,price} = props.route.params;

    const Images = require('../assets/images/blank.png');
    const noImage = Image.resolveAssetSource(Images).uri
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Header 
                iconRight='search'
                iconLeft='arrow-back'
                title={title} 
                onAdd={()=>{}}
                onBtnLeft={()=>props.navigation.goBack()}
            />
            <ProductDetails 
                image={{uri:image?image:noImage}}
                title={title}
                price={price}
                onAddToCart={()=>{
                    dispatch(cartActions.addToCart(item));
                    ToastAndroid.show('Added to cart!',ToastAndroid.SHORT);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})