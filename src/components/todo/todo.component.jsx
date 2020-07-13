import React, { useState } from "react";
import "./todo.styles.scss";

function Todo({ todo }) {
   const [hoverText, setHoverText] = useState({ text: "", class: "" });

   return (
      <div className={`todo ${todo.cssClass}`}>
         <h5 className="title">{todo.title}</h5>
         <div className="todo-options">
            {todo.done ? (
               <div className="pos-rel">
                  <i
                     className="fa fa-undo opt"
                     aria-hidden="true"
                     style={{ color: "grey" }}
                     onMouseOver={() =>
                        setHoverText({ text: "undo", class: "" })
                     }
                  />
                  <div className="my-tooltip">undo</div>
               </div>
            ) : (
               <div className="pos-rel">
                  <i
                     className="fa fa-check opt"
                     aria-hidden="true"
                     style={{ color: "green" }}
                     onMouseOver={() =>
                        setHoverText({
                           text: "check",
                           class: "my-tooltip-success",
                        })
                     }
                  />
                  <div className="my-tooltip my-tooltip-success">Check</div>
               </div>
            )}

            <div className="pos-rel">
               <i
                  className="fa fa-pencil opt"
                  aria-hidden="true"
                  style={{ color: "black" }}
                  onMouseOver={() => setHoverText({ text: "edit", class: "" })}
               />
               <div className="my-tooltip">edit</div>
            </div>
            <div className="pos-rel">
               <i
                  className="fa fa-trash opt"
                  aria-hidden="true"
                  style={{ color: "red" }}
                  onMouseOver={() =>
                     setHoverText({
                        text: "delete",
                        class: "my-tooltip-danger",
                     })
                  }
               />
               <div className="my-tooltip my-tooltip-danger">delete</div>
            </div>
            {/* <div className={`my-tooltip ${hoverText.class}`}>
               {hoverText.text}
            </div> */}
         </div>
      </div>
   );
}

export default Todo;
