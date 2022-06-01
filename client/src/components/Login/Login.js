import { React, useState, useEffect } from 'react';
import { BrowserRouter as Route, Navigate } from 'react-router-dom';

export default function Login() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[message, setMessage] = useState('');
  const[loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   submitCredentials();
  }

const submitCredentials = () => {
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setMessage(data.message);

    if(data.message == "valid")
    {
      setLoggedIn(true);
    }
  })
}


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </label>  
        </div>    
        <div>
            <input type='submit' value="Hey bitch give me your username and password" />
        </div>    
      </form>
      <p>
        {message}
      </p>
    </div>
  );
}