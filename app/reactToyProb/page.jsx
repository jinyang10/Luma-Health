"use client"; // for next.js
import { useState } from "react";
//no props for this component 
export default function TodoApp() {   //name of the component is TodoApp

  //logic and state defined here
  //initially, todos is an empty array
  const [todos, setTodos] = useState([]);  //destructuring the return values of useState() to todos and setTodos

  const [input, setInput] = useState("");

  const addTodo = () => {
    // if the input string is empty after trimming spaces, don't do anything
    if (input.trim() === "") return;
    // else, todos is equal to everything already in todos, plus the input trimmed
    setTodos([...todos, input.trim()]);
    setInput("");
  };
  // JSX specified here
  return (
    <div>
      <h1>Todo List - React</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button onClick={addTodo}>Add Todo</button>{" "}
      <div>
        {todos.length === 0 ? (
          <p>No todos yet. Add one above!</p>
        ) : (
          todos.map((todo, index) => <div key={index}>{todo}</div>)
        )}
      </div>
    </div>
  );
}
