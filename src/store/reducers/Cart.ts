import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
  checkOpen: boolean
  payment: boolean
  proof: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  checkOpen: false,
  payment: false,
  proof: false,
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
    openCheck: state => {
      state.checkOpen = true
    },
    closeCheck: state => {
      state.checkOpen = false
    },
    openPayment: state => {
      state.payment = true
    },
    closePayment: state => {
      state.payment = false
    },
    openProof: state => {
      state.proof = true
    },
    closeProof: state => {
      state.proof = false
    },
    clear: state => {
      state.items = []
    },
  },
})

export const {
  add,
  remove,
  open,
  close,
  openCheck,
  closeCheck,
  openPayment,
  closePayment,
  openProof,
  closeProof,
  clear,
} = cartSlice.actions
export default cartSlice.reducer
