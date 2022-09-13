import React, { Component } from 'react'
import { Optional } from './shared-types';
import { ToDo, ToDoStatus } from './todo.model';
import { TodoListener } from './TodoApp'

interface TodoInputProps {
    todo: Optional<ToDo>
    onCreateTodo: TodoListener
}

interface TodoInputState {
    id: string;
    text: string;
    date: string;
}

 class TodoInput extends Component<TodoInputProps, TodoInputState> {
    state: Readonly<TodoInputState> = {
        id: this.props.todo?.id?.toString() || '',
        text: this.props.todo?.text || '',
        date: this.props.todo?.deadline || new Date().toISOString()
    }
    
    handleTodoSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onCreateTodo(
            new ToDo(this.state.text,  new Date(this.state.date).toISOString(), ToDoStatus.Active,
            this.state.id? parseInt(this.state.id) : undefined))
        this.setState({text : ''})
    }

    handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as keyof TodoInputState & string;
        const newStateUpdate = {[fieldName]: event.target.value} as unknown as TodoInputState;
        this.setState(newStateUpdate);
    }

    handleTodoReset = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({text: ''})

    }
  render() {
    return (
      <form className='TodoInput-form' onSubmit={this.handleTodoSubmit}>
        <label><h2>What to do next?</h2></label>
        <label>
            Title:<input type="text" id="TodoInput-todo-text" name="text" value={this.state.text}
            onChange={this.handleTextChanged} />
        </label>
        <label>
            Date:<input type="date" id="TodoInput-todo-text" name="date" value={this.state.date}
            onChange={this.handleTextChanged} />
        </label>
            <button className='button button5' type='submit'>Add TODO</button>
            <button className='button button3' type='reset' onClick={this.handleTodoReset}>Reset</button>
      </form>
    );
    }
 }

export default TodoInput