import { createSlice } from "@reduxjs/toolkit";
import type { TProduct } from "../../components/shared/Types/product";
import type { TLoading } from "../../components/shared/Types/shared";
import { actGetProductById } from "./act/actGetProductById";
type TProductDetailsState ={
    product:TProduct;
    loading:TLoading;
    error: null | string
}
const initialState:TProductDetailsState ={
    product:{
         id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
    },
    loading:"idle",
    error:null
}
const ProductDetailsSlice =createSlice({
    name:"details",
    initialState,
    reducers:{
        productCleanUP:(state)=>{
            state.product=initialState.product
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetProductById.pending,(state)=>{
            state.error=null
            state.loading="pending"
        })
        builder.addCase(actGetProductById.fulfilled,(state , action) =>{
            state.loading="succeeded"
            state.product = action.payload
        })
        builder.addCase(actGetProductById.rejected,(state,action)=>{
            if(action.payload && typeof action.payload === "string"){
                state.error=action.payload
            }
            state.loading="failed"
        })
    }
})
export default ProductDetailsSlice.reducer;
export{ actGetProductById }
export const {productCleanUP}= ProductDetailsSlice.actions
