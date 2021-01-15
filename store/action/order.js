import {ADD_ORDER} from '../Type';

export const addOrder = (cartItem,totalAmount)=>{
    return{type:ADD_ORDER,items: cartItem,amount: totalAmount}
    
}