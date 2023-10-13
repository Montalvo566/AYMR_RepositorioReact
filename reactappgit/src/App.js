import React, { useState } from 'react';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Menu handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;