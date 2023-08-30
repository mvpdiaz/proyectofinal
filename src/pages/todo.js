
import React, {useState, useEffect} from "react";
import TodoItem from "./todo-item";
import SearchFilter from "./search-filter";
//invoco filtro y el resto de funciones
export default function Todo({ todos, onMarkComplete, onDeleteItem, onEditTask}) {
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

import React, {useState} from "react";
import TodoItem from "./todo-item";
import SearchFilter from "./search-filter";
//
export default function Todo({ todos, onMarkComplete, onDeleteItem, onEditTask}) {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleSearch = (query) => {
    const filtered = todos.filter((todo) =>
      todo.task.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  /*return (
=======
  return (
    <div>
      <SearchFilter onSearch={handleSearch}/>
>>>>>>> f7332c8b3016a950a312096e1f971ded4aa454c3
    <div className="items">
      {filteredTodos.map((item, index) => (
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
}*/
  
  return (
    <div>
      <SearchFilter onSearch={handleSearch}/>
    <div className="items">
      {filteredTodos.map((item, index) => (
        <TodoItem
          key={`todo-${index}`}
          todo={item}
          onMarkComplete={onMarkComplete}
          onDeleteItem={onDeleteItem}
          onEditTask={onEditTask}
         
        />
    
      ))}
    </div>
    </div>
  );}
