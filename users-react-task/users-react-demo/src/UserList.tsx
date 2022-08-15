import { User } from "./user.models";
import UserItem from "./UserItem";
import './UserList.css'

interface Props{
    users: User[];
}

export default function UserList({users, ...rest}: Props) {
    return <div >
        <label><h2>Registered Users:</h2></label>
        <ul className ="UserList-container">
        {
            users.map(user =>(<UserItem user={user}  {...rest}/>))
        }
        </ul>
        
    
    </div>
}