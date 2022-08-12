import React, { Component } from 'react'
import { ToDo } from './todo.model';
import { TodoListener } from './TodoApp'

interface TodoInputProps {
    onCreateTodo: TodoListener
}

interface TodoInputState {
    text: string;
    date: string;
}

 class TodoInput extends Component<TodoInputProps, TodoInputState> {
    state: Readonly<TodoInputState> = {
        text: '',
        date: new Date().toISOString()
    }
    
    handleTodoSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onCreateTodo(new ToDo(this.state.text,  new Date(this.state.date).toDateString()))
        this.setState({text : ''})
    }

    handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value})
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
        <input type="text" id="TodoInput-todo-text" name="text" value={this.state.text}
            onChange={this.handleTextChanged} />
        <input type="date" id="TodoInput-todo-text" name="date" value={this.state.date}
            onChange={this.handleTextChanged} />
            <button className='button button5' type='submit'>Add TODO</button>
            <button className='button button3' type='reset' onClick={this.handleTodoReset}>Reset</button>
      </form>
    );
    }
 }

export default TodoInput