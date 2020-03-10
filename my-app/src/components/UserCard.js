import React from 'react';

const UserCard = props => {
  return (
    <div className='usercard'>
      <div>
        <img src={props.userList.avatar_url} alt='kevins avatar'/>
        </div>
      <div className>
        <h3>{props.userList.login}</h3>
        <h5>{props.userList.name}</h5>
         <p>Followers: {props.userList.followers}</p>
         <p>Following: {props.userList.following}</p>
         <a href={props.userList.url}>GitHub Profile</a>
      </div>
     </div>
  )
}

export default UserCard;