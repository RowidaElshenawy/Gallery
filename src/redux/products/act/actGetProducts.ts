import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "../../../components/shared/Types/product";
type TResponse =TProduct[]
const actGetProducts =createAsyncThunk("products/actGetProduct",
    async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI
        try{
            const response =await axios.get<TResponse>("/products");
            console.log(response.data);
            return response.data
        }catch(error){
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data.message|| error.message)
            }else{
                return rejectWithValue("An unexpected Error")
            }
        }
    }
);
export default actGetProducts;
