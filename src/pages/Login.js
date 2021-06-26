import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '../pages/styles/loginStyles'
import UserContext from '../context/UserContext';
import axios from 'axios';

export default function Login() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    if(loading) return;

    const body = {
      email,
      password
  };

    const request = axios.post('http://localhost:4000/sign-in', body);
    request.then((response)=> {
      if (response.status === 200){
        setLoading(false);
        alert('Logado com sucesso');
        history.push("/Wallet");
      } else {
        alert(response.status);
      }
    });

    request.catch((err)=> {
        setLoading(false);

        if(err.response.status === 401) {
          alert('Dados incorretos');
      } else if (err.response.status === 422){
          alert('Preencha todos os campos corretamente');
      } else {
          alert('Houve um erro ao entrar, tente novamente');
      }
    })
  }

  return (
      <Container>
      <h1>MyWallet</h1>
            
      <form onSubmit={handleSubmit}>
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

        <button type="submit">{loading ? 'Logando...' : 'Logar'}</button>
      </form>

      <Link to="/sign-up"><h3>Primeira vez? Cadastre-se!</h3></Link>
            
    </Container>
  );
}

