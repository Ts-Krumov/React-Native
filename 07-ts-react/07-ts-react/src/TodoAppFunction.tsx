import { useEffect, useState } from 'react';
import './TodoApp.css';
import { ToDo, ToDoStatus } from './todo.model';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { TodosAPI } from './rest-api-client';
import TodoInputFunction from './TodoInputFunction';
import { Optional } from './shared-types';

export type FilterType = ToDoStatus | undefined;

export interface TodoListener {
  (todo: ToDo): void;
}

export interface FilterChangeListener {
  (filter: FilterType) : void;
}

function TodoAppFunction() {
  const [todos, setTodos] = useState([] as ToDo[])
  const [filter, setFilter] = useState(undefined as FilterType)
  const [errors, setErrors] = useState(undefined as Optional<string>)

  useEffect(() => {
         TodosAPI.findAll().then(allTodos => {
            setTodos(allTodos);
        setErrors(undefined);
         }).catch(err => {
           setErrors(err as any);
         });
  }, []);

  function handleUpdateTodo(todo: ToDo) {
    setTodos(todos => todos.map(td => td.id === todo.id ? todo : td));
  }

  async function handleDeleteTodo(todo: ToDo) {
    try {
      await TodosAPI.deleteById(todo.id);
      setTodos(todos => todos.filter(td => td.id !== todo.id));
      setErrors(undefined);
    } catch (err) {
      setErrors(err as string);
    }
  }

  async function handleCreateTodo(todo: ToDo) {
    try {
      const created = await TodosAPI.create(todo);
      setTodos(todos => todos.concat(created));
      setErrors(undefined);
    } catch (err) {
      setErrors(err as string);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>TODO List Demo</h1>
       {errors && <div className="errors">{errors}</div>}
       <TodoInputFunction onCreateTodo={handleCreateTodo}/>
       <TodoFilter filter={filter} onFilterChange={filter => setFilter(filter)}/>
       <TodoList 
       todos = {todos} 
       filter={filter} 
       onUpdate={handleUpdateTodo}
       onDelete={handleDeleteTodo}
       onCancel={handleUpdateTodo}
       />
      </header>
    </div>
  );
}

export default TodoAppFunction;