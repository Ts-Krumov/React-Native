import { User } from "./user.models";
import UserItem from "./UserItem";
import './UserList.css'

interface Props{
    users: User[];
}

export default function UserList({users, ...rest}: Props) {
    return <ul className ="UserList">
        <label><h2>Registered Users</h2></label>
        {
                users.map(user =>(<UserItem user={user}  {...rest}/>))
        }
    
    </ul>
}