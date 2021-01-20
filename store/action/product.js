import { SET_PRODUCT } from '../Type';

export const setProduct =()=>{
    return async (dispatch,getState)=>{
        // const token = getState().auth.token
        try {
            const response = await fetch(
                'apiRoute',
                {
                    method:'GET',
                    // headers:{
                    //     'Content-type':'application/json',
                    //     'Accept':'application/json'
                    //     'Authorization':'Bearer '+ token
                    // }
                }
            );
            const resData = await response.json();
            // console.log('Data ==>',resData)
            if(resData !== undefined){
                dispatch({
                    type:'SET_PRODUCT',
                    products:resData.data,
                    count:resData.count
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}