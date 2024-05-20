import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems, removeItem } from '../utils/Store/Slices/cartSlice';

const ItemList = ({items, itemType}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (selectedItem) => {
    if (itemType === 'cart') {
      dispatch(removeItem(selectedItem));
    } else dispatch(addItems(selectedItem));
  }
  return (
    <>
        <div>
            {items.map((item) => (
                <div key={item.id} className="p-2 m-2 border border-gray-200 border-b-2">
                    <span className="px-10">{item.name}</span>
                    <button onClick={() => handleAddToCart(item)}>{itemType && itemType === 'cart' ? 'Remove from cart' : 'Add to cart'}</button>
                </div>
            ))}
        </div>
    </>
  )
}

export default ItemList