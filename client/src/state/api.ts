import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
    reducerPath: "api",
    tagTypes: ["Kpis"],
    endpoints: (builder) => ({
        getKips: builder.query<void, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
    }),
});

export const { useGetKipsQuery } = api;