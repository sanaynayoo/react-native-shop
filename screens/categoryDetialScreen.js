import React,{useState,useEffect} from 'react'
import { View, Text ,StyleSheet,FlatList,Image,ActivityIndicator,ToastAndroid} from 'react-native';
import { useDispatch } from 'react-redux';

import Header from '../components/header';
import CategoryList from '../components/categoryList';
import Color from '../constants/Color';
import * as cartActions from '../store/action/cart';

export default function categoryDetialScreen(props) {
    const {id,title} = props.route.params;
    const [detail, setDetail] = useState();
    const [isloading,setIsLoading] = useState(false);
    const [error, setError] = useState();
    
    const Images = require('../assets/images/blank.png');
    const noImage = Image.resolveAssetSource(Images).uri;
    const dispatch = useDispatch();

    const fetchProdDetail = async () => {
        try {
            const response = await fetch(
                `http://backend.sbbabyshop.com/list/product/?categ_id=${id}`,
                {
                method: 'GET',
                // headers: {
                //   'Authorization': 'Bearer '+ token
                // }
                }
            );
        
            const res = await response.json();
            if(res !== undefined) {
                setDetail(res.data.product_list);
                setIsLoading(false);
            }
            } catch (err) {
            // send to custom analytics server
            throw err;
            }
        };
    
    useEffect(()=>{
        setIsLoading(true);
        fetchProdDetail();
    },[])

    return (
        <View style={styles.container}>
            <Header 
                iconRight='search'
                iconLeft='arrow-back'
                title={title}
                onAdd={()=>{}}
                onBtnLeft={()=>props.navigation.goBack()}
            />
            {
                isloading?
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size='small' color={Color.barColor} />
                        <Text style={{textAlign:"center",marginTop:5,color:'#000',}}>Please wait ...</Text>
                    </View>
                :
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={detail}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>(
                        <CategoryList
                            image={{uri:item.product_image?item.product_image:noImage}}
                            title={item.name}
                            price={item.list_price}
                            onVewProduct={()=>{
                                props.navigation.navigate('ProductDetails',{
                                    item:item,
                                    title:item.name,
                                    image:item.product_image,
                                    price:item.list_price
                                })
                            }}
                            onAddToCart={()=>{
                                dispatch(cartActions.addToCart(item));
                                ToastAndroid.show('Added to cart!',ToastAndroid.SHORT);
                            }}
                        />
                    )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
    },
})

