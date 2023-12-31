import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import './Login.css';


function Login({handleLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit  = (e) => {
    e.preventDefault();

    if (username === 'Angel' && password === '1234') {
      handleLogin();
    } else {
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };
  
  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center login-container">
      <div className="col-md-6">
        <div className="card cardEnd">
          <div className="card-body">
            <h1 className="ma card-title mb-5 text-center">Iniciar sesión</h1>
            <form>
              <div className="mb-5">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='text-center mb-4'>
                <button type="submit" className="btn letraboton" onClick={handleSubmit }>Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;




