import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Menu[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const food = state.items.find((item) => item.id === action.payload.id)
      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O prato já esta no carrinho')
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    },

    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, clear, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
