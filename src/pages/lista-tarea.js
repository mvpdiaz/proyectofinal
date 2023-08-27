import { useState } from "react";
import React from "react";
import TodoForm from "./todo-form";
import data from "./data.json";
import Todo from "./todo";
import Link from "next/link";



export default function ListaDeTareas(){

  const [todos, setTodos] = useState(data);

  const onMarkComplete = (id) => {
    // setTodos(todos.map((item) => {
    //   if(item.id === todo.id) {
    //     item.completed = !item.completed;
    //   }
    //   return item;
    // }));

    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );
  };
  const addTodo = (newTodo) => {
    console.log("newTodo", newTodo);
    let newItem = { id: new Date().getTime(), task: newTodo, completed: false };

    setTodos([...todos, newItem]);
  };
  const onDeleteItem = (id) => {
    setTodos([...todos].filter((item) => item.id !== id));
  };
  return (
    <>
    <div className="container">
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        onMarkComplete={onMarkComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
   
    </>
  );
  
};
