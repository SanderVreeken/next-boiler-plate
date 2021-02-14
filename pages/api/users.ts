const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

import { ApolloServer, gql } from 'apollo-server-micro'
import { ObjectID } from 'mongodb'

import UserT from '../../types/User'

import { connectToDatabase } from '../../utils/mongodb'

const key = '7c98de0c-dc43-4424-8654-f9774c872b08'

type Props = {
    _id: string
    email: string
    password: string
    passwordConfirm: string
}

const generateToken = (user: UserT) => {
    return jwt.sign(user, key, {
        expiresIn: '1h'
    })
}

const typeDefs = gql`
    type Mutation {
        createUser(email: String!, password: String!, passwordConfirm: String!): Token!
    }
    type Query {
        readUser(email: String!): User!
    }
    type Token {
        token: String!
    }
    type User {
        _id: String!
        email: String!
    }
`

const resolvers = {
    Mutation: {
        async createUser(_: any, { email, password, passwordConfirm }: Props) {
            const { db } = await connectToDatabase()
            
            try { 
                const user: UserT = {
                    createdAt: new Date().valueOf(),
                    email,
                    password,
                    passwordConfirm
                }

                await db.collection('users').insertOne(user)

                const token = generateToken({
                    _id: user._id,
                    createdAt: user.createdAt,
                    email: user.email
                })

                return {
                    token
                }
            } catch(error) {
                throw new Error(error)
            }
        }
    },
    Query: {
        async readUser(_: any, { email }: Props) {
            const { db } = await connectToDatabase()

            const user = await db.collection('users').findOne({ email: email })
            return user
        }
    }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
    api: {
        bodyParser: false
    }
}

// Ensure to put a slash as the first character to prevent errors.
export default apolloServer.createHandler({ path: '/api/users' })