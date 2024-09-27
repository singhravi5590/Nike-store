import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let Cartslice = createSlice({
    name : 'cart',
    initialState : {
        cartState : false,
        cartItem : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        cartTotalAmount : 0,
        cartTotalQuantity : 0,
    },
    reducers : {
        setOpenCart : (state, action) => {
            state.cartState = action.payload.cartState
        },
        setCloseCart : (state, action) => {
            state.cartState = action.payload.cartState
        },
        setCartItem : (state, action) => {

            const itemIndex = state.cartItem.findIndex((item) => item.id == action.payload.id)

            if(itemIndex >= 0){
                state.cartItem[itemIndex].cartQuantity += 1
                toast.success(`Item Quantity Increase`) 
            }
            else{
                const temp = {...action.payload, cartQuantity : 1}
                state.cartItem.push(temp)
                toast.success(`${action.payload.title} added to cart`)
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        setRemoveItemFromCart : (state, action) => {
            const removeItem = state.cartItem.filter((item) => item.id !== action.payload.id);

            state.cartItem = removeItem;
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
            toast.success(`${action.payload.title} removed from cart`)
        },
        setIncreaseQTY : (state, action) => {
            const itemIndex = state.cartItem.findIndex((item) => item.id == action.payload.id)

            if(itemIndex >= 0){
                state.cartItem[itemIndex].cartQuantity += 1
                toast.success(`Item Quantity Increase`) 
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        setDecreaseQTY : (state, action) => {
            const itemIndex = state.cartItem.findIndex((item) => item.id == action.payload.id)

            if(state.cartItem[0].cartQuantity > 1){
                state.cartItem[itemIndex].cartQuantity -= 1
                toast.success(`Item Quantity Decrease`) 
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        setClearQTY : (state, action) => {
            state.cartItem = [];
            toast.success(" Cart Cleared")
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        setGetTotals : (state, action) => {
            let {totalAmount, totalQuantity} = state.cartItem.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity} = cartItem;
                const totalPrice = cartQuantity * price;
                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQuantity += cartQuantity;
                return cartTotal;
            }, {
                totalAmount : 0,
                totalQuantity : 0,
            })

            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
        }
    }
})

export const {setOpenCart, setCloseCart, setCartItem, setRemoveItemFromCart, setIncreaseQTY, setDecreaseQTY, setClearQTY, setGetTotals} = Cartslice.actions;
export default Cartslice.reducer