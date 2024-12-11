import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles/Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the provided email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // Save the user to local storage as the logged-in user
      localStorage.setItem('currentUser', JSON.stringify(user));

      alert(`Welcome back, ${user.fname}!`);
      history.push('/'); // Redirect to homepage
    } else {
      alert('Invalid email or password. Please try again.');
    }
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
                <h2>Login</h2>
                <h5>Discover Fashion!</h5>
              </div>
              <form className="login-form" onSubmit={login}>
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
                  Log In
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title" style={{ margin: '0' }}>
                <p style={{ margin: '0' }}>
                  Don't have an account?{' '}
                  <NavLink exact to="/register" className="signup-link">
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
