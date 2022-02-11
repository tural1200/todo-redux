import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, isChecked, removeTodo } from "../TodoSlice/index";

function Todo() {
  const todo = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  console.log(todo);

  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (input) => {
    dispatch(addTodo(input));
    setInput("");
  };

  const checkBoxHandler = (item) => {
    dispatch(isChecked(item));
  };

  const removeTodoHandler = (item) => {
    dispatch(removeTodo(item))
  }
  
  return (
    <div>
      <input value={input} onChange={inputHandler} />
      <button onClick={() => submitHandler(input)}>submit</button>
      <div className="todos">
        {todo.map((item) => (
          <div className="new-todo" key={item.id}>
            <span>{item.name}</span>{" "}
            <span>
              <input defaultChecked={item.complated} type={"checkbox"} onClick={() => checkBoxHandler(item)} />
            </span>
            <button onClick={() => removeTodoHandler(item)}>remove todo</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
