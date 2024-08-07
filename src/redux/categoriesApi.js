import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import {
    BASE_URL
} from "../api";

export const inventoryAPI = createApi({
    reducerPath: "api/categoryAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['Inventory'],
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 'categories',
            providesTags: ["Inventory"]
        }),
        getSingleCategory: builder.query({
            query: (id) => `categories/${id}`
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Inventory"]
        }),

        createCategory: builder.mutation({
            query: (category) => ({
                url: 'categories',
                method: 'POST',
                body: {
                    ...category,
                    date_added: new Date().toISOString().split("T")[0]
                },
            }),
            invalidatesTags: ["Inventory"]
        }),

        partialUpdateCategory: builder.mutation({
            query: (category) => ({
                url: `categories/${category.id}`,
                method: 'PATCH',
                body: category,
            }),
            invalidatesTags: ["Inventory"]
        }),
        // deleteInventory: builder.mutation({
        //     query: (id: any) => ({
        //         url: `inventory/${id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ["Inventory"]
        // }),
    })
})


export const {
    useGetAllCategoriesQuery,
    useGetSingleCategoryQuery,
    useDeleteCategoryMutation,
    useCreateCategoryMutation,
    usePartialUpdateCategoryMutation,
    // useGetSingleInventoryQuery,
    // useCreateInventoryMutation,
    // useUpdateInventoryMutation,
    // usePartialUpdateInventoryMutation,
    // useDeleteInventoryMutation,
} = inventoryAPI