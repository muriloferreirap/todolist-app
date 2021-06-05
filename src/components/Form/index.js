import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {

  const [value, setValue] = useState();
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    setTodos([...todos, value]);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


  return (
    <div className="container">
      <h1 className="text-size-3 text-center p-3">Todo List</h1>
      <form className="form mb-3"
        onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
          placeholder="Insira seu Todo"
        />
        <div class="col-12">
          <button className="btn btn-primary mt-3" type="submit">
            Enviar!
        </button>
        </div>
      </form>

      <div>
        {todos.map((todo, index) => (
          <div className="card mt-5">
            <div className="card-body">
              <div className="card-text" key={index}>{todo}</div>
              <button className="btn btn-danger mt-3" onClick={() => removeTodo(index)}>Excluir</button>
            </div>
          </div>

        ))}
      </div>

    </div>
  );
}
