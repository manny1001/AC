const { todo } = require("../models");

class Controller {
  static async getTodos() {
    // return all todos
    try {
      return todo.findAll({});
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // getting a single todo
  static async getTodo(id) {
    var Response = "";
    try {
      const Todo = await todo.findOne({ where: { id } });
      if (Todo) {
        return await todo.findOne({
          where: {
            id: id,
          },
        });
      }
    } catch (error) {
      return error;
    }
  }

  // creating a todo
  static async createTodo({ title, description }) {
    await todo
      .create({
        id: Math.floor(4 + Math.random() * 10),
        title,
        description,
      })       
      
      return todo.findAll({});


    // return the new created todo
  }

  // deleting a todo
  static async deleteTodo(id) {
    const Todo = await todo.findOne({ where: { id } });
    if (Todo)
      try {
        todo.destroy({
          where: {
            id: id,
          },
        });
        return todo.findAll({});
      } catch (err) {
        return err;
      }
  }
}
module.exports = Controller;
