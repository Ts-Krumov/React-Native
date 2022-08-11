
import { ToDo, ToDoStatus } from "./todo.model";
import { FilterType, TodoListener } from "./TodoApp";
import TodoItem from "./TodoItem";
import './TodoList.css'

interface Props{
    todos: ToDo[];
    filter: FilterType;
    onUpdate: TodoListener,
    onDelete: TodoListener,
}

export default function TodoList({todos, filter, ...rest}: Props) {
    return <ul className ="TodoList">
        {
        todos.filter(todo => !filter ? true : todo.status === filter).map(todo =>
            (<TodoItem todo={todo}  {...rest}/>))

        }
    </ul>
}