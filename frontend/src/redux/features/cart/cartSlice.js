import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exitingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!exitingItem){
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Yeayy!...Buku ditambahkan ke keranjang!",
                    text: "Product sudah ditambahkan ke keranjang",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  
            } else {
                Swal.fire({
                    title: "Oops...",
                    text: "Product sudah ada di keranjang!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "OK!",
                    confirmButtonColor: "#007BFF",
                    cancelButtonColor: "#007BFF",
                    cancelButtonText: "Batal",
                    showConfirmButton: true,
                  });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer