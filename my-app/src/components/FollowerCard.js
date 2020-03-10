import React from 'react';

const FollowerCard = props => {
  return (
    <div className='usercard'>
      {props.followerList.map(follower => (
      <div>
        <div>
          <img src={follower.avatar_url} key={follower} alt={follower} />
        </div>
        <div>
          <div>{follower.login}</div>
          <a href={follower.url}>GitHub Profile</a>
        </div>
      </div>
      ))}
    </div>
  )
}
export default FollowerCard; 