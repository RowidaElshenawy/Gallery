import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { TLoading } from "../../components/shared/Types/shared";
import type { RootState } from "..";
import type { TProduct } from "../../components/shared/Types/product";

interface ICartState{
    items:{[key:number]:number };
    productInfo:TProduct[];
    loading:TLoading;
    error:null| string;
}
const initialState:ICartState={
    items:{},
    productInfo:[],
    loading:"idle",
    error:null
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            if(state.items[action.payload]){
                state.items[action.payload]++;
            }else{
                state.items[action.payload]=1
            }
        },
        cartItemChangeQuantity:(state,action)=>{
            state.items[action.payload.id] = action.payload.chooseQuantity
        },
        removeItem:(state,action)=>{
            delete state.items[action.payload];
        }
    },
})
const getTotalQuantity=createSelector((state:RootState)=>state.cart.items,(items)=>{
    const totalQuantity =Object.values(items).reduce((accumlator,currentValue)=>{
        return accumlator + currentValue
    },0)
    return totalQuantity
})
export default cartSlice.reducer;
export const {addToCart,cartItemChangeQuantity, removeItem}=cartSlice.actions
export {getTotalQuantity}
