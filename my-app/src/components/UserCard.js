import React from "react";

const UserCard = props => {
  return (
   <div>
    <div>
      <img src={props.userList.avatar_url} alt='usercard' />
       </div>
       <div>
         <h3>{props.userList.login}</h3>
          <h4>Name: {props.userList.name}</h4>
          <p>Followers: {props.userList.followers}</p>
          <p>Following: {props.userList.following}</p>
          <a href={props.userList.url}>GitHub Profile</a>
       </div>
     </div>
    )
}

export default UserCard;