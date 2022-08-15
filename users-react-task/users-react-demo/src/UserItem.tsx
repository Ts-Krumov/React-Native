import { User, UserStatus } from "./user.models";
import "./UserItem.css";

interface UserItemProps {
    user: User;
}

const UserItem = ({user}: UserItemProps) => {
    return (
    <div className="UserItem" key={user.id}> 
        <div className="UserItem-text">
            <span className="UserItem-id">ID: {user.id}</span> 
            <div className="UserInfo">Username:{user.userame}       FirstName:{user.firstName}       LastName:{user.lastName}        Description:{user.description} 
            </div>
            <div className="UserPicURL">
            <img src={user.picUrl} alt="Profile Avatar"></img>
            </div>
        </div>
        <span className="UserItem-right">
            <span className="UserItem-status">Status: {UserStatus[user.status]}</span>
        </span>
    </div>
        
    )

}

export default UserItem