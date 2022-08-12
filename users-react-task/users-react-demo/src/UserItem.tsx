import React from "react";
import { User, UserStatus } from "./user.models";
import { UserListener } from "./App";
import "./UserItem.css";

interface UserItemProps {
    user: User;
}

const UserItem = ({user}: UserItemProps) => {
    return (
    <div className="UserItem" key={user.id}> 
        <span className="UserItem-text">
            <span className="UserItem-id">{user.id}</span> 
            <div>
            Username:{user.userame}  FirstName:{user.firstName}  LastName:{user.lastName}  Description:{user.description} 
            <div className="UserPicURL">
            <img src={user.picUrl} alt="Profile Avatar"></img>
            </div>
            </div>
        </span>
        <span className="UserItem-right">
            <span className="UserItem-status">{UserStatus[user.status]}</span>
        </span>
    </div>
        
    )

}

export default UserItem