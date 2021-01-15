import { ADD_TO_CART,REMOVE_FROM_CART,INCRESE_FROM_CART,DELETE_PRODUCT_ITEM } from '../Type';

export const addToCart = product => {
    return { type: ADD_TO_CART, product: product };
  };
export const inCreaseFromCart = productId =>{
  return {type:INCRESE_FROM_CART, pid:productId}
}
export const removeFromCart = productId =>{
  return {type:REMOVE_FROM_CART, pid:productId}
}
export const deletCartItem = productId =>{
  return {type:DELETE_PRODUCT_ITEM, pid:productId}
}