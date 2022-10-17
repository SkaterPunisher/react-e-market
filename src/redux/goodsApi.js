import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (limit) => `/products?_start=0&_end=${limit}`,
    }),
    getSingleGoods: build.query({
      query: (id) => `/products/${id}`,
    }),
    getUsers: build.query({
      query: () => `/users`,
    }),
    addGoodsInBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          basket: body.data
        }
      })
    })
  }),
});

export const { useGetGoodsQuery, useGetSingleGoodsQuery, useGetUsersQuery, useAddGoodsInBasketMutation } = goodsApi 


