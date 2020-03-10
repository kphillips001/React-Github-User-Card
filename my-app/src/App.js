import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      userList: [],
      followerList: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/kphillips001')
      .then(res => {
        console.log(res)
        this.setState({
          userList: res.data
        })
      })
      .catch(err => console.log(err))

    axios
    .get('https://api.github.com/users/kphillips001/followers')
    .then(res => {
      console.log(res)
      this.setState({
        followerList: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        
    </div>
    );
  }
}
export default App;
