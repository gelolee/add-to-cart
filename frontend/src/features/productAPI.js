import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () => "products",
        }),
    }),
});

export const {useGetAllProductsQuery} = productAPI;