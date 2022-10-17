import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }]
}

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes: ['Goods', 'User'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({

    getGoods: build.query({
      query: (limit) => `/products?_start=0&_end=${limit}`,
      providesTags: (result) => providesList(result, 'Goods')
    }),

    getSingleGoods: build.query({
      query: (id) => `/products/${id}`,
    }),

    getUsers: build.query({
      query: () => `/users`,
      providesTags: (result) => providesList(result, 'User')
    }),

    getSingleUser: build.query({
      query: (id) => `/users/${id}`,
    }),

    addGoodsInBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          basket: {
            item: body.data,
          },
        },
      }),
      invalidatesTags: ['User']
    }),

  }),
});

export const {
  useGetGoodsQuery,
  useGetSingleGoodsQuery,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useAddGoodsInBasketMutation,
} = goodsApi;
