import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKipsResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    reducerPath: "api",
    tagTypes: ["Kpis"],
    endpoints: (builder) => ({
        getKips: builder.query<Array<GetKipsResponse>, void>({
            query: () => "/api/kips",
            providesTags: ["Kpis"],
        }),
    }),
});

export const { useGetKipsQuery } = api;