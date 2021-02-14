import { request } from 'graphql-request'

export const createUser = (query: any, variables: any) => request('/api/users', query, variables)

export const readUser = (query: string, email: string) => request('/api/users', query, { email })
