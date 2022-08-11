import { Component } from 'react';
import './App.css';
import { ToDo, ToDoStatus } from './todo.model';
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';

export type FilterType = ToDoStatus | undefined;

interface ToDoAppState {
  todos: ToDo[];
  filter: FilterType;
}

export interface TodoListener {
  (todo: ToDo): void;
}

export interface FilterChangeListener {
  (filter: FilterType) : void;
}

class AppClass extends Component<{}, ToDoAppState> {
  state: Readonly<ToDoAppState> = {
    todos: MOCK_TODOS,
    filter: undefined,
  }

  constructor(props: {}) {
    super(props)
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  handleUpdateTodo(todo: ToDo) {
    this.setState(({todos}) => ({
      todos: todos.map(td => td.id === todo.id? todo: td)
    }))
  }
  handleDeleteTodo = (todo: ToDo) => {
    this.setState(({todos}) => ({
      todos: todos.filter(td => td.id !== todo.id)
    }))
  }
  handleCreateTodo = (todo: ToDo) => {
    this.setState(({todos}) => ({
      todos: todos.concat(todo)
    }))
  }

  handleFilterChange = (status: FilterType)=> {
    this.setState({filter: status})
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>TODO Demo</h2>
       <TodoInput onCreateTodo={this.handleCreateTodo}/>
       <TodoFilter filter={this.state.filter} onFilterChange={this.handleFilterChange}/>
       <TodoList 
       todos = {this.state.todos} 
       filter={this.state.filter} 
       onUpdate={this.handleUpdateTodo}
       onDelete={this.handleDeleteTodo}
       onCancel={this.handleUpdateTodo}
       />
      </header>
    </div>
  );
}
}

export default AppClass;
