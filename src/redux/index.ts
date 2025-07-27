import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from './products/productsSlice';
import details from"./ProductDetails/ProductDetailsSlice"
import cart from "./Cart/CartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const cartPersistConfig={
    key:"cart",
    storage,
    whiteList:["items"]
}

const rootReducer =combineReducers({
     products,
        details,
        cart:persistReducer(cartPersistConfig , cart),
})

export const store =configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddlware)=>{
        return getDefaultMiddlware({
            serializableCheck:{
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
        })
    }
})

export const persistor =persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch