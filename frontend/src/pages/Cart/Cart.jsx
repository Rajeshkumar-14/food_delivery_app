import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    }

    const handleCheckout = () => {
        navigate('/order');
    }

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <>
                                <div key={index} className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>${cartItems[item.id] * item.price}</p>
                                    <p onClick={() => handleRemoveItem(item.id)} className='cross'>X</p>
                                </div>
                                <hr />
                            </>
                        )
                    }
                })}
            </div>
            <div className='cart-bottom'>
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount() + 5}</b>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promo-code">
                    <div>
                        <p>if you have a promo code, Enter it here.</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='Enter promo code' />
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
