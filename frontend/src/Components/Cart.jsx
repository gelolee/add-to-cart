import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, decreaseCart, getTotal } from "../features/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    },[cart]);

    const handleDecreaseCart = (cartItem) =>{
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) =>{
        dispatch(addtocart(cartItem));
    }
    return(
    <div className="cart_container">
        <h2>Cart</h2>
        {cart.cartItems.lenght === 0 ? (
         <div className="cart_empty">
            <p>Cart is empty</p>
         </div>   
        ) : (
            <div>
                <div className="title">
                    <h3 className="prod-title">Products</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="qty">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart_items">
                   {cart.cartItems?.map(cartItem=> (
                    <div className="cart_item" key={cartItem.id}>
                      <div className="cart_product">
                        <img src={cartItem.image} alt={cartItem.image} />
                        <div>
                            <h3>{cartItem.name}</h3>
                        </div>
                        </div>
                        <div className="cart product_price">₱{cartItem.price}</div>
                        <div className="cart_product_quantity">
                            <button onClick = {() => handleDecreaseCart(cartItem)}>-</button>
                        <div className="count">{cartItem.cartTotalQuantity}</div>    
                        <button onClick = {() => handleIncreaseCart(cartItem)}>+</button>
                        </div>
                        <div className="cart_prod_total_price">
                            ₱{cartItem.price * cartItem.cartTotalQuantity}
                        </div>
                    </div>
                   ))} 
                </div>
                <div className="cart_summary">
                        <div className="cart_checkout">
                        <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="amount">₱{cart.cartTotalAmount}</span>  
                        </div>
                        <button>Check Out!</button>
                        </div>    
                        </div>
            </div>
        )}
    </div>
    );
};
 
export default Cart;