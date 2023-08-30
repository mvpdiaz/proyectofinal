import React, {useState, useEffect} from "react";
import TodoItem from "./todo-item";
import SearchFilter from "./search-filter";
//invoco filtro y el resto de funciones
export default function Todo({ todos, onMarkComplete, onDeleteItem, onEditTask}) {
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);
  const handleSearch = (query) => {
    const filtered = todos.filter((todo) =>
      todo.task.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filtered);
  };
 
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
  );
}