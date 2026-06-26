import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const comida = state.items.find(item => item.id === action.payload.id)

      if (!comida) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    open: state => {
      state.isOpen = true
    },
    close: state => {
      state.isOpen = false
    },
  },
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
