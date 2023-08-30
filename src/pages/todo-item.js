import React,{useState} from "react";
import {addTodo} from "./lista-tarea";

//

const TodoItem = ({ todo, onMarkComplete, onDeleteItem, addTodo,onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar el modo de edición
  const [editingTask, setEditingTask] = useState(todo.task); // Estado para el contenido editado
//contenido completado
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      margin: "5px",
      padding: "5px",
      marginBottom: "-4px",
    };
  };
  //inicia estado de edición
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditingTask(e.target.value);
  };
//finaliza estado de edición y guarda
  const handleSaveClick = () => {
    setIsEditing(false);
    onEditTask(todo.id,editingTask);
    
     // Agregar la tarea editada
    
  };

  return (
    <div style={getStyle()} className="box">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onMarkComplete(todo.id)}
      /> {" "}
      {isEditing ? (
        <input
          type="text"
          value={editingTask}
          onChange={handleEditChange}
        />
      ) : (
        <span>{todo.task}</span>
      )}
      <button className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        X
      </button>
      {isEditing ? (
        <button onClick={handleSaveClick}>Guardar</button>
      ) : (
        <button onClick={handleEditClick}>Editar tarea</button>
      )}
    </div>
  );
};

export default TodoItem;