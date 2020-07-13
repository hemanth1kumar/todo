import React, { Component } from "react";
import "./todo-stats.styles.scss";

class TodoStats extends Component {
   render() {
      return (
         <div className="todo-stats">
            <button className="btn">Total</button>
            <button className="btn btn-danger">Pending</button>
            <button className="btn btn-success">Done</button>
         </div>
      );
   }
}

export default TodoStats;
