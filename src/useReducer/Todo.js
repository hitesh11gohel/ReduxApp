import React, { useState, useReducer } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const ACTION = { ADD_TODO: "add-todo", DELETE_TODO: "delete-todo" };

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTION.DELETE_TODO:
      return todos.filter((todos) => todos.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return {
    id: new Date().getTime().toString(),
    name: name,
    complete: false,
  };
};

const Todo = () => {
  const [name, setName] = useState([]);
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    setName("");
  };


  return (
    <>
      <div className="flex my-5 bg-blue-100 p-5 mx-5">
        <form
          action=""
          style={{ width: "350px" }}
          className="text-center m-auto"
        >
          <h3>Todo List</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="btn btn-dark my-3 w-full" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>

      <section style={{ width: 400, textAlign: "center", margin: "auto auto" }}>
        {todos.map(({ id, name }) => (
          <>
            <div key={id}>
              <p className="bg-blue-100 p-2 mx-5">
                {name}
                <button
                  className="p-2"
                  onClick={() =>
                    dispatch({
                      type: ACTION.DELETE_TODO,
                      payload: { id: id },
                    })
                  }
                >
                  <DeleteForeverIcon />
                </button>
              </p>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Todo;
