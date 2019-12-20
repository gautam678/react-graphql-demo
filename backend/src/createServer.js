const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const db = require("./db");

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: { Mutation, Query },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: request => ({ ...request, db })
    // endpoint: process.env.PRISMA_ENDPOINT,
    // secret: process.env.PRISMA_SECRET,
    // debug: false
  });
}

module.exports = createServer;
