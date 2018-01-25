import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    authenticated: false,
    email: '',
    password: '',
    err: '',
  }

  login = () => {
    fetch(`http://localhost:8080/auth/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        token: res.token,
        authenticated: true,
      });
    })
    .catch(err => this.setState({ err, authenticated: false, }));
  }

  signup = () => {
    fetch(`http://localhost:8080/auth/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        token: res.token,
        authenticated: true,
      });
    })
    .catch(err => this.setState({ err, authenticated: false, }));
  }

  setEmail = e => {
    this.setState({
      email: e.target.value,
    });
  }

  setPassword = e => {
    this.setState({
      password: e.target.value,
    });
  }

  setName = e => {
    this.setState({
      name: e.target.value,
    });
  }

  renderLogin = () => {
    return (
      <p className="App-intro container">
        <br />
        <div className='Login'>
          <div className='form-group'>
            <input
              type="email"
              onChange={this.setEmail}
              placeholder='E-Mail'
              className='form-control' />
          </div>
          <div className='form-group'>
            <input
              type="password"
              onChange={this.setPassword}
              placeholder='Password'
              className='form-control' />
          </div>
          <button className='btn btn-primary' onClick={this.login}>Login</button>
          <br /><br />
        </div>
        <div className='Sign-up'>
          <div className='form-group'>
            <input
              type='input'
              onChange={this.setName}
              placeholder='Name'
              className='form-control' />
          </div>
          <div className='form-group'>
            <input
              type='email'
              onChange={this.setEmail}
              placeholder='E-Mail'
              className='form-control' />
          </div>
          <div className='form-group'>
            <input
              type='password'
              onChange={this.setPassword}
              placeholder='Password'
              className='form-control' />
          </div>
          <button className='btn btn-primary' onClick={this.signup}>Sign-up</button>
        </div>
      </p>
    );
  }

  renderAuthenticated = () => {
    return (
      <p>Authenticated!</p>
    );
  }

  render() {
    const { authenticated, } = this.state;
    console.log(authenticated);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shippy</h2>
        </div>
        {(authenticated ? this.renderAuthenticated() : this.renderLogin())}
      </div>
    );
  }
}

export default App;
