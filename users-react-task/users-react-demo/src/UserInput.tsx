import React, { Component } from 'react'
import { User, UserGender, UserRole } from './user.models';
import { UserListener } from './App'
import './UserInput.css'

interface UserInputProps {
    onCreateUser: UserListener
}

interface UserInputState {
    firstName: string
    lastName: string,
    username: string,
    password: string,
    gender: UserGender,
    picUrl: string,
    description: string,
    role: UserRole
}

 class UserInput extends Component<UserInputProps, UserInputState> {
    state: Readonly<UserInputState> = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        picUrl: '',
        description: '',
        gender: UserGender.MALE,
        role: UserRole.USER,
    }

    handleUserSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.onCreateUser(new User(
            this.state.firstName,
            this.state.lastName,
            this.state.username,
            this.state.password,
            this.state.gender,
            this.state.picUrl,
            this.state.description,
            this.state.role,
            ))
         this.setState({firstName : ''})
         this.setState({lastName : ''})
         this.setState({username : ''})
         this.setState({password: ''})
         this.setState({picUrl : ''})
         this.setState({description: ''})
    }

    handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as keyof UserInputState & string;
        const newStateUpdate = {[fieldName]: event.target.value} as unknown as UserInputState;
        this.setState(newStateUpdate);
    }

    handleUserReset = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({firstName: ''})
        this.setState({lastName: ''})
        this.setState({username: ''})
        this.setState({password: ''})
        this.setState({gender: UserGender.MALE})
        this.setState({picUrl: ''})
        this.setState({description: ''})


    }
  render() {
    return (
      <form className='Input-form' onSubmit={this.handleUserSubmit}>
        <label htmlFor='TodoInput-user-text'><h2>Register new User</h2></label>
        <label>First Name</label>
        <input type="text" id="TodoInput-user-text" name="firstName" value={this.state.firstName}
            onChange={this.handleTextChanged} />
            <label>Last Name</label>
        <input type="text" id="UserInput-user-text" name="lastName" value={this.state.lastName}
            onChange={this.handleTextChanged} />
            <label>Username</label>
        <input type="text" id="UserInput-user-text" name="username" value={this.state.username}
            onChange={this.handleTextChanged} />
            <label>Password</label>
        <input type="password" id="UserInput-user-text" name="password" value={this.state.password}
            onChange={this.handleTextChanged} />
            <label>Image URL</label>
        <input type="url" id="UserInput-user-text" name="picUrl" value={this.state.picUrl}
            onChange={this.handleTextChanged} />
            <label>Gender</label>
            <select id="TodoSelectBar" name="gender">
            <option value='0'>Male</option>
            <option value='1'>Female</option>           
        </select>
            <label>Description</label>
        <input type="text" id="UserInput-user-text" name="description" value={this.state.description}
            onChange={this.handleTextChanged} />
            <div className='UserInputForm-buttons'>
            <button className='button button5' type='submit'>Add User</button>
            <button className='button button3' type='reset' onClick={this.handleUserReset}>Reset</button>
            </div>
      </form>
    );
    }
 }

export default UserInput