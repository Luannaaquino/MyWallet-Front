import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '../pages/styles/loginStyles'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  return (
      <Container>
      <h1>MyWallet</h1>
            
      <form>
        <input 
          type="email"
          placeholder="E-mail" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />

        <span>{warning}</span>

        <button type="submit">Entrar</button>
      </form>

      <Link to="/sign-up"><h3>Primeira vez? Cadastre-se!</h3></Link>
            
    </Container>
  );
}

