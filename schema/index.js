var {
  buildSchema
} = require("graphql");
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Todo {
 id : Int,
 title : String,
 completed : Int,
 description : String,
}
  type Query {
    getTodos : [Todo]
    getTodo(id: Int!) : Todo

  }
   
  type Mutation {
    createTodo(title: String!, description: String!): [Todo]!
    deleteTodo(id: Int!): [Todo]!
  }
   
`);
module.exports = schema;