require("dotenv").config();
const Controller = require("../controller");

// The root provides a resolver function for each API endpoint
module.exports = [
  {
    Query: {
      getTodos: async (_, {}, {}) => {
        return await Controller.getTodos();
      },
      getTodo: async (_, { id }) => {
        console.log(id)
        return await Controller.getTodo(id);
      },
    },
    Mutation: {
      createTodo: async (_, { title, description }) => {
        console.log(title, description);
        return await Controller.createTodo({ title, description });
      },
      deleteTodo: async (_, { id }) => {
        return await Controller.deleteTodo(id);
      },
    },
  },
];
