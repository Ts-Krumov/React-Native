import { Component } from 'react';
import './TodoApp.css';
import { ToDo, ToDoStatus } from './todo.model';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';
import { TodosAPI } from './rest-api-client';

export type FilterType = ToDoStatus | undefined;

interface ToDoAppState {
  todos: ToDo[];
  filter: FilterType;
  errors: string | undefined;
}

export interface TodoListener {
  (todo: ToDo): void;
}

export interface FilterChangeListener {
  (filter: FilterType) : void;
}

class AppClass extends Component<{}, ToDoAppState> {
  state: Readonly<ToDoAppState> = {
    todos: [],
    filter: undefined,
    errors: undefined,
  }

  constructor(props: {}) {
    super(props)
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }

  async componentDidMount() {
    try {
        const allTodos = await TodosAPI.findAll();
        this.setState({todos: allTodos, "errors": undefined});
    } catch(err) {
        this.setState({errors: (err as any).toString()})
    }
    
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
       <h1>TODO Demo</h1>
       {this.state.errors && <div className="errors">{this.state.errors}</div>}
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
