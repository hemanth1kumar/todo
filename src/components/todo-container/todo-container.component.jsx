import React from "react";
import TodoStats from "../todo-stats/todo-stats.component";
import Todos from "../todos/todos.component";

import "./todo-container.styles.scss";

class TodoContainer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: [
            {
               title: "A Todo is a good todo best todo",
               done: false,
               cssClass: "",
               id: 1,
            },
         ],
      };
   }

   render() {
      return (
         <div className="todo-container">
            <TodoStats />
            <Todos todos={this.state.todos} />
         </div>
      );
   }
}

export default TodoContainer;
