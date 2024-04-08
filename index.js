import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './src/productTypeDef.js'
import resolvers from './src/productsResolver.js'
import { DatabaseConnection } from './utils/dbConnection.js'
import { mongoose } from 'mongoose'

mongoose.connect("mongodb+srv://henorch01:fGwz0p9jJJbN5hUx@damart.3escttb.mongodb.net/?retryWrites=true&w=majority&appName=Damart").then(() => {
    console.log('database succefully connected');
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
        origin:'*',
        credentials: true
    }
})

const { url } = await startStandaloneServer(server, {
    listen:{port: 4001 }
})
console.log(`server running on ${url}`);