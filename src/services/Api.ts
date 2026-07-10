import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Comida } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurschasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: number
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood',
  }),
  endpoints: builder => ({
    getRestaurantes: builder.query<Comida[], void>({
      query: () => 'restaurantes',
    }),
    getComidas: builder.query<Comida, string>({
      query: id => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, PurschasePayload>({
      query: body => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetRestaurantesQuery,
  useGetComidasQuery,
  usePurchaseMutation,
} = api

export default api
