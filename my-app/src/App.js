import React, { Component } from 'react';
import axios from 'axios'

import { Container } from "@material-ui/core";

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard'
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
      <Container className="app-wrapper">
        <UserCard userList={this.state.userList} />
        <FollowerCard followerList={this.state.followerList}/>
      </Container>
    );
  }
}
export default App;
