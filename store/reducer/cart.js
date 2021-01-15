import { ADD_TO_CART,REMOVE_FROM_CART,INCRESE_FROM_CART,DELETE_PRODUCT_ITEM,ADD_ORDER} from '../Type';
import CartItem from '../../models/cart-Item';

const initialState = {
    items:{},
    totalAmount:0,
};

export default (state = initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const addProduct = action.product;
            const itemId = addProduct.product_id;
            const prodImage = addProduct.product_image;
            const prodPrice = addProduct.list_price;
            const prodTitle = addProduct.name;
            let updatedCartitems;
            if(state.items[itemId]){
                updatedCartitems = new CartItem(
                    itemId,
                    state.items[itemId].quantity +1,
                    prodImage,
                    prodPrice,
                    prodTitle,
                    state.items[itemId].sum + prodPrice,
                );
            }else{
                updatedCartitems = new CartItem(itemId,1,prodImage,prodPrice,prodTitle,prodPrice);
            }
            return {
                ...state,
                items:{...state.items,[itemId]:updatedCartitems},
                totalAmount: state.totalAmount+prodPrice
            };
        case REMOVE_FROM_CART:
            let updatedCartItems;
            const selectedCartItem = state.items[action.pid]
            const currentQty = selectedCartItem.quantity
            if(currentQty > 1){
                const updatedCartItem = new CartItem(
                    selectedCartItem.id,
                    selectedCartItem.quantity -1,
                    selectedCartItem.image,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = {...state.items,[action.pid]: updatedCartItem};
            }else{
                updatedCartItems ={...state.items};
                delete updatedCartItems[action.pid]
            }
            return{
                ...state,
                items:updatedCartItems,
                totalAmount:state.totalAmount - selectedCartItem.productPrice
            }
        case INCRESE_FROM_CART:
            let updateCartItems;
            const selectCartItem = state.items[action.pid]
            const curQty = selectCartItem.quantity
            if(curQty >= 1){
                const updatedCartItem = new CartItem(
                    selectCartItem.id,
                    selectCartItem.quantity +1,
                    selectCartItem.image,
                    selectCartItem.productPrice,
                    selectCartItem.productTitle,
                    selectCartItem.sum + selectCartItem.productPrice
                );
                updateCartItems = {...state.items,[action.pid]: updatedCartItem};
            }else{
                updateCartItems ={...state.items};
            }
            return{
                ...state,
                items:updateCartItems,
                totalAmount:state.totalAmount + selectCartItem.productPrice
            }
        case DELETE_PRODUCT_ITEM:
            if(!state.items[action.pid]){
                return state
            }
            const updateItems = {...state.items};
            const itemTotal = state.items[action.pid].sum;
            delete updateItems[action.pid];
            return {
                ...state,
                items:updateItems,
                totalAmount : state.totalAmount - itemTotal,
            }
        case ADD_ORDER:
            return initialState;
    }
    return state
}