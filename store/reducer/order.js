import { ADD_ORDER } from '../Type';
import Order from '../../models/order-item';

const initialState ={
    orders:[]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_ORDER :
            const newOrder = new Order( 
                new Date().toString(),
                action.items,
                action.amount,
                new Date()
            );
        return{
            ...state,
            orders:state.orders.concat(newOrder)
        };

    }
    return state;
}