import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "../../../components/shared/Types/product";
type TResponse =TProduct
const actGetProductById =createAsyncThunk("details/actGetProductById",
    async(id:string,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI
        try{
            const response = await axios.get<TResponse>(`/products/${id}`);
            return response.data
        }catch(error){
            if(axios.isAxiosError(error)){
                return  rejectWithValue(error.response?.data.message || error.message)
            }else{
                return rejectWithValue("An unexpected Error")
            }
        }
    }
)
export {actGetProductById}