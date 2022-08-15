import React, { Component, useCallback, useState } from 'react'
import { ToDo } from './todo.model';
import { TodoListener } from './TodoApp'

interface TodoInputProps {
    onCreateTodo: TodoListener
}

interface TodoInputState {
    text: string;
    date: string;
}

const innitialState : TodoInputState = {
        text: '',
        date: new Date().toISOString()
}

 function TodoInputFunction ({ onCreateTodo} : TodoInputProps) {
        const [todoFields, setTodoFields] = useState(innitialState);
        
    // function handleTodoSubmit(event: React.FormEvent) {
    //     event.preventDefault();
    //     onCreateTodo(new ToDo(todoFields.text,  new Date(todoFields.date).toISOString()));
    //     setTodoFields(innitialState);
    // }
    //UseCallback() function use below

    const handleTodoSubmit = useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();
            onCreateTodo(new ToDo(todoFields.text, new Date(todoFields.date).toISOString()));
            setTodoFields(innitialState);
        },
        [onCreateTodo, todoFields],
    )

    function handleTextChanged(event: React.ChangeEvent<HTMLInputElement>){
        const fieldName = event.target.name as keyof TodoInputState & string;
        const stateUpdate = {[fieldName]: event.target.value} as unknown as TodoInputState;
        setTodoFields((oldFields:TodoInputState) => ({...oldFields, ...stateUpdate}));
       //Same as the line above --> setTodoFields((oldFields:TodoInputState) => Object.assign({}, oldFields, stateUpdate));
    }

    function handleTodoReset(event: React.MouseEvent) {
        event.preventDefault();
        setTodoFields(innitialState);

    }
    return (
      <form className='TodoInput-form' onSubmit={handleTodoSubmit}>
        <label><h2>What to do next?</h2></label>
        <input type="text" id="TodoInput-todo-text" name="text" value={todoFields.text}
            onChange={handleTextChanged} />
        <input type="date" id="TodoInput-todo-text" name="date" value={todoFields.date}
            onChange={handleTextChanged} />
            <button className='button button5' type='submit'>Add TODO</button>
            <button className='button button3' type='reset' onClick={handleTodoReset}>Reset</button>
      </form>
    );
}

export default TodoInputFunction