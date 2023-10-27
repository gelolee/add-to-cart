import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import{configureStore} from "@reduxjs/toolkit";
import{Provider} from "react-redux";

import productReducer,{productFetch} from './features/productSlice';
import { productAPI } from './features/productAPI';
import cartReducer, {getTotal} from './features/cartSlice';

const store = configureStore({
  reducer:{
    products: productReducer,
    cart: cartReducer,
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware)
});

store.dispatch(productFetch())
store.dispatch(getTotal());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

