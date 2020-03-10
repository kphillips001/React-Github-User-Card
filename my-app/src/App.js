import React, { Component } from 'react';
import axios from 'axios'
import UserCard from './components/UserCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      userList: [],
      followerList: []
    }
  }

  // fetching API for user's data
  componentDidMount() {
    axios
      .get('https://api.github.com/users/kphillips001')
      .then(res => {
        console.log(res)
        this.setState({
          userList: res.data
        })
      })
      .catch(err => console.log('User Error', err))

  // fetching API for user's followers 
    axios
    .get('https://api.github.com/users/kphillips001/followers')
    .then(res => {
      console.log(res)
      this.setState({
        followerList: res.data
      })
    })
    .catch(err => console.log('Follower', err))
  }

  render() {
    return (
      <div className="App">
        <h2>Github User Card</h2>
        <UserCard userList={this.state.userList} />
      </div>
    );
  }
}
export default App;
