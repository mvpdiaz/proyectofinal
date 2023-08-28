import React from "react";
import TodoItem from "./todo-item";
//
export default function Todo({ todos, onMarkComplete, onDeleteItem, onEditTask}) {

  return (
    <div className="items">
      {todos.map((item, index) => (
        <TodoItem
          key={`todo-${index}`}
          todo={item}
          onMarkComplete={onMarkComplete}
          onDeleteItem={onDeleteItem}
          onEditTask={onEditTask}
         
        />
    
      ))}
    </div>
  );
}