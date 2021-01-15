import { SET_PRODUCT } from '../Type';

const initialState={
    products:null
}

export default (state = initialState,action)=>{
    switch (action.type){
        case SET_PRODUCT:
            return {
                ...state,
                products:action.products
            }
    }
    return state
}