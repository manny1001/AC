require("dotenv").config();
const cors = require("cors");
const express = require("express");
const resolvers = require("./resolvers/index");
const typeDefs = require("./schema");
const { ApolloServer } = require("apollo-server");

var { graphql } = require("graphql");
var db = require("./models/index");
try {
  db.sequelize.authenticate();

  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
/* db.sequelize.sync({
  force: true,
}); */
//create express app
const app = express();

//Appply CORS to express server
app.use(cors());

//Access port from enviroment variables
const { PORT } = process.env;

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  formatError: (error) => {
    return {
      message: error.message,
      code: error.extensions.code,
      stacktrace: error.extensions.exception.stacktrace,
    };
  },
});
const port = PORT;
server.listen({ port }, () => {
  console.log(`Apollo Server running on http://localhost:${port}/graphql`);
});
// Run the GraphQL query '{ hello }' and print out the response
/* graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
}); */
