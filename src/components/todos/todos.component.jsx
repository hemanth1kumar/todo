import React from "react";
import Todo from "../todo/todo.component";
import "./todos.styles.scss";

function Todos({ todos }) {
   return (
      <div className="todos">
         {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
         ))}
      </div>
   );
}

export default Todos;
