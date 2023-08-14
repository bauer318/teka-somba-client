import pbService from '../service/productBuyerService';
import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'productBuyer',
    initialState: false,
    reducers: {
        setPB(state, action) {
            return action.payload;
        }
    }
});

export const isProductContainsBuyer = (productId, buyerId)=>{
    return async dispatch =>{
        const isContains = await pbService.isContainsBuyer(productId, buyerId);
        dispatch(setPB(isContains));
    }
}


export const {setPB} = productSlice.actions;
export default productSlice.reducer;