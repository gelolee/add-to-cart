import{ createSlice } from "@reduxjs/toolkit";
import{toast} from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem
        ("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id);
                if(itemIndex >=0){
                    state.cartItems[itemIndex].cartTotalQuantity +=1
                    toast.info("Adding to cart again", {
                       position: "bottom-center" 
                    })
                }else{
                    const tempProduct = {...action.payload, cartTotalQuantity: 1}
            state.cartItems.push(tempProduct);
            toast.success ('Added to cart successfully!',{
                position: "bottom-center",
             });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].cartTotalQuantity > 1){
                state.cartItems[itemIndex].cartTotalQuantity -=1;
            }else if(state.cartItems[itemIndex].cartTotalQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems;

                toast.info("Removed from cart", {
                    position: "bottom-center",
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal(state, action){
            let {total, quantity} = state.cartItems.reduce(
                (cartTotalAmount, cartItem)=>{
                const{price, cartTotalQuantity} = cartItem;
                const itemTotal = price * cartTotalQuantity;

                cartTotalAmount.total += itemTotal
                cartTotalAmount.quantity += cartTotalQuantity

                return cartTotalAmount;
            },
            {
                total: 0,
                quantity: 0,
            }
            )
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
})

export const {addtocart, decreaseCart, getTotal} = cartSlice.actions;

export default cartSlice.reducer;