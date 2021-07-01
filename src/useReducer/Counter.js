import React, { useReducer } from "react";

const ACTIONS = { INCREMENT: "increment", DECREMENT: "decrement" };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <>
      <div className="text-center mx-auto my-5">
        <h3>UseReducer Hook</h3>
        <button className="btn btn-light m-3" onClick={decrement}>
          -
        </button>
        <label>{state.count}</label>
        <button className="btn btn-light m-3" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
