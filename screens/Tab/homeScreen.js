import React,{useCallback,useState} from 'react'
import { View, Text , StyleSheet, FlatList, ActivityIndicator,Alert} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import Header from '../../components/header';
import Category from '../../components/category';
import CategoryItem from '../../components/categoryItem';

import * as productActions from '../../store/action/product';
import Color from '../../constants/Color';

export default function homeScreen(props) {

    const proItems = useSelector(state=>state.product.products);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const fetchProducts = useCallback( () => {
        setError(null);
        try {
            dispatch(productActions.setProduct());
        } catch (err) {
            setError(err.message);
        }
      }, [setError]);
    
    useFocusEffect(fetchProducts);

    return (
        <View style={styles.container}>
            <Header 
                iconRight='search'
                iconLeft='menu'
                title="Home" 
                onAdd={()=>{}}
            />
            <Category />
            {
                proItems === null?
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size='small' color={Color.barColor} />
                    <Text style={{textAlign:"center",marginTop:5,color:'#000'}}>Get data ...</Text>
                </View>
                :
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={proItems}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>(
                        <CategoryItem 
                            catTitle={item.category_name}
                            subCategory={item.sub_category}
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