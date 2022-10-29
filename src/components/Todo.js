import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div key={index} class="form-control mt-3 mb-3">
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className="mt-2">
        {todo.text}
      </div>
      <hr></hr>
      <div>

        <button className="btn btn-danger m-1" onClick={() => removeTodo(todo.id)}>
          Delete
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        </button>

        <button
          className="btn btn-warning m-1"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          Update
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        </button>

      </div>
    </div>
  ));
};

export default Todo;
