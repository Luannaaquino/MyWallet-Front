import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '../pages/styles/loginStyles'

export default function SingUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [warning, setWarning] = useState('');

  return (
    <Container>
    <h1>MyWallet</h1>

    <form>
      <input 
        type="text"
        placeholder="Nome" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
      />

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

      <input 
        type="password" 
        placeholder="Confirme a senha" 
        onChange={(e) => setPasswordConfirmation(e.target.value)} 
        value={passwordConfirmation}
      />

      <span>{warning}</span>

      <button type="submit">Entrar</button>
    </form>

    <Link to="/"><h3>Ja tem uma conta? Entre agora!</h3></Link>
  </Container>
  );
}