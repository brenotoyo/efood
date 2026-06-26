import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Comida } from '../pages/Home'

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
  }),
})

export const { useGetRestaurantesQuery, useGetComidasQuery } = api

export default api
