import { createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "../../components/shared/Types/shared";
import type { TProduct } from "../../components/shared/Types/product"; 
import actGetProducts from './act/actGetProducts';
interface IProducttsState{
    records:TProduct[];
    loading:TLoading;
    error:string|null
}
const initialState:IProducttsState ={
    records:[],
    loading:"idle",
    error:null
}
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actGetProducts.pending,(state)=>{
            state.loading="pending"
            state.error=null
        });
        builder.addCase(actGetProducts.fulfilled,(state,action)=>{
            state.loading ="succeeded"
            state.records=action.payload
        });
        builder.addCase(actGetProducts.rejected,(state,action)=>{
            state.loading="failed"
            if(action.payload && typeof(action.payload)==="string"){
                state.error=action.payload
            }
        })
    }
})
export default productsSlice.reducer;
export {actGetProducts}
