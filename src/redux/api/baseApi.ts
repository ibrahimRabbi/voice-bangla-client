import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')
            if (token) {
                headers.set('authorization', token as string)
            }
        }
    }),
    tagTypes: ['signup', 'signin', 'thread'],
    endpoints: (builder) => {
        return {

            signup: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/signup',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['signup']
            }),

            signin: builder.mutation({
                query: (payload) => {
                    return {
                        url: '/auth/signin',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['signin']
            }),

            getUser: builder.query({
                query: () => {
                    return {
                        url: '/get-user',
                        method: 'GET'
                    }
                },
                providesTags: ['signup']
            }),

            updateUser: builder.mutation({
                query: (payload) => {
                    
                    return {
                        url: `/update-user/${payload?.id}`,
                        method: 'PATCH',
                        body: payload
                    }
                }
            }),

            addThread: builder.mutation({
                
                query: (payload) => {
                   
                    return {
                        url: '/thread/post-thread',
                        method: 'POST',
                        body: payload
                    }
                },
                invalidatesTags: ['thread']
            }),

            getThreads: builder.query({
                query: () => {
                    return {
                        url: '/thread/get-thread',
                        method: 'GET',
                    }
                },
                providesTags: ['thread']
            }),

            getSignleThreads: builder.query({
                query: (id) => {
                    return {
                        url: `/thread/get-single-thread/${id}`,
                        method: 'GET',
                    }
                },
                providesTags: ['thread']
            }),

            addComment: builder.mutation({
                query: ({id,comment}) => {
                    return {
                        url: `/thread/add-comment/${id}`,
                        method: 'PATCH',
                        body : {comment}
                    }
                },
                invalidatesTags:['thread']
            })


        }
    }
})




export const { useSignupMutation, useSigninMutation, useGetUserQuery, useAddThreadMutation, useGetThreadsQuery,useGetSignleThreadsQuery, useAddCommentMutation, useUpdateUserMutation } = baseApi