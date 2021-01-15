import React,{useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Tab/homeScreen';
import CartScreen from '../screens/Tab/cartScreen';
import AccountScreen from '../screens/Tab/accountScreen';
import CategoryScreen from '../screens/categoryDetialScreen';
import ProductDetailScreen from '../screens/productDetailScreen';
// import CartItemScreen from '../components/cart';

const stack = createStackNavigator();
const tabStack = createBottomTabNavigator();

const homeStack = ()=>{
    return(
        <stack.Navigator initialRouteName="Home" headerMode='none'>
            <stack.Screen name="Home" component={HomeScreen}/>
            <stack.Screen name="Category" component={CategoryScreen}/>
        </stack.Navigator>
    )
}

const TabStack = () =>{
     return(
         <tabStack.Navigator >
             <tabStack.Screen 
                name='Home'
                component={homeStack}
                options={{tabBarIcon:({color})=>(
                    <Ionic name='home' size={23} color={color}/>
                )}}
             />
             <tabStack.Screen 
                name='Cart'
                component={CartScreen}
                options={{tabBarIcon:({color})=>(
                    <Ionic name='cart' size={23} color={color}/>
                )}}
             />
             <tabStack.Screen 
                name='Account'
                component={AccountScreen}
                options={{tabBarIcon:({color})=>(
                    <Ionic name='person' size={23} color={color}/>
                )}}
             />
         </tabStack.Navigator>
     )
}

export default rootNavigation = () => {
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="TabScreen" headerMode='none'>
                <stack.Screen name="TabScreen" component={TabStack}/>
                <stack.Screen name="ProductDetails" component={ProductDetailScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}
