import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            console.log(action);
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            // state.items.pop()
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

console.log(cartSlice);

export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;