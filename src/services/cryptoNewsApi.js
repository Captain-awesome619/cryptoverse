import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '57a7e7a7d3msh06fbca5471056a9p1c6ecajsn1995d7346da5',
    'X-RapidAPI-Host': 'serphouse.p.rapidapi.com',
  };
    const baseUrl = 'https://serphouse.p.rapidapi.com/serp/schedule';
    const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
export const cryptoNewsApi = createApi({
reducerPath: 'cryptoNewsApi',
baseQuery: fetchBaseQuery({ baseUrl }),
endpoints: (builder) => ({
getCryptoNews: builder.query({
    query: ({ newsCategory, count }) => createRequest(`/serp/schedule?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
}),

}),

});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
