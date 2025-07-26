import { createSlice } from "@reduxjs/toolkit";
import type { TProduct } from "../../components/shared/Types/product";
interface ICartState{
    items:{[key:number]:number };
    productInfo:TProduct[]
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
    reducers:{},
})