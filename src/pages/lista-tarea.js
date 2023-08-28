import { useState } from "react";
import React from "react";
import TodoForm from "./todo-form";
import data from "./data.json";
import Todo from "./todo";
//invoco mis funciones
export default function ListaDeTareas(){  const [todos, setTodos] = useState(data);

  const onMarkComplete = (id) => {setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };
  //constante para el boton de agregar item
  let addTodo = (newTodo) => {
    console.log("newTodo", newTodo);
    let newItem = { id: new Date().getTime(), task: newTodo, completed: false };

    setTodos([...todos, newItem]);
  };
  //constante para eliminar items
  const onDeleteItem = (id) => {
    setTodos([...todos].filter((item) => item.id !== id));
  };
  //para edicion de tarea
  const onEditTask = (id, updatedTask) => {
    setTodos((prevTodos)=>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      ),
    );
  };
  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        onMarkComplete={onMarkComplete}
        onDeleteItem={onDeleteItem}
        onEditTask={onEditTask}// Pasar la función de edición a Todo
      />
    </div>
  );
};

