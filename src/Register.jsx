import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles/Login.css';

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');

  const register = (event) => {
    event.preventDefault();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    if (users.find((user) => user.email === email)) {
      alert('User already exists! Please use a different email or log in.');
      return;
    }

    // Add new user to local storage
    const newUser = { email, password, fname };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    history.push('/login');
  };

  return (
    <div className="container-fluid">
      <div className="row login-page">
        <div className="col-md-5 mx-auto my-auto login-card-logo col-8">
          <img
            src="https://images.bewakoof.com/logos/bewakoof-logo-og.png"
            alt="logo"
            className="login-logo"
          />
          <div className="card log">
            <div className="card-body">
              <div className="card-title">
                <h2>Register</h2>
                <h5>Discover Fashion!</h5>
                <p className="card-head-text">You're just one step away from signing up</p>
              </div>
              <form className="login-form" onSubmit={register}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    placeholder="Full Name"
                    value={fname}
                    onChange={(event) => setFname(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-outline-secondary btn-login">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title" style={{ margin: '0' }}>
                <p style={{ margin: '0' }}>
                  Have an account? <NavLink exact to="/login" className="signup-link">Login</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
