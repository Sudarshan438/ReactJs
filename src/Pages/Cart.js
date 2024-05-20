import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../components/ItemList';
import { clearCart } from '../utils/Store/Slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    if (cartItems.length) {
        dispatch(clearCart());
    }
  }

  return (
    <> 
        <div className="w-6/12 mx-auto my-4 p-4">
            <button onClick={handleClearCart}>Clear cart</button>
            {
                cartItems?.length ? <ItemList items={cartItems} itemType="cart" /> : (
                    <div>
                            No Items added to the cart
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Cart