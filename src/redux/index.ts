import { configureStore } from "@reduxjs/toolkit";
import products from './products/productsSlice';
import details from"./ProductDetails/ProductDetailsSlice"


export const store =configureStore({
    reducer:{
        products,
        details,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch