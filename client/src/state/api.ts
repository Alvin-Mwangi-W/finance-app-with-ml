import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKipsResponse, GetProductsResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    reducerPath: "api",
    tagTypes: ["Kpis", "Products"],
    endpoints: (builder) => ({
        getKips: builder.query<Array<GetKipsResponse>, void>({
            query: () => "/api/kips",
            providesTags: ["Kpis"],
        }),
        getProducts: builder.query<Array<GetProductsResponse>, void>({
            query: () => "/api/products",
            providesTags: ["Products"],
        }),
    }),
});

export const { useGetKipsQuery, useGetProductsQuery } = api;