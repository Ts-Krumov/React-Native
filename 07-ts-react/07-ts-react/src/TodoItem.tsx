import React from "react";
import { ToDo, ToDoStatus } from "./todo.model"
import { TodoListener } from "./TodoApp";
import './TodoItem.css'

interface TodoItemProps {
    todo: ToDo;

    onUpdate: TodoListener,
    onDelete: TodoListener,
    onCancel: TodoListener,
}

const TodoItem = ({todo, onDelete, onUpdate, onCancel}: TodoItemProps) => {
    function handleCompletion(event: React.MouseEvent) {
        onUpdate({...todo, status: ToDoStatus.Completed})
    }
    function handleCancelation(event: React.MouseEvent) {
        onCancel({...todo, status: ToDoStatus.Canceled})
    }
    return (
    <div className="TodoItem" key={todo.id}> 
        <span className="TodoItem-text">
            <span className="TodoItem-id">{todo.id}</span> 
            {todo.text}
        </span>
        <span className="TodoItem-right">
            <span className="TodoItem-status">{ToDoStatus[todo.status]}</span>
            {todo.status === ToDoStatus.Active ?
            <span>
            <span className="TodoItem-button fas fa-check-circle"
            onClick ={handleCompletion}></span> 
            <span className="TodoItem-button fas fa-ban danger"
            onClick ={handleCancelation}></span>
            </span>
             :
             <span className="TodoItem-button fas fa-trash-can danger"
            onClick ={() => onDelete(todo)}></span> 
            }
            <span className="TodoItem-button fas fa-comment feature"
            onClick ={handleCancelation}></span> 
        </span>
    </div>
        
    )

}

export default TodoItem