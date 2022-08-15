import { Component } from 'react';
import './TodoApp.css';
import { ToDo, ToDoStatus } from './todo.model';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFilter from './TodoFilter';
import { TodosAPI } from './rest-api-client';
import TodoInputFunction from './TodoInputFunction';

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
  handleDeleteTodo = async (todo: ToDo) => {
    try {
      await TodosAPI.deleteById(todo.id)
      this.setState(({todos}) => ({
            todos: todos.filter(td => td.id !== todo.id),
            errors: undefined
          }))
    }catch(err){
      this.setState({errors: err as string})
    }
    
  }
  handleCreateTodo = async (todo: ToDo) => {
    try {
          const created = await TodosAPI.create(todo);
          this.setState(({todos}) => ({
            todos: todos.concat(created),
            errors: undefined
          }));
    } catch(err) {
        this.setState({errors: err as string})
    }
  }

  handleFilterChange = (status: FilterType)=> {
    this.setState({filter: status})
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>TODO List Demo</h1>
       {this.state.errors && <div className="errors">{this.state.errors}</div>}
       <TodoInputFunction onCreateTodo={this.handleCreateTodo}/>
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
