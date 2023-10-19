import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the ForgotPassword CSS file
import { useNavigate } from 'react-router-dom';

function ForgotPassword({ onResetPasswordClick }) {
  const [email, setEmail] = useState('');
  const [resetMessage ] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear the error message when the user starts typing
    setError('');
  };

  const handleReset = () => {
    // Check if the email is provided
    // if (!email.trim()) {
    //   setError('Please provide your email address.');
    //   return;
    // }

    // // Add logic to send a reset password email
    // console.log('Reset password email sent to:', email);
    // // Update the reset message
    // setResetMessage(`Reset password email sent to: ${email}`);
    // onResetPasswordClick();
    navigate('/resetpass');
    // Trigger the reset password flow
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={()=>handleReset()}>
        Send Reset Email
      </button>
      {error && <p className="error-message">{error}</p>}
      {resetMessage && <p className="reset-message">{resetMessage}</p>}
    </div>
  );
}

export default ForgotPassword;