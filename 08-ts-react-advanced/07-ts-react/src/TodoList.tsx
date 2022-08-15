
import { useMemo } from "react";
import { ToDo } from "./todo.model";
import { FilterType, TodoListener } from "./TodoApp";
import TodoItem from "./TodoItem";
import './TodoList.css'

interface Props{
    todos: ToDo[];
    filter: FilterType;
    onUpdate: TodoListener,
    onDelete: TodoListener,
    onCancel: TodoListener,
    onEdit: TodoListener,
}

export default function TodoList({todos, filter, ...rest}: Props) {
    const visibleTodos = (todos: ToDo[], filter: FilterType) =>
      todos.filter(todo => !filter ? true : todo.status === filter);
    const memizedVisibleTodos = useMemo(() => visibleTodos(todos, filter), [todos, filter])
    return <div className ="TodoList">
        {
        memizedVisibleTodos.map(todo =>
            (<TodoItem todo={todo} key={todo.id} {...rest}/>))

        }
    </div>
}