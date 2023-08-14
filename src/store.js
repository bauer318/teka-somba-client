import productBuyerReducer from './reducer/productBuyerReducers';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        productBuyer:productBuyerReducer
    }
});

export default store;