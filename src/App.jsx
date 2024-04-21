import  { useState } from 'react';
import './App.css';
import { forgotPasswordRequest } from './api-helpers';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await forgotPasswordRequest(email);
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to reset password');
    }
  };

  return (
    <div className="App">
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
