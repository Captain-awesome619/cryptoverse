import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '57a7e7a7d3msh06fbca5471056a9p1c6ecajsn1995d7346da5',
    };
    const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
    const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
export const cryptoNewsApi = createApi({
reducerPath: 'cryptoNewsApi',
baseQuery: fetchBaseQuery({ baseUrl }),
endpoints: (builder) => ({
getCryptoNews: builder.query({
    query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
}),

}),

});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
