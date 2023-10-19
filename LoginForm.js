import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom'; // Import useNavigate and useLocation
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Signup from './Signup';
import './LoginForm.css';

const LoginForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const navigate = useNavigate(); // Use useNavigate instead of useHistory
 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    const isValid = passwordRegex.test(newPassword);
    setIsPasswordValid(isValid);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleResetPasswordClick = () => {
    setShowForgotPassword(false);
    setShowResetPassword(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    navigate('/signup');
  };

  const handleSignUpSuccess = () => {
    setShowSignUpForm(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password);

    // After successful login, navigate to the Navbar component
    navigate('/home'); // Use navigate to change the route
  };

  return (
    <div className="login-container">
      {showForgotPassword ? (
        <ForgotPassword onResetPasswordClick={handleResetPasswordClick} />
      ) : showResetPassword ? (
        <ResetPassword />
      ) : showSignUpForm ? (
        <Signup onSignUpSuccess={handleSignUpSuccess} />
      ) : (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          {/* Username input */}
          <div className="form-group">
            <h1>Digital-windfarm</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          {/* Password input with validation */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={`form-control ${isPasswordValid ? 'is-valid' : 'is-invalid'}`}
              value={password}
              onChange={handlePasswordChange}
            />
            {isPasswordValid ? (
              <div className="valid-feedback">Password is valid!</div>
            ) : (
              <div className="invalid-feedback"></div>
            )}
          </div>

          {/* Forgot password link */}
          <Link to="/reset" className="forgot-password-link" onClick={handleForgotPasswordClick}>
            Forgot password?
              </Link>

          {/* Sign Up button */}
          <button type="button" className="btn btn-link" onClick={handleSignUpClick}>
            Sign Up
          </button>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
