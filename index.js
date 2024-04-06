import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './src/productTypeDef.js'
import resolvers from './src/productsResolver.js'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen:{port: 3001 }
})
console.log(`server running on ${url}`);