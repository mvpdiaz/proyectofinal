import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
//agrega input item a la lista
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTodo(userInput);
      setUserInput("");
    }
  };

  return (
    <div style={{ margin: 5 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button>Agregar item</button>
      </form>
    </div>
  );
}
