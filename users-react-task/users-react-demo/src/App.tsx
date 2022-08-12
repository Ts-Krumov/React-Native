import { Component } from 'react';
import './App.css';
import { User, UserStatus } from './user.models';
import UserInput from './UserInput';
import UserList from './UserList';
import { UsersAPI } from './rest-api-client';

export type FilterType = UserStatus | undefined;

interface UserAppState {
  users: User[];
  filter: FilterType;
}

export interface UserListener {
  (user: User): void;
}

export interface FilterChangeListener {
  (filter: FilterType) : void;
}

class UsersApp extends Component<{}, UserAppState> {
  state: Readonly<UserAppState> = {
    users: [],
    filter: undefined,
  }

  constructor(props: {}) {
    super(props)
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
  }
  async componentDidMount() {
    try {
        const allUsers = await UsersAPI.findAll();
        this.setState({users: allUsers});
    } catch(err) {
        // this.setState({errors: (err as any).toString()})
    }
    
  }

  handleUpdateUser(user: User) {
    this.setState(({users}) => ({
      users: users.map(us => us.id === user.id? user: us)
    }))
  }
  handleDeleteUser = (user: User) => {
    this.setState(({users}) => ({
      users: users.filter(us => us.id !== user.id)
    }))
  }
  handleCreateUser = async (user: User) => {
    await UsersAPI.create(user)
    console.log(user)
    this.setState(({users}) => ({
      users: users.concat(user)
    }))
    console.log(this.state.users)
  }

  handleFilterChange = (status: FilterType)=> {
    this.setState({filter: status})
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Users Demo</h1>
       <UserInput onCreateUser={this.handleCreateUser}/>
       <UserList users={this.state.users}/>
      </header>
    </div>
  );
}
}

export default UsersApp;
